var array = [ 'e', 'i', 'f', 'm', 'e', 'm', 'p', '3', 'h','e','l','l','o'];
var result = []
array.forEach(function (e) {
  /[aeiouAEIOU]/.test(e) ? '' : result.push(e);
})
console.log(result)



///Result => [ 'f', 'm', 'm', 'p', '3', 'h', 'l', 'l' ]
