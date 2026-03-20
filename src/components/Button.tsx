import styles from './Button.module.css'

interface ButtonProps {
  href: string
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  external?: boolean
}

export default function Button({
  href,
  variant = 'primary',
  children,
  external = false,
}: ButtonProps) {
  const ExternalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <a
      href={href}
      className={variant === 'primary' ? styles.Primary : styles.Secondary}
      {...ExternalProps}
    >
      {children}
    </a>
  )
}
