import {Link, useLocation, useNavigate} from "react-router-dom";
import {  } from 'react-router-dom';
import "./Navbar.scss"

export function NavBar() {
    const location = useLocation();
    const endpoint = location.pathname.split('/')[1]; // получаем endpoint

    const navigate = useNavigate();
    return (
        <>

            { (endpoint === "Login" || endpoint === "Signup") ? null : (
                localStorage.getItem('Authorized') ? (
                    <div className="Account">
{/*                        <Link to="/Account" style={{ textDecoration: 'none', color: '#ec4d34'}}>
                            <div className="InAccount">
                                <div>Учетная запись</div>
                            </div>
                        </Link>*/}
                        <button className="Logout" onClick={() => {
                            localStorage.removeItem('Authorized');
                            navigate('/Home');
                            window.location.reload();
                        }}>⊠</button>
                    </div>
                ) : (
                    <Link to="/Login" style={{ textDecoration: 'none', color: '#ec4d34'}}>
                        <div className="Account" style={{border: 'solid .2em #ec4d34', borderRadius: '0.5em', backgroundColor: 'rgba(255, 255, 255, 1', padding: '0.4em 0.5em'}}>
                            Авторизация
                        </div>
                    </Link>
                )
            )}


            <nav>
                <h2>REФорма</h2>
                {localStorage.getItem('Authorized')? (
                    <div className="linkList">
                        <Link to="/Home">
                            <div className="LinkButton">
                                🏠 Главная
                            </div>
                        </Link>
                        {/*                    <Link to="/Stocks">
                        <div className="LinkButton">
                            📢 Акции
                        </div>
                    </Link>*/}
                        <Link to="/PersonalSchedule">
                            <div className="LinkButton">
                                ⌚ Персональные тренировки
                            </div>
                        </Link>
                        <Link to="/StaticSchedule">
                            <div className="LinkButton">
                                📅 Расписание
                            </div>
                        </Link>
                        <Link to="/MySeasonTicket">
                            <div className="LinkButton">
                                ★ Мой абонемент
                            </div>
                        </Link>
                        <Link to="/Staff">
                            <div className="LinkButton">
                                👤 Тренеры
                            </div>
                        </Link>
                        <Link to="/SeasonTickets">
                            <div className="LinkButton">
                                🎟️ Абонементы
                            </div>
                        </Link>
                    </div>
                ) : (
                    <div className="linkList">
                        <Link to="/Home">
                            <div className="LinkButton">
                                🏠 Главная
                            </div>
                        </Link>
                        <Link to="/StaticSchedule">
                            <div className="LinkButton">
                                📅 Расписание
                            </div>
                        </Link>
                        <Link to="/SeasonTickets">
                            <div className="LinkButton">
                                🎟️ Абонементы
                            </div>
                        </Link>
                        <Link to="/Staff">
                            <div className="LinkButton">
                                👤 Тренеры
                            </div>
                        </Link>
                    </div>
                )}

                <div className="AboutList">
                    <hr/>
                    <h3>
                        Режим Работы:
                    </h3>
                    <p style={{fontSize: '1.1em', textAlign: 'center'}}>
                        Пн-Пт: 6:00 - 22:00
                    </p>
                    <p style={{fontSize: '1.1em', textAlign: 'center'}}>
                        Сб-Вс: 8:00 - 20:00
                    </p>
                    <h3 style={{marginTop: '1em'}}>Контакты:</h3>
                    <p style={{borderLeft: '0.5em solid', borderRight: '0.5em solid', borderRadius: '1em', margin: '0 0.8em', textIndent:'0.25em'}}>
                        📍 Наш адрес:
                    </p>
                    <p style={{fontSize: '1.1em', textAlign: 'center', textDecoration: 'underline', backgroundColor: 'rgba(255, 255, 255, 0.4', padding: '0.25em 0', borderRadius: '0.5em', margin: '0.4em 1em'}}>
                        Улица Примерная, 123, Городовилль
                    </p>
                    <p style={{borderLeft: '0.5em solid', borderRight: '0.5em solid', borderRadius: '1em', margin: '0 0.8em', textIndent:'0.25em'}}>
                        📞 Телефон:
                    </p>
                    <p style={{fontSize: '1.1em', textAlign: 'center', textDecoration: 'underline', backgroundColor: 'rgba(255, 255, 255, 0.4', padding: '0.25em 0', borderRadius: '0.5em', margin: '0.4em 1em'}}>
                        +7 (123) 456-7890
                    </p>
                    <p style={{borderLeft: '0.5em solid', borderRight: '0.5em solid', borderRadius: '1em', margin: '0 0.8em', textIndent:'0.25em'}}>
                        📧 Электронная почта:
                    </p>
                    <p style={{fontSize: '1.1em', textAlign: 'center', textDecoration: 'underline', backgroundColor: 'rgba(255, 255, 255, 0.4', padding: '0.25em 0', borderRadius: '0.5em', margin: '0.4em 1em'}}>
                        info@yourfitnessclub.com
                    </p>

                    <p style={{margin: '1em 0', textAlign: 'center'}}>
                        © 2023 REForma Fitness Club. Все права защищены.
                    </p>
                </div>
            </nav>
        </>
    )
}