function threeSum(arr, target) {
  //your code here
	let arr_size = arr.length;
	let l, r; 
    for (let i = 0; i < arr_size - 2; i++) 
    { 
        for (let j = i + 1; j < arr_size - 1; j++) 
        { 
            for (let k = j + 1; k < arr_size; k++) 
            { 
                if (arr[i] + arr[j] + arr[k] == target) 
                { 
                    return (arr[i]+arr[j]+arr[k]); 
                } 
            } 
        } 
    } 
    return false;
}

module.exports = threeSum;
