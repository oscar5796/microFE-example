import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import { BootstrapNavBar } from "./components/BootstrapNavBar";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: BootstrapNavBar,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
