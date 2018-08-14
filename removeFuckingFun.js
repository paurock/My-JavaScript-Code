var yourText = "Hello, my name is fucking Neo"
  let print = result => document.write(result)
  let text = fnArg => `${fnArg}`
  let removeFucks = fnArg => fnArg.replace("fucking", "freacking")

  let compose = arr => val => arr.reduce(
    (fn1, fn2) => fn2(fn1), val)

  let composed = compose([text, removeFucks])
  print(composed(yourText))
