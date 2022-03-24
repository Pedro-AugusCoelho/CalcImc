import styled from "styled-components";

export const BoxMain = styled.div`
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2%;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:5%;
    @media(max-width:800px){
        flex-direction:column-reverse;
        padding: 0 2%;
    }
    @media(max-width:500px){
        flex-direction:column;
    }
`;