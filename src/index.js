
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
}
let result = [];

for (i = 0; i < matrix.length; i++) {
    if(i % 2 === 0){
        result = result.concat(matrix[i]);
    } else {
        result = result.concat(matrix[i].reverse());
    }
}
return result;
}
