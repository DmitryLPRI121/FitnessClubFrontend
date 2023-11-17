import { Helmet } from "react-helmet";
// import "./SeasonTicketsPage.scss"

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About | REФорма</title>
            </Helmet>
            <main className="HomePage">
                <p>About page</p>
            </main>
        </>
    )
}

export { AboutPage };