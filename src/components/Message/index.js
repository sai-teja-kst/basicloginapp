import './index.css'

const Message = props => {
  console.log(props)
  const {isLogged} = props
  console.log(isLogged)

  if (isLogged === true) {
    return <h1>Please Login</h1>
  }
  return <h1>Welcome User</h1>
}

export default Message
