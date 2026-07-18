import Image from 'next/image';
import styles from './Scene03.module.css';

export default function Scene03() {
  return (
    <section
      className={styles.scene}
      data-node-id="150:18 166:21 166:259"
      data-name="SCENE_3_SILENCE"
      aria-label="Silence scene"
    >
      <Image
        src="/images/home/scene-03/silence.png"
        alt=""
        fill
        sizes="100vw"
        className={styles.image}
      />
    </section>
  );
}
