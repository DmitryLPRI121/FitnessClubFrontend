import { Helmet } from "react-helmet";
import "./PagesStyle.scss"
import "./LoginSignupPage.scss"
import {useNavigate} from "react-router-dom";


const LoginSignupPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Вход в аккаунт | REФорма</title>
            </Helmet>
            <main className="LoginSignupPage">
                <form>
                    <legend>Авторизация</legend>
                    <fieldset>
                        <h3>Эл. почта</h3>
                        <input type="text"/>
                        <h3>Пароль</h3>
                        <input type="password"/>

                        <input onClick={() => {
                            localStorage.setItem('Authorized', '1');
                            navigate('/Home');
                            window.location.reload();
                        }} style={{width: '100%', marginTop: '2em'}} type="submit"/>
                    </fieldset>
                </form>
            </main>
        </>
    )
}

export { LoginSignupPage };