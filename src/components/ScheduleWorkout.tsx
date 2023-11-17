import { Link } from "react-router-dom";
import "./ScheduleWorkout.scss"

export function ScheduleWorkout() {
    return (
        <Link to="/Workout/1" style={{textDecoration: 'none', color: '#ec4d34'}}>
            <div className="SW">
                <span style={{gridArea: '1 / 1 / 2 / 3', fontSize: '1.4em', borderLeft: 'none', borderTop: 'none', borderRight: 'none', textAlign: 'center'}}>Йога</span>
                <span style={{gridArea: '2 / 1 / 3 / 2', borderLeft: 'none', textIndent: '0.5em'}}>До 9:45</span>
                <span style={{gridArea: '2 / 2 / 3 / 3', textAlign: 'center', borderBottom: 'none', borderRight: 'none'}}>Мест:</span>
                <span style={{gridArea: '3 / 1 / 4 / 2', borderLeft: 'none', textIndent: '0.5em'}}>Зал №3</span>
                <span style={{gridArea: '3 / 2 / 4 / 3', textAlign: 'center', borderTop: 'none', borderRight: 'none'}}>25</span>
                <span style={{gridArea: '4 / 1 / 5 / 3', borderLeft: 'none', borderBottom: 'none', borderRight: 'none', textIndent: '0.5em'}}>Иванов И.</span>
            </div>
        </Link>
    )
}