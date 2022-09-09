import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";


export default function PrivateRoute ({ children }) {
    const { userData } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (!userData.token) {
            navigate('/');
            return;
        }
    }, []);

    return (
        <>{ children }</>
    );
}