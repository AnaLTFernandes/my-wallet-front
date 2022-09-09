import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { postRecord } from "../../service/service";

import Render from "./Render";


export default function AddExpense ({ setMessage }) {
    const [form, setForm] = useState({
        type:'saída'
    });

    const navigate = useNavigate();

    function updateForm ({ name, value }) {
        setForm({ ...form, [name]: value });
    };

    function handleForm (event) {
        event.preventDefault();

        if (isNaN(form.price)) {

            setMessage({
                type:'alert',
                message: {
                    text:`Preço inválido. Por favor, verifique se está no formato: x.y`,
                    type:'error'
                }
            });
        } else {

            const promise = postRecord(form);

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
                navigate('/records');
            });
        }
    };

    const dataPage = {
        title:'Nova saída',
        dataForm: {
            updateForm,
            handleForm,
            inputs: [
                {
                    placeholder:"Valor",
                    name:'price',
                    type:'text'
                },
                {
                    placeholder:"Descrição",
                    name:'details',
                    type:'text'
                }
            ],
            button: 'Salvar saída'
        }
    };

    return (
        <Render {...dataPage}/>
    );
}