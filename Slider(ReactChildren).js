<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no"/>
<meta charset="utf-8">
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
<title>Updating Lifecycle</title>
</head>
<body>
<div id="react-container"></div>
<script type="text/babel">
const { Component, Children } = React
 const { render } = ReactDOM

class SlideShow extends Component {	 
	state = {
		total:0,
		current:0
		}
	componentDidMount(){
		const {children} = this.props
		 this.interval = setInterval(this.showNext, 1000)	
		
		this.setState({
		total: Children.count(children)	
			})
		}		
	componentWillUnmount() {
			clearInterval(interval)			
			}
			
	showNext = () => {
			const {current, total} = this.state
			this.setState({
				current: current+1 === total ? 0 : current+1 
				})			
			}
		
	render() {	
		const {children} = this.props
		const {current, total} = this.state
		const bullets = Array(total).fill('○')
		bullets[current] = '•';
		return (<div> 		 	
		<p align="center" >{bullets}</p>
		<p align="center">{Children.toArray(children)[current]}</p>	
		</div>)
	}	
}

class App extends Component {
	render() {
		return 	<div>
			<SlideShow>		
			<img src = "http://placekitten.com/300/200" alt="Cat pic"/>
			<img src = "http://placekitten.com/300/201" alt="Cat pic"/>
			<img src = "http://placekitten.com/300/202" alt="Cat pic"/>
			</SlideShow>	
			</div>
		}	
}
render( <App/> , document.getElementById('react-container'))

</script>
</body>
</html>
