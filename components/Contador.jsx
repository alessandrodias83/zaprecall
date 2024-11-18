import styled from "styled-components";

export default function Contador({ total }) {
    return (
        <CounterContainer>
            <h1>0/{total} concluídos</h1>
        </CounterContainer>
    )
}

const CounterContainer = styled.div`
    background: #ffffff;
    height: 10%;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: "Recursive", sans-serif;
    }
`;
