import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    padding: 0 20px;
    font-size: 20px;
    font-weight: 700;
    color: #292929;
    transition: all 0.2s linear;
    &:hover {
      color: red;
    }
  }
`;

const linkStyle = {
    textDecoration: 'none'
}

const LeftSidebar = () => {
  return (
    <Ul>
      <Link to="/" style={linkStyle}>
        <li style={{ color: "red" }}>خانه</li>
      </Link>
      <Link to="/" style={linkStyle}>
        <li>صفحات</li>
      </Link>
      <Link to="/" style={linkStyle}>
        <li>بلاگ</li>
      </Link>
      <Link to="/" style={linkStyle}>
        <li>گالری</li>
      </Link>
      <Link to="/" style={linkStyle}>
        <li>المان ها</li>
      </Link>
      <Link to="/" style={linkStyle}>
        <li>فروشگاه</li>
      </Link>
    </Ul>
  );
};

export default LeftSidebar;
