import styled from "styled-components";

import { Link } from "react-router-dom";
import { Input, Button } from "../../common";

export default function Render ({ title, dataForm }) {

    return (
        <Wrapper>
            <header>{title}</header>

            <form onSubmit={ dataForm.handleForm }>

                {dataForm.inputs.map(({ placeholder, name, type }, index) => (
                    <Input
                        key={index}
                        required
                        autocomplete='off'
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


            <Link to='/records'>
                <Button Large={true} >
                        Voltar
                </Button>
            </Link>

        </Wrapper>
    );
}

const Wrapper = styled.main`
    width: 85%;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a {
        width: 100%;
    }

    button {
        margin-bottom: 7px;
    }
`;