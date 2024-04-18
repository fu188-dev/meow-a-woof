import { Fragment, useEffect } from "react";
import "./index.scss";
import anime from "animejs/lib/anime.es.js";
import Card from "./components/card";

function Index() {

  const ami = () => {
    anime({
      targets: ".a",
      translateX: 250,
      rotate: "1turn",
      duration: 800
    });
  };

  useEffect(() => {
    ami();
  }, []);

  return (
    <Fragment>
      <Card />
    </Fragment>

  );
}

export default Index;
