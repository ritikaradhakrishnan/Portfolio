import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "ЯR",
  description: "Connect with Ritika Radhakrishnan on LinkedIn, GitHub, or by email.",
};

const contacts = [
  {
    label: "EMAIL",
    value: "ritika.rk200@gmail.com",
    href: "mailto:ritika.rk200@gmail.com",
    note: "FOR COLLABORATIONS & CONVERSATIONS",
  },
  {
    label: "LINKEDIN",
    value: "Ritika Radhakrishnan",
    href: "https://www.linkedin.com/in/ritika-radhakrishnan",
    note: "WORK, RESEARCH & UPDATES",
  },
  {
    label: "GITHUB",
    value: "@ritikaradhakrishnan",
    href: "https://github.com/ritikaradhakrishnan",
    note: "CODE, EXPERIMENTS & PROJECTS",
  },
];

export default function ContactPage() {
  return (
    <div className="site-shell contact-page">
      <a className="skip-link" href="#contact-content">Skip to content</a>
      <SiteHeader />
      <main className="contact-main" id="contact-content">
        <div className="contact-intro">
          <p className="eyebrow">CONTACT</p>
          <h1>HELLO, I AM ALWAYS HAPPY TO CONNECT AND BUILD.</h1>
        </div>
        <div className="contact-list" aria-label="Contact options">
          {contacts.map((contact, index) => (
            <a href={contact.href} key={contact.label} target={contact.label === "EMAIL" ? undefined : "_blank"} rel={contact.label === "EMAIL" ? undefined : "noreferrer"}>
              <span className="contact-index">0{index + 1}</span>
              <span className="contact-details">
                <small>{contact.label}</small>
                <strong>{contact.value}</strong>
                <em>{contact.note}</em>
              </span>
              <span className="contact-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
