import { Links } from '@/config/links'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <span className={styles.Copy}>2025 GraceAC - Open Source</span>

      <nav className={styles.FooterLinks} aria-label="Footer navigation">
        <a href={Links.Modrinth} target="_blank" rel="noopener noreferrer">
          Modrinth
        </a>
        <a href={Links.Github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={Links.Discord} target="_blank" rel="noopener noreferrer">
          Discord
        </a>
      </nav>
    </footer>
  )
}
