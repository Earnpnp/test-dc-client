import React from "react";

function ProductItem({ name, description, price, file, status }) {
  if (status === "active") {
    return (
      <div className="p-8 max-w-lg border border-grey-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
        <img
          alt="example"
          src={`http://localhost:8000/assets/${file}`}
          className="rounded-lg overflow-hidden w-64 h-64"
        />
        <div className="mt-8">
          <h4 className="text-xl font-bold">{name}</h4>
          <p className="mt-2 text-gray-600">{description}</p>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              ฿ {price}
            </button>
          </div>
        </div>
      </div>
    );
  } else if (status === "inactive") {
    return (
      <div className="p-8 max-w-lg border border-grey-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center opacity-50">
        <div className="relative">
          <img
            alt="example"
            src={`http://localhost:8000/assets/${file}`}
            className="rounded-lg overflow-hidden w-64 h-64"
          />
          <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 flex justify-center items-center">
            <p className="text-white text-lg">Discontinue</p>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-xl font-bold">{name}</h4>
          <p className="mt-2 text-gray-600">{description}</p>
          <div className="mt-5">
            <p
              type="button"
              className="inline-flex rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              ฿ {price}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    // Handle other cases or provide a default fallback
    return null;
  }
}

export default ProductItem;
