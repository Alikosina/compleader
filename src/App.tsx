import InfoList from "./components/InfoList";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Замечания и рекомендации</h1>
      <InfoList />
    </div>
  );
}

export default App;
