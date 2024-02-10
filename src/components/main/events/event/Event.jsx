import "./event.css"

// eslint-disable-next-line react/prop-types
export default function Event({ title, date }) {
  console.log(title, date)
  return (
    <>
      <div className="event">
        <h3>{ title } ({ date })</h3>
      </div>
    </>
  )
}