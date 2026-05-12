import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ChevronRight } from 'lucide-react';
import { bookConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function BookFeature() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const left = section.querySelector('[data-book-left]');
    const right = section.querySelector('[data-book-right]');

    const ctx = gsap.context(() => {
      if (left) {
        gsap.fromTo(
          left,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
      if (right) {
        gsap.fromTo(
          right,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            delay: 0.15,
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
      id="book"
      style={{
        position: 'relative',
        zIndex: 50,
        background: '#0A1628',
        paddingTop: 'clamp(80px, 15vh, 200px)',
        paddingBottom: 'clamp(80px, 15vh, 200px)',
        paddingLeft: 'clamp(24px, 6vw, 120px)',
        paddingRight: 'clamp(24px, 6vw, 120px)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 3fr',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}
      >
        {/* Left: Book cover image */}
        <div data-book-left>
          <div
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
              maxWidth: '380px',
              margin: '0 auto',
            }}
          >
            <img
              src={bookConfig.image}
              alt={bookConfig.title}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div data-book-right>
          <p className="eyebrow" style={{ marginBottom: '20px' }}>
            {bookConfig.sectionLabel}
          </p>

          <h2
            className="font-serif-display"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 300,
              color: '#ffffff',
              letterSpacing: '0.04em',
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            {bookConfig.title}
          </h2>

          <p
            className="font-sans-body"
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#C0C5CE',
              fontStyle: 'italic',
              marginBottom: '24px',
              fontWeight: 400,
            }}
          >
            {bookConfig.subtitle}
          </p>

          <p
            className="font-sans-body"
            style={{
              fontSize: '15px',
              lineHeight: 1.8,
              color: 'rgba(237, 232, 228, 0.75)',
              fontWeight: 300,
              marginBottom: '28px',
            }}
          >
            {bookConfig.description}
          </p>

          {/* Bullet points */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '36px' }}>
            {bookConfig.bulletPoints.map((point, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '12px',
                  fontSize: '14px',
                  color: 'rgba(237, 232, 228, 0.8)',
                  lineHeight: 1.6,
                }}
              >
                <Check size={16} style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                <span className="font-sans-body">{point}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              className="font-sans-body"
              style={{
                background: '#30B0D0',
                border: 'none',
                borderRadius: '40px',
                padding: '14px 32px',
                color: '#050A0F',
                fontSize: '13px',
                letterSpacing: '0.15em',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
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
              {bookConfig.ctaText}
            </button>
            <a
              href="#articles"
              className="font-sans-body"
              style={{
                background: 'transparent',
                border: '1px solid rgba(48, 176, 208, 0.4)',
                borderRadius: '40px',
                padding: '14px 32px',
                color: '#30B0D0',
                fontSize: '13px',
                letterSpacing: '0.15em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(48, 176, 208, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(48, 176, 208, 0.4)';
              }}
            >
              {bookConfig.ctaSecondaryText} <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
