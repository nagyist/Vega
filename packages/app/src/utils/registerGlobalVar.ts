import * as Core from "@vega/core";
import * as RiAppUi from "@vega/riapp-ui";
import React from "react";
import styled from "styled-components";

export function registerGlobalVar() {
  if (typeof window !== "undefined") {
    window.React = React;
    window.styled = styled;
    window.Core = Core;
    window.RiAppUi = RiAppUi;
  }
}
