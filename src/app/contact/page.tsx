'use client'

import { useState } from 'react'
import Nav    from '@/components/Nav'
import Footer from '@/components/Footer'
import { Links } from '@/config/links'
import styles from './contact.module.css'

type FormState = 'idle' | 'sending' | 'sent' | 'error'

type FormData = {
  Name:       string
  Email:      string
  ServerSize: string
  Message:    string
}

const InitialForm: FormData = {
  Name:       '',
  Email:      '',
  ServerSize: '',
  Message:    '',
}

export default function ContactPage() {
  const [FormValues, SetFormValues] = useState<FormData>(InitialForm)
  const [State, SetState] = useState<FormState>('idle')

  function HandleChange(Field: keyof FormData, Value: string) {
    SetFormValues((Prev) => ({ ...Prev, [Field]: Value }))
  }

  async function HandleSubmit() {
    if (!FormValues.Name || !FormValues.Email || !FormValues.Message) return

    SetState('sending')

    try {
      // TODO: replace with Formspree or your preferred endpoint
      // await fetch('https://formspree.io/f/YOUR_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(FormValues),
      // })
      await new Promise((Resolve) => setTimeout(Resolve, 1200))
      SetState('sent')
      SetFormValues(InitialForm)
    } catch (Err) {
      console.error('Form submission failed:', Err)
      SetState('error')
    }
  }

  return (
    <>
      <Nav />
      <main className={styles.Main}>
        <div className={styles.Inner}>

          <header className={styles.Header}>
            <p className={styles.Eyebrow}>Contact</p>
            <h1 className={styles.Title}>
              Let's talk<br />
              <span className={styles.TitleAccent}>detection.</span>
            </h1>
            <p className={styles.Sub}>
              Questions about Grace, training data, threshold tuning,
              or custom plugin work. Drop a message or find me on Discord.
            </p>
          </header>

          <div className={styles.DirectLinks}>
            <a
              href={Links.Discord}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.DirectLink}
            >
              <span className={styles.DirectLinkIcon}>Discord</span>
              <span>Fastest response</span>
              <span className={styles.DirectLinkArrow}>-&gt;</span>
            </a>
            <a
              href={Links.Github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.DirectLink}
            >
              <span className={styles.DirectLinkIcon}>GitHub</span>
              <span>Open an issue</span>
              <span className={styles.DirectLinkArrow}>-&gt;</span>
            </a>
          </div>

          <div className={styles.FormBlock}>
            <p className={styles.FormLabel}>Or send a message</p>

            <div className={styles.Form}>
              <div className={styles.FieldRow}>
                <div className={styles.Field}>
                  <label className={styles.Label} htmlFor="name">Name</label>
                  <input
                    id="name"
                    className={styles.Input}
                    type="text"
                    placeholder="Your name"
                    value={FormValues.Name}
                    onChange={(E) => HandleChange('Name', E.target.value)}
                    disabled={State === 'sending' || State === 'sent'}
                  />
                </div>
                <div className={styles.Field}>
                  <label className={styles.Label} htmlFor="email">Email</label>
                  <input
                    id="email"
                    className={styles.Input}
                    type="email"
                    placeholder="you@example.com"
                    value={FormValues.Email}
                    onChange={(E) => HandleChange('Email', E.target.value)}
                    disabled={State === 'sending' || State === 'sent'}
                  />
                </div>
              </div>

              <div className={styles.Field}>
                <label className={styles.Label} htmlFor="serversize">
                  Server size <span className={styles.LabelOptional}>(optional)</span>
                </label>
                <input
                  id="serversize"
                  className={styles.Input}
                  type="text"
                  placeholder="e.g. 200 concurrent players"
                  value={FormValues.ServerSize}
                  onChange={(E) => HandleChange('ServerSize', E.target.value)}
                  disabled={State === 'sending' || State === 'sent'}
                />
              </div>

              <div className={styles.Field}>
                <label className={styles.Label} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className={styles.Textarea}
                  placeholder="What's on your mind?"
                  rows={5}
                  value={FormValues.Message}
                  onChange={(E) => HandleChange('Message', E.target.value)}
                  disabled={State === 'sending' || State === 'sent'}
                />
              </div>

              {State === 'error' && (
                <p className={styles.ErrorMsg}>
                  Something went wrong. Try Discord instead.
                </p>
              )}

              {State === 'sent' ? (
                <p className={styles.SuccessMsg}>Message sent. I will be in touch.</p>
              ) : (
                <button
                  className={styles.SubmitBtn}
                  onClick={HandleSubmit}
                  disabled={State === 'sending'}
                >
                  {State === 'sending' ? 'Sending...' : 'Send message'}
                </button>
              )}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
