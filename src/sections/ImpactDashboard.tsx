import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Clock, Briefcase, Target, TrendingUp, Globe,
  Shield, Cpu, BarChart3, PhoneOff, Award, Layers, ShieldCheck
} from 'lucide-react';
import { impactDashboardConfig } from '../config';
import type { MetricItem } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  clock: Clock,
  briefcase: Briefcase,
  target: Target,
  'trending-up': TrendingUp,
  globe: Globe,
  shield: Shield,
  cpu: Cpu,
  'bar-chart-3': BarChart3,
  'phone-off': PhoneOff,
  award: Award,
  layers: Layers,
  'shield-check': ShieldCheck,
};

const colorMap = {
  cyan: '#30B0D0',
  gold: '#D4A853',
  emerald: '#10B981',
};

const accentLineMap = {
  cyan: 'accent-line-cyan',
  gold: 'accent-line-gold',
  emerald: 'accent-line-emerald',
};

function MetricCard({ metric, index }: { metric: MetricItem; index: number }) {
  const Icon = iconMap[metric.icon] || Briefcase;
  const color = colorMap[metric.color];

  return (
    <div
      className={`glass-card glass-card-hover ${accentLineMap[metric.color]}`}
      style={{
        padding: '32px',
        position: 'relative',
        overflow: 'hidden',
      }}
      data-metric-card
      data-index={index}
    >
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          opacity: 0.15,
        }}
      >
        <Icon size={20} style={{ color: 'rgba(237, 232, 228, 0.5)' }} />
      </div>
      <div
        className="font-accent"
        style={{
          fontSize: 'clamp(36px, 4vw, 64px)',
          fontWeight: 700,
          color,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '12px',
        }}
      >
        {metric.value}
      </div>
      <div
        className="font-sans-body"
        style={{
          fontSize: '11px',
          letterSpacing: '0.2em',
          color: 'rgba(237, 232, 228, 0.5)',
          textTransform: 'uppercase',
          fontWeight: 400,
          lineHeight: 1.5,
        }}
      >
        {metric.label}
      </div>
      <div
        style={{
          marginTop: '12px',
          fontSize: '10px',
          color: 'rgba(237, 232, 228, 0.3)',
          letterSpacing: '0.1em',
        }}
      >
        {metric.evidenceStatus}
      </div>
    </div>
  );
}

export default function ImpactDashboard() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('[data-metric-card]');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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
      id="dashboard"
      style={{
        position: 'relative',
        zIndex: 2,
        background: '#050A0F',
        paddingTop: 'clamp(80px, 15vh, 200px)',
        paddingBottom: 'clamp(80px, 15vh, 200px)',
        paddingLeft: 'clamp(24px, 6vw, 120px)',
        paddingRight: 'clamp(24px, 6vw, 120px)',
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: 'clamp(40px, 8vh, 80px)' }}>
        <p
          className="eyebrow text-shadow-shader"
          style={{ marginBottom: '16px' }}
        >
          {impactDashboardConfig.eyebrow}
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
          }}
        >
          {impactDashboardConfig.title}
        </h2>
      </div>

      {/* Metrics grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {impactDashboardConfig.metrics.map((metric, i) => (
          <MetricCard key={metric.label} metric={metric} index={i} />
        ))}
      </div>
    </section>
  );
}
