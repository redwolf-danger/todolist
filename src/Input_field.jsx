import React from "react";
import { useState, useEffect, useRef } from "react";

const Input_field = ({access_id,set_id,todo_list,set_todo_list,display_completed,set_diplay_completed}) => {
  
  const default_message = "";


  let input_todo_field = useRef(); 
  const [todo_message, set_todo_message] = useState(default_message);

  //$  don't touch this function 
  const handle_todo_Change = (e) => {
    set_todo_message(e.target.value);
  };


 //$ update this function for handling enters
  const enter_for_todo_input = ()=>{
        let text = input_todo_field.current.value;
        console.log("text is ", text);
        let cur_id  = access_id();
        console.log("adding id ",cur_id);
        let todo_obj = {
            todo_id: cur_id,
            todo_text: text,
            completed: false
        }; 
        console.log("prev todo list was ",todo_list);
        console.log("saving obj ",{...todo_list,[cur_id] : todo_obj});

        //$ created object and stored
        localStorage.setItem("todo_list",JSON.stringify({...todo_list,[cur_id] : todo_obj}));
        console.log("saved IN LOCAL");
        set_todo_list({...todo_list,[cur_id] : todo_obj})
        console.log("also updated set_todo_list\n");
        set_id(cur_id+1);
        // console.log("access_id is now: ",access_id());        
        set_todo_message(default_message);
  };

  //$ enter key event
  
  const handle_input_enter =  (e)=>{
    if(e.key == "Enter"){
        enter_for_todo_input();
    };
  };
  //!$ save btn onclick event
  const save_btn_event =  (e)=>{
    //handle updation event
    enter_for_todo_input();
  }; 

  return (
    <div className="flex flex-col items-center border border-green-500 gap-5">

    <div className="heading_box text-center">
      <h2 className ="text-2xl font-bold">iTask - Manage your todos at one place</h2>
    </div>


      <div className=" flex flex-col items-center input_div  w-full">
        <h3 className="text-1xl font-bold">Add a Todo</h3>


        <div className="input_details flex flex-row items-center justify-center gap-4 w-full">
          <input
          className="border text-center p-1 border-gray-500 rounded-lg w-9/12 "
          ref = {input_todo_field}
            type="text"
            placeholder="enter your todo here"
            value={todo_message}
            onChange={handle_todo_Change}
            onKeyDown={handle_input_enter}
          />
          <button className="border-2  border-black  rounded-lg py-1 px-1.5 bg-blue-500 text-white " onClick={save_btn_event}>Save</button>
        </div>


      </div>

      <div className="flex gap-2 items-center justify-center">
        <input type="checkbox" id="show_completed_btn" onClick={()=>{
            console.log("prev display was ",display_completed);
            set_diplay_completed(!display_completed); 
        }}/>
        <label htmlFor="show_completed_btn">Show Completed Todos</label>
      </div>
    </div>
  );
};

export default Input_field;



