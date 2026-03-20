'use client'

import Link from 'next/link'
import { Links } from '@/config/links'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.Nav}>
      <Link href="/" className={styles.Wordmark}>
        <span className={styles.WordmarkPip} />
        GraceAC
      </Link>

      <ul className={styles.NavLinks}>
        <li><a href="#features">Detection</a></li>
        <li><a href="#how">How it works</a></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/dev">Dev notes</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      <a
        href={Links.Discord}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.NavCta}
      >
        Discord
      </a>
    </nav>
  )
}
