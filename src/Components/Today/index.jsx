import { IMG_URL } from '../../Services/settings'
import TodayDescription from '../TodayDescription'
import { TodayInfo, Img, Icon, Content, Temperature, State } from './style'

export default function Today ({ today }) {
  return (
    <TodayInfo>
      <Icon>
        <Img src={`${IMG_URL}${today.weather_state_abbr}.svg`} />
      </Icon>
      <Content>
        <Temperature>
          {Math.round(today.the_temp)}°
        </Temperature>
        <State>
          {today.weather_state_name}
        </State>
      </Content>
      <TodayDescription infoToday={today} />
    </TodayInfo>
  )
};
