const interval = () => 1000
const currentDate = () => new Date()
const log = (result) => console.log(result)
const clear = () => console.clear()
			
const normalDate = (currentDate) => ({				
	hours:  currentDate.getHours(),
	minutes:  currentDate.getMinutes(),
	seconds:  currentDate.getSeconds()		
})
			
const addZeros = key => clockTime =>
	({
		...clockTime,
		[key]: (clockTime[key] < 10) ?
		"0" + clockTime[key] :
		clockTime[key]
})

							 
const compose = arr => val => arr.reduce((fn1, fn2) => fn2(fn1), val)	
const ddc = dubbleDigitClock = compose([addZeros("hours"), addZeros("minutes"), addZeros("seconds")])
const readyClocks = ddc =>  `${ddc.hours}:${ddc.minutes}:${ddc.seconds}`		
const showNormalDate = compose([clear, currentDate, normalDate, dubbleDigitClock, readyClocks, log])
const tickingClock = () => setInterval(showNormalDate, interval())	

tickingClock()
