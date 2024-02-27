import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const typeDefs = `#graphql
  type House {
  id: ID
  description: String
  key: String
  homeStyle: String
  location: String
  name: String
  price: String
}


type Query {
  houses: [House]
  house(id: ID!): House!
  getSearchResults(location: String, homeStyle: String): [House!]!
}
`;
const houses = [
    {
        id: "1",
        description: "Nestled in Dallas, this beautiful home captivates with its timeless architecture and lush surroundings. The exterior boasts a perfect blend of modern and classic design, complemented by well-maintained gardens. Inside, sunlit rooms and high-end finishes create an elegant atmosphere, with expansive windows offering stunning views of the city. The master suite, complete with a private balcony, provides a tranquil escape, making this Dallas residence a perfect blend of luxury and comfort.",
        key: "house-1",
        homeStyle: "Farmhouse",
        location: "Dallas",
        name: "Beautiful Dallas Farmhouse",
        price: "$200,000",
    },
    {
        id: "2",
        description: "In the outskirts of Paris, where the splendor of Paris meets the beauty of the French countryside, is this beautiful Parisian farmhouse. Rustic, yet modern, it beckons to those who want to experience the best of both worlds.",
        key: "house-2",
        homeStyle: "Farmhouse",
        location: "Paris",
        name: "Beautiful Paris Farmhouse",
        price: "$250,000",
    },
    {
        id: "3",
        description: "Perched in the heart of Paris, this stunning home is a testament to the city's timeless elegance and sophisticated charm. The exterior, adorned with wrought-iron balconies and ivy-covered walls, exudes a quintessential Parisian allure. As you enter, the interiors unfold with a seamless blend of historic details and modern amenities, creating a luxurious yet inviting atmosphere. With its panoramic views of iconic landmarks like the Eiffel Tower and the Seine River, this Parisian abode captures the romantic essence of the city, offering an enchanting haven in the midst of cultural richness.",
        key: "house-3",
        homeStyle: "Chateau",
        location: "Paris",
        name: "Gorgeous Paris Chateau",
        price: "$300,000",
    },
    {
        id: "4",
        description: "Discover urban living in this stylish Toronto townhouse. Modern design meets comfort in an open-concept layout flooded with natural light. The sleek kitchen, spacious bedrooms, and chic bathrooms offer a perfect blend of functionality and aesthetics. With a private outdoor space and proximity to amenities, this townhouse is your key to a vibrant Toronto lifestyle.",
        key: "house-4",
        homeStyle: "Townhouse",
        location: "Toronto",
        name: "Modern Toronto Townhouse",
        price: "$1,000,000",
    },
    {
        id: "5",
        description: "Welcome to this inviting Montreal apartment, where contemporary living meets historic charm. Bright interiors showcase an open layout with modern finishes and large windows, flooding the space with natural light. The well-appointed kitchen and cozy bedrooms provide both style and comfort. Nestled in a vibrant neighborhood, this residence offers convenient access to cultural attractions, dining, and public transportation, promising a dynamic Montreal lifestyle.",
        key: "house-5",
        homeStyle: "Apartment",
        location: "Montreal",
        name: "Sleek Montreal Apartment",
        price: "$550,000",
    },
    {
        id: "6",
        description: "Experience the allure of compact city living in this Tokyo apartment. Clever design maximizes every square meter, creating a cozy yet efficient space. The open layout seamlessly integrates a functional kitchen, compact living area, and a sleeping nook with innovative storage solutions. Large windows frame urban views, bringing in natural light. Nestled in a central location, this apartment offers access to Tokyo's bustling lifestyle, with cultural hotspots, dining, and transit options just steps away. Embrace minimalistic urban living in the heart of Tokyo.",
        key: "house-6",
        homeStyle: "Apartment",
        location: "Tokyo",
        name: "Small yet elegant Tokyo Apartment",
        price: "$220,000",
    },
    {
        id: "7",
        description: "Elevate your lifestyle in this luxurious Shanghai penthouse suite. Perched high above the city, the floor-to-ceiling windows provide breathtaking panoramic views of the iconic skyline. This opulent residence boasts spacious, impeccably designed interiors with high-end finishes. The gourmet kitchen, lavish bedrooms, and spa-like bathrooms redefine sophistication. Entertain on the expansive terrace while enjoying the city lights. Situated in a prime location, this penthouse offers exclusive access to Shanghai's cultural, culinary, and entertainment scene, embodying the epitome of refined urban living.",
        key: "house-7",
        homeStyle: "Penthouse",
        location: "Shanghai",
        name: "Luxurious Shanghai Penthouse",
        price: "$10,700,000",
    },
];
const resolvers = {
    Query: {
        houses: () => houses,
        house: (_, args) => houses.find((house) => house.id === args.id),
        getSearchResults: (_, args) => houses.filter((house) => house.location === args.location &&
            (!args.homeStyle || house.homeStyle === args.homeStyle)),
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`GraphQL Apollo server listening at: ${url}`);
