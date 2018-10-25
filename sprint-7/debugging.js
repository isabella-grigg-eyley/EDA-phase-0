// function chunkArrayInGroups(arr, size) {
//     // Break it up.
//     let newArrFull = [];
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++)
//       if (i % size == 0) {
//         newArr.push(arr.slice(i, i + size));
//         console.log("Pushed new array. Index: " + i);
//         console.log("Contents: " + arr.slice(i, i + size));
//       }
//     console.log(newArr)
//     return newArr;
//   }
  
//   chunkArrayInGroups(["a", "b", "c", "d"], 2);
//   chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)

function chunkArrayInGroups(arr, size) {
    // Break it up.
    let newArrFull = [];
    let newArr = [];
    for (let i = 0; i < arr.length; i++)
      if (i % size == 0) {
        newArr.push(arr.slice(i, i + size));
      }
    return newArr;
    }
    
    console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));