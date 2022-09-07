import styled from "styled-components";

export default function Record ({ date, details, price, type }) {

    return (
        <Wrapper type={type}>
            <div>
                <span>
                    <b>{date.slice(0, 5)}</b>
                    {details}
                </span>
            </div>
            <div>
                <strong>{price.replace('.', ',')}</strong>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 36px;
    font-size: 16px;
    color: var(--gray);
    display: flex;
    align-items: center;
    justify-content: space-between;

    && {
        span {
            color: var(--black);

            b {
                color: #c6c6c6;
                margin: 0 10px 0 0;
            }
        }
    }

    strong {
        color: ${props => props.type === 'entrada' ? 'var(--green)' : 'var(--red)'}
    }
`;