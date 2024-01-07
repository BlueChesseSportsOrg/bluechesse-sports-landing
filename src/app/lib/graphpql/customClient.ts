import { GraphQLClient } from "graphql-request";

// const version = "2021-04";
const version = "2023-10";
// const url = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/${version}/graphql.json`;
const url = `${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/${version}/graphql.json`;
const headers = {
  "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
};
const option = { headers };

const customClient = new GraphQLClient(url, option);

export default customClient;