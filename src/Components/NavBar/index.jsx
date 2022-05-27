
import SearchForm from '../../Components/SearchForm'
import { Header, Results, Wrapper, Logo } from './style.js'

export default function NavBar () {
  return (
    <Header>
      <Wrapper>
        <Logo>Weather App</Logo>
      </Wrapper>
      <Results>
        <SearchForm />
      </Results>
    </Header>
  )
};
