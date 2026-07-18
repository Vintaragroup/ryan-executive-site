import styles from './Scene09.module.css';

export default function Scene09() {
  return (
    <section
      className={styles.scene}
      data-node-id="150:190 166:229 166:420"
      data-name="SCENE_9_CLOSE"
      aria-label="Contact and footer"
    >
      <div className={styles.ctaBlock}>
        <p className={styles.heading}>{"Let's discuss what's next."}</p>
        <div className={styles.links}>
          <a className={styles.link} href="mailto:office@ryanmorrow.com">
            OFFICE@RYANMORROW.COM
          </a>
          <a className={styles.link} href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LINKEDIN
          </a>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.rule} />
        <div className={styles.footerContent}>
          <div className={styles.footerMeta}>
            <p className={styles.footerPrimary}>{'© 2026 RYAN MORROW EXECUTIVE'}</p>
            <p className={styles.footerSecondary}>{'LONDON / NYC / SYDNEY'}</p>
            <p className={styles.footerTertiary}>{'Currently: Los Angeles · New York · Advisory'}</p>
          </div>
          <p className={styles.footerPrimary}>{'Currently accepting select advisory engagements.'}</p>
        </div>
      </div>
    </section>
  );
}