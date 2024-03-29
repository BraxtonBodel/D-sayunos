import  styled  from "styled-components";

export const CardContainer = styled.div`
    z-index: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const MainCard = styled.div`
    margin: 30px auto;
    width: 300px;
    height: 300px;
    border-radius: 40px;
    box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
    cursor: pointer;
    transition: 0.4s;
`;

export const CardImage = styled.div`
    width: inherit;
    height: inherit;
    border-radius: 40px;
`;

export const Image = styled.img`
    width: inherit;
    height: inherit;
    border-radius: 40px;
    object-fit: cover;
`;

export const CardTitle = styled.div`
    text-align: center;
    border-radius: 0px 0px 40px 40px;
    font-weight: bold;
    font-size: 30px;
`;

export const CardDescription = styled.p`
    font-size: 15px
`;