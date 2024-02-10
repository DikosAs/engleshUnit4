import events_list from "../../../assets/events.json"
import Event from "./event/Event.jsx";
import "./events.css"

export default function Events() {
  console.log(events_list)
  const events_map = events_list.map(
    (event) => (<Event title={event.title} date={event.date} />)
  )

  console.log(events_map)

  return (
    <main>
      <div className="events__list">
        {events_map}
      </div>
    </main>
  )
}