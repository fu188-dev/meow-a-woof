import { Fragment } from "react";
import "./layout.scss";

function Layout({children}) {
    return (
        <Fragment>
            <h1 className="logo">喵了个汪</h1>
            {children}    
        </Fragment>
    );
}
export default Layout;