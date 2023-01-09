import React from 'react'

const ProductCategory = () => {
  return (
    <>
      <div className="w-full min-h-[60vh] border">
        <img
          src={require("../images/navbar/selectPage1.jpg")}
          className="w-full min-h-[60vh]"
          alt=""
        />
      </div>
      <div className="w-full min-h-screen p-5 flex flex-col items-center">
        <div className='w-[70%] mx-auto'>
          <h1 className="text-[50px] font-bold">Ортопедических Изделий</h1>
        </div>
        <img
          src={require("../images/mainPage/ballerina.png")}
          className="w-[500px]"
          alt=""
        />
      </div>
    </>
  );
}

export default ProductCategory