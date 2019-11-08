import React from "react";
import {
  Head,
  LogoContainer,

  Navigator,
  NavigationList,
  NavigationElement
} from "./styles";
import { NavigatonLink } from "../Navigator";
import { Logo } from "../../assets/svg/svg";

export const Header = () => {
  const links = ["Inicio", "Acerca de", "Contacto"];
  return (
    <Head>
      <LogoContainer href="#">
        <Logo/>
      </LogoContainer>
      <Navigator>
        <NavigationList>
          {links.map(link => (
            <NavigatonLink path={link} description={link} />
          ))}
        </NavigationList>
      </Navigator>
    </Head>
  );
};
