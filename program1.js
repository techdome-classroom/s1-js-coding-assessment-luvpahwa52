const getTotalIsles = function(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
      return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let isles = 0;

  const dfs = function(i, j) {
      if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] !== 'L') {
          return;
      }
      grid[i][j] = 'V';

      dfs(i + 1, j);  
      dfs(i - 1, j);  
      dfs(i, j + 1);  
      dfs(i, j - 1);  
  };

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L') {
              dfs(i, j);
              isles++;
          }
      }
  }

  return isles;
};

module.exports = getTotalIsles;