import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

function SvgIndex() {
  const navigate = useNavigate();

  const handleIntroduction = () => {
    navigate("/svg/introduction");
  };
  const handleGettingstarted = () => {
    navigate("/svg/gettingstarted");
  };

  return (
    <Fragment>
      <section>
        <h1>教程</h1>
        <h2>从零开始介绍SVG</h2>
        <h3 onClick={handleIntroduction}>引言</h3>
        <h3 onClick={handleGettingstarted}>入门</h3>

        <h1>参考</h1>
        <h2>元素</h2>
        <h2>属性</h2>

        <h1>指南</h1>
      </section>
    </Fragment>
  );
}
export default SvgIndex;
