import { createBrowserRouter } from "react-router-dom";
import App from "../app/index.js";

import Svg from "../svg/index.js";
import SvgAchievements from "../svg-achievements/index.js";

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
    path: "/svg-achievements",
    element: <SvgAchievements />,
    // loader: teamLoader,
    children: [],
  },  
]);

export default router;
