import { Links } from '@/config/links'
import Button from './Button'
import styles from './CtaBanner.module.css'

export default function CtaBanner() {
  return (
    <div className={styles.Banner}>
      <div className={styles.Glow} aria-hidden />

      <h2 className={styles.Title}>Ready to run Grace?</h2>
      <p className={styles.Sub}>
        Download from Modrinth, review the source on GitHub,
        or reach out on Discord for help with thresholds or custom plugin work.
      </p>

      <div className={styles.CtaGroup}>
        <Button href={Links.Modrinth} variant="primary" external>
          Get on Modrinth
        </Button>
        <Button href={Links.Discord} variant="secondary" external>
          Discord
        </Button>
        <Button href={Links.Github} variant="secondary" external>
          GitHub
        </Button>
      </div>
    </div>
  )
}
