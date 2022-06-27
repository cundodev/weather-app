
import TodayDescription from '../TodayDescription'
import { TodayInfo, Img, Icon, Content, Temperature, State, Wrapper } from './style'

export default function Today ({ today }) {
  return (
    <TodayInfo>
      <Wrapper>
        <Content>
          <Temperature>
            {Math.round(today.temperature)}°
          </Temperature>
          <Icon>
            <Img src={today.img} />
          </Icon>
        </Content>
        <State>
          {today.conditionText}
        </State>
      </Wrapper>
      <TodayDescription infoToday={today} />
    </TodayInfo>
  )
};
