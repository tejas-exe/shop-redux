import React from "react";
import Product from "../UIUX/Product";
import { FAKEDATA } from "../../../src/Products";

export default function Catolog() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "40px",
        justifyContent: "center"
      }}
    >
      {FAKEDATA.products.map((item) => (
        <Product item={item} key={item.id}/>
      ))}
    </div>
  );
}
