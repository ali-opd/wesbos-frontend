import Router from 'next/router';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import { ALL_PRODUCTS_QUERY } from './Products';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables are getting passed in? And what types are they
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        price: $price
        description: $description
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Nice Shoes',
    image: '',
    price: 34234,
    description: 'These are the best shoes',
  });

  console.log(inputs);

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );

  console.log(createProduct);
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();

        // submit the inputfields to the backend
        const res = await createProduct();
        // console.log(data);
        clearForm();
        Router.push(
          {
            // pathname: `/product/${res.data.createProduct.id}`,
            pathname: `/products`,
          },
          undefined,
          { shallow: true }
        );
      }}
    >
      <DisplayError error={error} />
      <fieldset aria-busy={loading} disabled={loading}>
        <label htmlFor="name">
          Image
          <input
            required
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            type="number"
            name="price"
            id="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            value={inputs.description}
            placeholder="Description"
            onChange={handleChange}
          />
        </label>

        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
