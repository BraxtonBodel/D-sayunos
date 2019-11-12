import React from 'react';
import { CardContainer, MainCard, CardImage, Image, CardTitle,CardDescription } from "./styles";
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
            CardDescription: "Desayunos personalizados creados para todas aquellas personas que desean, desayunar de una manera diferente apostandole a un concepto nuevo en el cual se le apuesta a combinar  diferentes tipos de sabores.",
            CardImage: Image1
        },
        {
            CardTitle: "Desayunos para eventos",
            CardDescription: "Dsayunos puede gestionar la cobertura de tus eventos e incluir todo un buffet de desayunos personalizados.",
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
                 <MainCard key={link}>
                 <CardImage> 
                     <Image src={link.CardImage} /> 
                 </CardImage>
                 <CardTitle>
                    <p>{link.CardTitle}</p>
                 </CardTitle>
                 <CardDescription>
                     {link.CardDescription}
                 </CardDescription>
                </MainCard>
            ))}
        </CardContainer>
    );
}