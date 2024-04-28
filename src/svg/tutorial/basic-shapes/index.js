import { Fragment, useState } from "react";
import Code from "../../../components/code-card/index.js";
import "./index.scss";

function Basicshapes() {
  const [code1, setCode1] = useState({
    type: "XML",
    text: `<rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
    `,
  });

  return (
    <Fragment>
      <dl>
        <dt>矩形</dt>
        <dd>
          <Code {...code1}></Code>
        </dd>
      </dl>
    </Fragment>
  );
}
export default Basicshapes;
