import { Helmet } from "react-helmet";
import "./PagesStyle.scss"
import "./StaticSchedulePage.scss"
import React from "react";
import {Link} from "react-router-dom";

interface IStaticSchedule {
    Id: number;
    Title: string;
    Description: string;
    Specialization: string;
    Place: string;
    Coach: string;
    StartTime: Date;
    EndTime: Date;
}

const StaticSchedule:IStaticSchedule[] = [
    {Id: 1, Title: 'Йога', Description: 'Погрузитесь в мир гармонии и укрепления с нашей тренировкой по йоге. Это уникальное занятие предназначено для всех, кто ищет не только физическое укрепление, но и душевное равновесие.', Specialization: 'Укрепление мышц и суставов, спины, ядра, мышц ног и бедер, рук и плеч, сердечно-сосудистой системы, дыхательной системы, нервной системы, эмоционального здоровья.', Place: 'Зал йоги', Coach: 'Марина Зайцева', StartTime: new Date("2023-11-16T09:00:00"), EndTime: new Date("2023-11-16T09:45:00")},
    {Id: 2, Title: 'Функциональный тренинг', Description: 'Ощутите силу и гибкость вместе с нашим уникальным функциональным тренингом. Эффективные упражнения для всего тела под руководством опытного тренера.', Specialization: 'Укрепление мышц, гибкость, кардио, выносливость.', Place: 'Зал', Coach: 'Иванов Александр', StartTime: new Date("2023-11-16T10:00:00"), EndTime: new Date("2023-11-16T10:45:00")},
    {Id: 3, Title: 'Зумба', Description: 'Дайте волю своей энергии с зажигательной зумбой. Танцевальные движения под ритмичную музыку сделают вашу тренировку веселой и эффективной.', Specialization: 'Кардио, сжигание калорий, координация движений.', Place: 'Зал танцев', Coach: 'Елена Петрова', StartTime: new Date("2023-11-16T14:00:00"), EndTime: new Date("2023-11-16T14:45:00")},
    {Id: 4, Title: 'Кроссфит', Description: 'Поднимите свой фитнес на новый уровень с кроссфитом. Интенсивные тренировки для развития силы, выносливости и скорости.', Specialization: 'Силовые тренировки, выносливость, гибкость.', Place: 'Тренажерный зал', Coach: 'Дмитрий Смирнов', StartTime: new Date("2023-11-16T18:00:00"), EndTime: new Date("2023-11-16T18:45:00")},
    {Id: 5, Title: 'Пилатес', Description: 'Улучшите свою осанку и силу корпуса с пилатесом. Тренировки для укрепления мышц, улучшения гибкости и координации движений.', Specialization: 'Укрепление ядра, гибкость, осанка.', Place: 'Зал пилатеса', Coach: 'Анна Козлова', StartTime: new Date("2023-11-16T20:00:00"), EndTime: new Date("2023-11-16T20:45:00")},
    {Id: 6, Title: 'Бокс', Description: 'Почувствуйте адреналин и улучшите свою физическую форму с боксом. Тренировки для развития силы, скорости и выносливости.', Specialization: 'Силовые тренировки, кардио, координация движений.', Place: 'Зал боевых искусств', Coach: 'Михаил Николаев', StartTime: new Date("2023-11-17T07:00:00"), EndTime: new Date("2023-11-17T07:45:00")},
    {Id: 7, Title: 'Тай-бо', Description: 'Совместите кардио и укрепление мышц с тай-бо. Динамичные тренировки под музыку для активного и забавного фитнеса.', Specialization: 'Кардио, укрепление мышц, выносливость.', Place: 'Зал единоборств', Coach: 'Ольга Соколова', StartTime: new Date("2023-11-17T11:00:00"), EndTime: new Date("2023-11-17T11:45:00")},
    {Id: 8, Title: 'Хатха-йога', Description: 'Практикуйте традиционную хатха-йогу для достижения гармонии тела и разума. Упражнения для укрепления и растяжения.', Specialization: 'Укрепление мышц и суставов, спины, ядра, мышц ног и бедер.', Place: 'Зал', Coach: 'Марина Зайцева', StartTime: new Date("2023-11-17T15:00:00"), EndTime: new Date("2023-11-17T15:45:00")},
    {Id: 9, Title: 'Кардио-танцы', Description: 'Развивайте кардио и танцевальные навыки с нашими энергичными кардио-танцами. Веселые тренировки для улучшения физической формы.', Specialization: 'Кардио, танцевальные движения, сжигание калорий.', Place: 'Зал танцев', Coach: 'Александра Белова', StartTime: new Date("2023-11-17T18:00:00"), EndTime: new Date("2023-11-17T18:45:00")},
    {Id: 10, Title: 'Стретчинг', Description: 'Работайте над гибкостью и расслаблением мышц с нашими занятиями по стретчингу. Идеально после интенсивных тренировок.', Specialization: 'Гибкость, расслабление мышц, укрепление спины.', Place: 'Зал растяжки', Coach: 'Сергей Иванов', StartTime: new Date("2023-11-18T09:00:00"), EndTime: new Date("2023-11-18T09:45:00")},
    {Id: 11, Title: 'Кроссовые тренировки', Description: 'Преодолейте себя с кроссовыми тренировками. Сочетание силовых упражнений и кардио для максимального эффекта.', Specialization: 'Силовые тренировки, кардио, выносливость.', Place: 'Тренажерный зал', Coach: 'Екатерина Семенова', StartTime: new Date("2023-11-18T11:00:00"), EndTime: new Date("2023-11-18T11:45:00")},
    {Id: 13, Title: 'Кардио-бокс', Description: 'Совместите бокс и кардио для эффективного сжигания калорий и улучшения физической формы. Тренировки под музыку.', Specialization: 'Кардио, силовые тренировки, координация движений.', Place: 'Зал боевых искусств', Coach: 'Татьяна Морозова', StartTime: new Date("2023-11-19T07:00:00"), EndTime: new Date("2023-11-19T07:45:00")},
    {Id: 14, Title: 'Тренировка с лентами', Description: 'Разнообразьте свою тренировку с лентами. Упражнения для укрепления мышц и улучшения формы с применением эластичных лент.', Specialization: 'Укрепление мышц, форма тела, гибкость.', Place: 'Тренажерный зал', Coach: 'Ирина Жукова', StartTime: new Date("2023-11-19T10:00:00"), EndTime: new Date("2023-11-19T10:45:00")},
    {Id: 15, Title: 'Плавание', Description: 'Улучшите свою физическую форму с плаванием. Тренировки для всего тела в бассейне под руководством опытного инструктора.', Specialization: 'Кардио, укрепление мышц, выносливость.', Place: 'Бассейн', Coach: 'Антонина Кузнецова', StartTime: new Date("2023-11-19T14:00:00"), EndTime: new Date("2023-11-19T14:45:00")},
    {Id: 16, Title: 'Силовая тренировка', Description: 'Развивайте силу своего тела с интенсивными силовыми тренировками. Упражнения для формирования мышечной массы и укрепления корпуса.', Specialization: 'Силовые тренировки, укрепление мышц, формирование мышечной массы.', Place: 'Тренажерный зал', Coach: 'Артем Борисов', StartTime: new Date("2023-11-20T07:00:00"), EndTime: new Date("2023-11-20T07:45:00")},
    {Id: 17, Title: 'Кардио-пилатес', Description: 'Сочетание кардио и пилатеса для комплексного укрепления тела. Идеально для тех, кто ищет эффективные тренировки.', Specialization: 'Кардио, укрепление мышц, гибкость.', Place: 'Зал пилатеса', Coach: 'Наталья Степанова', StartTime: new Date("2023-11-20T11:00:00"), EndTime: new Date("2023-11-20T11:45:00")},
]

