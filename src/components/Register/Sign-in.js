import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "../../common";
import { postSignIn } from "../../service/service";

export default function SignIn () {
    const [form, setForm] = useState({});

    function handleForm (event) {
        event.preventDefault();

        postSignIn(form);
    }

    function updateForm ({ name, value }) {
        setForm({ ...form, [name]: value });
    }

    return (
        <Wrapper>
            <h1>MyWallet</h1>

            <form onSubmit={ handleForm }>
                <Input
                    required
                    placeholder="E-mail"
                    name='email'
                    type='email'
                    onChange={(e) => updateForm({ name:e.target.name, value:e.target.value })}
                ></Input>

                <Input
                    required
                    placeholder="Senha"
                    name='password'
                    type='password'
                    onChange={(e) => updateForm({ name:e.target.name, value:e.target.value })}
                ></Input>

                <Button Large={true} >Entrar</Button>
            </form>

            <Link to='/sign-up' ><span>Primeira vez? Cadastre-se!</span></Link>
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