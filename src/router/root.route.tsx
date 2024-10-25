import { createBrowserRouter } from "react-router-dom";
import { boardRouter } from "./board.router";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Home</h1>
      </div>
    ),
  },
  {
    path: "/board",
    children: boardRouter,
  },
]);
