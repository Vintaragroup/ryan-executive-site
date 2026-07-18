import styles from './Scene07.module.css';

const ENTRIES = [
  {
    years: '2008-10',
    organization: 'Universal Studios',
    role: 'Production Associate',
    domain: 'THEME PARK OPERATIONS',
  },
  {
    years: '2010-12',
    organization: 'AMP Energy',
    role: 'Ops Lead',
    domain: 'EXPERIENTIAL MARKETING',
  },
  {
    years: '2012-15',
    organization: 'CAA',
    role: 'Creative Ops',
    domain: 'TALENT + BRAND PARTNERSHIPS',
  },
  {
    years: '2015-18',
    organization: 'Golden State Warriors',
    role: 'Dir. Innovation',
    domain: 'ARENA EXPERIENCE SYSTEMS',
  },
  {
    years: '2018-22',
    organization: 'Special Olympics',
    role: 'Chief Production',
    domain: 'INCLUSIVE SCALE OPERATIONS',
  },
  {
    years: '2022-26',
    organization: 'FIFA',
    role: 'Exec Ops & Production',
    domain: 'GLOBAL OPERATIONAL ARCHITECTURE',
  },
] as const;

export default function Scene07() {
  return (
    <section
      className={styles.scene}
      data-node-id="150:134 166:167 166:358"
      data-name="SCENE_7_JOURNEY"
      aria-label="Career trajectory"
    >
      <p className={styles.label}>{'// THE TRAJECTORY'}</p>

      <div className={styles.desktopTimeline}>
        {ENTRIES.map((entry, index) => (
          <div className={styles.desktopRow} key={entry.years}>
            <p className={styles.desktopYears}>{entry.years}</p>
            <div className={styles.desktopGraphic} aria-hidden="true">
              <div className={styles.dot} />
              {index < ENTRIES.length - 1 ? <div className={styles.desktopLine} /> : null}
            </div>
            <div className={styles.desktopContent}>
              <p className={styles.organizationDesktop}>{entry.organization}</p>
              <p className={styles.role}>{entry.role}</p>
              <p className={styles.domain}>{entry.domain}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.mobileTimeline}>
        {ENTRIES.map((entry, index) => (
          <div className={styles.mobileRow} key={entry.years}>
            <div className={styles.mobileGraphic} aria-hidden="true">
              <div className={styles.mobileDot} />
              {index < ENTRIES.length - 1 ? <div className={styles.mobileLine} /> : null}
            </div>
            <div className={styles.mobileContent}>
              <p className={styles.mobileYears}>{entry.years}</p>
              <p className={styles.organizationMobile}>{entry.organization}</p>
              <p className={styles.role}>{entry.role}</p>
              <p className={styles.domain}>{entry.domain}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}