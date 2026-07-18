import styles from './Scene06.module.css';

const MODULES = [
  {
    title: 'BRAND SYSTEMS',
    tag: 'DATA FLOW →',
    copyDesktop: 'Identity deployment across 16 venues, 200+ touchpoints, 47 languages.',
    copyMobile: 'Identity deployment across 16 venues, 200+ touchpoints, 47 languages.',
  },
  {
    title: 'OPERATIONAL SYSTEMS',
    tag: 'GOVERNANCE →',
    copyDesktop: 'Vendor orchestration engine — 32 partners, 3 nations, one timeline.',
    copyMobile: 'Vendor orchestration engine — 32 partners, 3 nations, one timeline.',
  },
  {
    title: 'TECHNOLOGY SYSTEMS',
    tag: 'DATA FLOW →',
    copyDesktop: 'Real-time dashboards, credential platforms, production tracking at global scale.',
    copyMobile: 'Real-time dashboards, credential platforms, production tracking at global scale.',
  },
  {
    title: 'PRODUCTION SYSTEMS',
    tag: 'ESCALATION →',
    copyDesktop: 'Environmental fabrication, LED integration, logistics routing across host cities.',
    copyMobile: 'Environmental fabrication, LED integration, logistics routing across host cities.',
  },
  {
    title: 'LEADERSHIP SYSTEMS',
    tag: 'GOVERNANCE →',
    copyDesktop: 'Executive visibility frameworks, decision escalation protocols, clarity under pressure.',
    copyMobile: 'Executive visibility frameworks, decision escalation protocols.',
  },
] as const;

export default function Scene06() {
  return (
    <section
      className={styles.scene}
      data-node-id="150:110 166:133 166:324"
      data-name="SCENE_6_OS"
      aria-label="Operating systems"
    >
      <p className={styles.label}>{'// THE OPERATING SYSTEM'}</p>

      <div className={styles.stack}>
        {MODULES.map((module) => (
          <div className={styles.module} key={module.title}>
            <div className={styles.moduleHeader}>
              <p className={styles.moduleTitle}>{module.title}</p>
              <p className={styles.moduleTag}>{module.tag}</p>
            </div>
            <div className={styles.rule} />
            <p className={styles.copyDesktop}>{module.copyDesktop}</p>
            <p className={styles.copyMobile}>{module.copyMobile}</p>
          </div>
        ))}
      </div>
    </section>
  );
}