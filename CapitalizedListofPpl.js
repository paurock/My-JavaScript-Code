<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no"/>
<meta charset="utf-8">
<title>Promises</title>
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/1.0.0/fetch.min.js"></script>
</head>
<body>
<h1>Promises</h1>
<p>Open the console</p>
<div id="react-container"></div>
<script type="text/babel">

const  toUpper = (str) => str.map((word, i) =>
	<h3 key={i}>
		{word.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') }
	</h3>
  )
const List = ({items}) =>
<div className="list">
 {toUpper(items)} 
</div>

const render = names => 
ReactDOM.render( <List items={names} />, document.getElementById('react-container'))

fetch("https://api.randomuser.me/?nat=US&results=5")
.then(response => response.json())
.then(json=> json.results.map(result=>result.name))
.then(names => names.map((name, i) =>`${names[i].title} ${names[i].first} ${names[i].last}`))
.then(names => render(names))
.catch(err => console.error(err))

</script>
</body>
</html>
