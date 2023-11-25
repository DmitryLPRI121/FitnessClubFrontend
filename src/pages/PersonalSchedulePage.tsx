import { Helmet } from "react-helmet";
import "./PagesStyle.scss"
import "./PersonalSchedulePage.scss"
import React from "react";
import {Link} from "react-router-dom";

interface IPersonalSchedule {
    Id: number;
    Title: string;
    Description: string;
    Specialization: string;
    Place: string;
    Seats: number;
    Coach: string;
    StartTime: Date;
    EndTime: Date;
}

const PersonalSchedule:IPersonalSchedule[] = [
    {Id: 1, Title: 'Функциональный тренинг', Description: 'Ощутите силу и гибкость вместе с нашим уникальным функциональным тренингом. Эффективные упражнения для всего тела под руководством опытного тренера.', Specialization: 'Укрепление мышц, гибкость, кардио, выносливость.', Place: 'Зал', Seats: 4, Coach: 'Иванов Александр', StartTime: new Date("2023-11-16T10:00:00"), EndTime: new Date("2023-11-16T10:45:00")},
    {Id: 2, Title: 'Кроссфит', Description: 'Поднимите свой фитнес на новый уровень с кроссфитом. Интенсивные тренировки для развития силы, выносливости и скорости.', Specialization: 'Силовые тренировки, выносливость, гибкость.', Place: 'Тренажерный зал', Seats: 3, Coach: 'Дмитрий Смирнов', StartTime: new Date("2023-11-16T18:00:00"), EndTime: new Date("2023-11-16T18:45:00")},
    {Id: 3, Title: 'Пилатес', Description: 'Улучшите свою осанку и силу корпуса с пилатесом. Тренировки для укрепления мышц, улучшения гибкости и координации движений.', Specialization: 'Укрепление ядра, гибкость, осанка.', Place: 'Зал пилатеса', Seats: 4, Coach: 'Анна Козлова', StartTime: new Date("2023-11-16T20:00:00"), EndTime: new Date("2023-11-16T20:45:00")},
    {Id: 4, Title: 'Бокс', Description: 'Почувствуйте адреналин и улучшите свою физическую форму с боксом. Тренировки для развития силы, скорости и выносливости.', Specialization: 'Силовые тренировки, кардио, координация движений.', Place: 'Зал боевых искусств', Seats: 2, Coach: 'Михаил Николаев', StartTime: new Date("2023-11-17T07:00:00"), EndTime: new Date("2023-11-17T07:45:00")},
    {Id: 5, Title: 'Тай-бо', Description: 'Совместите кардио и укрепление мышц с тай-бо. Динамичные тренировки под музыку для активного и забавного фитнеса.', Specialization: 'Кардио, укрепление мышц, выносливость.', Place: 'Зал единоборств', Seats: 3, Coach: 'Ольга Соколова', StartTime: new Date("2023-11-17T11:00:00"), EndTime: new Date("2023-11-17T11:45:00")},
    {Id: 6, Title: 'Стретчинг', Description: 'Работайте над гибкостью и расслаблением мышц с нашими занятиями по стретчингу. Идеально после интенсивных тренировок.', Specialization: 'Гибкость, расслабление мышц, укрепление спины.', Place: 'Зал растяжки', Seats: 2, Coach: 'Сергей Иванов', StartTime: new Date("2023-11-18T09:00:00"), EndTime: new Date("2023-11-18T09:45:00")},
    {Id: 7, Title: 'Кардио-бокс', Description: 'Совместите бокс и кардио для эффективного сжигания калорий и улучшения физической формы. Тренировки под музыку.', Specialization: 'Кардио, силовые тренировки, координация движений.', Place: 'Зал боевых искусств', Seats: 2, Coach: 'Татьяна Морозова', StartTime: new Date("2023-11-19T07:00:00"), EndTime: new Date("2023-11-19T07:45:00")},
    {Id: 8, Title: 'Силовая тренировка', Description: 'Развивайте силу своего тела с интенсивными силовыми тренировками. Упражнения для формирования мышечной массы и укрепления корпуса.', Specialization: 'Силовые тренировки, укрепление мышц, формирование мышечной массы.', Place: 'Тренажерный зал', Seats: 4, Coach: 'Артем Борисов', StartTime: new Date("2023-11-20T07:00:00"), EndTime: new Date("2023-11-20T07:45:00")},
    {Id: 9, Title: 'Кардио-пилатес', Description: 'Сочетание кардио и пилатеса для комплексного укрепления тела. Идеально для тех, кто ищет эффективные тренировки.', Specialization: 'Кардио, укрепление мышц, гибкость.', Place: 'Зал пилатеса', Seats: 3, Coach: 'Наталья Степанова', StartTime: new Date("2023-11-20T11:00:00"), EndTime: new Date("2023-11-20T11:45:00")},
]

