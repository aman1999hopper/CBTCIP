import TaskList from './components/TaskList';
import Todos from './components/Todos';
import './App.css';
import { motion } from "framer-motion";
import './css/main.css';

function App() {
  return  (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <TaskList />
      </motion.div>
    </div>
  );
}

export default App;
