import { Fragment, useEffect, useState } from "react";
import "./index.scss";
// import anime from "animejs/lib/anime.es.js";
import Card from "./components/card";

function Index() {
  const [technology, setTechnology] = useState([
    { 
      title: "Life", 
      detail: "记录生活、分享生活。", 
      columns: [
        "0篇记录",
        "暂时还不能进行回忆",
        "欢迎其他小伙伴查看",
      ],
      url: "/svg",
    },
    { 
      title: "SVG", 
      detail: "可缩放矢量图形（Scalable Vector Graphics, SVG）.", 
      columns: [
        "0篇学习笔记",
        "暂时还不能进行复习",
        "欢迎其他小伙伴查看",
      ],
      url: "/svg",
    },
    { 
      title: "快速笔记", 
      detail: "记录在开发、生活中遇到的问题。", 
      columns: [
        "0篇学习笔记",
        "暂时还不能进行复习",
        "欢迎其他小伙伴查看",
      ],
      url: "/svg",
    },
    { 
      title: "小成果", 
      detail: "一些小成就。", 
      columns: [
        "0个成就",
        "暂时还不能进行查看",
        "欢迎其他小伙伴查看",
      ],
      url: "/svg",
    },
  ]);
  // const ami = () => {
  //   anime({
  //     targets: '.box',
  //     scale: [
  //       {value: .1, easing: 'easeOutSine', duration: 500},
  //       {value: 1, easing: 'easeInOutQuad', duration: 1000}
  //     ],
  //     delay: anime.stagger(200, {grid: [4, 1], from: 'center'})
  //   });
  // };

  useEffect(() => {
    // ami();
  }, []);

  return (
    <Fragment>
      <main>
        { technology.map((item) => <Card {...item} key={item.title} />) }
      </main>
    </Fragment>

  );
}

export default Index;
