// import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm.jsx';
import Authenticate from './components/Authenticate.jsx';
function App() {
  

  return (
    <>
      <div>
        <Authenticate />
        <SignUpForm />
      </div>
    </>
  )
}

export default App
