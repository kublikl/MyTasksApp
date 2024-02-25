import { useEffect, useState } from 'react'
import Header from './components/Header'
import ListItem from './components/ListItem'

const App = () => {
  const userEmail = '@gmail.com'
  const [ tasks, setTasks] = useState(null)

  const getData = async () => {
    try{
      const response = await fetch(`http://localhost:4000/todos/${userEmail}`)
      const json = await response.json()
      console.log("Response from server:", json);
      setTasks(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => getData, [])
  /*useEffect(() => {
    getData();
  }, []);*/

  console.log(tasks)

  //Sort by date
  const sortedTasks = tasks?.sort((a,b) => new Date(a.date) - new Date(b.date))


  return (
    <div  className = "app">
    <Header listName = {'Very important list'} getData={getData} />
    {sortedTasks?.map((task) => <ListItem key={task.id} task={task} getData={getData} />)}
    </div>
  )
}

export default App
