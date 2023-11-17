import { Helmet } from "react-helmet";
import "./PagesStyle.scss"
import "./WorkoutPage.scss"

interface IWorkout {
    title: string;
    description: string;
    specialization: string;
}

const Workout:IWorkout = {
    title: 'Йога',
    description: 'Погрузитесь в мир гармонии и укрепления с нашей тренировкой по йоге. Это уникальное занятие предназначено для всех, кто ищет не только физическое укрепление, но и душевное равновесие.',
    specialization: 'Укрепление мышц и суставов, спины, ядра, мышц ног и бедер, рук и плеч, сердечно-сосудистой системы, дыхательной системы, нервной системы, эмоционального здоровья.'
}

const WorkoutPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Тренировка «{Workout.title}» | REФорма</title>
            </Helmet>
            <main className="WorkoutPage">
                <h1>{Workout.title}</h1>
                <h2>Описание</h2>
                <h3>
                    {Workout.description}
                </h3>
                <h2>Цель</h2>
                <h3>{Workout.specialization}</h3>
                <h2>Информация о записи</h2>
                <div className="WorkoutCard">
                    <h5>Время проведения:</h5>
                    <h5>Место проведения:</h5>
                    <h5>Тренер:</h5>
                    <button>Записаться</button>
                </div>
            </main>
        </>
    )
}

export { WorkoutPage };