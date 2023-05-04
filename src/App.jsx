import Counter from "./components/Counter";
import styles from"./App.module.css"
import Greeting from "./components/Greeting";
function App() {
  return (
    <div class={styles.App}>
      <Greeting/>
    </div>
  );
}

export default App;
