//import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { HashRouter, Routes, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import AccountPage from './pages/AccountPage'
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage';

function App() {
  //const [count, setCount] = useState(0)

  //const [profiles, setProfiles] = useState([]);

  const addProfiles = (profile) => {
    setProfiles(prev => [...prev, profile])
  }

  return (
    <HashRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/profiles" element={<AccountPage addProfiles={addProfiles}/>}></Route>
        <Route path="/book/:bookId" element={<BookPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
