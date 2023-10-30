import styles from "./SectionTitles.module.css";

function SectionTitles(props) {
  const alineacion = {
    textAlign: props["text-align"],
  };

  return (
    <div>
      <h3 className={styles["header-tertiary"]} style={alineacion}>
        {props["header-tertiary"]}
      </h3>
      <h2 className={styles["header-secondary"]} style={alineacion}>
        {props["header-secondary"]}
      </h2>
    </div>
  );
}

export default SectionTitles;
