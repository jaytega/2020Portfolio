

module.exports.testfunction = function(){
  console.time('process');
  const value = 42; // Returns 42
  console.timeLog('process', value);
  // Prints "process: 365.227ms 42".
  console.log(value);
  console.timeEnd('process');
};
