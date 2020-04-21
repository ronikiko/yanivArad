(async () => {
  const arr1 = ["diner", "food", "name", "a"];
  const arrayOfarrays = [["abcw"], ["qw"], ["treertrert"]];

  const funcA = (str) => {
    return str.length;
  };

  const funcB = (arr) => {
    return new Promise((resolve, reject) => {
      if (!arr) reject("error");
      setTimeout(() => {
        resolve(funcA(arr.join("")));
      }, 2000);
    });
  };

  const funcC = (arrays, callback) => {
    setTimeout(() => {
      funcB(arrays).then((array) => callback(array));
    }, 3000);
  };

  /* working great!!! returns a length of array given
    --- after 2 seconds...
    */
  //const res = await funcB(arr1)
  //console.log(`the length of all arrays are: ${res}`)
  // ------------------------------------------------

  // ------------------------------------------------
  /* working great!!! returns a length of array given
    --- after 5 seconds...
    */
  funcC(arrayOfarrays, (arrayLength) => {
    console.log(arrayLength);
  });
  // ------------------------------------------------
})();
