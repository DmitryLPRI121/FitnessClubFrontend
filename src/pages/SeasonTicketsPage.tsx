import { Helmet } from "react-helmet";
import {useEffect, useState} from "react";
import "./PagesStyle.scss"
import "./SeasonTicketsPage.scss"
import {Link} from "react-router-dom";

interface IPCount {
    Id: number;
    Count: number;
}

const PCount:IPCount[] = [
    {Id: 1, Count: 1},
    {Id: 2, Count: 2},
    {Id: 3, Count: 3},
    {Id: 4, Count: 5},
    {Id: 5, Count: 7},
    {Id: 6, Count: 10},
]

interface IDuration {
    Id: number;
    Title: string;
    Time: number;
    Price: number; // Добавляем новое свойство Price
}

const Duration:IDuration[] = [
    {Id: 1, Title: 'Месяц', Time: 30, Price: 1000},
    {Id: 2, Title: 'Три месяца', Time: 90, Price: 2000},
    {Id: 3, Title: 'Полгода', Time: 180, Price: 5000},
    {Id: 4, Title: 'Год', Time: 360, Price: 8000},
]

interface SeasonTicket {
    Client: number;
    Title: string;
    Count: number;
    Duration: number;
    ValidityPeriod: Date;
    Price: number;
}

const SeasonTicketsPage = () => {
    const [STPCount, setSTPCount] = useState(PCount[0].Id);
    const [STPersonalBtn, setSTPersonalBtn] = useState(true);
    const [PTotal, setPTotal] = useState(500);

    const [STUnCount, setSTUnCount] = useState(PCount[0].Id);
    const [STUnDuration, setSTUnDuration] = useState(Duration[0].Id);
    const [STUnBtn, setSTUnBtn] = useState(true);
    const [UnTotal, setUnTotal] = useState(0);

    const [STGDuration, setSTGDuration] = useState(Duration[0].Id);
    const [STGroupBtn, setSTGroupBtn] = useState(true);
    const [GTotal, setGTotal] = useState(Duration[0].Price);

    const handleSTPCount = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSTPersonalBtn(false)
        const selectedId = Number(event.target.value); // Преобразуем значение в число
        setSTPCount(selectedId);
        const selectedCount = PCount.find(item => item.Id === selectedId)?.Count || 0;
        setPTotal(selectedCount * 500);
    }
    const handleSTUnC = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSTUnBtn(false)
        const selectedId = Number(event.target.value);
        setSTUnCount(selectedId);
    }
    const handleSTUnD = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSTUnBtn(false)
        const selectedId = Number(event.target.value);
        setSTUnDuration(selectedId);
    }
    const handleSTGDuration = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSTGroupBtn(false)
        const selectedId = Number(event.target.value);
        setSTGDuration(selectedId);
        const selectedPrice = Duration.find(item => item.Id === selectedId)?.Price || 0; // Получаем Price выбранного варианта
        setGTotal(selectedPrice); // Устанавливаем total равным выбранной цене
    }

    useEffect(() => {
        const selectedCount = PCount.find(item => item.Id === STUnCount)?.Count || 0;
        const selectedPrice = Duration.find(item => item.Id === STUnDuration)?.Price || 0;
        setUnTotal(selectedCount * 500 + selectedPrice);
    }, [STUnCount, STUnDuration]);
    useEffect(() => {
        setSTPersonalBtn(true)
    }, [STPCount])
    useEffect(() => {
        setSTUnBtn(true)
    }, [STUnCount, STUnDuration])
    useEffect(() => {
        setSTGroupBtn(true)
    }, [STGDuration]);

    async function ArrangeSeasonTicket(title:string, count:number, duration:number, validityPeriod:number, price:number) {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + validityPeriod);
        const data:SeasonTicket = {
            Client: Number(localStorage.getItem('Authorized')),
            Title: title,
            Count: count,
            Duration: duration,
            ValidityPeriod: currentDate,
            Price: price,
        };
        localStorage.setItem('SeasonTicket', JSON.stringify(data));
/*        const headers = {
            'Content-Type': 'application/json'
        };*/
