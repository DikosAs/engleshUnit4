import events_list from "../../../assets/events.json"
import Event from "./event/Event.jsx";
import "./events.css"

export default function Events() {
  const events_map = events_list.map(
    (event) => (<Event title={event.title} date={event.date} />)
  )

  return (
    <main>
      <div className="events__list">
        {events_map}
      </div>
    </main>
  )
}