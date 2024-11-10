import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, getCartAmount, delivery_fee } = useContext(ShopContext);

  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-lg">
      {/* Title Section */}
      <div className="text-center text-2xl font-semibold text-gray-800">
        <Title text1="CART" text2="TOTALS" />
      </div>

      {/* Cart Details */}
      <div className="flex flex-col gap-4 mt-4 text-sm text-gray-700">
        {/* Subtotal */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>

        {/* Shipping Fee */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee}.00
          </p>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <b>Total</b>
          <b>
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
