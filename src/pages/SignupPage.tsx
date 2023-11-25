import { Helmet } from "react-helmet";
import "./PagesStyle.scss"
import "./LoginSignupStyles.scss"
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";


const SignupPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email: string) => {
        // Регулярное выражение для валидации электронной почты
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password: string) => {
        // Регулярное выражение для валидации пароля
        // Пароль должен содержать как минимум 8 символов, включая 1 заглавную букву, 1 строчную букву и 1 цифру
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        if (!validateEmail(event.target.value)) {
            console.log('Неверный формат электронной почты');
        }
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        if (!validatePassword(event.target.value)) {
            console.log('Пароль должен содержать как минимум 8 символов, включая 1 заглавную букву, 1 строчную букву и 1 цифру');
        }
    };


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
                        <input type="text" required/>
                        <h3>Имя</h3>
                        <input type="text" required/>
                        <h3>Отчество</h3>
                        <input type="text" required/>
                        <h3>Эл. почта</h3>
                        <input type="email" required value={email} onChange={handleEmailChange}/>
                        <h3>Номер телефона</h3>
                        <input type="tel"/>
                        <h3>Пароль</h3>
                        <input type="password" required value={password} onChange={handlePasswordChange}/>
                        <h3>Повторите пароль</h3>
                        <input type="password" required/>
                        <input onClick={() => {
                            localStorage.setItem('Authorized', '1');
                            navigate('/Home');
                            window.location.reload();
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