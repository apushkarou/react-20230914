import React from "react";
import { MainPage } from "./pages/Main/component";
import { Provider } from "react-redux";
import { store } from "./app/store";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </>
  );
};
