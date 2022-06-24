import { Hours, Hour, Time, Img, Temp, Icon } from './styles'
export default function ForHour ({ forHour }) {
  console.log(forHour)

  return (
    <Hours>
      {
      forHour.map((hours, index) => {
        const { temp_c, condition, time } = hours
        const { icon, text } = condition
        const hour = new Date(time)
        return (
          <Hour key={index}>
            <Time>{hour.getHours()}:00</Time>
            <Icon>
              <Img src={icon} alt={text} />
            </Icon>
            <Temp>{Math.round(temp_c)}°</Temp>
          </Hour>
        )
      })
    }
    </Hours>
  )
}
