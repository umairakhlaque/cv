import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award } from 'lucide-react';
import { awardsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function AwardsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll('[data-award-item]');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="awards"
      style={{
        position: 'relative',
        zIndex: 50,
        background: '#050A0F',
        paddingTop: 'clamp(80px, 15vh, 200px)',
        paddingBottom: 'clamp(80px, 15vh, 200px)',
        paddingLeft: 'clamp(24px, 6vw, 120px)',
        paddingRight: 'clamp(24px, 6vw, 120px)',
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: 'clamp(40px, 8vh, 80px)' }}>
        <p className="eyebrow" style={{ marginBottom: '16px' }}>
          {awardsConfig.sectionLabel}
        </p>
        <h2
          className="font-serif-display"
          style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 200,
            color: '#ffffff',
            letterSpacing: '0.05em',
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {awardsConfig.title}
        </h2>
      </div>

      {/* Awards list */}
      <div>
        {awardsConfig.awards.map((award, i) => (
          <div
            key={i}
            data-award-item
            data-index={i}
            style={{
              borderBottom: '1px solid rgba(48, 176, 208, 0.15)',
              padding: '28px 0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'all 0.3s ease',
              cursor: 'default',
              gap: '16px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(10, 22, 40, 0.5)';
              e.currentTarget.style.paddingLeft = '16px';
              e.currentTarget.style.paddingRight = '16px';
              e.currentTarget.style.marginLeft = '-16px';
              e.currentTarget.style.marginRight = '-16px';
              e.currentTarget.style.borderRadius = '8px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.paddingLeft = '0';
              e.currentTarget.style.paddingRight = '0';
              e.currentTarget.style.marginLeft = '0';
              e.currentTarget.style.marginRight = '0';
              e.currentTarget.style.borderRadius = '0';
            }}
          >
            {/* Left: award name + issuer */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '4px',
                }}
              >
                <Award size={16} style={{ color: '#D4A853', flexShrink: 0 }} />
                <span
                  className="font-sans-body"
                  style={{
                    fontSize: '15px',
                    color: '#EDE8E4',
                    fontWeight: 500,
                  }}
                >
                  {award.award}
                </span>
              </div>
              <span
                className="font-sans-body"
                style={{
                  fontSize: '13px',
                  color: 'rgba(237, 232, 228, 0.6)',
                  paddingLeft: '28px',
                }}
              >
                {award.issuer}
              </span>
            </div>

            {/* Right: year badge */}
            <span
              className="font-sans-body"
              style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                color: '#D4A853',
                textTransform: 'uppercase',
                fontWeight: 400,
                flexShrink: 0,
              }}
            >
              {award.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
