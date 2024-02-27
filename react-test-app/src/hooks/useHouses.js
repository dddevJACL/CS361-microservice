import { useQuery, gql } from "@apollo/client"

const GET_HOUSES = gql`
query {
    houses {
      name
      homeStyle
      location
      description
      price
      id
    }
  }
`;

export const useHouses = () => {
    const { error, data, loading } = useQuery(GET_HOUSES)

    return {
        error,
        data,
        loading,
    };
};


