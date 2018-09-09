import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Digitalclock from './DigitalClock';
import Logger from './Logger';


class Clock extends Component{

constructor(props){

super(props);
this.state={
  currentTime: new Date().toLocaleString(),
    counter: 0
}
this.updateTime();
}
updateTime(){
  setInterval(()=>{
this.setState({currentTime: new Date().toLocaleString(),
counter: this.state.counter + 1
})

},1000);

}
render(){
return(
  <div>
  {
    (this.state.counter < 2 )?
(<Logger time={this.state.currentTime }/>):
(<div></div>)
}
</div>
)




}




export default Clock;
