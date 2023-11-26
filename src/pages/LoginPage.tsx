import { Helmet } from "react-helmet";
import "./PagesStyle.scss"
import "./LoginSignupStyles.scss"
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

interface ILogin {
    Email: string;
    Password: string;
}

const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function Login() {
        const data:ILogin = {
            Email: email,
            Password: password,
        }
        const headers = {
            'Content-Type': 'application/json'
        };
        console.log(data)
        // await axios.post(`localhost:5000/Login`, data, {headers});
        return;
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Вход в аккаунт | REФорма</title>
            </Helmet>
            <main className="LoginPage LoginSignupStyles">
                <form>
                    <legend>Авторизация</legend>
                    <fieldset>
                        <h3>Эл. почта</h3>
                        <input type="text" onChange={(event) => setEmail(event.target.value)} autoComplete="on" required/>
                        <h3>Пароль</h3>
                        <input type="password" onChange={(event) => setPassword(event.target.value)} autoComplete="on" required/>

                        <input onClick={() => {
                            localStorage.setItem('Authorized', '57');
                            navigate('/Home');
                            window.location.reload();
                            // Login()
                        }} style={{width: '100%', marginTop: '2em'}} type="submit"/>
                        <p>
                            Нет аккаунта?
                            <Link to="/Signup"> Создать учетную запись</Link>
                            .
                        </p>
                    </fieldset>
                </form>
            </main>
        </>
    )
}

export { LoginPage };