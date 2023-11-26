import { Helmet } from "react-helmet";
import "./PagesStyle.scss"
import "./LoginSignupStyles.scss"
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

interface ISignup {
    LastName: string;
    FirstName: string;
    MiddleName: string;
    Email: string;
    PhoneNumber: string;
    Password1: string;
    Password2: string;
}

const SignupPage = () => {
    const navigate = useNavigate();

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    async function Signup() {
        const data:ISignup = {
            LastName: lastName,
            FirstName: firstName,
            MiddleName: middleName,
            Email: email,
            PhoneNumber: phoneNumber,
            Password1: password1,
            Password2: password2,
        }
        const headers = {
            'Content-Type': 'application/json'
        };
        console.log(data)
        // await axios.post(`localhost:5000/Signup`, data, {headers});
        return;
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Регистрация | REФорма</title>
            </Helmet>
            <main className="SignupPage LoginSignupStyles">
                <form>
                    <legend>Создание учетной записи</legend>
                    <fieldset>
                        <h3>Фамилия</h3>
                        <input type="text" required onChange={(event) => setLastName(event.target.value)}/>
                        <h3>Имя</h3>
                        <input type="text" required onChange={(event) => setFirstName(event.target.value)}/>
                        <h3>Отчество</h3>
                        <input type="text" required onChange={(event) => setMiddleName(event.target.value)}/>
                        <h3>Эл. почта</h3>
                        <input type="email" required onChange={(event) => setEmail(event.target.value)}/>
                        <h3>Номер телефона</h3>
                        <input type="tel" onChange={(event) => setPhoneNumber(event.target.value)}/>
                        <h3>Пароль</h3>
                        <input type="password" required onChange={(event) => setPassword1(event.target.value)}/>
                        <h3>Повторите пароль</h3>
                        <input type="password" required onChange={(event) => setPassword2(event.target.value)}/>
                        <input onClick={async () => {
                            localStorage.setItem('Authorized', '57');
                            navigate('/Home');
                            window.location.reload();
                            // if (password1 == password2) await Signup();
                        }} style={{width: '100%', marginTop: '2em'}} type="submit"/>
                        <p>
                            Есть аккаунт?
                            <Link to="/Login"> Войти в учетную запись</Link>
                            .
                        </p>
                    </fieldset>
                </form>
            </main>
        </>
    )
}

export { SignupPage };