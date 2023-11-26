import { Helmet } from "react-helmet";
import "./PagesStyle.scss"
import "./StaffPage.scss"

interface IStaff {
    Id: number;
    Name: string;
    Specialization: string;
    ShortDescription: string;
    Photo: string;
}

const Staff: IStaff[] = [
    {
        Id: 1,
        Name: 'Иванова Елена А.',
        Specialization: 'Инструктор по йоге',
        ShortDescription: 'Опытный инструктор с фокусом на йоге для начинающих и продвинутых. Помогу вам достичь гармонии между телом и душой.',
        Photo: '../images/Staff1.jpg'
    },
    {
        Id: 2,
        Name: 'Петров Алексей В.',
        Specialization: 'Тренер по функциональному тренировочному процессу',
        ShortDescription: 'Мой подход к фитнесу основан на функциональных тренировках, которые формируют силу, выносливость и гибкость.',
        Photo: '../images/Staff2.jpg'
    },
    {
        Id: 3,
        Name: 'Сидорова Мария П.',
        Specialization: 'Инструктор по аэробике',
        ShortDescription: 'Люблю создавать энергичные программы аэробики, которые вдохновляют на движение и радость тренировок.',
        Photo: '../images/Staff3.jpg'
    },
    {
        Id: 4,
        Name: 'Григорьев Иван Д.',
        Specialization: 'Тренер по кроссфиту',
        ShortDescription: 'Со мной вы перейдете границы своих возможностей. Кроссфит – это не просто тренировка, это образ жизни.',
        Photo: '../images/Staff4.jpg'
    },
    {
        Id: 5,
        Name: 'Михайлов Дмитрий Р.',
        Specialization: 'Тренер по кардио-тренировкам',
        ShortDescription: 'Современные программы кардио помогут вам укрепить сердце, сжигать калории и достичь отличной физической формы.',
        Photo: '../images/Staff8.jpg'
    },
    {
        Id: 6,
        Name: 'Кузнецов Артем С.',
        Specialization: 'Тренер по бодибилдингу',
        ShortDescription: 'Мой опыт в бодибилдинге поможет вам достичь великолепных результатов. Заработайте тело, которое заслуживает восхищения.',
        Photo: '../images/Staff6.jpg'
    },
    {
        Id: 7,
        Name: 'Беляева Алена Г.',
        Specialization: 'Инструктор по зумбе',
        ShortDescription: 'Зумба – это не только танцевальная тренировка, но и отличный способ повысить настроение и улучшить физическую форму.',
        Photo: '../images/Staff7.jpg'
    },
    {
        Id: 8,
        Name: 'Антонова Наталья И.',
        Specialization: 'Инструктор по пилатесу',
        ShortDescription: 'Пилатес – это ключ к крепкому телу и гибкости. Присоединяйтесь к моим занятиям для укрепления мышц и коррекции осанки.',
        Photo: '../images/Staff5.jpg'
    },
    {
        Id: 9,
        Name: 'Сергеева Екатерина В.',
        Specialization: 'Инструктор по барре-тренировкам',
        ShortDescription: 'Моя страсть - создавать тренировки, которые формируют грацию и силу. Занимайтесь барре с удовольствием и пользой для тела.',
        Photo: '../images/Staff9.jpg'
    },
];


const StaffPage = () => {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Тренеры | REФорма</title>
            </Helmet>
            <main className="StaffPage">
                <h1>Тренеры</h1>
                <div className="StaffGallery">
                    <div className="StaffDesc">
                        <img src={require('../images/Staff1.jpg')} />
                        <h2>{Staff[0].Name}</h2>
                        <h3>{Staff[0].Specialization}</h3>
                        <p>{Staff[0].ShortDescription}</p>
                    </div>
                    <div className="StaffDesc">
                        <img src={require('../images/Staff2.jpg')} />
                        <h2>{Staff[1].Name}</h2>
                        <h3>{Staff[1].Specialization}</h3>
                        <p>{Staff[1].ShortDescription}</p>
                    </div>
                    <div className="StaffDesc">
                        <img src={require('../images/Staff3.jpg')} />
                        <h2>{Staff[2].Name}</h2>
                        <h3>{Staff[2].Specialization}</h3>
                        <p>{Staff[2].ShortDescription}</p>
                    </div>
                    <div className="StaffDesc">
                        <img src={require('../images/Staff4.jpg')} />
                        <h2>{Staff[3].Name}</h2>
                        <h3>{Staff[3].Specialization}</h3>
                        <p>{Staff[3].ShortDescription}</p>
                    </div>
                    <div className="StaffDesc">
                        <img src={require('../images/Staff5.jpg')} />
                        <h2>{Staff[4].Name}</h2>
                        <h3>{Staff[4].Specialization}</h3>
                        <p>{Staff[4].ShortDescription}</p>
                    </div>
                    <div className="StaffDesc">
                        <img src={require('../images/Staff6.jpg')} />
                        <h2>{Staff[5].Name}</h2>
                        <h3>{Staff[5].Specialization}</h3>
                        <p>{Staff[5].ShortDescription}</p>
                    </div>
                    <div className="StaffDesc">
                        <img src={require('../images/Staff7.jpg')} />
                        <h2>{Staff[6].Name}</h2>
                        <h3>{Staff[6].Specialization}</h3>
                        <p>{Staff[6].ShortDescription}</p>
                    </div>
                    <div className="StaffDesc">
                        <img src={require('../images/Staff8.jpg')} />
                        <h2>{Staff[7].Name}</h2>
                        <h3>{Staff[7].Specialization}</h3>
                        <p>{Staff[7].ShortDescription}</p>
                    </div>
                    <div className="StaffDesc">
                        <img src={require('../images/Staff9.jpg')} />
                        <h2>{Staff[8].Name}</h2>
                        <h3>{Staff[8].Specialization}</h3>
                        <p>{Staff[8].ShortDescription}</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export { StaffPage };