// function toDo(myTodo: {task: string, priority: number}){
//         return myTodo.task+ ' '+ myTodo.priority;
// }   

// let myTodo = {task: 'first task', priority: 4};
// console.log(toDo(myTodo));

interface toDoType{
        task: string;
        priority: number;
} 

function  toDo(myTodo: toDoType){
      return myTodo.task+ ' '+ myTodo.priority;  
}                       

let myTodo = {task: 'first', priority: 4};

console.log(toDo(myTodo));
//interfaces
//abstraction
//inheritance
//overloading
//over riding
//type conversions
