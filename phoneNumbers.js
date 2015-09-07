

var array = [
  '(123) 456-7890',
  '123-456-7890',
  '123.456.7890'
]
var result = []
array.forEach(function (e) {
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  .test(e) ? result.push(e) : 'not a phone number';
})
console.log(result)
