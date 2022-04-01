import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes',
  });

  console.log(inputs);

  return (
    <form>
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

      <button type="button" onClick={clearForm}>
        Clear Form
      </button>

      <button type="button" onClick={resetForm}>
        Reset Form
      </button>
    </form>
  );
}
