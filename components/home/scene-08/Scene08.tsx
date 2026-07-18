import styles from './Scene08.module.css';

const DESKTOP_LINES = [
  '"The work that matters most',
  'is the work nobody sees.',
  'The system that runs so well',
  'it becomes invisible.',
  'That is the highest form',
  'of operational excellence."',
] as const;

export default function Scene08() {
  return (
    <section
      className={styles.scene}
      data-node-id="150:185 166:224 166:415"
      data-name="SCENE_8_PHILOSOPHY"
      aria-label="Operating philosophy"
    >
      <div className={styles.block}>
        <div className={styles.divider} />

        <div className={styles.desktopQuote}>
          {DESKTOP_LINES.map((line) => (
            <p className={styles.desktopLine} key={line}>
              {line}
            </p>
          ))}
        </div>

        <p className={styles.mobileQuote}>
          {'"The work that matters most is the work nobody sees. The system that runs so well it becomes invisible."'}
        </p>

        <p className={styles.attribution}>{'RYAN MORROW'}</p>
      </div>
    </section>
  );
}