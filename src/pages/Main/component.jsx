import React from "react";
import { mocks } from "../../constants/mock";
import { Product } from "../../components/Product/component";

export const MainPage = () => {
  if (!mocks?.length) {
    return null;
  }

  return (
    <div>
      {mocks?.length > 0 && mocks.map(({ name }) => <Product name={name} />)}
    </div>
  );
};