/*
        console.log(data)
*/
        // await axios.post(`localhost:5000/SeasonTickets`, data, {headers});
        return;
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Абонементы | REФорма</title>
            </Helmet>
            <main className="SeasonTicketsPage">
                <h1>Абонементы</h1>
                <h2>
                    Выберите ваш путь к здоровью и красоте с нашими абонементами
                </h2>
                {/*<h2>Готовые абонементы</h2>*/}
                <p style={{margin: '1.5em 0'}}>
                    Мы предлагаем разнообразные абонементы, чтобы удовлетворить потребности каждого нашего клиента. Независимо от вашей цели - строить мышцы, терять вес, улучшать физическую форму или просто поддерживать активный образ жизни - у нас есть идеальный вариант для вас.
                </p>
                <h2 style={{fontSize: '1.35em'}}>Выбери подходящий вариант</h2>
                <div className="suggestedSeasonTickets">
                    <div style={{backgroundImage: 'linear-gradient(to right bottom, rgba(245, 255, 0, 0.3), rgba(255, 255, 255, 1))'}}>
                        <h4 style={{marginTop: '0.6em'}}>Персональный</h4>
                        <h5 style={{fontSize: '1.5em', marginTop: '2em', marginLeft: '1em'}}>Включает в себя</h5>
                        <ul  style={{fontSize: '1.4em', margin: '0.5em 0 0 0', listStyleType: 'square'}}>
                            <li>Тренажерный зал</li>
                            <li>Персональные занятия</li>
                        </ul>
                        <h5 style={{fontSize: '1.2em', marginLeft: '0.8em'}}>Кол-во персональных тренировок</h5>
                        <select value={STPCount} onChange={handleSTPCount}>
                            {PCount.map((PC) => (
                                <option value={PC.Id}>{PC.Count}</option>
                            ))}
                        </select>
                        <h5 style={{fontSize: '1.4em', marginTop: '3em', marginLeft: '0.8em'}}>Стоимость <span>{PTotal}</span>р.</h5>
                        <Link to="/SeasonTicket/Payment">
                            <button disabled={!STPersonalBtn} type="submit" className={`ArrangeBtn ${STPersonalBtn? 'ArrangeBtnA' : 'ArrangeBtnD'}`}
                            onClick={() => {
                                const STCount = PCount.find(PC => PC.Id === STPCount);
                                if (STCount?.Count !== undefined) ArrangeSeasonTicket('Персональный', STCount.Count, STCount.Count * 30, STCount.Count * 30, PTotal);
                            }}
                            >
                                Оформить
                            </button>
                        </Link>

                    </div>
                    <div style={{backgroundImage: 'linear-gradient(to right bottom, rgba(0, 50, 255, 0.3), rgba(255, 255, 255, 1))'}}>
                        <h4 style={{marginTop: '0.2em'}}>Универсальный</h4>
                        <h5 style={{fontSize: '1.5em', marginLeft: '1em', marginTop: '0'}}>Включает в себя</h5>
                        <ul  style={{fontSize: '1.4em', margin: '0.5em 0 0 0', listStyleType: 'square'}}>
                            <li>Тренажерный зал</li>
                            <li>Преимущества абонементов "Персональный" и "Групповой"</li>
                        </ul>
                        <h5 style={{fontSize: '1.2em', marginLeft: '0.8em'}}>Кол-во персональных тренировок</h5>
                        <select value={STUnCount} onChange={handleSTUnC}>
                            {PCount.map((PC) => (
                                <option value={PC.Id}>{PC.Count}</option>
                            ))}
                        </select>
                        <h5 style={{fontSize: '1.2em', marginLeft: '0.8em'}}>Длительность абонемента</h5>
                        <select value={STUnDuration} onChange={handleSTUnD}>
                            {Duration.map((D) => (
                                <option value={D.Id}>{D.Title}</option>
                            ))}
                        </select>
                        <h5 style={{fontSize: '1.2em', marginLeft: '0.8em'}}>Стоимость <span>{UnTotal}</span>р.</h5>
                        <Link to="/SeasonTicket/Payment">
                            <button disabled={!STUnBtn} type="submit" className={`ArrangeBtn ${STUnBtn? 'ArrangeBtnA' : 'ArrangeBtnD'}`}
                                    onClick={() => {
                                        const STCount = PCount.find(PC => PC.Id === STUnCount);
                                        const STDuration = Duration.find(GD => GD.Id === STUnDuration);
                                        if (STCount?.Count !== undefined && STDuration?.Time !== undefined) ArrangeSeasonTicket('Универсальный', STCount.Count, STDuration.Time, STDuration.Time, UnTotal);
                                    }}
                            >
                                Оформить
                            </button>
                        </Link>

                    </div>
                    <div style={{backgroundImage: 'linear-gradient(to right bottom, rgba(5, 255, 0, 0.3), rgba(255, 255, 255, 1))'}}>
                        <h4 style={{marginTop: '0.6em'}}>Групповой</h4>
                        <h5 style={{fontSize: '1.5em', marginTop: '3em', marginLeft: '1em'}}>Включает в себя</h5>
                        <ul  style={{fontSize: '1.4em', margin: '0.5em 0 0 0', listStyleType: 'square'}}>
                            <li>Групповые занятия</li>
                        </ul>
                        <h5 style={{fontSize: '1.2em', marginLeft: '0.8em'}}>Длительность абонемента</h5>
                        <select value={STGDuration} onChange={handleSTGDuration}>
                            {Duration.map((D) => (
                                <option value={D.Id}>{D.Title}</option>
                            ))}
                        </select>
                        <h5 style={{fontSize: '1.4em', marginTop: '4.5em', marginLeft: '0.8em'}}>Стоимость <span>{GTotal}</span>р.</h5>
                        <Link to="/SeasonTicket/Payment">
                            <button disabled={!STGroupBtn} type="submit" className={`ArrangeBtn ${STGroupBtn? 'ArrangeBtnA' : 'ArrangeBtnD'}`}
                            onClick={() => {
                                const STDuration = Duration.find(GD => GD.Id === STGDuration);
                                if (STDuration?.Time !== undefined) ArrangeSeasonTicket('Групповой', 0, STDuration.Time, STDuration.Time, GTotal);
                            }}
                            >
                                Оформить
                            </button>
                        </Link>
                    </div>
                </div>
{/*                <h2 style={{marginTop: '3em'}}>Настраиваемый абонемент</h2>
                <p>
                    Мы также верим, что в нашем фитнес-клубе ваш фитнес-путь должен быть уникальным и соответствовать вашим потребностям и целям. Поэтому мы предоставляем вам возможность настроить свой собственный абонемент, который полностью соответствует вашим ожиданиям.
                </p>
                <h2 style={{fontSize: '1.35em'}}>Выбери свой фитнес-путь</h2>
                <div className="customSeasonTicket" style={{backgroundImage: 'linear-gradient(to right bottom, rgba(255, 0, 215, 0.1), rgba(255, 255, 255, 1))'}}>
                    {!is_CSTicket_WOut_Select ? (<>
                        <h4>Персональный</h4> Фиолетовый
                        <h5>Выберите тип</h5>
                        <select value={typeCSTicket} onChange={handleSelectChange} className="selectTypeCSTicket">
                            {TypeSeasonTicket.map((TST) => (
                                <option value={'typeOption'+ TST.Id} onClick={() => setCSTicketTypePrice(parseInt(TST.Description))}>{TST.Title}</option>
                                ))}
                            <option value="option1" onClick={() => setCSTicketTypePrice(1250)}>Тренажерный зал</option> Синий
                            <option value="option2" onClick={() => setCSTicketTypePrice(1750)}>Групповой</option> Зеленый
                            <option value="option3" onClick={() => setCSTicketTypePrice(4500)}>С тренером</option> Синий
                        </select>

                        <h5>Выберите Занятия:</h5>
                        <select>
                            <option selected hidden value="view" disabled>Просмотреть</option>
                            {selectedOptions.map((selectedOption) => (
                                <option key={selectedOption.id} value={"view" + selectedOption.id} disabled>{selectedOption.label}</option>
                            ))}
                        </select>
                        <button onClick={() => setIs_CSTicket_WOut_Select(true)} className="CustomSTWOSBtn">Выбрать</button>

                        <h6>Добавочная цена: <span>{additionalPrice.toLocaleString('ru-RU')}</span> р.</h6>
                        <h6>Итоговая цена: <span>{CSTicketPrice.toLocaleString('ru-RU')}</span> р.</h6>

                        <button type="submit" disabled={selectedOptions.length === 0} className={`CustomSTArrangeBtn ${selectedOptions.length !== 0? 'CSTABA' : 'CSTABI' }`}>
                            Оформить
                        </button>
                    </>) : (<>
                        <h5>Выберите Занятия:</h5>
                        <div className="selectWorkoutCSTicket">
                            {options.map((option) => (
                                <div key={option.id}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={selectedOptions.includes(option)}
                                            onChange={() => handleCheckboxChange(option)}
                                        />
                                        {option.label} <span> +{option.price} р.</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => setIs_CSTicket_WOut_Select(false)} className="CustomSTWOSBtn">Применить</button>
                    </>)}

                </div>
                <p>
                    У нас нет жестких рамок, потому что ваша индивидуальность заслуживает специального подхода.
                </p>*/}
            </main>
        </>
    )
}

export { SeasonTicketsPage };