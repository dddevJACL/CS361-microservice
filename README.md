# CS361-microservice

TO RUN MICROSERVICE:

1. Download files to computer (using git, or download as zip and extract)
2. Within a command line interface, cd into the directory containing the microservice
3. Run the command npm init (to download necessary node modules specified in the package.json file)
4. npm install @apollo/server
5. Run the command npm start to start the microservice
6. The microservice should now be running at localhost, port 4000. (If need be, the location the microservice is run can be edited)


PROGRAMATICALLY REQUESTING DATA:


In the front end react project, install @apollo client
import the following: import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
Create a new client
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
})
This gives the url for React to call in order to request data
Wrap the app in index.js with an ApolloProvider component

On pages where you wish to call/query the microservice for data:
import { gql, useQuery } from "@apollo/client";

Create a const that will hold the query you wish to make. For example, to query the database for houses with a particular id number:
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

Then within the export portion of a React page / component, call the useQuery function on const you created. For example, the following will 
create a hook that you can call within a page in React.

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

The database currently has the following schema that can be queried:
  id: ID
  description: String
  key: String
  homeStyle: String
  location: String
  name: String
  price: String

An example database entry:
    id: "4",
    description:
      "Discover urban living in this stylish Toronto townhouse. Modern design meets comfort in an open-concept layout flooded with natural light.   
       The sleek kitchen, spacious bedrooms, and chic bathrooms offer a perfect blend of functionality and aesthetics. With a private outdoor space 
        and proximity to amenities, this townhouse is your key to a vibrant Toronto lifestyle.",
    key: "house-4",
    homeStyle: "Townhouse",
    location: "Toronto",
    name: "Modern Toronto Townhouse",
    price: "$1,000,000",


PROGRAMATICALLY RECEIVING DATA:


As shown in the above hook, the microservice, using Apollo Server, will return a json object based on your query.
The object will have information as follows: 
error (any failures within the microservice or the query)
loading: a boolean
data: The restults of your query.

Within a react page or component, you can call the data and use it like you would other objects.
for example, again using the above as an example, you could call:
data.house.name to recieve the name of the given house.


![image](https://github.com/dddevJACL/CS361-microservice/assets/144203852/e20a5f9c-631c-4a20-96c7-f7dbe328b291)
