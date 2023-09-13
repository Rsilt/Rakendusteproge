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

//const  newArray = numberArray.map()
//mapi sisse tuleb arrow function
//.map() =>{})
const newAddedArray = newNumberArray.map((element) => element + 5)
//element on array osa, map käib iga elemendi läbi annab callbacki ja siis votab jargmise elemendi
const newArray = numberArray.map((element,index, array) => {
    console.log({
    element: element,
    newElement: element +5,
    "index": index,
    array
    })
    return element +5
}


//filter kõik numbrid väiksemad kui 4 

const filteredArray = numberArray.filter(element => element < 4)

console.log({numberArray, filteredArray})


// mapi kasutades teha Juku, vanus on juku nimetähtede arv+ 20, email on eesnimi väiksetähega+ @company.com,
// aadress on eesnimi Street ja suvaline number ja username on nimi tagurpidi

const names = ["Juku", "Mai", "Jaanus", "Anni"]

const data = names.map(name => {
    return {
        name: name,
        age: name.length + 20,
        email: `${name.toLowerCase}@company.com`,
        address: `${name} Street 35`,
        username: name.split("").reverse().join("")
    }
})
console.log(data)

//tahan lisada juurde Juku pikkuse

const newJuku ={
    ...data[0],
    height: 175
}
console.log({newJuku})

//Tahan muuta juku vanust

const evenNewerJuku={
    ...NewJuku1,
    age:27
}
console.log({newJuku, evenNewerJuku})