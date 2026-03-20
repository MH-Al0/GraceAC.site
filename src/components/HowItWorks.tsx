'use client'

import { useRevealChildren } from './useReveal'
import styles from './HowItWorks.module.css'

const Steps = [
  {
    Num: '01',
    Title: 'Install',
    Desc: 'Drop the Grace plugin into your Velocity proxy plugins folder. No backend changes needed. Proxy-level interception from day one.',
  },
  {
    Num: '02',
    Title: 'Configure',
    Desc: 'Tune thresholds for your playerbase. Set up Discord webhook alerts and define your punishment ladder. Warn, kick, or ban on your terms.',
  },
  {
    Num: '03',
    Title: 'Rest easy',
    Desc: 'Rules-based checks fire instantly. The ML sidecar flags ghost configs in the background. You get notified. Cheaters get removed.',
  },
] as const

export default function HowItWorks() {
  const Ref = useRevealChildren('[data-reveal]')

  return (
    <section
      className={styles.Section}
      id="how"
      ref={Ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.Inner}>
        <p className={styles.Eyebrow}>Setup</p>
        <h2 className={styles.Title}>
          Three steps<br />to a cleaner server.
        </h2>
        <p className={styles.Sub}>
          Grace runs on Velocity. Drop the plugin in, configure thresholds once,
          and it runs silently in the background.
        </p>

        <div className={styles.Steps}>
          {Steps.map((Step, Idx) => (
            <div
              className={styles.Step}
              data-reveal
              style={{ transitionDelay: `${Idx * 0.1}s` }}
              key={Step.Num}
            >
              <span className={styles.StepNum} aria-hidden>{Step.Num}</span>
              <h3 className={styles.StepTitle}>{Step.Title}</h3>
              <p className={styles.StepDesc}>{Step.Desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
