import { Fragment, useState } from "react";
import Code from "../../../components/code-card/index.js";
import "./index.scss";

function Positions() {
  const [code1, setCode1] = useState({
    type: "HTML",
    text: `<rect x="0" y="0" width="100" height="100" />`,
  });

  return (
    <Fragment>
      <dl>
        <dt>网格</dt>
        <dd>SVG 的坐标系统和 Canvas 差不多：</dd>
        <dd>
          <ul>
            <li>以页面的左上角（0，0）坐标点，坐标以像素为单位。</li>
            <li>x 轴正方向是向右。</li>
            <li>y 轴正方向是向下。</li>
          </ul>
        </dd>
        <dt>示例</dt>
        <dd>
          定义一个矩形，从左上角开始，向右延申 100px，向下延申 100px，形成一个
          100*100 大的矩形。
        </dd>
        <dd>
          <Code {...code1}></Code>
        </dd>
      </dl>
    </Fragment>
  );
}
export default Positions;
