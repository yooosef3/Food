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

const OFFER = gql`
  query {
  offers {
    box {
      html
    }
    discount
    id
    price
    image {
      url
    }
    name
    slug
  }
}
`;

export { TEAM, PRODUCTS, BLOGS, OFFER };
