import React, {Component} from 'react';
import Counter from './Counter';

class MyEvents extends Component{

  constructor(props){
    super(props);
    this.state={

      counter: 0
    }
//another way of binding function with class constructor
this.decreamentCounter=this.decreamentCounter.bind(this)
this.increamentCounter=this.increamentCounter.bind(this)
  }


  increamentCounter(){
this.setState({
counter: this.state.counter + 1



})


  }
  decreamentCounter(){
if(this.state.counter ==0){

alert("Counter is already have a less value")
}
else {
  this.setState({counter: this.state.counter - 1})

}

  }



// eventHandler(){
//
// console.log("button pressed ");
//
// }

render(){
return (
  <div>

<Counter counter={this.state.counter} increamentCounter={this.increamentCounter} decreamentCounter={this.decreamentCounter}/>
</div>
// <button onClick={this.increamentCounter.bind(this,'world')}>+</button>
// <span> {this.state.counter}</span>
// <button onClick={this.decreamentCounter.bind(this,'Hello')}>-</button>
//

  //</div>
//   <div>
//   <h1>Hello Events</h1>
// <button onClick={function (){
//   console.log('First button click');
// }} > First Button </button>
// <br/>
// <button onClick={this.eventHandler}>Second Button</button>
//
// </div>
)}



}
export default MyEvents;
