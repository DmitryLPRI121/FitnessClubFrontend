import { Helmet } from "react-helmet";
import "./PagesStyle.scss"
import "./MySeasonTicketPage.scss"
import axios from "axios";
import {useEffect, useState} from "react";

interface ISeasonTicket {
    Client: number;
    Title: string;
    Count: number;
    Duration: number;
    ValidityPeriod: Date;
    Price: number;
}

const MySeasonTicketPage = () => {

    const [seasonTicket, setSeasonTicket] = useState<ISeasonTicket | null>(null);

    async function GetSeasonTicket() {

        const seasonTicket = localStorage.getItem('SeasonTicket');
        let data;
        if (seasonTicket !== null)
            data = JSON.parse(seasonTicket);
        return data || [];
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const res = await itemService.getItems(); // const res = await axios.get(`localhost:5000/GetSeasonTicket`);
                const seasonTicket = localStorage.getItem('SeasonTicket');
                let data;
                if (seasonTicket !== null)
                    data = JSON.parse(seasonTicket);
                setSeasonTicket(data || []);
            } catch (error) {
                if (error) throw error
            }
        };

        fetchData();
    }, [])

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Мой абонемент | REФорма</title>
            </Helmet>
            <main className="MySeasonTicketPage">
                <h1>Мой абонемент</h1>
                <div className="MyST">
                    <h4 style={{marginTop: '0.2em'}}>{seasonTicket?.Title}</h4>
                    {seasonTicket?.Count && seasonTicket?.Count > 0? (
                        <h5 style={{fontSize: '1.2em', marginLeft: '0.8em'}}>Кол-во персональных тренировок: <span>{seasonTicket?.Count}</span></h5>
                    ) : (null)}
                    <h5 style={{fontSize: '1.2em', marginLeft: '0.8em'}}>Длительность абонемента: <span>{seasonTicket?.Duration}</span>д.</h5>
                    <h5 style={{fontSize: '1.2em', marginLeft: '0.8em'}}>Стоимость <span>{seasonTicket?.Price}</span>р.</h5>
                    <h5 style={{fontSize: '1.2em', marginLeft: '0.8em'}}>Срок истечения <span>
                        {seasonTicket?.ValidityPeriod ?
                            new Date(seasonTicket.ValidityPeriod).toLocaleDateString()                        : ''}
                    </span></h5>
                </div>
            </main>
        </>
    )
}

export { MySeasonTicketPage };