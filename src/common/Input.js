import styled from "styled-components";

function Input ({ ...otherProps }) {
    return (
        <Wrapper {...otherProps}></Wrapper>
    );
}

export default Input;

const Wrapper = styled.input`
    width: 100%;
    height: 58px;
    border-radius: 5px;
    padding: 0 15px;
    margin-bottom: 13px;
    border: none;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;

    &:-webkit-autofill {
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        -webkit-text-fill-color: var(--black);
        -webkit-box-shadow: 0 0 0 30px var(--white) inset;
    }

    &::placeholder {
        color: var(--black);
    }
`;