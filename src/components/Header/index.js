import React from "react";
import {
  Main,
  Concept,
  ConceptName,
  Head,
  LogoContainer,
  Navigator,
  NavigationList,
  OurList,
  OurElement
} from "./styles";
import { NavigatonLink } from "../Navigator/";
import  Logo  from "../../assets/svg/svg";

export const Header = () => {
  const links = ["Inicio", "Acerca de", "Contacto"];
  return (
    <div>
      <Head>
    <LogoContainer href="#">
      <Logo/>
    </LogoContainer>
    <Navigator>
      <NavigationList>
        {links.map(link => (
          <NavigatonLink key={link} description={link} />
        ))}
      </NavigationList>
    </Navigator>
    </Head>
    <Main>
    <Concept>
        <ConceptName>Nuestro concepto</ConceptName>
        <OurList>
          <OurElement>
            <strong>Calidad Premium:</strong> Parte de nuestro concepto en <strong>Dsayunos</strong> es brindar a los clientes productos de la más alta calidad.
          </OurElement>
          <OurElement>
            <strong>Acompañamiento:</strong>  Nuestro compromiso es brindar al cliente un acompañamiento durante y despues de nuestros servicios.
          </OurElement>
           <OurElement>
            <strong>Nuestro toque secreto:</strong> Para nuestros clientes, nuestro toque secreto en nuestros platillos: El amor.
          </OurElement>
        </OurList>
    </Concept>
    </Main>
    </div>
    
  );
};


