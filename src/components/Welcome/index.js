import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  isSubscribe = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setState({text: 'Subscribed'})
    } else {
      this.setState({text: 'Subscribe'})
    }
  }

  render() {
    const {text} = this.state
    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button onClick={this.isSubscribe}>{text}</button>
      </div>
    )
  }
}
export default Welcome
