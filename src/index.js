
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
        return [];
    }
        let result = [];
        let column;
      for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[i].length;j++) {
    column = i % 2 === 0 ? j : (matrix[i].length - j - 1);
    result.push(matrix[i][column]);
        }
      }
      return result;
    }
