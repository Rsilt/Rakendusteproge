//loo array nritega ja leida spetsiifilise numbri indeks
//Var const ja 
const array=[1,2,3,4,5,6]

function findMyIndex(array, element){
return array.indexOf(4) 
}

console.log(findMyIndex(array,4))


//arrow function const arrow = () => {}
//const arrow = () => {return}
const arrowFunction = (num1+num2) =>{
    return n1+n2
}
console.log(arrowFunction(3,5))


const arrowFunction2 = (num1,num2) => num1 + num2
console.log(arrowFunction(3,5) = arrowFunction2(3,5))
console.log(arrowFunction2(3,5))

//Nested (console.log(addNumbers(2)(3)))

function addNumbers2(num1, num2){
return function addNumbersHelper(num2){
    return num1 + num2
    }
}
console.log(addNumbers(3)(4))

// Looge samast funktsioonist arrowfunction

//function addNumbers2(num1, num2){
    //return function addNumbersHelper(num2){
        //return num1 + num2
        //}
    //}
    //console.log(addNumbers(3)(4))


const arrowFunction3 = (num1, num2) => num1 + num2 

console.log(addNumbers(3)(4));


//ArrowFunction printida Hello ja nimi
//Kasutada string literals 

const nameRoland = "Roland"
const name ="Name is ${nameRoland}"
// ${variableName}
console.log(name)

const nameString = (name) => `Name is ${name}`
console.log(nameString("Roland"))


//map/filter/reduce?

const numberArray = [1,2,3,4,5]

//luua uus massiiv selle massiivi põhjal, kus igal numbrile on liidetud juurde 5.

const  newArray = numberArray.map()
//mapi sisse tuleb arrow function
//.map() =>{})
const newAddedArray = newNumberArray.map((n) => n + 5)