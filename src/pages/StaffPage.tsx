import { Helmet } from "react-helmet";
import "./PagesStyle.scss"
import "./StaffPage.scss"

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
                        <h2>Фамилия Имя О.</h2>
                        <h3>Специализация</h3>
                        <p>Краткое описание о тренере, которое описывает краткое описание о кратком описании описания</p>
                    </div>
                    <div className="StaffDesc">
                        <img src={require('../images/Staff2.jpg')} />
                        <h2>Фамилия Имя О.</h2>
                        <h3>Специализация</h3>
                        <p>Краткое описание о тренере, которое описывает краткое описание о кратком описании описания</p>
                    </div>
                    <div className="StaffDesc">
                        <img src={require('../images/Staff3.jpg')} />
                        <h2>Фамилия Имя О.</h2>
                        <h3>Специализация</h3>
                        <p>Краткое описание о тренере, которое описывает краткое описание о кратком описании описания</p>
                    </div>
                    <div className="StaffDesc">
                        <img src={require('../images/Staff4.jpg')} />
                        <h2>Фамилия Имя О.</h2>
                        <h3>Специализация</h3>
                        <p>Краткое описание о тренере, которое описывает краткое описание о кратком описании описания</p>
                    </div>
                    <div className="StaffDesc">
                        <img src={require('../images/Staff5.jpg')} />
                        <h2>Фамилия Имя О.</h2>
                        <h3>Специализация</h3>
                        <p>Краткое описание о тренере, которое описывает краткое описание о кратком описании описания</p>
                    </div>
                    <div className="StaffDesc">
                        <img src={require('../images/Staff6.jpg')} />
                        <h2>Фамилия Имя О.</h2>
                        <h3>Специализация</h3>
                        <p>Краткое описание о тренере, которое описывает краткое описание о кратком описании описания</p>
                    </div>
                    <div className="StaffDesc">
                        <img src={require('../images/Staff7.jpg')} />
                        <h2>Фамилия Имя О.</h2>
                        <h3>Специализация</h3>
                        <p>Краткое описание о тренере, которое описывает краткое описание о кратком описании описания</p>
                    </div>
                    <div className="StaffDesc">
                        <img src={require('../images/Staff8.jpg')} />
                        <h2>Фамилия Имя О.</h2>
                        <h3>Специализация</h3>
                        <p>Краткое описание о тренере, которое описывает краткое описание о кратком описании описания</p>
                    </div>
                    <div className="StaffDesc">
                        <img src={require('../images/Staff9.jpg')} />
                        <h2>Фамилия Имя О.</h2>
                        <h3>Специализация</h3>
                        <p>Краткое описание о тренере, которое описывает краткое описание о кратком описании описания</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export { StaffPage };