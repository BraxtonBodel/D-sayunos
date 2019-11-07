import React from "react";

export const NavigatonLink = ({ path, description }) => {
  return (
    <NavigationElement>
      <NavigationLink href={path}>{description}</NavigationLink>
    </NavigationElement>
  );
};
