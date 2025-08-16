function convertInput(){
    const userInput = document.getElementById("userNum").value;
    const units = document.getElementById("dropdown").value;
    const output = document.getElementById("resultRect");
    
    let conversion;
    
    if (units === "1") {
        conversion = parseFloat(userInput) * 1.6;  
    }   else if (units === "2") {
        conversion = parseFloat(userInput) / 1.6;
    }   else if (units === "3") {
        conversion = parseFloat(userInput) * 2.54;
    }   else {
        conversion = parseFloat(userInput) / 2.54;
    }
    output.textContent = `Result: ${conversion.toFixed(2)}`;
}
