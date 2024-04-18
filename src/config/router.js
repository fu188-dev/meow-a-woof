import { createBrowserRouter } from "react-router-dom";
import App from "../app/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "team",
        // element: <Team />,
        // loader: teamLoader,
      },
    ],
  },
]);


export default router;