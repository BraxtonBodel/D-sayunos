import React from "react";
import { NavigationElement, NavigationRedirect } from "./styles";

export const NavigatonLink = ({ path, description }) => {
  return (
    <NavigationElement>
      <NavigationRedirect href={path}>{description}</NavigationRedirect>
    </NavigationElement>
  );
};
