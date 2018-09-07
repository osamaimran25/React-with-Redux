import React,{Component} from 'react';


class Method extends Component{
myFacebookLink(){

  return 'https://www.facebook.com/usama.khan.1042'
}
facebookUSer(){
return 'Usa ma '

}
render(){

return (<div>

<p>My Fb Id is: <a href={this.myFacebookLink()}>{this.facebookUSer()} </a></p>

</div>
)
}
}
export default Method;
