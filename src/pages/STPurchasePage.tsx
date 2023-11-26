import { Helmet } from "react-helmet";
import "./PagesStyle.scss"
import "./STPurchasePage.scss"
import axios from "axios";

const STPurchasePage = () => {

    async function BuySeasonTicket() {
        const seasonTicket = localStorage.getItem('SeasonTicket');
        let data;
        if (seasonTicket !== null)
            data = JSON.parse(seasonTicket);
        const headers = {
            'Content-Type': 'application/json'
        };
        console.log(data)
        // await axios.post(`localhost:5000/ArrangeSeasonTicket`, data, {headers});
        return;
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Оплата абонемента | REФорма</title>
            </Helmet>
            <main className="STPurchasePage">
                <h1>Оплата абонемента</h1>
                <h2>Описание абонемента</h2>
                <h5 style={{marginTop: '0.6em'}}>Групповой</h5>
                <h5>Включает в себя групповые занятия</h5>
                <h5 style={{fontSize: '1.2em'}}>Длительность абонемента полгода</h5>
                <h5 style={{fontSize: '1.2em'}}>Стоимость 5000 р.</h5>
                <h2>Платежные данные</h2>
                <div className="PaymentCard">
                    <h5>Номер карты</h5>
                    <input type="text" style={{width: '18em'}}/>
                    <h5>Срок действия</h5>
                    <input type="text" style={{width: '6em'}}/>
                    <h5>Владелец</h5>
                    <input type="text" style={{width: '14em'}}/>
                    <h5>CVV код</h5>
                    <input type="text" style={{width: '4em'}}/>
                    <br />
                    <input type="submit" value="Оплатить" style={{height: '2.5em', position: 'absolute', bottom: '1em', right: '0', left: '0', margin: '0 1em', fontSize: '1.2em', borderRadius: '0.5em', border: 'solid #ec4d34 0.2em', fontFamily: '"Gotham Pro", sans-serif', fontWeight: '800', transition: 'all 0.2s ease-in-out', cursor: 'pointer', color: '#ec4d34'}}
                    onClick={() => BuySeasonTicket() }
                    />
                </div>
            </main>
        </>
    )
}

export { STPurchasePage };