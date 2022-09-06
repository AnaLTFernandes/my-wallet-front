import styled from "styled-components";

function Button ({ children, Large = false }) {
    return (
        <Wrapper Large={Large} >{children}</Wrapper>
    );
}

export default Button;

const Wrapper = styled.button`
    width: 155px;
    height: 114px;
    border-radius: 5px;
    background-color: var(--light-purple-theme);
    border: none;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: var(--white);
    cursor: pointer;

    ${ props => props.Large
        ?
            `{
                width: 100%;
                height: 46px;
                font-size: 20px;
            }`
        : ''
    }
`;