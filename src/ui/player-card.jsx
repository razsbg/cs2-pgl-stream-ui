import styles from "./player-card.module.css";

export function Player({
  isSelected,
  faction,
  name,
  isAlive,
  money,
  stats: { kills, deaths, hp, adr },
  inventory: {
    firearm,
    sidearm,
    grenades: { he, flashbang, incendiary, smoke, decoy },
    defuseKit,
    armor,
  },
}) {
  return (
    <div
      className={`${styles["player"]} ${faction === "ct" ? "ct" : "t"} ${isAlive ? "alive" : ""} ${
        isSelected ? "selected" : ""
      }`}
    >
      <div className={styles["container"]}>
        <div>
          <p className={styles["name"]}>{name}</p>
          <p className={styles["money"]}>${money}</p>
        </div>
        <div className={styles["stats"]}>
          <p>
            <span className={styles["kills"]}>{kills}</span>
            <span className={styles["deaths"]}>{deaths}</span>
          </p>
          <p>
            <span className={styles["defuse-kit"]}>{defuseKit}</span>
            <span className={styles["smoke"]}>{smoke}</span>
            <span className={styles["fb"]}>{flashbang}</span>
            <span className={styles["he"]}>{he}</span>
          </p>
        </div>
      </div>
      <div className={styles["accent"]}>
        <div>
          <span className={styles["hp"]}>{hp}</span>
          <span className={styles["armor"]}>{armor}</span>
        </div>

        <span className={styles["gun"]}>{firearm ?? sidearm}</span>
      </div>
    </div>
  );
}
