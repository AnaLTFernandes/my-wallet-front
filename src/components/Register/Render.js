import styled from "styled-components";

import { Link } from "react-router-dom";
import { Input, Button } from "../../common";

export default function Render ({ dataForm, span, linkRouter }) {

    return (
        <Wrapper>
            <h1>MyWallet</h1>

            <form onSubmit={ dataForm.handleForm }>

                {dataForm.inputs.map(({ placeholder, name, type }, index) => (
                    <Input
                        key={index}
                        required
                        placeholder={placeholder}
                        name={name}
                        type={type}
                        onChange={(e) => 
                            dataForm.updateForm({ name:e.target.name, value:e.target.value })
                        }
                    ></Input>
                ))}

                <Button Large={true} >{dataForm.button}</Button>
            </form>

            <Link to={linkRouter}>
                <span>{span}</span>
            </Link>

        </Wrapper>
    );
}

const Wrapper = styled.main`
    width: 85%;
    max-width: 600px;

    h1 {
        height: 60px;
        font-size: 32px;
        font-family: 'Saira Stencil One', cursive;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a {
        margin-top: 36px;
    }

    span {
        font-weight: 700;
        font-size: 15px;
        color: var(--white);
        margin-top: 36px;
    }
`;