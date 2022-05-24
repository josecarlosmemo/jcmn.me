import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Layout.scss";

function Layout() {
  return (
    <Fragment>
      <Sidebar />

      <div className="page">
        <span className="tags top-tags">
          <span className="top-tag-html">&lt;/html&gt;</span>
          <br />
        </span>
        <Outlet />
        <span className="tags bottom-tags">
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </Fragment>
  );
}

export default Layout;
