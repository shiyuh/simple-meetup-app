import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1> My TODO </h1>
      <Todo title="Review React" />
      <Todo title="Prep for interviews" />
    </div>
  );
}

export default App;
