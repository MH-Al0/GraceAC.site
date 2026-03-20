'use client'

import { useEffect, useRef } from 'react'

export function useReveal() {
  const Ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const El = Ref.current
    if (!El) return

    const Obs = new IntersectionObserver(
      ([Entry]) => {
        if (Entry.isIntersecting) {
          Entry.target.classList.add('visible')
          Obs.unobserve(Entry.target)
        }
      },
      { threshold: 0.15 }
    )

    Obs.observe(El)
    return () => Obs.disconnect()
  }, [])

  return Ref
}

export function useRevealChildren(Selector = '[data-reveal]') {
  const ContainerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const Container = ContainerRef.current
    if (!Container) return

    const Els = Container.querySelectorAll<HTMLElement>(Selector)
    const Obs = new IntersectionObserver(
      (Entries) => {
        Entries.forEach((Entry) => {
          if (Entry.isIntersecting) {
            Entry.target.classList.add('visible')
            Obs.unobserve(Entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    Els.forEach((El) => Obs.observe(El))
    return () => Obs.disconnect()
  }, [Selector])

  return ContainerRef
}
