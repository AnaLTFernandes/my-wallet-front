import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignIn } from "../../service/service";

import Render from "./Render";


export default function SignIn () {
    const [form, setForm] = useState({});

    const navigate = useNavigate();

    function handleForm (event) {
        event.preventDefault();

        postSignIn(form);
        navigate('/records');
    };

    function updateForm ({ name, value }) {
        setForm({ ...form, [name]: value });
    };

    const dataPage = {
        dataForm: {
            updateForm,
            handleForm,
            inputs: [
                {
                    placeholder:"E-mail",
                    name:'email',
                    type:'email'
                },
                {
                    placeholder:"Senha",
                    name:'password',
                    type:'password'
                }
            ],
            button: 'Entrar'
        },
        span:'Primeira vez? Cadastre-se!',
        linkRouter:'/sign-up'
    };

    return (
        <Render {...dataPage}/>
    );
}