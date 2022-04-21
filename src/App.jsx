import './App.css'
import { Route } from 'wouter'
import Home from './Pages/Home/Home'
import { LocationContextProvider } from './Context/locationContext'
function App () {
  return (
    <div className='App'>
      <LocationContextProvider>
        <Route
          component={Home}
          path='/'
        />
      </LocationContextProvider>
    </div>
  )
}

export default App
