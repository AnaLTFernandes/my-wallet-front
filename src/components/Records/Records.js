import styled from "styled-components";

import { BsBoxArrowRight } from 'react-icons/bs';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { useContext, useEffect, useState } from "react";

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

    let total = 0;

    records.forEach(({ price, type }) => {
        if (type === 'entrada') {
            total += Number(price);
        } else {
            total -= Number(price);
        }
    });

    function convertTotal (to) {
        if (to === 'string') {
            total = total
                .toFixed(2)
                .toString()
                .replace('.', ',')
                .replace('-', '');
        } else if (typeof number === 'string') {
            total = total.replace('.', ',');
            total = Number(total);
        }
        
        return total;
    }

    return (
        <main>
            <header>Olá, {userData.name} <BsBoxArrowRight /> </header>

            <Page>
                { records.length === 0
                    ?   <span>Não há registros de entrada ou saída</span>
                    :   <Wrapper total={convertTotal('number')}>
                            <div>
                                {records.map((record, index) => (
                                    <Record key={index} {...record} />
                                ))}
                            </div>
                            
                            <span>
                                <b>Total</b>
                                <span>R$ {convertTotal('string')}</span>
                            </span>
                        </Wrapper>
                }
            </Page>

            <footer>
                <Button>
                    <div>
                        <AiOutlinePlusCircle />
                        <span>Nova entrada</span>
                    </div>
                </Button>

                <Button>
                    <div>
                        <AiOutlineMinusCircle />
                        <span>Nova saída</span>
                    </div>
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