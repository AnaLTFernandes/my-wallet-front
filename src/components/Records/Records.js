import styled from "styled-components";

import { BsBoxArrowRight } from 'react-icons/bs';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import UserContext from "../../contexts/UserContext";
import { Button } from "../../common";
import { getRecords } from "../../service/service";

import Record from "./Record";


export default function Records () {
    const [records, setRecords] = useState([]);
    const { userData } = useContext(UserContext);

    useEffect(() => {
        setRecords(getRecords(userData));
    }, []);

    let balance = 0;

    records.forEach(({ price, type }) => {
        if (type === 'entrada') {
            balance += Number(price);
        } else {
            balance -= Number(price);
        }
    });

    function convertTotal (to) {
        if (to === 'string') {
            balance = balance
                .toFixed(2)
                .toString()
                .replace('.', ',')
                .replace('-', '');
        }
        
        return balance;
    }

    return (
        <main>
            <header>
                Olá, {userData.name}
                <Link to='/'>
                    <BsBoxArrowRight />
                </Link>
            </header>

            <Page>
                { records.length === 0
                    ?   <span>Não há registros de entrada ou saída</span>
                    :   <Wrapper total={balance}>
                            <div>
                                {records.map((record, index) => (
                                    <Record key={index} {...record} />
                                ))}
                            </div>
                            
                            <span>
                                <b>SALDO</b>
                                <span>{convertTotal('string')}</span>
                            </span>
                        </Wrapper>
                }
            </Page>

            <footer>
                
                <Button>
                    <Link to='/add-income'>
                        <div>
                            <AiOutlinePlusCircle />
                            <span>Nova entrada</span>
                        </div>
                    </Link>
                </Button>
                
                <Button>
                    <Link to='/add-expense'>
                        <div>
                            <AiOutlineMinusCircle />
                            <span>Nova saída</span>
                        </div>
                    </Link>
                </Button>
                
            </footer>
            
        </main>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div {
        height: 100%;
        overflow-y: scroll;
    }

    & > div::-webkit-scrollbar {
        display: none;
    }

    && {
        & > span {
            height: 30px;
            width: 100%;
            font-size: 17px;
            display: flex;
            align-items: end;
            justify-content: space-between;

            b {
                font-weight: 700;
                color: var(--black);
            }

            span {
                width: fit-content;
                color: ${props => 
                    props.total >= 0
                    ? 'var(--green)'
                    : 'var(--red)'
                };
            }
        }
    }

`;

const Page = styled.div`
    width: 100%;
    height: 100%;
    max-height: 400px;
    border-radius: 5px;
    padding: 14px 11px;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        color: var(--gray);
        width: 200px;
        text-align: center;
    }
`;