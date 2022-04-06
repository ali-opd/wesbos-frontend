import gql from 'graphql-tag';
import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // tells apollo we will take care of everything
    read(existing = [], { args, cache }) {
      console.log({ existing, args, cache });
      const { skip, first } = args;

      // Read the number of iterms on the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // Check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);

      if (items.length !== first) {
        // We dont have any items, we must go the network to fetch them
        return false;
      }

      // If there are items, just return them from the cache, and we dont need to go to the network

      if (items.length) {
        console.log(
          `There are ${items.length} items in the cache! Gonna send them apollo`
        );

        return items;
      }

      return false; // fallback to network

    },
    merge() {},
  };
}
