import { ERROR_PROJECT, ERROR_TASK, LOADING_PROJECT, LOADING_TASK, SUCCESS_PROJECT, SUCCESS_TASK } from "./actionType"

const appState= {
    loading: false,
    error: false,
    loading_task: false,
    error_task: false,
    projectList:[],
    taskList:[],
}

export const appReducer=(state= appState,{type, payload})=>{
switch (type){
 case LOADING_PROJECT:{
    return {...state,
        loading:true
    }
 }

 case ERROR_PROJECT:{
    return {...state,
        error:true,
        loading:false
    }
 }

 case SUCCESS_PROJECT :{
    return {...state,
        loading:false,
        error: false,
        projectList: payload
    }
 }

 case LOADING_TASK:{
    return {...state,
        loading_task:true
    }
 }

 case ERROR_TASK:{
    return {...state,
        error_task:true,
        loading_task:false
    }
 }

 case SUCCESS_TASK :{
    
    return {
      ...state,
      loading_task: false,
      error_task: false,
      taskList: payload,
    };
  
 }
 
 default: {
    return state
 }
}
}