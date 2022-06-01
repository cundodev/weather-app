
import TodayDescription from '../TodayDescription'
import { TodayInfo, Img, Icon, Content, Temperature, State, Wrapper } from './style'

export default function Today ({ today }) {
  return (
    <TodayInfo>
      <Wrapper>
        <Temperature>
          {Math.round(today.temperature)}°
        </Temperature>
        <Content>
          <Icon>
            <Img src={today.img} />
          </Icon>
          <State>
            {today.conditionText}
          </State>
        </Content>
      </Wrapper>
      <TodayDescription infoToday={today} />
    </TodayInfo>
  )
};
