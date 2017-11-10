// function toDo(myTodo: {task: string, priority: number}){
//         return myTodo.task+ ' '+ myTodo.priority;
// }   
function toDo(myTodo) {
    return myTodo.task + ' ' + myTodo.priority;
}
var myTodo = { task: 'first', priority: 4 };
console.log(toDo(myTodo));
