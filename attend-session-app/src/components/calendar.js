import Calendar from 'react-calendar';
import useGetAllActivities from '../components/displayEventComponent';

const AdminCalendar = () => {

    const activities = useGetAllActivities();

    const display = ({date, view}) => {
        if (view === 'month' &&  date.getDay() === 0)  { 
            return <div> 
                {activities.map(activity => (
                    <p key={activity}>
                        {activity.weeklyActivityName}
                        <br></br>
                        {activity.locations[0].hallName}
                        <br></br>
                        {activity.locations[0].address}
                        <br></br>
                        {activity.days[0]}
                        <br></br>
                        {activity.days[1]}
                        <br></br>
                        {activity.times[0].startTime}
                        <br></br>
                        {activity.times[0].endTime}
                    </p>
            ))}
            </div>
    }
        return null;
    };

    return (
        <div className="calendar">
            <header>
                <h1>Calendar</h1>
            </header>
            <div className="tiles">
                <main className="">
                    <Calendar 
                    locale={'en-nz'}
                    selectRange={false}
                    showNeighboringMonth={false}
                    minDate={new Date()} 
                    tileContent={display}
                    />
                </main>
            </div>
        </div>
    );
}

export default AdminCalendar;