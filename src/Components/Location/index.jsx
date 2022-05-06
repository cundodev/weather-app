import moment from 'moment'
export default function Location ({ location }) {
  const today = location.consolidated_weather[0]
  const date = moment(today.applicable_date).format('dddd D MMMM')
  return (
    <div>
      <h2>{location.title}, {location.parent.title}</h2>
      <h4>{date}</h4>
    </div>
  )
};
