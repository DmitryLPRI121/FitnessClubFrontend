import { Helmet } from "react-helmet";
import "./PagesStyle.scss"
import "./SchedulePage.scss"
import {ScheduleWorkout} from "../components/ScheduleWorkout";

const SchedulePage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Schedule | REФорма</title>
            </Helmet>
            <main className="SchedulePage">
                <h1>Расписание</h1>
                <h3>
                    Организуйте свои тренировки с нашим фитнес-календарем
                </h3>
                <p>
                    Мы предлагаем гибкое расписание групповых занятий и индивидуальных тренировок, чтобы каждый мог найти оптимальное время для поддержания активного образа жизни.
                </p>
                <h2 style={{fontSize: '1.35em'}}>Пройди свой фитнес-путь</h2>

                <div className="Schedule">
                    <h2></h2><h2>ПН</h2><h2>ВТ</h2><h2>СР</h2><h2>ЧТ</h2><h2>ПТ</h2><h2>СБ</h2><h2>ВС</h2>
                    <h3>6:00</h3><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <h3>7:00</h3><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <h3>8:00</h3><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <h3>9:00</h3><div>{ScheduleWorkout()}</div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <h3>10:00</h3><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <h3>11:00</h3><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <h3>12:00</h3><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <h3>13:00</h3><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <h3>14:00</h3><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <h3>15:00</h3><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <h3>16:00</h3><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <h3>17:00</h3><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <h3>18:00</h3><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <h3>19:00</h3><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <h3>20:00</h3><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <h3>21:00</h3><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <h3>22:00</h3><div></div><div></div><div></div><div></div><div></div><div></div><div></div>

                </div>

                <p>
                    Создайте свой уникальный фитнес-календарь, выбирая оптимальные тренировки и удобные временные интервалы. Наше гибкое расписание создано, чтобы соответствовать вашему образу жизни и помочь вам достигнуть ваших фитнес-целей в наиболее удобный для вас способ!
                </p>
            </main>
        </>
    )
}

export { SchedulePage };