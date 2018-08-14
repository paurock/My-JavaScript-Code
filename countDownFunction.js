const countDown = (value, fn) => {
	fn(value) 
	return (value>0) ?	countDown(value-1, fn) : value
}

countDown(100, value => document.write(`${value} <br>`) )
