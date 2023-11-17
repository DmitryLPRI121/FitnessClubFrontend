import { Helmet } from "react-helmet";
import {useEffect, useState} from "react";
import "./PagesStyle.scss"
import "./SeasonTicketsPage.scss"

interface ISeasonTicket {
    id: number;
    IdClient: number;
    IdWorker: number;
    IdTypeSeasonTicket: number;
    StartTime: any;
    FinishTime: any;
}

interface ITypeSeasonTicket {
    Id: number;
    Title: string;
    Description: string;
}
const TypeSeasonTicket:ITypeSeasonTicket[] = [
    {Id: 1, Title: 'Тренажерный зал', Description: '1250'},
    {Id: 2, Title: 'Групповой', Description: '1750'},
    {Id: 3, Title: 'С тренером', Description: '4500'},
]

interface Option {
    id: number;
    label: string;
    price: number;
}

const options = [
    { id: 1, label: 'Йога', price: 200 },
    { id: 2, label: 'Другая йога', price: 210 },
    { id: 3, label: 'Улучшенная йога', price: 500 },
    { id: 4, label: 'Йога от Бога', price: 800 },
    { id: 5, label: 'Специальная йога', price: 250 },
    { id: 6, label: 'Гибкая йога', price: 340 },
    { id: 7, label: 'Уникальная йога', price: 560 },
    { id: 8, label: 'Священная йога', price: 900 },
    { id: 9, label: 'Внеземная йога', price: 1250 },
    { id: 10, label: 'Утомительная йога', price: 50 },
    { id: 11, label: 'Быстрая йога', price: 180 },
    { id: 12, label: 'Нечеловеческая йога', price: 1000 },
];

const SeasonTicketsPage = () => {

    const [is_CSTicket_WOut_Select, setIs_CSTicket_WOut_Select] = useState(false);

    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

    const [CSTicketPrice, setCSTicketPrice] = useState<number>(0);

    const [CSTicketTypePrice, setCSTicketTypePrice] = useState<number>(1250);

    const [typeCSTicket, setTypeCSTicket] = useState('Тренажерный зал');

    useEffect(() => {
        const totalPrice = selectedOptions.reduce((sum, option) => sum + option.price, 1000 + CSTicketTypePrice);
        setCSTicketPrice(totalPrice);
    }, [selectedOptions, CSTicketTypePrice]);


    const handleSelectChange = (event:any) => {
        setTypeCSTicket(event.target.value);

        switch (event.target.value) {
            case 'option1':
                setCSTicketTypePrice(1250);
                break;
            case 'option2':
                setCSTicketTypePrice(1750);
                break;
            case 'option3':
                setCSTicketTypePrice(4500);
                break;
            default:
                setCSTicketTypePrice(1250);
        }
    }

    const handleCheckboxChange = (option: Option) => {
        if (selectedOptions.includes(option)) {
            // Если элемент уже выбран, удаляем его из массива
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            // В противном случае, добавляем его в массив
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const additionalPrice: number = 1000;

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Season Tickets | REФорма</title>
            </Helmet>
            <main className="SeasonTicketsPage">
                <h1>Абонементы</h1>
                <h3>
                    Выберите ваш путь к здоровью и красоте с нашими абонементами
                </h3>
                <h2>Готовые абонементы</h2>
                <p>
                    Мы предлагаем разнообразные абонементы, чтобы удовлетворить потребности каждого нашего клиента. Независимо от вашей цели - строить мышцы, терять вес, улучшать физическую форму или просто поддерживать активный образ жизни - у нас есть идеальный вариант для вас.
                </p>
                <h2 style={{fontSize: '1.35em'}}>Выбери подходящий вариант</h2>
                <div className="suggestedSeasonTickets">
                    <div style={{backgroundImage: 'linear-gradient(to right bottom, rgba(245, 255, 0, 0.3), rgba(255, 255, 255, 1))'}}>
                        <h4 style={{marginTop: '0.6em'}}>Сфокусированный</h4>
                        <h5 style={{fontSize: '1.5em', marginLeft: '1em'}}>Включает в себя</h5>
                        <ul  style={{fontSize: '1.4em', margin: '0.5em 0 0 0', listStyleType: 'square'}}>
                            <li>Тренажерный зал</li>
                            <li>Персональные занятия</li>
                        </ul>
                        <button type="submit" className="CustomSTArrangeBtn">
                            Оформить
                        </button>
                    </div>
                    <div style={{backgroundImage: 'linear-gradient(to right bottom, rgba(0, 50, 255, 0.3), rgba(255, 255, 255, 1))'}}>
                        <h4 style={{marginTop: '0.6em'}}>Универсальный</h4>
                        <ul  style={{fontSize: '1.4em', margin: '0.5em 0 0 0', listStyleType: 'square'}}>
                            <li>Тренажерный зал</li>
                            <li>Персональные занятия</li>
                        </ul>
                        <button type="submit" className="CustomSTArrangeBtn">
                            Оформить
                        </button>
                    </div>
                    <div style={{backgroundImage: 'linear-gradient(to right bottom, rgba(5, 255, 0, 0.3), rgba(255, 255, 255, 1))'}}>
                        <h4 style={{marginTop: '0.6em'}}>Групповой</h4>
                        <ul  style={{fontSize: '1.4em', margin: '0.5em 0 0 0', listStyleType: 'square'}}>
                            <li>Тренажерный зал</li>
                            <li>Персональные занятия</li>
                        </ul>
                        <button type="submit" className="CustomSTArrangeBtn">
                            Оформить
                        </button>
                    </div>
                </div>
                <h2 style={{marginTop: '3em'}}>Настраиваемый абонемент</h2>
                <p>
                    Мы также верим, что в нашем фитнес-клубе ваш фитнес-путь должен быть уникальным и соответствовать вашим потребностям и целям. Поэтому мы предоставляем вам возможность настроить свой собственный абонемент, который полностью соответствует вашим ожиданиям.
                </p>
                <h2 style={{fontSize: '1.35em'}}>Выбери свой фитнес-путь</h2>
                <div className="customSeasonTicket" style={{backgroundImage: 'linear-gradient(to right bottom, rgba(255, 0, 215, 0.1), rgba(255, 255, 255, 1))'}}>
                    {!is_CSTicket_WOut_Select ? (<>
                        <h4>Персональный</h4> {/*Фиолетовый*/}
                        <h5>Выберите тип</h5>
                        <select value={typeCSTicket} onChange={handleSelectChange} className="selectTypeCSTicket">
                            {TypeSeasonTicket.map((TST) => (
                                <option value={'typeOption'+ TST.Id} onClick={() => setCSTicketTypePrice(parseInt(TST.Description))}>{TST.Title}</option>
                                ))}
                            {/*<option value="option1" onClick={() => setCSTicketTypePrice(1250)}>Тренажерный зал</option> Синий*/}
                            {/*<option value="option2" onClick={() => setCSTicketTypePrice(1750)}>Групповой</option> Зеленый*/}
                            {/*<option value="option3" onClick={() => setCSTicketTypePrice(4500)}>С тренером</option> Синий*/}
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
                </p>
            </main>
        </>
    )
}

export { SeasonTicketsPage };