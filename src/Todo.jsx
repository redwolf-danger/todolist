import React, { useRef, useState } from "react";

const Todo = ({todo_text, todo_id, delete_function, update_function}) => {
 
    let inputref = useRef();
    const [display_text, set_display_text] = useState(todo_text);
    const update = useRef(false);
    //if true i can update else i can't
    const change_button_clicked = ()=>{
        console.log("toggling classes\n");
        inputref.current.classList.toggle("caret-transparent");
        inputref.current.classList.toggle("outline-none");
        update.current = true;
        inputref.current.focus();
    };
    const handle_input_change = (e)=>{
        if(update.current == true){
            set_display_text(e.target.value);
        };
    };
    const handle_key_event  = (e)=>{
        // console.log("key is ",e.key);
        // console.log("display text is ",display_text);
        if(e.key == 'Enter'){
            console.log("enter clicked\n");
            change_button_clicked();
        };
    };

    return (
    <div className="flex p-2 border-2 border-green-600 gap-2 justify-between">
      <input
        ref = {inputref}
        className="w-9/12 caret-transparent outline-none" 
        // caret-transparent outline-none
        type="text"
        name="todo_item"
        autoComplete="off"
        value={display_text}
        id={todo_id}
        key={todo_id}
        onChange={handle_input_change}
        onKeyDown={handle_key_event}
      />
      {/* //button for trash */}
      <button className="flex items-center justify-center bg-blue-200 p-2 border border-black rounded">
        <svg
          style={{ height: "15px", width: "15px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
      </button>
    {/* //button for change */}
      <button className="flex items-center justify-center bg-blue-200 p-2 border border-black rounded" onClick={change_button_clicked}>
        <svg
          fill="#000000"
          height="15px"
          width="15px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 282.837 282.837"
          xmlSpace="preserve"
        >
          <g>
            <path
              d="M19.539,246.006c-1.412-1.413-2.995-2.159-4.576-2.159c-2.361,0-4.33,1.676-5.266,4.482l-9.24,27.723
		c-0.701,2.103-0.591,3.95,0.309,5.201c0.736,1.021,1.959,1.584,3.443,1.584c0.79,0,1.655-0.155,2.571-0.461l27.722-9.241
		c2.36-0.786,3.907-2.267,4.355-4.167c0.448-1.9-0.273-3.916-2.032-5.675L19.539,246.006z"
            />
            <path
              d="M280.205,48.279L234.553,2.627C232.86,0.934,230.599,0,228.189,0c-2.41,0-4.67,0.934-6.363,2.627L51.892,172.561
		c-3.212,3.212-6.993,9.33-8.429,13.638l-7.417,22.252c-1.503,4.508,0.008,10.909,3.368,14.27l20.697,20.697
		c2.403,2.403,6.48,3.957,10.388,3.957c0,0,0,0,0.001,0c1.404,0,2.71-0.198,3.881-0.589l22.253-7.417
		c4.309-1.436,10.426-5.217,13.637-8.428L280.205,61.007C283.714,57.498,283.714,51.788,280.205,48.279z M252.535,70.896
		L166.8,156.631c-2.929,2.929-6.768,4.393-10.607,4.393s-7.678-1.465-10.606-4.393c-5.858-5.857-5.858-15.355,0-21.213
		l85.735-85.735c5.857-5.857,15.355-5.857,21.213,0C258.393,55.54,258.393,65.038,252.535,70.896z"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Todo;

//todo: 