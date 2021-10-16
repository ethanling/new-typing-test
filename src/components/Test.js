import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import useTestText from "../hooks/useTestText";

const StyledWrapper = styled.div`
    color: #f2f1f1;
    font-family: monospace;
`;

const HiddenInput = styled.input`
    height: 0;
    width: 0;
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
`;

const StyledContainer = styled.div`
    max-width: 80vw;
    display: flex;
    flex-wrap: wrap;
    font-size: 1.2em;
`;

const StyledWord = styled.span`
    flex: 1;
    margin: 5px;
`;

const Test = () => {
    const [input, setInput] = useState("");
    const [isStarted, setIsStarted] = useState(false);
    const inputRef = useRef();
    const test = useTestText();

    const focus = () => {
        inputRef.current.focus();
    };

    const toggleStart = () => {
        setIsStarted(!isStarted);
    };

    const setCharClass = () => {

    };

    const handleInput = (e) => {
        // Start test at time of first input
        if (input.length === 0) {
            toggleStart()
        }
        setInput(e.target.value)
        console.log(input)
    }

    useEffect(() => {
        focus();
    }, []);

    return (
        <StyledWrapper onClick={() => focus()}>
            <HiddenInput
                ref={inputRef}
                onChange={(e) => handleInput(e)}
            />
            <StyledContainer>
                {test.map((word, i) => (
                    <StyledWord key={i}>
                        {word.map((char, index) => (
                            <span className={setCharClass(input)} key={index}>
                                {char}
                            </span>
                        ))}
                    </StyledWord>
                ))}
            </StyledContainer>
        </StyledWrapper>
    );
};

export default Test;
