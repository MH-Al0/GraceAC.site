'use client'

import { useRevealChildren } from './useReveal'
import styles from './Features.module.css'

const RulesChecks = [
  'KillAura', 'Reach', 'Velocity Abuse',
  'Scaffold', 'Speed', '+6 more',
] as const

const MlChecks = [
  'LiquidBounce bypass', 'Pattern analysis',
  'Movement entropy',    'Combat timing',
] as const

export default function Features() {
  const Ref = useRevealChildren('[data-reveal]')

  return (
    <section
      className={styles.Features}
      id="features"
      ref={Ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.Inner}>
        <p className={styles.Eyebrow}>Detection</p>
        <h2 className={styles.Title}>
          Two layers.<br />Zero blind spots.
        </h2>
        <p className={styles.Sub}>
          Rules catch what is obvious. ML catches what is not.
          Together they cover every player, from blatant cheaters to ghost bypass configs.
        </p>

        <div className={styles.Grid}>
          <div className={styles.Col} data-reveal>
            <span className={styles.Tag}>Rules-based</span>
            <h3 className={styles.ColTitle}>Blatant and Closet Detection</h3>
            <p className={styles.ColDesc}>
              A deterministic pipeline built on packet-level analysis.
              Every check is tunable per server. A 500-player SMP and a 20-player
              PvP arena do not share the same thresholds, and they should not have to.
            </p>
            <div className={styles.CheckGrid}>
              {RulesChecks.map((Check) => (
                <div className={styles.CheckPill} key={Check}>
                  <span className={styles.CheckPip} />
                  {Check}
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.Col} ${styles.ColGhost}`} data-reveal>
            <span className={`${styles.Tag} ${styles.TagGhost}`}>ML Sidecar</span>
            <h3 className={styles.ColTitle}>Ghost Cheating Detection</h3>
            <p className={styles.ColDesc}>
              A trained model that runs alongside the rules layer.
              It targets ghost configs like LiquidBounce bypasses, the ones that look
              human until they do not. Trained on labeled movement and combat packet logs
              from real servers.
            </p>
            <div className={styles.CheckGrid}>
              {MlChecks.map((Check) => (
                <div className={styles.CheckPill} key={Check}>
                  <span className={styles.CheckPip} />
                  {Check}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
