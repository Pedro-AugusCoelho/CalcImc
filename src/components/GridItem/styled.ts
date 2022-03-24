import styled from "styled-components";

type Props = {
    color:string
}

export const MainItem = styled.div<Props>`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px;
    color: #fff;
    background-color: ${Props => Props.color};
`;

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: rgba(0,0,0,.1);
    img{
        width: 30px;
    }
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin: 3% 0;
`;

export const Info = styled.div`
    font-size: 14px;
    margin-top: 2%;
`;