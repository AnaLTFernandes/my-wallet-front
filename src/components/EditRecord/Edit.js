import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getRecords, editRecord } from "../../service/service";

import Render from "../CreateRecord/Render";


export default function Edit ({ setMessage }) {
    const [form, setForm] = useState({});

    const navigate = useNavigate();
    const { idRecord } = useParams();
    let record = {}

    useEffect(() => {

        const promise = getRecords();

        promise.then(({ data }) => {
            const records = data;

            record.data = records.find(({ id }) => id === Number(idRecord));

            const { details, price, type } = record.data;

            setForm({ details, price, type });
        });
        
    }, []);

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

            const promise = editRecord(form, idRecord);

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
        title:`Editar ${form.type}`,
        dataForm: {
            updateForm,
            handleForm,
            inputs: [
                {
                    placeholder:"Valor",
                    name:'price',
                    type:'text',
                    initial:form.price
                },
                {
                    placeholder:"Descrição",
                    name:'details',
                    type:'text',
                    initial:form.details
                }
            ],
            button: `Atualizar ${form.type}`
        }
    };

    return (
        form.type
            ? <Render {...dataPage}/>
                : ''
    );
}