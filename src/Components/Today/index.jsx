
import TodayDescription from '../TodayDescription'
import { TodayInfo, Img, Icon, Content, Temperature, State, Wrapper } from './style'
import { IMG_128X128, findIcon } from '../../assets/script'

export default function Today ({ today }) {
  const { icon } = findIcon(today.codeIcon)
  return (
    <TodayInfo>
      <Wrapper>
        <Temperature>
          {Math.round(today.temperature)}°
        </Temperature>
        <Content>
          <Icon>
            <Img src={`${IMG_128X128}${icon}.png`} />
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
