import React, { useState } from "react";

import GalleryCard from "./GalleryCard";
import PagesHeader from "../PagesHeader";
import styled from "styled-components";

const Gallery = styled.div`
    border-bottom:1px solid #cecece;
    padding-bottom:100px;
  .gallery-filter {
    border-bottom: 6px solid #c0c0c0;
    width: 300px;
    border-radius: 6px;
    margin: 30px auto;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 15px;
    .selected {
      color: #7fd02c !important;
      border-bottom: 5px solid #7fd02c !important;
      margin-bottom: -5px;
    }
    .gallery-filters {
      color: #c0c0c0;
      padding-bottom: 15px;
      transition: all 0.2s linear;
      font-size: 20px;
      border-bottom: 5px solid #c0c0c0;
      margin-bottom: -5px;
      &:hover {
        color: #7fd02c !important;
        border-bottom: 5px solid #7fd02c !important;
        margin-bottom: -5px;
      }
    }
    @media (min-width: 992px) {
      width: 370px;
    }
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
`;
const GridGallery = () => {
  const [gallery, setGallery] = useState("همه");
  return (
    <Gallery>
      <PagesHeader page={"گالری"} headline={"گالری"} path={"gridgallery"} />
      <ul className="gallery-filter">
        <li
          className={`${gallery === "همه" && "selected"} ${"gallery-filters"}`}
          onClick={() => setGallery("همه")}
        >
          همه
        </li>
        <li
          className={`${gallery === "میوه" && "selected"} ${"gallery-filters"}`}
          onClick={() => setGallery("میوه")}
        >
          میوه ها
        </li>
        <li
          className={`${gallery === "سبزیجات" && "selected"} ${"gallery-filters"}`}
          onClick={() => setGallery("سبزیجات")}
        >
          سبزیجات
        </li>
      </ul>
      <div className="gallery">
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </div>
    </Gallery>
  );
};

export default GridGallery;