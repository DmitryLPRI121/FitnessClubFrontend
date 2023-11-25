import { Helmet } from "react-helmet";
import "./PagesStyle.scss"
import "./PWorkoutPage.scss"
import {useEffect} from "react";

interface IWorkout {
    Id: number;
    Title: string;
    Description: string;
    Specialization: string;
    Place: string;
    Coach: string;
    StartTime: Date;
    EndTime: Date;
}

const Workout:IWorkout = {
    Id: 1,
    Title: 'Йога',
    Description: 'Погрузитесь в мир гармонии и укрепления с нашей тренировкой по йоге. Это уникальное занятие предназначено для всех, кто ищет не только физическое укрепление, но и душевное равновесие.', Specialization: 'Укрепление мышц и суставов, спины, ядра, мышц ног и бедер, рук и плеч, сердечно-сосудистой системы, дыхательной системы, нервной системы, эмоционального здоровья.',
    Place: 'Зал йоги',
    Coach: 'Марина Зайцева',
    StartTime: new Date("2023-11-16T09:00:00"),
    EndTime: new Date("2023-11-16T09:45:00"),
}

interface IUserWorkout {
    ClientId: number;
    Title: string;
    Place: string;
    Coach: string;
    StartDate: Date;
    EndDate: Date;
}



const PWorkoutPage = () => {

    let days = ['ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА', 'ВОСКРЕСЕНЬЕ'];

    async function WorkoutSignUp() {
        const data:IUserWorkout = {
            ClientId: Number(localStorage.getItem('Authorized')),
            Title: Workout.Title,
            Place: Workout.Place,
            Coach: Workout.Coach,
            StartDate: Workout.StartTime,
            EndDate: Workout.EndTime,
        };
        const headers = {
            'Content-Type': 'application/json'
        };
        console.log(data)
        // await axios.post(`localhost:5000/SeasonTickets`, data, {headers});
        return;
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Тренировка «{Workout.Title}» | REФорма</title>
            </Helmet>
            <main className="PWorkoutPage">
                <h1>{Workout.Title}</h1>
                <h2>Описание</h2>
                <p>
                    {Workout.Description}
                </p>
                <h2>Цель</h2>
                <p>{Workout.Specialization}</p>
                <h2>Информация о записи</h2>
                <div className="WorkoutCard">
                    <h5>Время проведения:</h5>
                    <p>{days[Workout.StartTime.getDay()]}</p>
                    <p>{Workout.StartTime.getHours()}:{Workout.StartTime.getMinutes() < 10 ? '0' : ''}{Workout.StartTime.getMinutes()} - {Workout.EndTime.getHours()}:{Workout.EndTime.getMinutes() < 10 ? '0' : ''}{Workout.EndTime.getMinutes()}</p>
                    <h5>Место проведения:</h5>
                    <p>{Workout.Place}</p>
                    <h5>Тренер:</h5>
                    <p>{Workout.Coach}</p>
                    <button onClick={() => WorkoutSignUp()}>Записаться</button>
                </div>
            </main>
        </>
    )
}

export { PWorkoutPage };