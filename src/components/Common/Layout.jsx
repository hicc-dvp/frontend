// src/components/Common/Layout.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return <div className={styles.layoutContainer}>{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
