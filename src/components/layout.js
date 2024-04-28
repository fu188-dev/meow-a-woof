import { Fragment } from "react";
import "./layout.scss";

function Layout({children}) {
    return (
        <Fragment>
            <nav className="logo">喵了个汪</nav>
            <article className="content">
                <div></div>
                <section>
                    <p>喵了个汪</p>
                    <p>喵了个汪</p>
                    <p>喵了个汪</p>
                </section>
                <section>{children}</section>
                <div></div>
            </article>
            
              
        </Fragment>
    );
}
export default Layout;