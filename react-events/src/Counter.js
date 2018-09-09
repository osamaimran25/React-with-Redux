import React ,{Component} from 'react';

class Counter extends Component{
//console.log(this.props);
render(){

return(
<div>
<h1>Counter App</h1>
<button onClick={this.props.increamentCounter}>+</button>
<span> {this.props.counter} </span>
<button onClick={this.props.decreamentCounter}> -</button>
</div>


)


}

}
export default Counter;
