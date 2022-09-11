import styled from "styled-components";
import { Link } from "react-router-dom";
import { deleteRecord } from "../../service/service";


export default function Record ({
        id,
        date,
        details,
        price,
        type,
        setMessage,
        userData,
        setUserData
    }) {

    const newPrice = Number(price).toFixed(2).toString().replace('.', ',');
    const newDate = date.slice(0, 5);

    function deleteRecordFunction (idRecord) {
        const promise = deleteRecord(idRecord);

        promise.catch(res => {

            setMessage({
                type:'alert',
                message: {
                    text:res.response.data.message,
                    type:'error'
                }
            });
        });

        promise.then(() => {
            setUserData({ ...userData });
        });
    }

    function showConfirm () {
        setMessage({
            type:'confirm',
            message: {
                title:'Apagar registro',
                text:'Deseja apagar esse registro? A ação não pode ser desfeita.',
                ifTrue: {
                    function:deleteRecordFunction,
                    params:id
                }
            }
        });
    }


    return (
        
        <Wrapper type={type}>
            <Link to={`/record/edit/${id}`}>
                <Info>
                    <span>
                        <b>{newDate}</b>
                        {details}
                    </span>
                </Info>
            </Link>
            <div>
                <strong>{newPrice}</strong>
                <i onClick={showConfirm}>x</i>
            </div>
        </Wrapper>
        
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

    a {
        width: 100%;
    }

    strong {
        color: ${props => props.type === 'entrada' ? 'var(--green)' : 'var(--red)'}
    }

    i {
        color: #c6c6c6;
        cursor: pointer;
        margin-left: 10px;
    }
`;

const Info = styled.div`
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;