
var h1=React.createElement('h1',null,'Hello React')

var p=React.createElement('p',null,'React learning from tutorials')

class CustomComponent extends React.Component {

render(){
  return React.createElement('div', null, h1, p);
}
}
var fitstComponent= React.createElement(CustomComponent, null);
var content =document.getElementById('content');
ReactDOM.render(fitstComponent ,content);

// custom class link
class CustomLinks extends React.Component{

render(){
//console.log(this.props, "this.props");
return React.createElement('a', this.props, this.props.linkText);


}
}
var app= document.getElementById('app');
var mylinks= React.createElement('div', null,
React.createElement(CustomLinks, {href:'http://www.google.com',target:'_blank',title:'Google Link', linkText:'Goodle'}),
React.createElement(CustomLinks, {href:'http://www.facebook.com',target:'_blank',title:'Facebook Link', linkText:'Facebook'}),
React.createElement(CustomLinks, {href:'http://www.youtube.com',target:'_blank',title:'Youtube Link',  linkText:'Youtube'})
);
ReactDOM.render(mylinks, app)
