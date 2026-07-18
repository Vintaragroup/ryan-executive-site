import styles from './Scene04.module.css';

const CLIENTS = [
  ['FIFA', '2022–2026'],
  ['Universal Studios', '2008–2010'],
  ['Golden State Warriors', '2015–2018'],
  ['CAA', '2012–2015'],
  ['Special Olympics', '2018–2022'],
  ['iON Creative Studios', '2015–2018'],
  ['Datavault', '2021–2022'],
];

export default function Scene04() {
  return (
    <section
      className={styles.scene}
      data-node-id="150:19 166:22 166:260"
      data-name="SCENE_4_NAMES"
      aria-label="Client names"
    >
      <div className={styles.sectionLabel}>
        <p className={styles.labelText}>{'// ORGANIZATIONS'}</p>
      </div>

      <div className={styles.desktopGrid}>
        {CLIENTS.map(([name, label]) => (
          <div className={styles.desktopRow} key={name}>
            <p className={styles.desktopName}>{name}</p>
            <p className={styles.desktopPeriod}>{label}</p>
          </div>
        ))}
      </div>

      <div className={styles.responsiveGrid}>
        {CLIENTS.map(([name, period]) => (
          <div className={styles.responsiveRow} key={name}>
            <p className={styles.responsiveName}>{name}</p>
            <p className={styles.responsivePeriod}>{period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
