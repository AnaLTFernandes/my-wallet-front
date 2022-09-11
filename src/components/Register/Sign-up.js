import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../../service/service";

import Render from "./Render";


export default function SignUp ({ setMessage }) {
    const [form, setForm] = useState({});

    const navigate = useNavigate();

    function handleForm (event) {
        event.preventDefault();

        if ((form.password !== form.passwordConfirm) || (form.password.length < 4)) {

            setMessage({
                type:'alert',
                message: {
                    text:'As senhas devem ser iguais e possuir mais de 4 dígitos.',
                    type:'error'
                }
            });

        } else {
            const promise = postSignUp(form);

            promise.catch(res => {
                setMessage({
                    type:'alert',
                    message: {
                        text:res.response.data.message,
                        type:'error'
                    }
                });
            });

            promise.then(res => {
                setMessage({
                    type:'alert',
                    message: {
                        text:res.data.message,
                        type:'success'
                    }
                });
                
                navigate('/');
            });
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
        linkRouter:'/'
    };

    return (
        <Render {...dataPage}/>
    );
}