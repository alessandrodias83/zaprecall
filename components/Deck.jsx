import play from "../assets/seta_play.png";
import virar from "../assets/seta_virar.png"

import Flashcard from "./Flashcard";
import styled from "styled-components";

export default function Deck({ cards }) {
    return (
        <DeckContainer>
            {cards.map((card, index) => (
                <Flashcard key={index} index={index + 1}
                question={card.question} answer={card.answer} />
            ))}
        </ DeckContainer>
    )
}

const DeckContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
`;