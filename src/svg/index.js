import { Fragment, useState } from "react";
import "./index.scss";

import SvgIntroduction from "./tutorial/introduction/index.js";
import SvgGettingstarted from "./tutorial/getting-started/index.js";
import SvgPositions from "./tutorial/positions/index.js";
import SvgBasicshapes from "./tutorial/basic-shapes/index.js";

function SvgIndex() {
  const [type, setType] = useState("SvgIntroduction");
  const [nav, setNav] = useState([
    { title: "教程", level: "1", router: "", choosed: false },
    { title: "从零开始介绍SVG", level: "2", router: "", choosed: false },
    { title: "引言", level: "3", router: "SvgIntroduction", choosed: true },
    { title: "入门", level: "3", router: "SvgGettingstarted", choosed: false },
    { title: "坐标定位", level: "3", router: "SvgPositions", choosed: false },
    { title: "基本形状", level: "3", router: "SvgBasicshapes", choosed: false },

    { title: "参考", level: "1", router: "", choosed: false },
    { title: "元素", level: "2", router: "", choosed: false },
    { title: "属性", level: "2", router: "", choosed: false },
    { title: "指南", level: "1", router: "", choosed: false },
  ]);

  const handleNav = (params) => {
    if (params.router) {
      setType(params.router);
      setNav(
        nav.map((item) =>
          Object.assign({}, item, { choosed: params.title === item.title })
        )
      );
    }
  };
  const rederNav = () => {
    return nav.map((item, index) => {
      return (
        <Fragment key={index}>
          {item.level === "1" && (
            <h1
              className={item.choosed ? "choosed" : ""}
              onClick={() => handleNav(item)}
            >
              {item.title}
            </h1>
          )}
          {item.level === "2" && (
            <h2
              className={item.choosed ? "choosed" : ""}
              onClick={() => handleNav(item)}
            >
              {item.title}
            </h2>
          )}
          {item.level === "3" && (
            <h3
              className={item.choosed ? "choosed" : ""}
              onClick={() => handleNav(item)}
            >
              {item.title}
            </h3>
          )}
        </Fragment>
      );
    });
  };

  return (
    <Fragment>
      <div className="svg-box">
        <section>{rederNav()}</section>
        <Arc type={type} />
        <ul>
          <li>喵了个汪</li>
        </ul>
      </div>
    </Fragment>
  );
}

function Arc({ type }) {
  return (
    <Fragment>
      {type === "SvgIntroduction" && <SvgIntroduction />}
      {type === "SvgGettingstarted" && <SvgGettingstarted />}
      {type === "SvgPositions" && <SvgPositions />}
      {type === "SvgBasicshapes" && <SvgBasicshapes />}
    </Fragment>
  );
}
export default SvgIndex;
