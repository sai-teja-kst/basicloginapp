import {Component} from 'react'
import Message from '../Message/index'
import Login from '../Login/index'
import Logout from '../Logout/index'

import './index.css'

class Home extends Component {
  state = {isLogged: false}

  onClickButton = () => {
    this.setState(prevState => ({isLogged: !prevState.isLogged}))
  }

  render() {
    const {isLogged} = this.state

    return (
      <div className="bg-container">
        <h1>{isLogged}</h1>
        <Message isLogged={isLogged} />
        {isLogged ? (
          <Login login={this.onClickButton} />
        ) : (
          <Logout logout={this.onClickButton} />
        )}
      </div>
    )
  }
}

export default Home
