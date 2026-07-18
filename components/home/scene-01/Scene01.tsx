import Image from 'next/image';
import styles from './Scene01.module.css';

const ROLE_TEXT =
  'Executive Marketing Operations · Brand Experience · Operational Transformation';
const METADATA_TEXT = 'MIA → JFK → DOH // BUILD WEEK 47 · VENUE 09';

export default function Scene01() {
  return (
    <section
      className={styles.scene}
      data-node-id="150:5 166:6 166:247"
      data-name="SCENE_1_OPENING"
      aria-label="Opening scene"
    >
      <Image
        src="/images/home/scene-01/background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.overlay} aria-hidden="true" />

      <p className={styles.metadata}>{METADATA_TEXT}</p>

      <div className={styles.titleBlock}>
        <p className={styles.name}>Ryan Morrow</p>
        <p className={styles.role}>{ROLE_TEXT}</p>
      </div>
    </section>
  );
}
