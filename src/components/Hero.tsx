import { Links } from '@/config/links'
import Button from './Button'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.Hero} id="home">
      <div className={styles.Grid} aria-hidden />
      <div className={`${styles.Orb} ${styles.OrbOne}`}   aria-hidden />
      <div className={`${styles.Orb} ${styles.OrbTwo}`}   aria-hidden />
      <div className={`${styles.Orb} ${styles.OrbThree}`} aria-hidden />

      <div className={styles.Content}>
        <p className={styles.Eyebrow}>
          Open-source anticheat for Minecraft 1.19+
        </p>

        <h1 className={styles.Title}>
          <span className={styles.TitleMuted}>No such</span>
          <br />
          <span className={styles.TitleMuted}>thing as</span>
          <br />
          <span className={styles.TitleAccent}>hidden.</span>
        </h1>

        <p className={styles.Sub}>
          GraceAC pairs a rules-based detection pipeline with an ML sidecar.
          It catches blatant killaura, closet cheating, and ghost bypass configs.
          Free and open source.
        </p>

        <div className={styles.CtaGroup}>
          <Button href={Links.Modrinth} variant="primary" external>
            Modrinth
          </Button>
          <Button href={Links.Github} variant="secondary" external>
            GitHub
          </Button>
          <Button href={Links.Discord} variant="secondary" external>
            Discord
          </Button>
        </div>
      </div>

      <div className={styles.ScrollHint} aria-hidden>
        <div className={styles.ScrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
