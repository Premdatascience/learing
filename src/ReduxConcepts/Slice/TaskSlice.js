import { createSlice } from "@reduxjs/toolkit";
import { map } from "jquery";


const initialState={
    taskslist:[],
    selectedTask:{}
}


const TaskSlice=createSlice({
    name:"TaskSlice",
    initialState,
    reducers:{
        addTasktoList:(state,action)=>{
           const id =Math.random()*100
           let task ={...action.payload,id}
           state.taskslist.push(task)
            
        },
        removeFromList:(state,action)=>{
            state.taskslist=state.taskslist.filter((task)=>task.id !== action.payload.id)
        },
        updateTask:(state,action)=>{
            state.taskslist=state.taskslist.map((task)=>task.id===action.payload.id?action.payload:task)
        },

        setSelectedTask:(state,action)=>{
            state.selectedTask=action.payload
        }


    }
})

export const {addTasktoList,updateTask,removeFromList,setSelectedTask}=TaskSlice.actions
export default  TaskSlice.reducer