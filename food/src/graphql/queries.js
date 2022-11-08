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

const PRODUCT = gql`
  query product($slug : String!) {
  product(where: {slug: $slug}) {
    category
    details
    dimensions
    imageAll {
      id
      url
    }
    information
    name
    price
    slug
    weight
  }
}
`

const BLOGS = gql`
  query {
    blogs {
      id
      title
      subText
      subTitle
      slug
      text {
        html
      }
      images {
        url
      }
    }
  }
`;

const BLOG = gql`
  query blog ($slug: String!){
  blog(where: {slug: $slug}) {
    images {
      url
    }
    subText
    subTitle
    title
    text {
      html
    }
  }
}
`

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

export { TEAM, PRODUCTS, PRODUCT, BLOGS, BLOG, OFFER };
