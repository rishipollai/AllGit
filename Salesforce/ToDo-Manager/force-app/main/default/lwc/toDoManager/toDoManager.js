import { LightningElement, track } from 'lwc';
import addTodo from "@salesforce/apex/ToDoController.addTodo"
import getCurrentTodos from "@salesforce/apex/ToDoController.getCurrentTodos"



export default class ToDoManager extends LightningElement {
    time="8:50 PM";
    greeting= "Good Evening !!";
    @track todos = [];

    

    connectedCallback(){
        this.getTime();
        this.fetchTodos();
       
        setInterval(()=>{
             this.getTime();
        },1000*60)
    }

    getTime(){
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();

        this.time = `${this.getHour(hour)}:${this.getDoubleDigit(min)} ${this.getMidDay(hour)}`;
        this.setGreeting(hour);
    }

    getHour(hour){
        return hour === 0 ? 12 : hour>12 ? (hour-12):hour;
    }

    getMidDay(hour){
        return hour>=12 ? "PM" : "AM";
    }

    getDoubleDigit(digit){
       return digit<10 ? "0"+digit : digit;
    }

    setGreeting(hour){
        if(hour<12){
            this.greeting = "Good Morning !!";
        }
        else if(hour>=12 && hour<17){
            this.gretting = "Good Afternoon !!";
        }
        else{
            this.greeting = "Good Evening !!";
        }
    }

    addTodoHandler(){
        const inputBox = this.template.querySelector("lightning-input");
        // console.log("input box value = ",inputBox.value);
        const todo ={
            todoName:inputBox.value,
            done: false
        }

        addTodo({payload: JSON.stringify(todo)}).then(response=>{
            console.log("item inserted successfully !!");
            this.fetchTodos();
        }).catch(error=>{
            console.log("error in inserting !!"+error)
        });
        
        // this.todos.push(todo);
        inputBox.value = "";
    }

    fetchTodos(){
        getCurrentTodos().then(result=>{
            console.log("length of todo list :", result.length);
            this.todos=result;

        }).catch(error=>{
            console.log("Error in fatching todos !!",error);
        })
    }

    updateHandler(){
        this.fetchTodos();
    }

    deleteHandler(){
        this.fetchTodos();
    }

    get upcomingTasks(){
        return this.todos && this.todos.length ? this.todos.filter(todo=>!todo.done):[];
    }

    get completedTasks(){
        return this.todos && this.todos.length ? this.todos.filter(todo=>todo.done):[];
    }
}