import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Record ({ id, date, details, price, type }) {

    const newPrice = Number(price).toFixed(2).toString().replace('.', ',');
    const newDate = date.slice(0, 5);

    return (
        <Link to={`/record/edit/${id}`}>
            <Wrapper type={type}>
                <Info>
                    <span>
                        <b>{newDate}</b>
                        {details}
                    </span>
                </Info>
                <div>
                    <strong>{newPrice}</strong>
                </div>
            </Wrapper>
        </Link>
    );
}

const Wrapper = styled.div`
    height: 36px;
    font-size: 16px;
    border-radius: 7px;
    color: var(--gray);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;

    &:hover {
        background: beige;
    }

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

const Info = styled.div`
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;