import React from "react";
import ItemCardUnit from "../../Common/Cards/ItemCardUnit";

function ProductSection() {
  return (
    <>
      <ItemCardUnit
        Title="Product 1"
        Product="Product"
        Size="Size"
        Price="Price"
        image="https://picsum.photos/200/300"
        Gift="Gift"
      />
    </>
  );
}

export default ProductSection;
