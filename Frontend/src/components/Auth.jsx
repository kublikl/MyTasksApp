import { useState } from 'react'


const Auth = () => {
  const [isLogIn, setIsLogin] = useState(true)
  const [error, setError] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)

  const viewLogin = (status) => {
    setError(null)
    setIsLogin(status)
  }

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault()
    if (!isLogIn && password !== confirmPassword) {
      setError('Make sure passwords match!')
      return
    }

    await fetch(`${process.env.REACT_APP_SERVERURL}/${endpoint}`)
  }

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2>{isLogIn ? 'Please log in' : 'Please sign up'}</h2>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          {!isLogIn && <input type="password" placeholder="confirm password" />}
          <input type="submit" className="create" onClick={(e) => handleSubmit(e, isLogIn ? 'login' : 'signup')} />
          {error && <p>{error}</p>}
        </form>
        <div className="auth-options">
          <button 
            onClick={() => viewLogin(false)}
            style = {{backgroundColor : !isLogIn ? 'rgb(255, 255, 255)' : 'rgb(190, 190, 190)'}}
          >Sign up</button>
          <button 
            onClick={() => viewLogin(true)}
            style = {{backgroundColor : isLogIn ? 'rgb(255, 255, 255)' : 'rgb(190, 190, 190)'}}
          >Login</button>
        </div>

      </div>
    </div>
  )
}

export default Auth