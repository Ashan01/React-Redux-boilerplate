import React from 'react'
import {connect} from 'react-redux'
import {setData} from './store/action'

class App extends React.Component{
  render(){
     console.log(this.props)
    return(
      <div>
        <h1>Helo </h1>
        <button onClick={this.props.setData}>Set Data</button>
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  user: state.user
})

const mapDispatchToProps=(dispatch)=>({
  setData:()=> dispatch(setData())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);