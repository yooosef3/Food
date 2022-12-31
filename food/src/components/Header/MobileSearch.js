import React, { useState } from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../graphql/queries";
import { RiSearchLine } from "react-icons/ri";
import styles from "../../styles/header/MobileSearch.module.css";
import { useQuery } from "@apollo/client";

const MobileSearch = ({ search, setSearch }) => {
  const { loading, data, error } = useQuery(PRODUCTS);
  const [searched, setSearched] = useState("");
  if (loading) return <p style={{ display: "none" }}></p>;
  if (error) return <p style={{ display: "none" }}></p>;

  const searchHandler = () => {
    const filteredProducts = data.products.filter((product) => {
      if (searched === "") {
        return "";
      } else {
        return product.name.includes(searched);
      }
    });
    return filteredProducts;
  };

  const filtered = searchHandler();

  return (
    <section className={search ? styles.background : styles.hide}>
      <div className={styles.container}>
        <input
          type="text"
          value={searched}
          onChange={(event) => setSearched(event.target.value)}
          placeholder={search && "جستجوی محصول ..."}
        />
        <Link
          onClick={searchHandler}
          to={{
            pathname: "/searchlist",
          }}
          state={filtered}
        >
          <RiSearchLine className={styles.search} />
        </Link>
        <AiOutlineCloseCircle
          className={styles.close}
          onClick={() => setSearch(!search)}
        />
      </div>
    </section>
  );
};

export default MobileSearch;
