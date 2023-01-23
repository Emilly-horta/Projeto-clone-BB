//import Footer from "./Footer";
//import Header from "./Header";
//import Menu from "./Menu";
//import MenuMobile from "../components/MenuMobile";
import React from "react";
import styles from "../styles/Layout.module.scss";
import Menu from "./Menu";


export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Menu/>
      <div className={styles.main}>{children}</div>
    </React.Fragment>
  );
}