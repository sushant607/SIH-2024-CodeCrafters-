import { useState } from 'react'
import LoginPage from './components/Login/LoginPage'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import UpdateProfile from './components/Profile/UpdateProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    { <UpdateProfile/>}
    </>
  )
}

export default App
