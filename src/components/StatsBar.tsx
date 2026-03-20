'use client'

import { useRevealChildren } from './useReveal'
import styles from './StatsBar.module.css'

const StatItems = [
  { Num: '11',    Label: 'Detection Checks' },
  { Num: '1.19+', Label: 'Minecraft Support' },
  { Num: 'ML',    Label: 'Ghost Sidecar'     },
  { Num: 'Free',  Label: 'Open Source'       },
] as const

export default function StatsBar() {
  const Ref = useRevealChildren('[data-stat]')

  return (
    <div className={styles.Stats} ref={Ref as React.RefObject<HTMLDivElement>}>
      {StatItems.map(({ Num, Label }) => (
        <div className={styles.StatItem} data-stat key={Label}>
          <span className={styles.StatNum}>{Num}</span>
          <span className={styles.StatLabel}>{Label}</span>
        </div>
      ))}
    </div>
  )
}
