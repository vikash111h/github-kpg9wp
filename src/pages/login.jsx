import React,{useState,useEffect} from "react"
import { Outlet, Link } from "react-router-dom";
import {useNavigate} from "react-router-dom" 
const Login = () => {
const [userList,setUserList] = useState([])
const [login,setLogin] = useState("")
const [password,setPassword] = useState("")
const [invalidUser,setInvalidUser] = useState("")
let navigate = useNavigate() 

useEffect(() => {
  getData()
},[])

const getData = () => {
  const api = `https://swapi.dev/api/people`
  fetch(api)
  .then(response =>response.json())
  .then((response) => setUserList(response.results))
}
const handleSubmit = () => {
  const loggedUser = userList.filter(item => item.name === login)
  if(loggedUser.length > 0 && loggedUser[0].name === login && loggedUser[0].birth_year === password) {
    navigate("/planet")

  }else {
    setInvalidUser("invalid User")
  }
}

  return (
    <div className='flex-container'>
      <div className="flex">
        <label className='label-login' htmlFor="username">Name </label>
        <input id="username" type="text"  value={login} onChange={(event) => {setLogin(event.target.value)}}/>
      </div>
      <div>{invalidUser}</div>
      <br/>
      <div className="flex">
        <label className='label-password' htmlFor="password">Password </label>
        <input id="password" type="password" onChange={(event) => {setPassword(event.target.value)}} value = {password}/>
      </div>
      <br/>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Login;