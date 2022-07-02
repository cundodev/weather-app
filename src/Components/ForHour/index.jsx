import { Conteiner, Hours, Hour, Time, Img, Temp, Icon, Wrapper } from './styles'

export default function ForHour ({ forHour }) {
  const utcTime = new Date()
  const currentTime = new Date(utcTime.setUTCSeconds(forHour[0].localtime))
  const currentHour = currentTime.getHours()
  const todayHours = forHour[1].forecastForHuor
  const nextDayHour = forHour[2].forecastForHuor

  return (
    <Conteiner>
      <Wrapper>
        <span>Today</span>
        <Hours>
          {
            todayHours.map((hours, index) => {
              const { temp_c, condition, time } = hours
              const { icon, text } = condition
              const hour = new Date(time)
              return (
                <Hour key={index} cHour={hour.getHours() < currentHour}>
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
      </Wrapper>
      {
        !(currentHour === 0) && (
          <Wrapper>
            <span>Tomorrow</span>
            <Hours>
              {
            nextDayHour.map((hours, index) => {
              const { temp_c, condition, time } = hours
              const { icon, text } = condition
              const hour = new Date(time)
              return (
                <Hour key={index} className='nextDay' cHour={hour.getHours() > currentHour}>
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
          </Wrapper>
        )
      }
    </Conteiner>
  )
}
