import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  
  const imageUrl =
    Array.isArray(image) && image.length > 0
      ? image[0]
      : image || "/path/to/placeholder-image.jpg";

  return (
    <Link className="group cursor-pointer text-gray-700" to={`/product/${id}`}>
      <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
        <img
          className="w-full h-60 object-cover transition-transform group-hover:scale-110"
          src={imageUrl}
          alt={name}
        />
      </div>

      <div className="pt-3 pb-1">
        <p className="text-sm font-semibold text-gray-800 truncate">{name}</p>
        <p className="text-sm font-medium text-gray-900">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
