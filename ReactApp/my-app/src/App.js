import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class HelloWorld extends Component{
customLink={
backgroundColor :'blue'


}
render(){

//React.createElement('a',{href: this.props.link}, this.props.linkText)
//css not recomended way
// const  customLink={
//   backgroundColor:'yellow'
// }

return(
  <a href={this.props.link } style={this.customLink}>{this.props.linkText}</a>
)

}

}

export default HelloWorld;
