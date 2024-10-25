import { RouterProvider } from "react-router-dom";
import "./App.css";
import { rootRouter } from "./router/root.route";

function App() {
  return <RouterProvider router={rootRouter} />;
}

export default App;
