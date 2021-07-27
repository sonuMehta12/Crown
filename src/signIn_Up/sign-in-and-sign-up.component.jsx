import React from 'react'
import SignIn from '../components/sign-in/sign-in.component'
import SignUp from '../components/sign-up/SingUp'
import './style.scss'

const signInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default signInAndSignUp
