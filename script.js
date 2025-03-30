let number = 3212;

function sumDigits(num) {
    let num_str = num.toString(); 
    let sum = 0; 
    
    for (let i = 0; i < num_str.length; i++) {
        sum += parseInt(num_str[i]); 
    }
    
    return sum; 
}

console.log(sumDigits(number)); 