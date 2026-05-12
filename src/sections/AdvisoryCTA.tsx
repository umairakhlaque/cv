import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { advisoryConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function AdvisoryCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const content = section.querySelector('[data-cta-content]');

    const ctx = gsap.context(() => {
      if (content) {
        gsap.fromTo(
          content,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="advisory"
      style={{
        position: 'relative',
        zIndex: 50,
        background: 'linear-gradient(180deg, #050A0F 0%, #0D1B2A 50%, #050A0F 100%)',
        paddingTop: 'clamp(80px, 15vh, 200px)',
        paddingBottom: 'clamp(80px, 15vh, 200px)',
        paddingLeft: 'clamp(24px, 6vw, 120px)',
        paddingRight: 'clamp(24px, 6vw, 120px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        data-cta-content
        style={{
          textAlign: 'center',
          maxWidth: '720px',
        }}
      >
        <p
          className="eyebrow"
          style={{ marginBottom: '24px' }}
        >
          {advisoryConfig.eyebrow}
        </p>

        <h2
          className="font-serif-display"
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 200,
            color: '#ffffff',
            letterSpacing: '0.04em',
            lineHeight: 1.15,
            marginBottom: '24px',
          }}
        >
          {advisoryConfig.title}
        </h2>

        <p
          className="font-sans-body"
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: 'rgba(237, 232, 228, 0.75)',
            fontWeight: 300,
            marginBottom: '40px',
            maxWidth: '560px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {advisoryConfig.description}
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#footer"
            className="font-sans-body"
            style={{
              background: '#30B0D0',
              border: 'none',
              borderRadius: '40px',
              padding: '16px 36px',
              color: '#050A0F',
              fontSize: '13px',
              letterSpacing: '0.15em',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#4DC8E8';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#30B0D0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {advisoryConfig.ctaPrimary}
          </a>
          <a
            href={advisoryConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans-body"
            style={{
              background: 'transparent',
              border: '1px solid rgba(237, 232, 228, 0.4)',
              borderRadius: '40px',
              padding: '16px 36px',
              color: '#EDE8E4',
              fontSize: '13px',
              letterSpacing: '0.15em',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(237, 232, 228, 0.7)';
              e.currentTarget.style.background = 'rgba(237, 232, 228, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(237, 232, 228, 0.4)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            {advisoryConfig.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
