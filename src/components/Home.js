import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col text-center">
      <div className="add-to-cart w-[50px] h-[50px] absolute top-5 right-5 items-center justify-end mb-2">
        <img
          src="https://cdn-icons-png.flaticon.com/128/891/891407.png?semt=ais"
          alt="cart-img"
          className="max-w-full"
        />
      </div>
      <h1 className="text-2xl font-bold mb-4">Home Component</h1>
      <div className="cart-wrapper flex flex-col items-center justify-center">
        <div className="img-wrapper item w-[200px] flex justify-center items-center mb-4">
          <img
            className="max-w-full"
            src="https://img.freepik.com/free-vector/change-our-date-postponed-wedding-phone-app_52683-39982.jpg?w=740&t=st=1704727903~exp=1704728503~hmac=8c10e2a8c56bd161d23d460681cf0c1e508644bccfe120b7a70574de265feb2b"
            alt="phoneimg"
          />
        </div>
        <div className="text-wrapper item text-center">
          <span className="text-lg font-bold block">I-Phone</span>
          <span className="text-gray-600">Price: $1000</span>
        </div>
        <div className="btn-wrapper item mt-4">
          <button className="btn px-8 py-4 bg-green-500 text-white font-bold rounded-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
