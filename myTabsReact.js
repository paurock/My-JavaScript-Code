<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no"/>
<meta charset="utf-8">
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
<style type="text/css">
.tabs{
    display:inline-block;
}
.tabs > div{
    padding-top:10px;
}
.tabs ul{
    margin:0px;
    padding:0px;
}
.tabs ul:after{
    content:"";
    display:block;
    clear:both;
    height:5px;
    background:#46c765;
}
.tabs ul li{
    margin:0px;
    padding:0px;
    cursor:pointer;
    display:block;
    float:left;
    padding:10px 15px;
    background:#e9eaeb;
    color:#707070;
}
.tabs ul li.active, .tabs ul li.active:hover{
    background:#46c765;
    color:#fff;
}
.tabs ul li:hover{
    background:#d6d6d7;
}
</style>
<title>Tabs</title>
</head>
<body>
<div id="react-container"></div>
<script type="text/babel">
const { Component } = React
const { render } = ReactDOM

class Tabs extends Component {
	state = {
	data: [
		{
			tabName: 'Первая вкладка', 
			links: ["Содержимое 1", "Содержимое 2", "Содержимое 3", "Содержимое 4"]
		}, 
		{
			tabName:'Вторая вкладка', 
			links: ["Содержимое 5", "Содержимое 6", "Содержимое 7", "Содержимое 8"]
		},
		{
			tabName:'Третья вкладка', 
			links: ["Содержимое 9", "Содержимое 10", "Содержимое 11", "Содержимое 12"]
		},		
		
	],	
	number:0, 
	toggle: false
}

	doClick = (e) => {
	e.persist()
	this.setState(prevState =>({number:e.target.id, toggle: true }))
	console.log(this.state)
	}
	
	render() {
	
		const {data} = this.state
		const {number} = this.state
		const {toggle} = this.state
		//console.log(tabs[0].links)
		return <div >
			<Tab data={data} doClick = {this.doClick.bind(this)}></Tab>
				{(toggle) ? 
				<Content data={data} number={number}/> :				
				<div>Nothing</div>}
		</div>			
	}
}

const Tab = ({data, doClick=f=>f}) =><div className='tabs'> 
	<ul>
	{data.map( (tab, i) => 
		<li key={i} id={i} onClick={(e)=>doClick(e)}>{tab.tabName}</li>
	)}
	</ul>	
</div>


const Content = ({data, number}) => {
	const SpecificTab = data[number].links
	return SpecificTab.map((item, i)=> <div key={i}>{item}</div>
	)	
}

render(
<Tabs/>, 
document.getElementById('react-container')
)
</script>
</body>
</html>
