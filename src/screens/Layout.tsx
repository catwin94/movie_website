import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { LayoutProps } from "../interfaces/interfaces";

export default function Layout(props: LayoutProps) {
  return (
    <React.Fragment>
      <Header />
      <section>{props.children}</section>
      <Footer />
    </React.Fragment>
  );
}
