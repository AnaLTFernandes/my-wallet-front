import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function PrivateRoute ({ children }) {
    
    const token = JSON.parse(localStorage.getItem('mywallet'));

    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/');
            return;
        }
    }, []);

    if (token) {
        return (
            <>{ children }</>
        );
    }
}