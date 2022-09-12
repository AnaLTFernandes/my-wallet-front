import { postLogout } from "../../service/service";

function Logout ({ setMessage }) {
    const pageData = JSON.parse(localStorage.getItem('mywallet'));

    if (pageData?.token) {
        const promise = postLogout();

        promise.catch(() => {
            setMessage({
                type:'alert',
                message: {
                    text:'Sessão encerrada',
                    type:'warning'
                }
            });
        });

        promise.then(() => {
            setMessage({
                type:'alert',
                message: {
                    text:'Sessão encerrada',
                    type:'warning'
                }
            });
        });

        localStorage.removeItem('mywallet');
    }
}

export default Logout;