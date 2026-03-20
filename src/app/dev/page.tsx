import type { Metadata } from 'next'
import Nav    from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './dev.module.css'

export const metadata: Metadata = {
  title: 'Developer Notes - GraceAC',
  description: 'Technical architecture, design philosophy, and license for GraceAC.',
}

export default function DevPage() {
  return (
    <>
      <Nav />
      <main className={styles.Main}>
        <div className={styles.Inner}>

          <header className={styles.Header}>
            <p className={styles.Eyebrow}>Developer Notes</p>
            <h1 className={styles.Title}>
              How Grace works,<br />
              <span className={styles.TitleAccent}>and why it works that way.</span>
            </h1>
            <p className={styles.Sub}>
              This page covers the vision behind GraceAC, the technical decisions
              that shape it, and the license that governs the open parts of it.
            </p>
          </header>

          {/* ── THE WHY ── */}
          <section className={styles.Block}>
            <h2 className={styles.BlockTitle}>The vision</h2>
            <p className={styles.BlockText}>
              Most anticheats today fall into one of two camps. Either they are heavy,
              intrusive, and punish players before a human ever looks at the evidence,
              or they are lightweight but blind to anything more subtle than fly hacks.
            </p>
            <p className={styles.BlockText}>
              GraceAC was built to sit between those two extremes. The goal is high
              detection accuracy with near-zero TPS impact, running at the proxy level
              so it sees every player on every backend server from a single point.
              No agents. No per-server installs. One plugin, full network visibility.
            </p>
            <p className={styles.BlockText}>
              The ML sidecar handles what rules cannot. Ghost configs, humanised movement,
              bypass timing that sits just under every threshold. That layer is trained on
              real packet logs from real servers, not synthetic data.
            </p>
          </section>

          {/* ── ARCHITECTURE ── */}
          <section className={styles.Block}>
            <h2 className={styles.BlockTitle}>Technical architecture</h2>

            <div className={styles.ArchGrid}>
              <div className={styles.ArchCard}>
                <h3 className={styles.ArchCardTitle}>Async processing</h3>
                <p className={styles.ArchCardText}>
                  All detection logic runs off the main server thread. Your TPS stays
                  clean regardless of how many players are being checked simultaneously.
                  Grace is designed to be invisible to your server performance.
                </p>
              </div>

              <div className={styles.ArchCard}>
                <h3 className={styles.ArchCardTitle}>Proxy-level interception</h3>
                <p className={styles.ArchCardText}>
                  Grace runs on Velocity and intercepts packets before they reach
                  your backend servers. This gives it full network-wide player tracking,
                  reduced packet overhead compared to per-server solutions, and a single
                  configuration point for your entire network.
                </p>
              </div>

              <div className={styles.ArchCard}>
                <h3 className={styles.ArchCardTitle}>Packet-level analysis</h3>
                <p className={styles.ArchCardText}>
                  Checks operate on raw packet data, not on game-engine abstractions.
                  This means Grace sees movement, combat, and timing data at the lowest
                  possible level, before the game has a chance to interpret or smooth it.
                </p>
              </div>

              <div className={styles.ArchCard}>
                <h3 className={styles.ArchCardTitle}>GeyserMC compatible</h3>
                <p className={styles.ArchCardText}>
                  Grace works with GeyserMC, so Bedrock players on your network are
                  covered alongside Java players. Detection thresholds account for the
                  differences in Bedrock movement and combat behaviour.
                </p>
              </div>
            </div>
          </section>

          {/* ── PHILOSOPHY ── */}
          <section className={styles.Block}>
            <h2 className={styles.BlockTitle}>Detection philosophy</h2>
            <p className={styles.BlockText}>
              Grace does not auto-ban. That is a deliberate choice, not a limitation.
            </p>
            <p className={styles.BlockText}>
              Every detection fires an alert, graded by confidence. High-confidence
              alerts are flagged prominently. Lower-confidence detections are logged
              quietly for review. Your moderators and administrators see everything
              in real time and make the call themselves, with full context.
            </p>
            <p className={styles.BlockText}>
              When action is needed, the tools are there. A configurable kick and ban
              system lets you set your own thresholds. A rubberband system can silently
              correct suspicious movement without alerting the player. All of it is
              tunable per server, because a 20-player SMP and a 500-player network
              do not need the same settings.
            </p>
            <p className={styles.BlockText}>
              The philosophy is simple. Grace flags. Humans decide.
              No innocent player gets banned because a check misfired at 3am
              with nobody watching.
            </p>
          </section>

          {/* ── COMPATIBILITY ── */}
          <section className={styles.Block}>
            <h2 className={styles.BlockTitle}>Compatibility and extensibility</h2>
            <p className={styles.BlockText}>
              Grace targets Minecraft 1.19 and above on Velocity proxy networks.
              The Companion Plugin handles backend communication and is open source
              for review and custom integration.
            </p>
            <p className={styles.BlockText}>
              The API is open for extension. You can build custom alert handlers,
              pipe detections into your own Discord bot, integrate with your ban
              database, or add your own checks on top of the rules layer.
              The closed part is the Engine. Everything built around it is yours to use.
            </p>
          </section>

          {/* ── LICENSE ── */}
          <section className={styles.LicenseBlock}>
            <div className={styles.LicenseHeader}>
              <p className={styles.Eyebrow}>License</p>
              <h2 className={styles.BlockTitle}>GraceAC API and Companion License</h2>
              <p className={styles.BlockText}>
                This license covers the open-source portions of GraceAC only.
                The closed-source Engine is not included.
              </p>
            </div>

            <div className={styles.LicenseSections}>

              <div className={styles.LicenseSection}>
                <h3 className={styles.LicenseSectionTitle}>1. Definitions</h3>
                <p className={styles.LicenseSectionText}>
                  "Software" refers to the GraceAC API and Companion Plugin source code and binaries.
                  "Engine" refers to the closed-source GraceAC core logic, which is not covered by this license.
                  "Author" refers to MH-Al0.
                </p>
              </div>

              <div className={styles.LicenseSection}>
                <h3 className={styles.LicenseSectionTitle}>2. Grant of License</h3>
                <p className={styles.LicenseSectionText}>
                  Subject to the terms of this license, the Author grants you a non-exclusive,
                  royalty-free license to use, copy, and execute the Software for personal
                  or commercial Minecraft server operations.
                </p>
              </div>

              <div className={styles.LicenseSection}>
                <h3 className={styles.LicenseSectionTitle}>3. Restrictions on Redistribution and Modification</h3>
                <p className={styles.LicenseSectionText}>
                  You may not redistribute, sub-license, or sell the Software in original
                  or modified form to any third party without express written consent from the Author.
                  You may modify the Software for private use on your own server.
                  Any public display or distribution of modifications is prohibited unless
                  permission is granted. All requests must go through the official GraceAC
                  Discord or GitHub.
                </p>
              </div>

              <div className={styles.LicenseSection}>
                <h3 className={styles.LicenseSectionTitle}>4. Reciprocity</h3>
                <p className={styles.LicenseSectionText}>
                  If the Author grants permission to distribute a modified version,
                  that version must be made open source, licensed under this exact license,
                  and must include a prominent notice stating what was changed along with
                  a link to the original GraceAC repository.
                </p>
              </div>

              <div className={styles.LicenseSection}>
                <h3 className={styles.LicenseSectionTitle}>5. Proprietary Engine Notice</h3>
                <p className={styles.LicenseSectionText}>
                  This license applies strictly to the API and Companion Plugin.
                  No rights or licenses are granted toward the GraceAC Engine.
                  Any attempt to reverse-engineer, decompile, or bypass the obfuscation
                  of the Engine is a violation of this agreement.
                </p>
              </div>

              <div className={styles.LicenseSection}>
                <h3 className={styles.LicenseSectionTitle}>6. Limitation of Liability</h3>
                <p className={styles.LicenseSectionText}>
                  The Software is provided as is, without warranty of any kind, express or implied.
                  In no event shall the Author be liable for any claim, damages, or other liability,
                  whether in an action of contract, tort, or otherwise, arising from or in connection
                  with the Software or its use.
                </p>
              </div>

            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
