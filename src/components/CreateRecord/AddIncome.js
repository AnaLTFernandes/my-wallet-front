import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { postRecord } from "../../service/service";

import Render from "./Render";


export default function AddIncome () {
    const [form, setForm] = useState({
        type:'entrada'
    });

    const navigate = useNavigate();

    function updateForm ({ name, value }) {
        setForm({ ...form, [name]: value });
    };

    function handleForm (event) {
        event.preventDefault();

        if (isNaN(form.price)) {

            window.alert('Preço inválido');
        } else {

            const promise = postRecord(form);

            promise.catch(res => window.alert(res.response.data.message));

            promise.then(() => {
                navigate('/records');
            });
        }
    };

    const dataPage = {
        title:'Nova entrada',
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
            button: 'Salvar entrada'
        }
    };

    return (
        <Render {...dataPage}/>
    );
}