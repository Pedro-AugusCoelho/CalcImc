import styled from "styled-components";

export const MainLeftSide = styled.div`
    flex:1;
    @media(max-width:800px){
        margin-top: 5%;
        padding-bottom: 8%;
        text-align: center;
    }
    h1{
        margin: 0;
        font-size: 40px;
        color:#3A485C;
    };
    p{
        font-size: 16px;
        margin-bottom: 40px;
        color: #6a7d8b;
    };
    input{
        display: block;
        width: 100%;
        padding: 15px 2px;
        margin-bottom: 20px;
        border:0;
        border-bottom: 2px solid #CCC;
        &:disabled{
            border-bottom: 2px solid #F20F06;
            opacity: .5;
        }
    };
    button{
        background-color: #227c9d;
        width: 100%;
        padding: 15px 0;
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        border:0;
        border-radius: 10px;
        margin-top: 20px;
        cursor: pointer;
        transition: opacity ease 0.5s;
        &:hover{
            opacity: 0.7;
        }
        &:disabled{
            cursor: default;
            background-color: #F20F06;
            opacity: .5;
        }
    };
`;