import { useState } from "react";
import styled from "styled-components";
import play from "../assets/seta_play.png";
import virar from "../assets/seta_virar.png";

export default function Flashcard( { index, question, answer }) {
    const [state, setState] = useState("default");
    const [answered, setAnswered] = useState(false);
    const [strikeColor, setStrikeColor] = useState("");

    const handleAnswer = (color) => {
        setAnswered(true);
        setStrikeColor(color);
        setState("answered");
    };

    return (
        <>
        {state === "default" && (
            <CardQuestion answered={answered} color={strikeColor}>
                <h1>{`Pergunta ${index}`}</h1>
                <img src={play} alt="Play icon" onClick={() => setState("question")} />
            </CardQuestion>
        )}
        {state === "question" && (
            <CardFlip>
                <h1>{question}</h1>
                <img src={virar} alt="Flip icon" onClick={() => setState("answer")} />
            </CardFlip>
        )}
        {state === "answer" && (
            <CardAnswer>
                <h1>{answer}</h1>
                <ButtonContainer>
                    <ActionButton color="#FF3030" onClick={() => handleAnswer("#FF3030")}>Não Lembrei</ActionButton>
                    <ActionButton color="#FF922E" onClick={() => handleAnswer("#FF922E")}>Quase não lembrei</ActionButton>
                    <ActionButton color="#2FBE34" onClick={() => handleAnswer("#2FBE34")}>Zap!</ActionButton>
                </ButtonContainer>
            </CardAnswer>
        )}
    </>
    );
}

const CardQuestion = styled.div`
    background-color: #ffffff;
    min-width: 300px;
    min-height: 65px;
    margin: 10px 0;
    border-radius: 5px;
    box-shadow: 5px 5px 2px 0px rgba(0, 0, 0, 0.14);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    h1 {
        text-decoration: ${(props) => (props.answered ? "line-through" : "none")};
        color: ${(props) => props.color || "inherit"};
    }
`;

const CardFlip = styled.div`
    background-color: #FFFFD4;
    min-width: 300px;
    min-height: 65px;
    margin: 10px 0;
    border-radius: 5px;
    box-shadow: 5px 5px 2px 0px rgba(0, 0, 0, 0.14);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    position: relative;
`;

const CardAnswer = styled.div`
    background-color: #FFFFD4;
    min-width: 300px;
    min-height: 65px;
    margin: 10px 0;
    border-radius: 5px;
    box-shadow: 5px 5px 2px 0px rgba(0, 0, 0, 0.14);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const ActionButton = styled.button`
    background-color: ${(props) => props.color};
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    font-family: "Recursive", sans-serif;
    font-size: 14px;

    &:hover {
        opacity: 0.9;
    }
`;
