import { useEffect, useState } from 'react'
import Header from './components/Header'
import ListItem from './components/ListItem'
import Auth from './components/Auth'
import { useCookies } from 'react-cookie'

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const userEmail = cookies.Email
  const authToken = cookies.AuthToken
  const [ tasks, setTasks] = useState(null)


  const getData = async () => {
    try{
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`)
      const json = await response.json()
      console.log("Response from server:", json);
      setTasks(json)
    } catch (err) {
      console.error(err)
    }
  }

  
  useEffect(() => {
    if (authToken) {
      getData()
    }}
  , [])

  console.log(tasks)

  //Sort by date
  const sortedTasks = tasks?.sort((a,b) => new Date(a.date) - new Date(b.date))


  return (
    <div  className = "app">
    {!authToken && <Auth />}
    {authToken &&
    <>
    <Header listName = {'Very important list'} getData={getData} />
    {sortedTasks?.map((task) => <ListItem key={task.id} task={task} getData={getData} />)}
    </>}
    </div>
  )
}

export default App