const PersonalSchedulePage = () => {

    const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    const timeSlots = Array.from({length: 17}, (_, i) => i + 6); // 6:00 - 22:00

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Персональное расписание | REФорма</title>
            </Helmet>
            <main className="PersonalSchedulePage">
                <h1>Расписание</h1>
                <h2>
                    Организуйте свои тренировки с нашим фитнес-календарем
                </h2>
                <p>
                    Мы предлагаем гибкое расписание групповых занятий, чтобы каждый мог найти оптимальное время для поддержания активного образа жизни.
                </p>
                <h2 style={{fontSize: '1.35em'}}>Пройди свой фитнес-путь</h2>

                <div className="PersonalSchedule">
                    <h2></h2>
                    {daysOfWeek.map((day, index) => <h2 key={index}>{day}</h2>)}
                    {timeSlots.map((hour, index) => (
                        <React.Fragment key={index}>
                            <h3>{hour}:00</h3>
                            {daysOfWeek.map((day, index) => {
                                const scheduleItem = PersonalSchedule.find(item => {
                                    const dayOfWeek = item.StartTime.getDay();
                                    const startHour = item.StartTime.getHours();
                                    return dayOfWeek === index && startHour === hour;
                                });

                                return (
                                    <div key={index}>
                                        {scheduleItem ? (
                                            <Link to={`/PWorkout/${scheduleItem.Id}`} style={{textDecoration: 'none', color: '#ec4d34'}}>
                                                <div className="SW">
                                                    <span style={{gridArea: '1 / 1 / 2 / 3', borderBottom: '0.1em solid #ec4d34'}}>{scheduleItem.Title}</span>
                                                    <span style={{gridArea: '2 / 1 / 3 / 2', borderBottom: '0.1em solid #ec4d34', borderRight: '0.1em solid #ec4d34'}}>До {scheduleItem.EndTime.getHours()}:{scheduleItem.EndTime.getMinutes() < 10 ? '0' : ''}{scheduleItem.EndTime.getMinutes()}</span>
                                                    <span style={{gridArea: '2 / 2 / 3 / 3', borderRight: '0.1em solid #ec4d34'}}>Мест</span>
                                                    <span style={{gridArea: '3 / 1 / 4 / 2', borderRight: '0.1em solid #ec4d34'}}>{scheduleItem.Place}</span>
                                                    <span style={{gridArea: '3 / 2 / 4 / 3', borderRight: '0.1em solid #ec4d34'}}>{scheduleItem.Seats}</span>
                                                    <span style={{gridArea: '4 / 1 / 5 / 3', borderTop: '0.1em solid #ec4d34'}}>{scheduleItem.Coach}</span>
                                                </div>
                                            </Link>
                                        ) : ''}
                                    </div>
                                );
                            })}
                        </React.Fragment>
                    ))}
                </div>

                <p>
                    Создайте свой уникальный фитнес-календарь, выбирая оптимальные тренировки и удобные временные интервалы. Наше гибкое расписание создано, чтобы соответствовать вашему образу жизни и помочь вам достигнуть ваших фитнес-целей в наиболее удобный для вас способ!
                </p>
            </main>
        </>
    )
}

export { PersonalSchedulePage };