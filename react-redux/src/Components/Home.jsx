import React from "react";
import ProductCard from "./ProductCard";
import toast from "react-hot-toast";

export const Home = () => {
  const productList = [
    {
      id: 1,
      name: "Macbook Air",
      price: 500,
      imgsrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661",
    },
    {
      id: 2,
      name: "Keyboard",
      price: 30,
      imgsrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMR3?wid=2000&hei=900&fmt=jpeg&qlt=95&.v=1645719947833",
    },
    {
      id: 3,
      name: "Shoes",
      price: 50,
      imgsrc:
        "https://www.jiomart.com/images/product/original/rv19vz9adl/bruton-trendy-sports-shoes-for-men-blue-product-images-rv19vz9adl-0-202209021252.jpg?im=Resize=(1000,1000)",
    },
  ];

  const addTocartHandler = ({ options }) => {
    toast.success("Added to cart")
    console.log(options);
  };

  return (
    <div className="home">
      <h1>E-commerce </h1>
      <div className="productdiv">
        {productList?.map((item) => (
          <ProductCard
            key={item.id}
            imgsrc={item.imgsrc}
            name={item.name}
            price={item.price}
            handler={addTocartHandler}
          />
        ))}
      </div>
    </div>
  );
};
