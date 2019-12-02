// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// WITH NESTED RECURSIVE FUNCTION
// var getElementsByClassName = function(className) {
//   var elements = [];

//   var searchNodes = function(node) {
//     if (node.classList.contains(className)) {
//       elements.push(node);
//     }
//     Array.from(node.children).forEach(searchNodes);
//   };
//   searchNodes(document.body);
//   return elements;
// };


// WIHTOUT NESTED RECURSIVE FUNCTION, USING ARRAY.PROTOTYPE.CONCAT()
var getElementsByClassName = function( className, node ){

  var results = [];
  //if node argument is undefined at function call, make the node the body of the document
  node = node || document.body;
  // take the node and test if it 1. has a classList, and 2. contains the className.
  if (node.classList && node.classList.contains(className)) {
    results.push(node);
  }
  // repeat recursively if node has children, stop if not
  var children = node.childNodes;
  if (children) {
    children.forEach(function(child){
      results = results.concat(getElementsByClassName(className, child));
    })
  }
  return results;
};