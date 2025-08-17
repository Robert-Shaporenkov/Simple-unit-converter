function convertInput(){
    const userInput = document.getElementById("userNum").value;
    const units = document.getElementById("dropdown").value;
    const output = document.getElementById("resultRect");

    let conversion;
    const MILE_TO_KM = 1.6;
    const INCH_TO_CM = 2.54;

    switch (units) {
        case "1":
            conversion = parseFloat(userInput) * MILE_TO_KM;
            break;
        case "2":
            conversion = parseFloat(userInput) / MILE_TO_KM;
            break;
        case "3":
            conversion = parseFloat(userInput) * INCH_TO_CM;
            break;
        default:
            conversion = parseFloat(userInput) / INCH_TO_CM;
            break;
    }
    output.textContent = `Result: ${conversion.toFixed(2)}`;
}
