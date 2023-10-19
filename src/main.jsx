import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/Main/component";
import { Provider } from "react-redux";
import { store } from "./app/store";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <div>
    <Provider store={store}>
      <MainPage />
    </Provider>
  </div>
);
