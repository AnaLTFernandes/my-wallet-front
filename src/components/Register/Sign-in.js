import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { postSignIn } from "../../service/service";
import { UserContext } from "../../contexts/";

import Render from "./Render";


export default function SignIn ({ setMessage }) {
    const [form, setForm] = useState({});
    const { setUserData } = useContext(UserContext);

    const navigate = useNavigate();

    function handleForm (event) {
        event.preventDefault();

        const promise = postSignIn(form);

        promise.catch(res => {

            setMessage({
                type:'alert',
                message: {
                    text:res.response.data.message,
                    type:'error'
                }
            });
        });

        promise.then(({ data }) => {

            localStorage.setItem('mywallet', JSON.stringify({ token:data.token }));

            setUserData(data);

            navigate('/records');
        });
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