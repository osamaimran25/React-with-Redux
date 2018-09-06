// neat code
var h1=React.createElement('h1',null,'Hello World!');
var content=document.getElementById('app');

//ReactDOM.render(h1,content);
// basic code
// ReactDOM.render(
//   React.createElement(
//     'h1',
//     null,
//     'Hello World!'
//   ),
//   document.getElementById('app')
// );

// anchor
var a=React.createElement('a',{href:'http://www.google.com',target:'_blank',title:'Google Link'},'Google');
//var link=document.getElementById('link');

ReactDOM.render(React.createElement('div', null, h1, a)
,
content

);
