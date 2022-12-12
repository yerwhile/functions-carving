const createWoodBlock = () => {
    const woodObj = {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"
    }

    return woodObj;

}

const createBeautifulCarving = (woodObj) => {
    const beautifulCarvingString = `The ${woodObj.length}-inch, ${woodObj.material} ${woodObj.type} was carved into a wooden ${woodObj.purpose}`;

    return beautifulCarvingString;
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock();

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock);

console.log(carvingString);