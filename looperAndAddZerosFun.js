const arr = [1, 2, 3, 4, 5]
const log = (result) => console.log(result)

const addZeros = (i) => {return (arr[i]<10) ? "0" + arr[i] : arr[i]}

const looper = (arr, fn, fn2, i) => {
fn2(fn(i))
return (i < arr.length-1) ? looper(arr, fn, fn2, i+1) : i
}
looper(arr, addZeros, log, 0) 
