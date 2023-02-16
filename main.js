// 1. 	Data Flow Through Functions
// Practice: Wood Carving

const createWoodBlock  = () => {
	const woodObject = {
		type: "wood block",
		length: 10,
		material: "pine",
		purpose: "flute"
	}
	return woodObject
}


const createBeautifulCarving  = (woodObject) => {
	const objectString = `The ${woodObject.length}-inch, ${woodObject.material} ${woodObject.type} was carved into a ${woodObject.purpose}`
	return objectString
}

const woodBlock = createWoodBlock()

const carvingString = createBeautifulCarving(woodBlock) 

console.log(carvingString)



//////////////////////////////////////////////////////////////////////////////////////
//2. Add and Multiply

// A function to add two values together. This function needs to define two parameters - the two numbers that you want to add together.
const add = (num1, num2) => {
    return num1 + num2
}
// A function to multiply a single number by 2. This function takes one parameter - the number you want to multiply by 2.
const multi = (num) => {
    return num * 2
}

let addResult = add(4,14)
let multiResult = multi(addResult)
console.log(multiResult)



//////////////////////////////////////////////////////////////////////////////////////
//3. Grading Students

const createStudent  = (name,grade) => {
	const studentObject = {
		name: name,
		grade: grade
	}
	return studentObject
}


const addMathGrade = (obj) => {
    obj.math = 'B';
    return obj
}


const addHistoryGrade = (obj) => {
    obj.history = 'C';
    return obj
}

const addScienceGrade = (obj) => {
    obj.science = 'A';
    return obj
}

student = createStudent('Joel',7)
studentWithMathGrade = addMathGrade(student)
studentWithHistoryGrade = addHistoryGrade(studentWithMathGrade)
studentWithAllGrades = addScienceGrade(studentWithHistoryGrade)

console.log(studentWithAllGrades)



//////////////////////////////////////////////////////////////////////////////////////
//4. Get Rich and Famous by Throwing Pottery

// 6. Design a Candy Factory

// 1. Buy a big lump of clay (create empty array?)

const buyClay = () => {
    return {}
}

const emptyObj = buyClay()


// 2. Use a pottery wheel to turn the clay into a bowl
const makePottery = (obj) => {
    obj.shape = 'bowl';
    return obj
}

const shapedObj = makePottery(emptyObj)


// 3. Put the bowl into a kiln for a bisque firing
const bisqueFire = (obj) => {
    obj.readyForGlazing = true;
    return obj
}

const firedObj = bisqueFire(shapedObj)


// 4. Apply glaze to bowl
const glazePottery = (obj) => {
    if (obj.readyForGlazing === true){
        obj.glazing = "Midnight Blue";
        return obj
    }

    else{
        obj.glazing = false;
        console.log('Make sure you bisque fire the pottery before you glaze it.')
    }
    return candy
}

const glazedObj = glazePottery(firedObj)


// 5. Put glazed bowl in kiln for final firing
const finalFiring = (obj, temp) => {
    if (temp > 1200){
        obj.cracked = true;
        return obj
    }

    else{
        obj.cracked = false;
        return obj
    }
}

const finishedObj = finalFiring(glazedObj, 1000)
console.log(finishedObj)

