import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { heroConfig } from '../config';

export default function HeroField() {
  const textShadow = '0 2px 24px rgba(0,0,0,0.45)';
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        section.querySelector('[data-hero-wordmark]'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
        .fromTo(
          section.querySelector('[data-hero-portrait]'),
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
          '-=0.7'
        )
        .fromTo(
          section.querySelector('[data-hero-eyebrow]'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          section.querySelector('[data-hero-title]'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          section.querySelector('[data-hero-desc]'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          section.querySelector('[data-hero-supporting]'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          section.querySelectorAll('[data-hero-cta]'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
          '-=0.3'
        );
    }, section);

    return () => ctx.revert();
  }, []);

  if (!heroConfig.wordmarkText && !heroConfig.titleLine1) {
    return null;
  }

  const handleCtaClick = (targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          flex: '1 1 auto',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          alignItems: 'center',
          padding: '0 6vw',
          gap: '4vw',
        }}
      >
        {/* Left column: wordmark + portrait */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
          <h2
            data-hero-wordmark
            className="font-serif-display"
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 300,
              color: '#ffffff',
              letterSpacing: '0.15em',
              textShadow,
              margin: 0,
              opacity: 0,
            }}
          >
            {heroConfig.wordmarkText}
          </h2>

          {/* Executive portrait */}
          <div
            data-hero-portrait
            style={{
              width: 'clamp(200px, 28vw, 340px)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              border: '1px solid rgba(48, 176, 208, 0.2)',
              opacity: 0,
            }}
          >
            <img
              src="images/hero-portrait.jpg"
              alt="Umair Akhlaq Syed"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* Right column: text content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            textAlign: 'left',
            maxWidth: '480px',
          }}
        >
          {heroConfig.eyebrow && (
            <p
              data-hero-eyebrow
              className="font-sans-body"
              style={{
                fontSize: '12px',
                letterSpacing: '0.3em',
                color: 'rgba(255,255,255,0.75)',
                textTransform: 'uppercase',
                marginBottom: '28px',
                textShadow,
                opacity: 0,
              }}
            >
              {heroConfig.eyebrow}
            </p>
          )}

          <h1
            data-hero-title
            className="font-serif-display"
            style={{
              fontSize: 'clamp(32px, 3vw, 52px)',
              fontWeight: 300,
              lineHeight: 1.3,
              color: '#ffffff',
              wordBreak: 'keep-all',
              marginBottom: '24px',
              textShadow,
              opacity: 0,
            }}
          >
            {heroConfig.titleLine1}
            {heroConfig.titleLine2 && (
              <>
                <br />
                {heroConfig.titleLine2}
              </>
            )}
          </h1>

          {(heroConfig.descriptionLine1 || heroConfig.descriptionLine2) && (
            <p
              data-hero-desc
              className="font-sans-body"
              style={{
                fontSize: '14px',
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.75)',
                fontWeight: 300,
                marginBottom: '40px',
                textShadow,
                opacity: 0,
              }}
            >
              {heroConfig.descriptionLine1}
              {heroConfig.descriptionLine2 && (
                <>
                  <br />
                  {heroConfig.descriptionLine2}
                </>
              )}
            </p>
          )}

          {/* Supporting line */}
          {heroConfig.supportingLine && (
            <p
              data-hero-supporting
              className="font-sans-body"
              style={{
                fontSize: '13px',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.55)',
                fontWeight: 300,
                marginBottom: '32px',
                textShadow,
                opacity: 0,
                fontStyle: 'italic',
                borderLeft: '2px solid rgba(48, 176, 208, 0.4)',
                paddingLeft: '16px',
              }}
            >
              {heroConfig.supportingLine}
            </p>
          )}

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {heroConfig.ctaText && (
              <button
                data-hero-cta
                className="font-sans-body"
                onClick={() => handleCtaClick(heroConfig.ctaTargetId)}
                style={{
                  background: 'rgba(48, 176, 208, 0.12)',
                  border: '1px solid rgba(48, 176, 208, 0.45)',
                  borderRadius: '40px',
                  padding: '14px 32px',
                  color: '#30B0D0',
                  fontSize: '13px',
                  letterSpacing: '0.15em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                  textTransform: 'uppercase',
                  opacity: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(48, 176, 208, 0.25)';
                  e.currentTarget.style.borderColor = 'rgba(48, 176, 208, 0.8)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(48, 176, 208, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(48, 176, 208, 0.45)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {heroConfig.ctaText}
              </button>
            )}
            {heroConfig.ctaTextSecondary && (
              <button
                data-hero-cta
                className="font-sans-body"
                onClick={() => handleCtaClick(heroConfig.ctaSecondaryTargetId)}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '40px',
                  padding: '14px 32px',
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '13px',
                  letterSpacing: '0.15em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                  textTransform: 'uppercase',
                  opacity: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {heroConfig.ctaTextSecondary}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          section > div:first-child {
            grid-template-columns: 1fr !important;
            padding-top: 100px !important;
            padding-bottom: 60px !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
