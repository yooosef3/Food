import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
  mutation sendComment(
    $name: String!
    $email: String!
    $text: String!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        text: $text
        blog: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;

const SEND_REVIEW = gql`
  mutation sendReview(
    $name: String!
    $email: String!
    $text: String!
    $lastname: String!
    $phone: String!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        lastname: $lastname
        phone: $phone
        email: $email
        text: $text
        product: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;
export { SEND_COMMENT, SEND_REVIEW };
