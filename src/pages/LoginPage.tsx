import { Helmet } from "react-helmet";
import "./PagesStyle.scss"
import "./LoginSignupStyles.scss"
import {Link, useNavigate} from "react-router-dom";


const LoginPage = () => {
    const navigate = useNavigate();
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
                        <input type="text"/>
                        <h3>Пароль</h3>
                        <input type="password"/>

                        <input onClick={() => {
                            localStorage.setItem('Authorized', '57');
                            navigate('/Home');
                            window.location.reload();
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