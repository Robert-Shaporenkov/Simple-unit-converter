function convertInput(){
    const userInput = document.getElementById("userNum").value;
    const units = document.getElementById("dropdown").value;
    const output = document.getElementById("resultRect");

    let conversion;
    const MILE_TO_KM = 1.6;
    const INCH_TO_CM = 2.54;
    const MpG_TO_KMp100L =  235.215;

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
        case "4":
            conversion = parseFloat(userInput) / INCH_TO_CM;
            break;
        case "5":
            conversion = MpG_TO_KMp100L / parseFloat(userInput)
            break;
        default:
            conversion = MpG_TO_KMp100L / parseFloat(userInput)
            break;
    }
    output.textContent = `Result: ${conversion.toFixed(2)}`;
}
