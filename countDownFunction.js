const countDown = value => {
	document.write(`${value} <br>`) 
	return (value>0) ?	countDown(value-1) : value
}

countDown(100)
