import styled from "styled-components";

import { useState, useEffect } from "react";


export default function Alert ({ message, setMessage }) {
    const [opacity, setOpacity] = useState(0);
    const { text, type } = message.message;

    useEffect(() => {
        setTimeout(() => {
            setOpacity(1);
        }, 100);

        setTimeout(() => {
            setOpacity(0);
        }, 3000);

        setTimeout(() => {
            setMessage({ type:'' });
        }, 3500);
    }, []);


    return (
        <Wrapper
            opacity={opacity}
            type={type}>
                {text}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: fit-content;
    max-width: 70%;
    max-width: 500px;
    background-color: ${props => props.type === 'success' ? '#8FC549' : 'lightcoral'};
    position: fixed;
    top: 10px;
    opacity: ${props => props.opacity};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 7px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 0.3);
    font-size: 18px;
    color: var(--white);
    text-align: center;
    transition: all .2s linear;
`;