function otoslotto() {
    const numbers = new Set();
    
    while (numbers.size < 5) {
        const randomNum = Math.floor(Math.random() * 90) + 1;
        numbers.add(randomNum);
    }

    return Array.from(numbers).sort((a, b) => a - b);
}

console.log(otoslotto());
