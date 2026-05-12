import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, BookOpen } from 'lucide-react';
import { articlesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function ArticlesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('[data-article-card]');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
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
      id="articles"
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
          {articlesConfig.sectionLabel}
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
          {articlesConfig.title}
        </h2>
      </div>

      {/* Articles grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))',
          gap: '24px',
        }}
      >
        {articlesConfig.articles.map((article, i) => (
          <div
            key={article.id}
            data-article-card
            data-index={i}
            style={{
              background: 'rgba(10, 22, 40, 0.7)',
              border: '1px solid rgba(48, 176, 208, 0.2)',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: '2fr 3fr',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(48, 176, 208, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(48, 176, 208, 0.2)';
            }}
          >
            {/* Image */}
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img
                src={article.image}
                alt={article.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  minHeight: '180px',
                }}
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span
                  className="font-sans-body"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.25em',
                    color: '#30B0D0',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                  }}
                >
                  {article.category}
                </span>
                <span style={{ color: 'rgba(237, 232, 228, 0.2)' }}>|</span>
                <span
                  className="font-sans-body"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    color: 'rgba(237, 232, 228, 0.5)',
                    textTransform: 'uppercase',
                  }}
                >
                  {article.source}
                </span>
              </div>

              <h3
                className="font-serif-display"
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#ffffff',
                  lineHeight: 1.4,
                  marginBottom: '16px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {article.title}
              </h3>

              {article.externalLink ? (
                <a
                  href={article.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans-body"
                  style={{
                    fontSize: '12px',
                    color: '#30B0D0',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    letterSpacing: '0.05em',
                  }}
                >
                  Read Article <ExternalLink size={12} />
                </a>
              ) : (
                <span
                  className="font-sans-body"
                  style={{
                    fontSize: '12px',
                    color: 'rgba(237, 232, 228, 0.4)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    letterSpacing: '0.05em',
                  }}
                >
                  <BookOpen size={12} /> Coming Soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
