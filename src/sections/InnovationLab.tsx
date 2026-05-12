import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { innovationLabConfig } from '../config';
import type { ProductData } from '../config';

gsap.registerPlugin(ScrollTrigger);

const colorMap = {
  cyan: '#30B0D0',
  gold: '#D4A853',
  emerald: '#10B981',
  silver: '#C0C5CE',
};

const borderHoverMap = {
  cyan: 'rgba(48, 176, 208, 0.5)',
  gold: 'rgba(212, 168, 83, 0.5)',
  emerald: 'rgba(16, 185, 129, 0.5)',
  silver: 'rgba(192, 197, 206, 0.5)',
};

const shadowHoverMap = {
  cyan: '0 12px 40px rgba(48, 176, 208, 0.1)',
  gold: '0 12px 40px rgba(212, 168, 83, 0.1)',
  emerald: '0 12px 40px rgba(16, 185, 129, 0.1)',
  silver: '0 12px 40px rgba(192, 197, 206, 0.1)',
};

function ProductCard({ product, index }: { product: ProductData; index: number }) {
  const color = colorMap[product.color];
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      data-product-card
      data-index={index}
      style={{
        background: 'rgba(10, 22, 40, 0.7)',
        border: '1px solid rgba(48, 176, 208, 0.2)',
        borderRadius: '20px',
        padding: '40px 32px',
        minHeight: '380px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(-6px)';
        el.style.borderColor = borderHoverMap[product.color];
        el.style.boxShadow = shadowHoverMap[product.color];
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(0)';
        el.style.borderColor = 'rgba(48, 176, 208, 0.2)';
        el.style.boxShadow = 'none';
      }}
    >
      {/* Top: accent dot + status badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }} />
          <span
            className="font-sans-body"
            style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(237, 232, 228, 0.5)', textTransform: 'uppercase' }}
          >
            {product.status}
          </span>
        </div>
        {product.externalLink && <ExternalLink size={14} style={{ color: 'rgba(237, 232, 228, 0.4)' }} />}
      </div>

      {/* Product image */}
      <div style={{ marginBottom: '24px', borderRadius: '12px', overflow: 'hidden', height: '160px' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <h3
          className="font-serif-display"
          style={{
            fontSize: 'clamp(22px, 2.2vw, 32px)',
            fontWeight: 300,
            color: '#ffffff',
            letterSpacing: '0.04em',
            marginBottom: '8px',
            lineHeight: 1.3,
          }}
        >
          {product.name}
        </h3>
        <p
          className="font-sans-body"
          style={{
            fontSize: '13px',
            color,
            fontStyle: 'italic',
            marginBottom: '16px',
            lineHeight: 1.5,
          }}
        >
          {product.tagline}
        </p>
        <p
          className="font-sans-body"
          style={{
            fontSize: '14px',
            lineHeight: 1.8,
            color: 'rgba(237, 232, 228, 0.75)',
            fontWeight: 300,
          }}
        >
          {product.description}
        </p>
      </div>

      {/* CTA */}
      <div style={{ marginTop: '24px' }}>
        <a
          href={product.externalLink || '#'}
          target={product.externalLink ? '_blank' : undefined}
          rel={product.externalLink ? 'noopener noreferrer' : undefined}
          className="font-sans-body"
          style={{
            fontSize: '13px',
            color: '#30B0D0',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'gap 0.3s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.gap = '10px';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.gap = '6px';
          }}
        >
          Learn More <ChevronRight size={14} />
        </a>
      </div>
    </div>
  );
}

export default function InnovationLab() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('[data-product-card]');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
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
      id="innovation"
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
      {/* Section header */}
      <div style={{ marginBottom: 'clamp(40px, 8vh, 80px)' }}>
        <p className="eyebrow text-shadow-shader" style={{ marginBottom: '16px' }}>
          {innovationLabConfig.sectionLabel}
        </p>
        <h2
          className="font-serif-display text-shadow-shader"
          style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 200,
            color: '#ffffff',
            letterSpacing: '0.05em',
            lineHeight: 1.2,
            margin: 0,
            marginBottom: '16px',
          }}
        >
          {innovationLabConfig.title}
        </h2>
        <p
          className="font-sans-body"
          style={{
            fontSize: '15px',
            lineHeight: 1.8,
            color: 'rgba(237, 232, 228, 0.75)',
            fontWeight: 300,
            maxWidth: '600px',
          }}
        >
          {innovationLabConfig.subtitle}
        </p>
      </div>

      {/* Products grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {innovationLabConfig.products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
