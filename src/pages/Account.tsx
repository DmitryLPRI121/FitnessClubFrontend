import { Helmet } from "react-helmet";
import "./PagesStyle.scss"
import "./AccountPage.scss"

const AccountPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | REФорма</title>
            </Helmet>
            <main className="AccountPage">
                <h1>Аккаунт</h1>
                <h2>Клиент</h2>
                <h5>ФИО: Лебедев Дмитрий Игоревич</h5>
                <h5>Номер телефона: + 1 123 456 78 90</h5>
                <h2>Абонемент</h2>
            </main>
        </>
    )
}

export { AccountPage };