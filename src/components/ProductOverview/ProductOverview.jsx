import React from "react";

const ProductOverview = ({ product }) => {
  return (
    <section>
      <h2>Product Overview</h2>
      <p>{product.rating}</p>
      <p>{product.reviews.length}</p>
      <p>{product.location}</p>
      <p>{product.price}</p>
      {product.gallery.map((img, index) => (
        <img key={index} src={img.thumb} alt={`Product image ${index + 1}`} />
      ))}
      <p>{product.description}</p>
    </section>
  );
};

export default ProductOverview;
