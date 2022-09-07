import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../../service/service";

import Render from "./Render";


export default function SignUp () {
    const [form, setForm] = useState({});

    const navigate = useNavigate();

    function handleForm (event) {
        event.preventDefault();

        if (form.password !== form.passwordConfirm) {
            window.alert('Senhas diferentes.');
        } else {
            postSignUp(form);
            navigate('/sign-in');
        }
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
                    placeholder:"Nome",
                    name:'name',
                    type:'text'
                },
                {
                    placeholder:"E-mail",
                    name:'email',
                    type:'email'
                },
                {
                    placeholder:"Senha",
                    name:'password',
                    type:'password'
                },
                {
                    placeholder:"Confirme a senha",
                    name:'passwordConfirm',
                    type:'password'
                }
            ],
            button: 'Cadastrar'
        },
        span:'Já tem uma conta? Entre agora!',
        linkRouter:'/sign-in'
    };

    return (
        <Render {...dataPage}/>
    );
}