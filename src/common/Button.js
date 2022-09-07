import styled from "styled-components";

function Button ({ children, Large = false, ...otherProps }) {
    return (
        <Wrapper Large={Large} { ...otherProps } >{children}</Wrapper>
    );
}

export default Button;

const Wrapper = styled.button`
    width: 47%;
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
        :
            `
                padding: 10px;
                div {
                    width: 80px;
                    height: 100%;
                    font-size: 22px;
                    text-align: start;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    span {
                        font-size: 17px;
                    }
                }
            `
    }
`;