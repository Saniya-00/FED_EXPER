import { useState } from "react";

function App() {
  return (
    <div>
      <h1>To Do List</h1>
      <form>
        <input type="text" placeholder="Enter the new task" />
        <input type="date" />
        <input type="time" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
