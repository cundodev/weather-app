import './App.css'
import { Route } from 'wouter'
import Home from './Pages/Home/Home'
function App () {
  return (
    <div className='App'>
      <div className='App-content'>
        <Route
          component={Home}
          path='/'
        />
      </div>
    </div>
  )
}

export default App
