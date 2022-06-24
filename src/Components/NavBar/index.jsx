
import SearchForm from '../../Components/SearchForm'
import { Header, Wrapper, Logo } from './style.js'

export default function NavBar () {
  return (
    <Header>
      <Wrapper>
        <Logo>Weather App</Logo>
        <SearchForm />
      </Wrapper>

    </Header>
  )
};
