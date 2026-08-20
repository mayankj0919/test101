"use client";

import { useState } from "react";
import Image from "next/image";
import AsciiFire from "@/components/originkit/ui/ascii-flame";
import Tetris from "@/components/originkit/ui/pixel-tetris";
import styles from "./GlitchverseSections.module.css";

const faqs = [
  {
    question: "HOW DO I REGISTER FOR THE HACKATHON?",
    answer:
      "Visit our registration page and fill out the required details. You’ll receive a confirmation email once you’re registered.",
  },
  {
    question: "WHAT IS THE PARTICIPATION FEE?",
    answer:
      "Participation is completely free! There are no charges at any stage of the hackathon.",
  },
  {
    question: "WHO CAN PARTICIPATE?",
    answer:
      "Anyone who is a student (undergraduate or postgraduate) can participate, regardless of experience level.",
  },
  {
    question: "WHAT IS THE IDEAL TEAM SIZE?",
    answer: "Teams should consist of 2-4 Members.",
  },
  {
    question: "WHY SHOULD I PARTICIPATE IN CODEUTSAVA?",
    answer:
      "Winners get cash prizes, and all participants will have excellent networking opportunities, learn new skills, and get cool swag ;)",
  },
  {
    question: "WHAT OTHER PERKS ARE PROVIDED?",
    answer:
      "Accommodations and meals will be provided, and travel expenses up to Rs.1500 per individual will be reimbursed for all the selected teams participating in CodeUtsava 9.0!",
  },
  {
    question: "HOW WILL THE TEAMS BE JUDGED?",
    answer:
      "Teams will be judged on viability, technical complexity, presentation skills, guidelines, and most importantly, creativity. Judgment Criteria",
  },
  {
    question: "WHAT IS THE CODE OF CONDUCT?",
    answer:
      "To ensure a positive experience for all participants, we follow the SIH Code of Conduct. Please review it before the event.",
  },
];

const socialLinks = [
  ["FACEBOOK", "https://www.facebook.com/codeutsava/"],
  ["INSTAGRAM", "https://www.instagram.com/codeutsavanitrr/"],
  ["GITHUB", "https://github.com/TCP-Tech"],
  ["TWITTER", "https://twitter.com/codeutsavanitrr?lang=en"],
  ["LINKEDIN", "https://www.linkedin.com/company/codeutsava/"],
  ["DISCORD", "https://discord.gg/sxfvDKhEgQ"],
] as const;

export function GlitchverseSections() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className={styles.sections}>
      <section className={styles.faq} id="faq" aria-labelledby="faq-title">
        <div className={styles.signalLine} aria-hidden="true">
          <span>TRANSMISSION // FAQ</span>
          <span>08 FILES FOUND</span>
        </div>

        <div className={styles.faqPanel}>
          <div className={styles.faqFlame} aria-hidden="true">
            <AsciiFire
              intensity={96}
              windDirection="right"
              windForce={16}
              decay={9}
              turbulence={32}
              thickness={3}
              palette="custom"
              shades={["#13021a", "#3a0b52", "#7218aa", "#9929ea", "#ff5fcf", "#faeb92"]}
              sparkColor="#faeb92"
              charset="dense"
              backgroundColor="transparent"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className={styles.faqScrim} aria-hidden="true" />

          <div className={styles.faqPanelContent}>
            <div className={styles.faqIntro}>
              <div>
                <p className={styles.eyebrow}>KNOWLEDGE BASE / 09.0</p>
                <h2 id="faq-title">FAQs</h2>
                <p className={styles.introCopy}>
                  <strong>New to hackathon?</strong>
                  Don’t worry! We’ve got you covered with all the basic information.
                </p>
              </div>
              <div className={styles.faqStatus} aria-hidden="true">
                <span>ASCII_FLAME // BACKPLANE</span>
                <span>SIGNAL STABLE</span>
                <span>SELECT A FILE TO DECRYPT</span>
              </div>
            </div>

            <div className={styles.faqGrid}>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const answerId = `faq-answer-${index}`;

                return (
                  <article className={`${styles.faqItem} ${isOpen ? styles.open : ""}`} key={faq.question}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span className={styles.fileNumber}>{String(index + 1).padStart(2, "0")}</span>
                      <span>{faq.question}</span>
                      <span className={styles.toggle} aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    </button>
                    <div className={styles.answer} id={answerId} hidden={!isOpen}>
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer} id="contact">
        <div className={styles.tetrisField} aria-hidden="true">
          <Tetris
            boardColor="rgba(250, 235, 146, 0.045)"
            colors={["#9929ea", "#ff5fcf", "#faeb92"]}
            movement={4}
            cellSize={30}
            gap={2}
            rounded={2}
            dropSpeed={2}
          />
        </div>
        <div className={styles.footerShade} aria-hidden="true" />

        <div className={styles.footerTop}>
          <div className={styles.brandLogos}>
            <a href="#top" aria-label="Codeutsava home">
              <Image src="/images/codeutsava/codeutsava-logo.png" alt="CodeUtsava Logo" width={1080} height={1080} priority />
            </a>
            <span aria-hidden="true" />
            <a href="https://codeutsava.nitrr.ac.in/team" aria-label="Turing Club of Programmers">
              <Image src="/images/codeutsava/tcp-logo.png" alt="TCP Logo" width={1080} height={1080} />
            </a>
          </div>
          <div className={styles.footerTopNote}>
            <span>SIGNAL // CONNECTED</span>
            <p>Follow us on social media for updates</p>
          </div>
        </div>

        <div className={styles.footerGrid}>
          <section className={styles.about} aria-labelledby="about-nitrr">
            <div className={styles.nitHeading}>
              <Image src="/images/codeutsava/nit-raipur-logo.webp" alt="NIT Raipur Logo" width={500} height={500} />
              <div>
                <p className={styles.eyebrow}>INSTITUTION // NITRR</p>
                <h2 id="about-nitrr">About NIT Raipur</h2>
              </div>
            </div>
            <p>
              The institute is committed to the challenging task of developing technical education by preparing seasoned graduates in highly sophisticated fields of engineering and technology. For about five decades, NIT Raipur has been doing this with sincerity and commitment.
            </p>
            <a className={styles.mapLink} href="https://www.google.com/maps/place/NIT+Raipur" target="_blank" rel="noreferrer">
              VIEW MAP LOCATION <span aria-hidden="true">↗</span>
            </a>
          </section>

          <nav className={styles.footerNav} aria-label="Footer navigation">
            <p className={styles.eyebrow}>SITE MAP</p>
            <a href="#top">Home</a>
            <a href="https://codeutsava.nitrr.ac.in/team">TCP Team</a>
            <a href="https://codeutsava.nitrr.ac.in/speakers">Speakers</a>
            <a href="#faq">FAQ</a>
            <a href="https://codeutsava.nitrr.ac.in/contact-us">Contact Us</a>
          </nav>

          <nav className={styles.socials} aria-label="Social media">
            <p className={styles.eyebrow}>OPEN CHANNELS</p>
            {socialLinks.map(([label, href]) => (
              <a href={href} key={label} target="_blank" rel="noreferrer">
                <span>{label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.footerBottom}>
          <span>Architected with ❤️ by <a href="https://codeutsava.nitrr.ac.in/team">TCP Team</a></span>
          <span>PIXEL_TETRIS // RUNNING</span>
          <a href="#top">Back to Top ↑</a>
        </div>
      </footer>
    </div>
  );
}
