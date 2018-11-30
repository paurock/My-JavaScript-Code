<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no"/>
    <meta charset="utf-8">
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
	<style type="text/css">
	#main {width:100%;  }
	.slider {
		display: flex; 		
		width:300px; 
		margin: 0 auto;		
		}
	img {
		margin: 0 auto;
		display: block;
	}
	.forward {
		min-width:70px; 
		 
	}
	.backward {
		 min-width:70px; 
		
	}
	button {
		width:100px;		
		margin: 15px;  
		border:1px solid black;
	}
		
	
	</style>
	
    <title>Slider</title>
</head>
<body>
<div id="react-container"></div>
  <script type="text/babel">
   const { render } = ReactDOM
   const { Component } = React
   
   const data = [
   {img: 'https://via.placeholder.com/300',
   id: 0},
    {img: 'https://via.placeholder.com/301',
   id: 1},
    {img: 'https://via.placeholder.com/302',
   id: 3},
    {img: 'https://via.placeholder.com/303',
   id: 4},
   {img: 'https://via.placeholder.com/304',
   id: 5}
	]
     
  class Slider extends Component {
	
	state = {
		data,
		counter: 0
		}
	
	goForward = () => {
		(this.state.counter>=this.state.data.length-1) ?
			this.setState(state => ({
			counter: 0  
			}))	: 				 
			this.setState(state => ({
			counter: this.state.counter+1  
			}))
				
		}
		
	goBackward = () => {
		(this.state.counter<1) ?
		this.setState(state => ({
			counter: 0	
		})) :
		this.setState(state => ({
			counter: this.state.counter-1  
			}))
	}
	
	render() {
		const {counter} = this.state		
		return <div id='main'>
				<div className = "slider">					
				<button  onClick={this.goBackward} className='backward'> Back </button>
				<img src={this.state.data[counter].img } /><br/>	
				<button onClick={this.goForward} className='forward'> Forward </button>
				</div>  
	</div>
	}
}  
render(<Slider/>, document.getElementById('react-container'))
	
  </script>
</body>
</html>
