import { useState } from "react";

const ToDo = () => {
  const [todo, setTodo] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [curr, setCurr] = useState("");

  const onSubmit = () => {
    setTodo(prev => [...prev, curr]);
    setCurr("");
  }

  const removeFromToDo = (item) => {
    setTodo(prev => prev.filter((i) => i != item));
  }

  const markComplete = (item) => {
    setCompleted(prev => [...prev, item]);
  }


  const removeFromCompleted = (item) => {
    setCompleted(prev => prev.filter((i) => i != item))
  }

  return (
    <div className="h-[100vh] text-white w-[100vw] bg-gray-700 gap-6 flex flex-col items-center pt-12">
      {/* Head */}
      <h1 className="text-2xl w-fit">📄To-Do List</h1>

      {/* Input box */}
      <div className="hover:border-2 flex gap-4 h-fit w-fit p-4 rounded-md bg-gray-500">
        <span>✅Add a task</span>
        <input value={curr}  onChange={(e) => setCurr(e.target.value)} placeholder="Try Writing 'Buy Milk' " className="bg-transparent outline-none"></input>
        <button onClick={() => onSubmit()}>➡️</button>
      </div>
      {/* To Do List */}
      {todo.length != 0 && <p>To-Do</p>}
      
      <div className="flex flex-col gap-2 w-[90%] md:w-[50%] lg:w-[30%]">
        {
          todo.map((item) => (<span onClick={(e) => markComplete(item)} className="flex cursor-pointer justify-between px-6 py-3 bg-yellow-500/20 hover:bg-yellow-500/30 rounded-md"><p>📥&nbsp;&nbsp;{item}</p><button onClick={(e) => {e.stopPropagation();removeFromToDo(item)}}>❌</button></span>))
        }
      </div>

      {/* Completed List */}
      {
        completed.length != 0 && <div>Completed Tasks</div>
      }
      <div className="flex flex-col gap-2 w-[90%] md:w-[50%] lg:w-[30%]">
        { completed.length != 0 &&
          completed.map((item) => (<span className="flex justify-between px-6 py-3 bg-green-500/20 hover:bg-green-500/30 rounded-md"><p>✅&nbsp;&nbsp;{item}</p><button onClick={() => removeFromCompleted(item)}>❌</button></span>))
        }
      </div>
    </div>
  )
}

export default ToDo;