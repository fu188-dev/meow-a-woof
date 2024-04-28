import { Fragment, useState } from "react";
import "./index.scss";

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
      </ul>
    </Fragment>
  );
}

export default SvgAchievements;
