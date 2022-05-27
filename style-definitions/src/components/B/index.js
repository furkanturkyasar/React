import styles from "./style.module.css";
// Bu kadar ugras yerine css import etmek daha mantikli geldi
function B() {
  return <div className={styles.title}>B</div>;
}

export default B;
