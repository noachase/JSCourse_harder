let arr = [];

arr.push('234', '432', '345', '543', '123', '424', '5435');

console.log('Initial array: ' + arr);

arr.forEach(el => {
    if (el.match(/^4/) || el.match(/^2/)) {
        console.log(el);
    }
})

// print all prime numbers to 100

let n = 100;

next:
for (let i = 2; i <= n; i++) { 
    
    for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue next; 
    }

    console.log(i + ' dividers 1 and ' + i); 
}
