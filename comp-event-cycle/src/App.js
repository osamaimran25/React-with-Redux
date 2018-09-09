import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Digitalclock from './DigitalClock';


class Clock extends Component{

constructor(props){

super(props);
this.state={
  currentTime: new Date().toLocaleString()
}
this.updateTime();
}
updateTime(){
  setInterval(()=>{
this.setState({currentTime: new Date().toLocaleString()})

},1000);

}
render(){
return(
  <div>
<Digitalclock time={this.state.currentTime }/>
</div>
)


}

}




export default Clock;
