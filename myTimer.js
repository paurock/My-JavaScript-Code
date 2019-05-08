const interval = () => 1000
const i = () => 0
const nowDate = () => new Date()
const clear = () => console.clear()
const log = result => console.log(result)
			
					
const hms = (nowDate) => ({
	h: nowDate.getHours(),
	m: nowDate.getMinutes(),
	s: nowDate.getSeconds()
})
				
const pmam = (obj, key) => {
  return (obj.key > 12) ?  "PM"
  : "AM"
}			
			
const hhmmss = arr => arr.map(x => {
	return (x<10) ? "0" + x 
  : x			
})		
						 
			
const civilianClock = arr => {
	return (arr[0] >12) ? `${arr[0]-12} : ${arr[1]} : ${arr[2]} ${arr[3]}` : 
  `${arr[0]-12} : ${arr[1]} : ${arr[2]} ${arr[3]}` 			
}
			
			 
const compose = (fns) => val => fns.reduce((fn1, fn2) => fn2(fn1), val)
const composed =  compose([clear, nowDate, hms, pmam, hhmmss, civilianClock, log ])
const ticking = () => setInterval(composed, interval())
			
ticking()
