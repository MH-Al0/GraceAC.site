import type { Metadata } from 'next'
import Nav    from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About - GraceAC',
  description: 'The story behind GraceAC. A rules-based and ML anticheat for Minecraft 1.19+.',
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className={styles.Main}>
        <div className={styles.Inner}>

          <header className={styles.Header}>
            <p className={styles.Eyebrow}>About</p>
            <h1 className={styles.Title}>
              Built because<br />
              <span className={styles.TitleAccent}>nothing was good enough.</span>
            </h1>
          </header>

          <section className={styles.Block}>
            <h2 className={styles.BlockTitle}>The problem</h2>
            <p className={styles.BlockText}>
              Most anticheats handle obvious cheating fine. KillAura at 10 CPS,
              fly hacks, blatant scaffold, those get caught. The real problem is
              ghost cheating. Bypass configs that mimic real movement, subtle reach
              offsets, timing manipulation sitting just under every threshold.
              Rules alone cannot catch what was designed to evade them.
            </p>
          </section>

          <section className={styles.Block}>
            <h2 className={styles.BlockTitle}>The architecture</h2>
            <p className={styles.BlockText}>
              GraceAC runs two layers in parallel. The rules-based pipeline operates
              at the Velocity proxy level, intercepting packets before they reach your
              backend and firing deterministic checks against known cheat signatures.
              Reach, killaura, velocity abuse, scaffold and more, all tunable per server.
            </p>
            <p className={styles.BlockText}>
              The ML sidecar runs alongside it, trained on labeled movement and combat
              packet logs from real servers. It targets ghost configs specifically.
              LiquidBounce bypass patterns, humanised aim, behaviour that scores clean
              on rules but statistically diverges from legitimate play.
            </p>
          </section>

          <section className={styles.Block}>
            <h2 className={styles.BlockTitle}>Open source</h2>
            <p className={styles.BlockText}>
              The core detection checks and Velocity plugin are open source.
              The ML model weights stay closed, not out of secrecy, but because
              publishing them hands cheat developers a direct target to optimise against.
              Everything else is reviewable. If you cannot read it, you should not run it.
            </p>
          </section>

          <section className={styles.PillsBlock}>
            {[
              'Velocity Proxy Plugin',
              'Complete and stable Detection Checks',
              'ML Ghost Sidecar',
              'Discord Webhook Alerts',
              'Punishment System',
              '1.19+ Support',
            ].map((P) => (
              <div className={styles.Pill} key={P}>
                <span className={styles.PillPip} />
                {P}
              </div>
            ))}
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
