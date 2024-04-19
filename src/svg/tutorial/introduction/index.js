import { Fragment } from "react";
import "./index.scss";

function Introduction() {
  return (
    <Fragment>
      <dl>
        <dt>定义/作用</dt>
        <dd>
          SVG 诞生于 1999 年。<em>（我才出生）</em>
        </dd>
        <dd>
          SVG 是一种
          <a href="https://developer.mozilla.org/zh-CN/docs/Westrong/XML">
            {" "}
            XML{" "}
          </a>
          语言，类似
          <a href="https://developer.mozilla.org/zh-CN/docs/Glossary/XHTML">
            {" "}
            XHTML{" "}
          </a>
          。
        </dd>
        <dd>可以用来绘制矢量图形。</dd>
        <dd>
          缺点：<strong>加载慢</strong>。
        </dd>
        <dd>
          优点：<strong>实现了 DOM 接口</strong>。不需要安装第三方扩展。
        </dd>

        <dt>基本要素</dt>
        <dd>
          SVG 提供了一些元素，用于定义
          <strong>圆形、矩形、简单或复杂的曲线</strong>。
        </dd>
        <dd>
          SVG 支持
          <strong>渐变、旋转、动画、滤镜效果、与 Javascript 交互</strong>
          等等功能。
        </dd>

        <dt>开始之前</dt>
        <dd>想要理解 SVG 的内部原理，最好的方法就是动手写一些 SVG 的标记。</dd>
        <dd>
          各种 SVG 浏览器是有差异的，因此你制作的 SVG
          图形可能在其他浏览器中无法正常显示。这是因为
          <strong>不同浏览器支持 SVG 标准的程度不同</strong>
          。如果你将其他技术（JavaScript 和 CSS）和 SVG
          一起使用，也会出现类似的情况。
        </dd>
        <dd>
          所有的现代浏览器都支持 SVG，
          <a href="https://caniuse.com/#feat=svg">Can I Use</a>
          上有一份比较详细的支持 SVG 的浏览器列表。
        </dd>
        <dd>这里有几个重点一定要记住：</dd>
        <dd>
          <ul>
            <li>
              SVG 的元素和属性必须按标准格式书写，因为 XML 是区分大小写的。
            </li>
            <li>
              SVG 里的<strong>属性值必须用引号引起来</strong>
              ，就算是数值也必须这样做。
            </li>
          </ul>
        </dd>
      </dl>
    </Fragment>
  );
}
export default Introduction;
