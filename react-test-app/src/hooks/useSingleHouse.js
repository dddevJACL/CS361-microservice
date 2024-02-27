import { gql, useQuery } from "@apollo/client";

const GET_SINGLE_HOUSE = gql`
query House($id: ID!){
    house(id: $id) {
      name
      homeStyle
      location
      description
      price
      id
    }
  }
`;


export const useSingleHouse = (id) => {
    const {data, error, loading} = useQuery(GET_SINGLE_HOUSE, {
        variables: {
            id
        }
    });
    return {
        data,
        error,
        loading,
    };
};