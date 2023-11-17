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
            </main>
        </>
    )
}

export { AccountPage };