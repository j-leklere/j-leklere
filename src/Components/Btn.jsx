import styles from "./Btn.module.css";

function Btn(props) {
  const display = {
    display: props.display,
  };

  return (
    <button className={styles.btn} style={display}>
      <a href={props.href}>
        <p>{props.title}</p>
      </a>
    </button>
  );
}

export default Btn;
