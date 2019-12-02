// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

const typeTest = function(obj) {
  const types = ['number', 'boolean', 'string', 'undefined']
  if (types.includes(typeof obj)){
    return typeof obj;
  }
  if (typeof obj === 'function'){
    return 'fun';
  }
  if (obj === null){
    return 'null';
  }
  if (Array.isArray(obj)){
    return 'array';
  }
  if (!Array.isArray(obj)){
    return 'object';
  }
};


const stringifyJSON = function(obj) {
  if (typeTest(obj) === 'boolean'){
    return obj.toString();
  }
  if (typeTest(obj) === 'fun') {
    return null;
  }
  if (typeTest(obj) === 'undefined') {
    return null;
  }
  if (typeTest(obj) === 'number') {
    return obj.toString();
  }
  if (typeTest(obj) === 'string') {
    return '"' + obj + '"';
  }
  if (typeTest(obj) === 'null'){
    return 'null';
  }
  if (typeTest(obj) === 'array') {
    return "[" + obj.map(function(item) {return stringifyJSON(item)}).join(",") + "]"};

  if (typeTest(obj) === 'object') {
    var result = []
    Object.keys(obj).forEach(function(key) {
      var val = stringifyJSON(obj[key])
      if (val !== null) {
        result.push('"' + key + '"' + ':' + val)
      }
    })
    return "{" + result.join(',') + "}"
  }
}
