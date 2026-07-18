import { GlobalNav } from '@/components/navigation';
import styles from './Scene02.module.css';

const DESKTOP_STATEMENT_LINES = [
  'I build the operational',
  'systems that transform',
  'ambitious ideas into',
  'extraordinary experiences.',
];
const RESPONSIVE_STATEMENT_LINES = [
  'I build the operational',
  'systems that transform',
  'ambitious ideas into',
];
const META_COPY =
  '16 cities · 3 nations · 32+ vendors · 1,200+ production staff · 48-month timeline';

export default function Scene02() {
  return (
    <section
      className={styles.scene}
      data-node-id="150:9 166:11 166:252"
      data-name="SCENE_2_STATEMENT"
      aria-label="Statement scene"
    >
      <GlobalNav ariaLabel="Homepage" />

      <div className={styles.statementDesktop}>
        {DESKTOP_STATEMENT_LINES.map((line) => (
          <p className={styles.statementLine} key={line}>
            {line}
          </p>
        ))}
      </div>

      <div className={styles.statementResponsive}>
        {RESPONSIVE_STATEMENT_LINES.map((line) => (
          <p className={styles.statementLine} key={line}>
            {line}
          </p>
        ))}
        <p className={styles.statementLine}>
          <span className={styles.highlight}>extraordinary</span>
          <span> experiences.</span>
        </p>
      </div>

      <p className={styles.metadata}>{META_COPY}</p>
    </section>
  );
}
