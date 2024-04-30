import { Fragment, useState } from "react";
import "./index.scss";
import { hover } from "@testing-library/user-event/dist/hover";

function SvgAchievements() {

  return (
    <Fragment>
      <ul className="svg-achievements-box">
        <li>
          <svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="80" height="80" rx="10" ry="10"/>
          </svg>
          <h2>矩形</h2>
        </li>
        <li>
          <svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40"/>
          </svg>
          <h2>圆形</h2>
        </li>
        <li>
          <svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="50" cy="50" rx="40" ry="20"/>
          </svg>
          <h2>椭圆</h2>
        </li>
        <li>
          <svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <line x1="10" x2="90" y1="10" y2="90" stroke="black"/>
          </svg>
          <h2>线条</h2>
        </li>
        <li>
          <svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <polyline fill="transparent" stroke="black" points="0 50,40 40, 50 0,60 40 ,100 50, 60 60, 50 100, 40 60"/>
          </svg>
          <h2>折线</h2>
        </li>
        <li>
          <svg width="100" height="100" stroke="black" fill="transparent" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <style>
                  {/* <![CDATA[.a:hover {fill: red;}]]> */}
                </style>
              </defs>
              <polygon points="0 50,40 40, 50 0,60 40 ,100 50, 60 60, 50 100, 40 60" className="a"/>
          </svg>
          <h2>多边形</h2>
          <p>和折线很像，不同的是，多边形的路径在最后一个点处自动回到第一个点。我们可以看到从这两个示例中看出</p>
        </li>
        <li>
          <svg width="100" height="100" stroke="black" fill="transparent" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M 10 10 h 80 v 80 h -80 v -80"/>
          </svg>
          <h2>路径</h2>
          <p>直线命令（M、h、v）</p>
        </li>
        <li>
          <svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M 10 10 L 90 10 L 90 90 L 10 90 z" stroke="black" fill="transparent"/>
          </svg>
          <h2>路径</h2>
          <p>直线命令（M、L-绝对定位、z）</p>
        </li>
        <li>
          <svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M 10 10 l 80 0 l 0 80 l -80 0 z" stroke="black" fill="transparent"/>
          </svg>
          <h2>路径</h2>
          <p>直线命令（M、l-相对定位、z）</p>
        </li>
        <li>
          <svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M 10 10 C 50 0, 50 20, 50 10" stroke="black" fill="transparent"/>
          </svg>
          <h2>路径</h2>
          <p>曲线命令（三次贝塞尔曲线）</p>
        </li>
        <li>
          <svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 80 q 35 -40, 80 0 t 0 80 t -80 0 t 0 -80" stroke="black" fill="transparent"/>
          </svg>
          <h2>路径</h2>
          <p>曲线命令--二次贝塞尔曲线--(M、q、t)</p>
        </li>
        <li>
          <svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 50            
            A 40 40, 0, 1, 1, 50 90
            L 50 50 Z" stroke="black" fill="transparent"/>
          </svg>
          <h2>路径</h2>
          <p>曲线命令--弧形</p>
        </li>
        <li>
          <svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 50            
            A 40 40, 0, 1, 1, 90 50 z
           " stroke="black" fill="transparent"/>
          </svg>
          <h2>路径</h2>
          <p>曲线命令--弧形</p>
        </li>
        <li>
          <svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 50            
            A 40 40 0 0 1 50 10
            L 50 50 z
            " stroke="black" fill="transparent"/>
          </svg>
          <h2>路径</h2>
          <p>曲线命令--弧形</p>
        </li>
        <li>
          <svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 50            
            A 40 40, 0, 0, 1, 50 90
            L 50 50 Z" stroke="black" fill="transparent"/>
          </svg>
          <h2>路径</h2>
          <p>曲线命令--弧形</p>
        </li>
        <li>
          <svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fillOpacity={0} stroke="#393944"strokeDasharray="5,10,5" id="MyRect"></circle>
            <circle cx="60" cy="70" r="16" fillOpacity={0} stroke="#FDF4F3"></circle>
            <circle cx="140" cy="70" r="16" fill="#F8D6DD" stroke="#393944" strokeOpacity={0.5}></circle>
            <path d="M 70 120 Q 100 160, 130 120" stroke="black" fill="transparent"/>
          </svg>
          <h2>填充和边框</h2>
          <p>fill、strok、fill-opacity、stroke-opacity、stroke-dasharray</p>
        </li>
        <li>
          <svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="Gradient1">
                <stop offset="5%" stopColor="white" />
                <stop offset="95%" stopColor="blue" />
              </linearGradient>
              <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="red" />
                <stop offset="95%" stopColor="orange" />
              </linearGradient>

              <pattern id="Pattern" x="0" y="0" width=".25" height=".25">
                <rect x="0" y="0" width="50" height="50" fill="skyblue" />
                <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)" />
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  fill="url(#Gradient1)"
                  fillOpacity="0.5" />
              </pattern>
            </defs>
            <rect
              fill="url(#Pattern)"
              stroke="black"
              x="0"
              y="0"
              width="200"
              height="200" />
          </svg>
          <h2>patterns(图形)</h2>
        </li>
        <li>
          <svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <text x="50" y="30" textAnchor="start" rotate="20, -20, 40, 90, 180, 120, 30, 80, -60, -90">
              凳子齐
              <tspan fontWeight="bold" fill="red">（start）</tspan>
            </text>
            <text x="50" y="60" textAnchor="end">凳子齐（end）</text>
            <text x="50" y="90" textAnchor="middle">凳子齐（middle）</text>
            <text x="50" y="120" textAnchor="inherit">凳子齐（inherit）</text>
          </svg>
          <h2>文本</h2>
          <p>text-anchor、&lt;tspan&gt;&lt;/tspan&gt;</p>
        </li>       
        <li>
          <svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="100" height="100" transform="translate(60,40) rotate(20)"/>
          </svg>
          <h2>基础变形</h2>
          <p>平移、旋转</p>
        </li>         
        <li>
          <svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="100" height="100"transform="skewX(20) skewY(20) scale(0.8)"/>
          </svg>
          <h2>基础变形</h2>
          <p>斜切、缩放</p>
        </li>
        <li>
          <svg width={200}
            height={200} xmlns="http://www.w3.org/2000/svg" version="1.1">
            <svg width="100" height="100" viewBox="0 0 50 50">
              <rect width="50" height="50" />
            </svg>
          </svg>
          <h2>基础变形</h2>
          <p>SVG 嵌在 SVG 内部</p>
        </li>
        <li>
          <svg
            width={200}
            height={200}
            version="1.1">
            <defs>
              <clipPath id="cut-off-bottom">
                <rect x="0" y="0" width="100" height="100" />
              </clipPath>
            </defs>
            <circle cx="100" cy="100" r="100" clipPath="url(#cut-off-bottom)"/>
          </svg>
          <h2>剪切</h2>
        </li>
        <li>
          <svg
            version="1.1" width="200" height="200">
            <defs>
              <linearGradient id="Gradient">
                <stop offset="0" stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" stop-opacity="1" />
              </linearGradient>
              <mask id="Mask">
                <rect x="0" y="0" width="200" height="200" fill="url(#Gradient)" />
              </mask>
            </defs>

            <rect x="0" y="0" width="200" height="200" fill="green" />
            <rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" />
          </svg>
          <h2>遮罩</h2>
        </li>
        <li>
          <svg
            width="200"
            height="200"
            version="1.1">
            <rect x="0" y="0" width="200" height="200" fill="blue" />
            <circle
              cx="100"
              cy="100"
              r="50"
              stroke="yellow"
              stroke-width="40"
              stroke-opacity=".5"
              fill="red" />
          </svg>
          <h2>透明度</h2>
        </li>




      </ul>
    </Fragment>
  );
}

export default SvgAchievements;
