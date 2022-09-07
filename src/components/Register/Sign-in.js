import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { postSignIn } from "../../service/service";
import UserContext from "../../contexts/UserContext";

import Render from "./Render";


export default function SignIn () {
    const [form, setForm] = useState({});
    const { setUserData } = useContext(UserContext);

    const navigate = useNavigate();

    function handleForm (event) {
        event.preventDefault();

        const user = postSignIn(form);

        setUserData(user);

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