import React from "react";
import { useLocation } from "react-router-dom";

export const ProductCategoryPage = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <div className="product-category w-full min-h-[60vh]"></div>
      <div className="w-[70%] mx-auto min-h-screen py-5">
        <h3 className="text-5xl font-bold">Брюшные Корсеты</h3>
        <div className="flex flex-wrap my-6 justify-between items-center gap-5">
          <div className="flex flex-col items-center justify-center gap-3 w-[200px] rounded-xl min-h-0">
            <img
              src={require("../images/category/132_SGP5432.jpg")}
              className="w-full rounded-xl border-2 border-red-500"
              alt="132"
            />
            <div className="flex flex-col text-center items-center justify-center">
              <h3 className="text-2xl font-semibold">КОД 132</h3>
              <p className="text-lg font-normal">Корсет Пояcничнo- Брюшной</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 w-[200px] rounded-xl min-h-0">
            <img
              src={require("../images/category/132_SGP5432.jpg")}
              className="w-full rounded-xl border-2 border-red-500"
              alt="132"
            />
            <div className="flex flex-col text-center items-center justify-center">
              <h3 className="text-2xl font-semibold">КОД 132</h3>
              <p className="text-lg font-normal">Корсет Пояcничнo- Брюшной</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 w-[200px] rounded-xl min-h-0">
            <img
              src={require("../images/category/132_SGP5432.jpg")}
              className="w-full rounded-xl border-2 border-red-500"
              alt="132"
            />
            <div className="flex flex-col text-center items-center justify-center">
              <h3 className="text-2xl font-semibold">КОД 132</h3>
              <p className="text-lg font-normal">Корсет Пояcничнo- Брюшной</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 w-[200px] rounded-xl min-h-0">
            <img
              src={require("../images/category/132_SGP5432.jpg")}
              className="w-full rounded-xl border-2 border-red-500"
              alt="132"
            />
            <div className="flex flex-col text-center items-center justify-center">
              <h3 className="text-2xl font-semibold">КОД 132</h3>
              <p className="text-lg font-normal">Корсет Пояcничнo- Брюшной</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 w-[200px] rounded-xl min-h-0">
            <img
              src={require("../images/category/132_SGP5432.jpg")}
              className="w-full rounded-xl border-2 border-red-500"
              alt="132"
            />
            <div className="flex flex-col text-center items-center justify-center">
              <h3 className="text-2xl font-semibold">КОД 132</h3>
              <p className="text-lg font-normal">Корсет Пояcничнo- Брюшной</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
