import { IMG_URL } from '../../Services/settings'
import { TodayInfo, Img, Temperature, State } from './style'
export default function Today ({ today }) {
  return (
    <TodayInfo>
      <Img src={`${IMG_URL}${today.weather_state_abbr}.svg`} />
      <Temperature>
        {Math.round(today.the_temp)}<span>°C</span>
      </Temperature>
      <State>
        {today.weather_state_name}
      </State>
    </TodayInfo>
  )
};
