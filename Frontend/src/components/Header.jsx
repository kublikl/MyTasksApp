import Modal from "./Modal"

const Header = ({ listName }) => {

  const signOut = () => {
    console.log('signout')
  }
  
  return(
    <div className = "header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create">ADD NEW</button>
        <button className="signout" onClick={signOut}>SIGN OUT</button>
      </div>
      <Modal />
    </div>
    
  )
}

export default Header