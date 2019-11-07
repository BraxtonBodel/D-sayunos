import React from "react";
import {
  Head,
  AnchorHeader,
  SiteName,
  SiteDesc,
  Navigator,
  NavigationList,
  NavigationElement
} from "./styles";
import { NavigatonLink } from "../Navigator";

export const Header = () => {
  const links = ["Inicio", "Acerca de", "Contacto"]
  return (
    <Head>
      <AnchorHeader href="#">
        <SiteName>FranciscoAMK</SiteName>
        <SiteDesc class="site-desc">
          Diseño web / WordPress / Tutoriales
        </SiteDesc>
      </AnchorHeader>
      <Navigator>
        <NavigationList>
          {
              links.map= (link) => {
                <NavigatonLink path={link} description={link}/>
              }
          }
        </NavigationList>
      </Navigator>
    </Head>
  );
};
