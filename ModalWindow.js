<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no"/>
<meta charset="utf-8">
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
<style type="text/css">
.hide {display:none;}
.show {display:block;}
</style>
<title>Modal</title>
</head>
<body>
<div id="react-container"></div>




<script type="text/babel">
const { Component } = React
const { render } = ReactDOM

class Window extends Component {	
		state = {
		toggle: false		
		}
	
	openWindow = (e) => {
		e.preventDefault()
		this.setState(state => ({
			toggle: !state.toggle		
			}))
	console.log(this.state)	
		}
	render() {
		const {toggle} =this.state 
		return <div>		
			<a href="#" onClick={this.openWindow}>Открыть модальное окно</a>
			<div className={(toggle) ? "show" : "hide"}>
				<div>
					<a title="Закрыть" className="close">X</a>
					<h2>Модальное окно</h2>
					<p>Пример простого модального окна, которое может быть создано с использованием CSS3.</p>
					<p>Его можно использовать в широком диапазоне, начиная от вывода сообщений и заканчивая формой регистрации.</p>
				</div>
			</div>		
		</div>		
	}
}
render(
<Window/>, 
document.getElementById('react-container')
)
</script>
</body>
</html>
