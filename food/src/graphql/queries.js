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
  query product($slug: String!) {
    product(where: { slug: $slug }) {
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
`;

const BLOGS = gql`
  query {
    blogs {
      id
      title
      subText
      subTitle
      slug
      text
      images {
        url
      }
    }
  }
`;

const BLOG = gql`
  query blog($slug: String!) {
    blog(where: { slug: $slug }) {
      images {
        url
      }
      subText
      subTitle
      title
      text
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

const GET_BLOG_COMMENTS = gql`
  query getBlogComments($slug: String!) {
    comments(where: { blog: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;
const GET_PRODUCT_REVIEWS = gql`
  query getProductComments($slug: String!) {
  comments(where: {product: {slug: $slug }}) {
    id
    name
    email
    lastname
    phone
    text
  }
}
`;
export {
  TEAM,
  PRODUCTS,
  PRODUCT,
  BLOGS,
  BLOG,
  OFFER,
  GET_BLOG_COMMENTS,
  GET_PRODUCT_REVIEWS,
};
