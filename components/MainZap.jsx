import Logo from "./Logo";
import Contador from "./Contador";
import Deck from "./Deck";
import styled from "styled-components";
import cards from "../cards"


export default function MainZap(props) {
    
    return (
       <Container>
            <Logo />
            <Deck cards={cards} />
            <Contador total={cards.length} />
       </Container>
    )
}

const Container = styled.div`
    background: #fb6b6b;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    font-family: "Recursive", sans-serif;
`;