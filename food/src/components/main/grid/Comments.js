import Comment from "./Comment";
import { GET_BLOG_COMMENTS } from "../../../graphql/queries";
import Loader from "../../shared/Loader";
import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

const Com = styled.div``;

const Comments = ({ slug }) => {
  const { loading, data } = useQuery(GET_BLOG_COMMENTS, {
    variables: { slug },
  });

  if (loading) return <Loader />;

  return (
    <Com>
      <h2
        style={{
          textAlign: "right",
          borderBottom: "1px solid gray",
          paddingBottom: "15px",
          marginTop:'40px'
        }}
      >
        نظرات
      </h2>

      {data.comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </Com>
  );
};

export default Comments;
