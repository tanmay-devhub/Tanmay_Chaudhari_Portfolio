"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  IconGithub,
  IconLinkedin,
  IconSend,
} from "./Icons";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/tanmay-devhub",
    Icon: IconGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tchaudhari2106/",
    Icon: IconLinkedin,
    external: true,
  },
];

interface ContactProps {
  onToast: (msg: string) => void;
}

export default function Contact({ onToast }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setSending(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name,
          from_name: name,
          email,
          from_email: email,
          message,
          title: `Portfolio Contact from ${name}`,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      onToast("Message sent — thanks for reaching out!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      const e = err as { status?: number; text?: string };
      console.error("[EmailJS error] status:", e.status, "| text:", e.text);
      onToast("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-marker">// 07 — contact</div>
        <div className="cf-wrapper">
          <div className="cf-card">
            <h2 id="contact-heading" className="cf-title">Get In Touch</h2>

            <form onSubmit={handleSubmit} noValidate>
              <div className="cf-group">
                <label className="cf-label" htmlFor="cf-name">Name *</label>
                <input
                  id="cf-name"
                  className="cf-input"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                  suppressHydrationWarning
                />
              </div>

              <div className="cf-group">
                <label className="cf-label" htmlFor="cf-email">Email *</label>
                <input
                  id="cf-email"
                  className="cf-input"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  suppressHydrationWarning
                />
              </div>

              <div className="cf-group">
                <label className="cf-label" htmlFor="cf-message">Message *</label>
                <textarea
                  id="cf-message"
                  className="cf-textarea"
                  placeholder="Your message or contact details..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="cf-btn"
                suppressHydrationWarning
                disabled={sending}
                aria-label="Send message"
              >
                <IconSend />
                {sending ? "Sending…" : "Send Message"}
              </button>
            </form>

            <p className="cf-sep">Or connect with me on social media</p>

            <div className="cf-socials" role="list" aria-label="Social media links">
              {SOCIALS.map(({ label, href, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  className="cf-social-icon"
                  aria-label={label}
                  role="listitem"
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