const StaticSchedulePage = () => {

    const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    const timeSlots = Array.from({length: 17}, (_, i) => i + 6); // 6:00 - 22:00

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Расписание | REФорма</title>
            </Helmet>
            <main className="StaticSchedulePage">
                <h1>Расписание</h1>
                <h2>
                    Организуйте свои тренировки с нашим фитнес-календарем
                </h2>
                <p>
                    Мы предлагаем гибкое расписание групповых занятий, чтобы каждый мог найти оптимальное время для поддержания активного образа жизни.
                </p>
                <h2 style={{fontSize: '1.35em'}}>Пройди свой фитнес-путь</h2>

                <div className="StaticSchedule">
                    <h2></h2>
                    {daysOfWeek.map((day, index) => <h2 key={index}>{day}</h2>)}
                    {timeSlots.map((hour, index) => (
                        <React.Fragment key={index}>
                            <h3>{hour}:00</h3>
                            {daysOfWeek.map((day, index) => {
                                const scheduleItem = StaticSchedule.find(item => {
                                    const dayOfWeek = item.StartTime.getDay();
                                    const startHour = item.StartTime.getHours();
                                    return dayOfWeek === index && startHour === hour;
                                });

                                return (
                                    <div key={index}>
                                        {scheduleItem ? (
                                            <Link to={`/SWorkout/${scheduleItem.Id}`} style={{textDecoration: 'none', color: '#ec4d34'}}>
                                                <div className="SW">
                                                    <span style={{gridArea: '1 / 1 / 2 / 3', borderBottom: '0.1em solid #ec4d34'}}>{scheduleItem.Title}</span>
                                                    <span style={{gridArea: '2 / 1 / 3 / 2', borderRight: '0.1em solid #ec4d34'}}>{scheduleItem.Place}</span>
                                                    <span style={{gridArea: '2 / 2 / 3 / 3'}}>До {scheduleItem.EndTime.getHours()}:{scheduleItem.EndTime.getMinutes() < 10 ? '0' : ''}{scheduleItem.EndTime.getMinutes()}</span>
                                                    <span style={{gridArea: '3 / 1 / 4 / 3', borderTop: '0.1em solid #ec4d34'}}>{scheduleItem.Coach}</span>
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

export { StaticSchedulePage };