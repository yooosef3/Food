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
        clau037zo1jrw01t48ce49tab: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;
export { SEND_COMMENT };
