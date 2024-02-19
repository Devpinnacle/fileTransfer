import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './assets/component/Form.jsx'
import To from './assets/component/Todo.jsx'
import Cake from './assets/component/Cake.jsx'
import { Provider } from 'react-redux'
import store from './assets/redux/Store.jsx'
import Cake2 from './assets/component/Cake2.jsx'
import IceCream from './assets/component/IceCream.jsx'
import UserContainer from './assets/component/UserContainer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
    
     <UserContainer/>
     {/* <Form/> */}
      
    </Provider>
    </>
  )
}

export default App
