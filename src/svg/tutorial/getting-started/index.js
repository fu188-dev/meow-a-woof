import { Fragment, useState } from "react";
import Code from "../../../components/code-card/index.js";
import pic from "../../../images/svg-tutorial-getting-started-one.png";
import "./index.scss";

function Gettingstarted() {
  const [code1, setCode1] = useState({
    type: "XML",
    text: `<svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="red" />
    <circle cx="150" cy="100" r="80" fill="green" /> 
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white"> SVG </text>
</svg> `,
  });

  const [code2, setCode2] = useState({
    type: "HTML",
    text: `<object data="image.svg" type="image/svg+xml"></object>`,
  });
  const [code3, setCode3] = useState({
    type: "HTML",
    text: `<iframe src="image.svg"></iframe>`,
  });
  const [code4, setCode4] = useState({
    type: "HTTP",
    text: `Content-Type: image/svg+xml
Vary: Accept-Encoding`,
  });
  const [code5, setCode5] = useState({
    type: "HTTP",
    text: `Content-Type: image/svg+xml
Content-Encoding: gzip
Vary: Accept-Encoding`,
  });

  return (
    <Fragment>
      <dl>
        <dt>一个简单的示例</dt>
        <dd>直接从一个例子开始：</dd>
        <dd>
          <Code {...code1}></Code>
        </dd>
        <dd>
          复制并粘贴代码到文件 demo1.svg ，
          然后用浏览器打开该文件，会出现如下效果：
        </dd>
        <dd>
          <img alt="svg示例" src={pic} />
        </dd>
        <dd>绘制流程包括以下几步：</dd>
        <dd>
          <ol>
            <li>从 svg 根元素开始：</li>
            <ul>
              <li>
                SVG 2 之前 version 属性和 baseProfile
                属性用来供其他类型的验证识别 SVG 的版本。SVG 2 已经弃用 version
                和 baseProfile 属性。
              </li>
              <li>
                SVG 必须正确的绑定命名空间（在 xmlns 属性中绑定）。请阅读
                <a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Namespaces_Crash_Course">
                  命名空间速成
                </a>
                页面获得更多信息。
              </li>
            </ul>
            <li>
              绘制一个完全覆盖图像区域的矩形{" "}
              <a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/rect">
                &lt;rect&gt;
              </a>
              ,把背景颜色设置为红色。
            </li>
            <li>
              一个半径 80px 的绿色圆圈
              <a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/circle">
                &lt;circle&gt;
              </a>
              绘制在红色矩形的正中央（向右偏移 150px，向下偏移 100px）。
            </li>
            <li>
              绘制文字
              "SVG"。文字被填充为白色，通过设置居中的锚点把文字定位到期望的位置：
              在这种情况下，中心点应该对应于绿色圆圈的中点。
              还可以精细调整字体大小和垂直位置，确保最后的样式是美观的。
            </li>
          </ol>
        </dd>
        <dt>SVG 文件的基本属性</dt>
        <dd>
          <ol>
            <li>
              SVG 元素渲染的顺序：<strong>"后来居上"</strong>
              ，越后面的元素越可见。
            </li>
            <li>
              web 上的 SVG 文件可以直接在浏览器上展示，或者通过
              <strong>以下几种方法嵌入到 HTML 文件中：</strong>
            </li>
            <ul>
              <li>
                如果 HTML 是
                <strong>XHTML 并且声明类型为 application/xhtml+xml</strong>
                ，可以直接把 SVG 嵌入到 XML 源码中。
              </li>
              <li>
                SVG <strong>可以直接嵌入</strong>到 HTML 中。
              </li>
              <li>
                可以通过 <strong>img</strong> 元素。
              </li>
              <li>
                可以通过 <strong>object</strong> 元素引用 SVG 文件：
              </li>
              <Code {...code2}></Code>
              <li>
                类似的也可以使用 <strong>iframe</strong> 元素引用 SVG 文件：
              </li>
              <Code {...code3}></Code>
              <li>SVG 可以通过 JavaScript 动态创建并注入到 HTML DOM 中。</li>
            </ul>
          </ol>
        </dd>
        <dt>SVG 文件类型</dt>
        <dd>
          <ul>
            <li>
              普通 SVG 文件：<strong>".svg"</strong>（全部小写） 文件扩展名
            </li>
            <li>
              gzip压缩的 SVG 文件：<strong>".svgz"</strong>（全部小写）
              文件扩展名
            </li>
          </ul>
        </dd>
        <dt>关于 web 服务器上 .svgz 文件的小提示</dt>
        <dd>
          <ul>
            <li>对于普通 SVG 文件，服务器会发送下面的 HTTP 头：</li>
            <Code {...code4}></Code>
            <li>对于 gzip 压缩的 SVG 文件，服务器会发送下面的 HTTP 头：</li>
            <Code {...code5}></Code>
          </ul>
        </dd>
        <dd>
          你可以利用
          <a href="https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#headers">
            网络监控面板
          </a>
          或者 <a href="https://websniffer.com/">websniffer.com</a>
          之类的网站来检查服务器是否给 SVG 文件发送正确的 HTTP
          标头。提交你的一个 SVG 文件的 URL，然后查看 HTTP
          响应标头。如果发现服务器没有发送具有上述值的响应标头，那么你应该联系你的网站托管服务商。如果不能说服他们为
          SVG 修正服务器配置，可能还有一些我们可以自行解决的办法。请阅读 w3.org
          上的
          <a href="https://www.w3.org/services/svg-server/">服务器配置页面</a>
          以找到一些简单的解决方案。
        </dd>
        <dd>
          服务器配置错误是 SVG
          加载失败的常见原因，所以一定要确保你的服务器配置正确。如果不能把服务器配置成给
          SVG 文件发送正确的响应标头，这时 Firefox
          很有可能把该文件的标记显示成文本或乱码，甚至会要求查看者选择打开文件的应用程序。
        </dd>
      </dl>
    </Fragment>
  );
}
export default Gettingstarted;
