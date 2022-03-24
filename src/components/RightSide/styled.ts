import styled from "styled-components";

export const MainRightSide = styled.div`
    display: flex;
    flex:1;
    height: 50vh;
    @media(max-width:800px){
        width: 100%;
    }
    @media(max-width:500px){
        padding-bottom: 8%;
    }
`;

export const Grid = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap:20px;
    @media(max-width:500px){
        grid-template-columns: 1fr;
    }
`;

export const RightBig = styled.div`
    flex:1;
    display: flex;
`;

export const ArrowBack = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -35px;
    margin-top: 125px;
    position: absolute;
    background-color: #227C90;
    cursor: pointer;
    transition: all ease 0.5s;
    &:hover{
        background-color: red;
        opacity: 0.7;
    }
    img{
        width: 30px;
    }
    @media(max-width:800px){
        border-radius: 50%;
        border-top-left-radius: 10px;
        margin-left: 0px;
        margin-top: 0px;
    }
`;