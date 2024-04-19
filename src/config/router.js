import { createBrowserRouter } from "react-router-dom";
import App from "../app/index.js";

import Svg from "../svg/index.js";
import SvgIntroduction from "../svg/tutorial/introduction/index.js";
import SvgGettingstarted from "../svg/tutorial/getting-started/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      // {
      //   path: "svg",
      //   element: <Svg />,
      //   // loader: teamLoader,
      // },
    ],
  },
  {
    path: "/svg",
    element: <Svg />,
    // loader: teamLoader,
    children: [],
  },
  {
    path: "/svg/introduction",
    element: <SvgIntroduction />,
    // loader: teamLoader,
  },
  {
    path: "/svg/gettingstarted",
    element: <SvgGettingstarted />,
    // loader: teamLoader,
  },
]);

export default router;
