import React from 'react';
import { CardContainer, MainCard, CardImage, Image, CardTitle } from "./styles";
import  Image1  from "../../assets/custom.jpg";
import  Image2  from "../../assets/banner.jpg";
import  Image3  from "../../assets/ejecutivo.jpg";

export const Card = () => {
    const options = [
        {
            CardTitle: "Desayunos ejecutivos",
            CardDescription: "Nuestros desayunos ejecutivos creados especificamente para aquellas reuniones donde es necesario comer rico para continuar con nuestro dia a dia.",
            CardImage: Image3
        },
        {
            CardTitle: "Desayunos personalizados",
            CardDescription: "Nuestros desayunos ejecutivos creados especificamente para aquellas reuniones donde es necesario comer rico para continuar con nuestro dia a dia.",
            CardImage: Image1
        },
        {
            CardTitle: "Desayunos para eventos",
            CardDescription: "Nuestros desayunos ejecutivos creados especificamente para aquellas reuniones donde es necesario comer rico para continuar con nuestro dia a dia.",
            CardImage: Image2
        }
    ];
    console.log('====================================');
    console.log(options);
    console.log('====================================');
    return (
        <CardContainer>
            {
            options.map(link => (
                 <MainCard>
                 <CardImage> 
                     <Image src={link.CardImage} /> 
                 </CardImage>
                 <CardTitle>
                    <p>{link.CardTitle}</p>
                 </CardTitle>
                </MainCard>
            ))}
        </CardContainer>
    );
}