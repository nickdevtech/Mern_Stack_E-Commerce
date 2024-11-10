import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    navigate,
  } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-16 pb-24 bg-gray-50">
      {/* Title Section */}
      <div className="text-3xl font-semibold text-center mb-8 text-gray-800">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      {/* Cart Items */}
      <div className="space-y-8">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="py-6 border-t border-b border-gray-200 bg-white shadow-sm rounded-lg flex items-center gap-6"
            >
              {/* Product Info */}
              <div className="flex items-center gap-6">
                <img
                  className="w-20 sm:w-24 object-cover rounded-md"
                  src={productData.image[0]}
                  alt={productData.name}
                />
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <p className="text-sm text-gray-600">
                      {currency}
                      {productData.price}
                    </p>
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 border rounded-md">
                      {item.size}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quantity Input */}
              <div className="flex items-center justify-center gap-4">
                <input
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  className="w-16 sm:w-24 text-center border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                {/* Delete Button */}
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-6 sm:w-7 cursor-pointer hover:opacity-75"
                  src={assets.bin_icon}
                  alt="Delete Item"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Total and Checkout */}
      <div className="flex justify-end mt-12">
        <div className="w-full sm:w-96">
          <CartTotal />
          <div className="w-full text-right mt-8">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm py-3 px-8 rounded-full hover:bg-gray-800 transition-all duration-300"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
