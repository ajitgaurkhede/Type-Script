function add(n1, n2, showResult, msg) {
    /*
      if(typeof n1 !== 'number' || typeof n2 !== 'number'){
          throw new Error('Incorrect Input!');
      }
  
  */
    //console.log(typeof n1);
    var result = n1 + n2;
    if (showResult)
        console.log(msg + result);
    else
        return n1 + n2;
}
var num1 = 55; //55.0 default float all numbers
var num2 = 10.8;
var showResult = true;
var msg = "result is :";
// console.log(add(num1,num2,showResult,msg));
//object
/* const person:{
       name: string,
       age: number
   } = {
    name : "Maxwell",
    age: 30
   };
   console.log(person.name);
*/
/* const person = {
  name: "Maxwell",
  age: 30,
  hobbies:['Sports','Cooking'],
  role: [2,'admin'] // tuple [number, string]
};
//console.log(person.name);
//let favoriteActivities: any[]; // mix array
let favoriteActivities: string[];
favoriteActivities = ['Sports'];
console.log(person.name);
    for(const hobby of person.hobbies){
        console.log(hobby.toUpperCase());
        //console.log(hobby.map()); error map doesnt exist on string
    }
 */
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Maxwell",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (person.role === Role.AUTHOR)
    console.log('is author');
