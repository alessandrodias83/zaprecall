import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Logo() {
    return (
        <LogoContainer>
            <img src={logo} />
            <h1>ZapRecall</h1>
            
        </ LogoContainer>
    )
}

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20%;

    img {
        height: 60px;
        width: 52px;
    }

    h1 {
        font-family: "Righteous", sans-serif;
        font-size: 36px;
        color: #ffffff;
        margin: 20px;
    }
`;