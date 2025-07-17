import React from "react";
import { useOutletContext } from "react-router-dom";

const ProductReviews = () => {
  const { reviews } = useOutletContext();

  return (
    <section>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <div>
              <p>{review.reviewer_name}</p>
              <p>{review.reviewer_rating}</p>
              <p>{review.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductReviews;
