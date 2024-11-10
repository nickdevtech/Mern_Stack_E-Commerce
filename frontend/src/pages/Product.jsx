import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to fetch product data
  const fetchProductData = () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]); 
    } else {
      console.error("Product not found");
    }
  };

  const loadReviewsFromLocalStorage = () => {
    const storedReviews = localStorage.getItem(`reviews_${productId}`);
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  };


  const saveReviewsToLocalStorage = (reviewsToSave) => {
    localStorage.setItem(`reviews_${productId}`, JSON.stringify(reviewsToSave));
  };

  useEffect(() => {
    fetchProductData(); 
    loadReviewsFromLocalStorage();
  }, [productId, products]); 

  
  const handleAddReview = () => {
    if (newReview) {
      const updatedReviews = [...reviews, { text: newReview, rating }];
      setReviews(updatedReviews);
      saveReviewsToLocalStorage(updatedReviews); 
      setNewReview(""); 
      setRating(1); 
    }
  };

  if (!productData) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer transition-transform duration-200 transform hover:scale-105"
                src={item}
                key={index}
                alt=""
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              className="w-full h-auto transition-transform duration-200 transform hover:scale-105"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {/* Assume that you have the correct star icons */}
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={
                  index < productData.rating
                    ? assets.star_icon
                    : assets.star_dull_icon
                }
                alt=""
                className="w-3.5"
              />
            ))}
            <p className="pl-2">{reviews.length}</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 transition-colors duration-200 hover:bg-orange-400 hover:text-white ${
                    item === size ? "border-orange-400" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 transition-transform duration-200 hover:scale-105"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy Return And Exchange.</p>
          </div>
        </div>
      </div>

      {/* Collapsible Description Section */}
      <div className="mt-20">
        <div
          className="flex cursor-pointer"
          onClick={() => setShowFullDescription(!showFullDescription)}
        >
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews {reviews.length}</p>
        </div>
        {showFullDescription && (
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600">
            <p>
              {productData.fullDescription ||
                "Detailed product description will be here."}
            </p>
          </div>
        )}
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="border-b py-2">
                <div className="flex items-center">
                  <p className="font-bold">{`Rating: ${review.rating}`}</p>
                </div>
                <p>{review.text}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to review!</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold">Add a Review</h2>
        <div className="flex flex-col gap-2 mt-4">
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review here..."
            className="border p-2 rounded-md"
            rows="4"
          />
          <div className="flex gap-2">
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="border p-2 rounded-md"
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
            <button
              onClick={handleAddReview}
              className="bg-black text-white px-4 py-2 rounded-md transition-transform duration-200 hover:scale-105"
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;
