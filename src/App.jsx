import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [curr, setCurr] = useState("");

  const onSubmit = () => {
    setTodo(prev => [...prev, curr]);
    setCurr("");
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
      <p>{todo.length === 0 ? "No Task Defined" : "To-Do"}</p>
      {
        todo.map((item) => <p>{item}</p>)
      }
    </div>
  )
}

export default App;