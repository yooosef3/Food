import { gql } from "@apollo/client";

const PRODUCTS = gql`
  query {
    products {
      image {
        url
      }
      name
      price
      slug
      discount
      id
      type
    }
  }
`;

const BLOGS = gql`
  query {
    blogs {
      title
      id
      images {
        url
      }
    }
  }
`;

const TEAM = gql`
  query {
    teams {
      name
      text
      image {
        url
      }
    }
  }
`;

export { TEAM, PRODUCTS, BLOGS };
