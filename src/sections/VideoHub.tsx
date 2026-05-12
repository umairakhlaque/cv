import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Users, Cpu, Mic, Play } from 'lucide-react';
import { videoHubConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  monitor: Monitor,
  users: Users,
  cpu: Cpu,
  mic: Mic,
};

export default function VideoHub() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll('[data-video-item]');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
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

  const featuredThumbnail = `https://img.youtube.com/vi/${videoHubConfig.featuredVideoId}/maxresdefault.jpg`;

  return (
    <section
      ref={sectionRef}
      id="videos"
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
        <p className="eyebrow" style={{ marginBottom: '16px' }}>
          {videoHubConfig.sectionLabel}
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
          {videoHubConfig.title}
        </h2>
      </div>

      {/* Featured video */}
      <div
        data-video-item
        style={{
          marginBottom: '40px',
          borderRadius: '16px',
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer',
          border: '1px solid rgba(48, 176, 208, 0.2)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(48, 176, 208, 0.5)';
          e.currentTarget.style.transform = 'scale(1.01)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(48, 176, 208, 0.2)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        onClick={() => {
          window.open(`https://www.youtube.com/watch?v=${videoHubConfig.featuredVideoId}`, '_blank', 'noopener,noreferrer');
        }}
      >
        <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
          <img
            src={featuredThumbnail}
            alt={videoHubConfig.featuredTitle}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
            onError={(e) => {
              // Fallback to hqdefault if maxresdefault doesn't exist
              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoHubConfig.featuredVideoId}/hqdefault.jpg`;
            }}
          />
          {/* Overlay gradient */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(5,10,15,0.85) 100%)',
            }}
          />
          {/* Play button */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(48, 176, 208, 0.2)',
              border: '2px solid rgba(48, 176, 208, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.3s ease',
            }}
          >
            <Play size={32} style={{ color: '#30B0D0', marginLeft: '4px' }} />
          </div>
          {/* Title */}
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
            }}
          >
            <span
              className="font-sans-body"
              style={{
                fontSize: '10px',
                letterSpacing: '0.25em',
                color: '#30B0D0',
                textTransform: 'uppercase',
                fontWeight: 500,
                marginBottom: '8px',
                display: 'block',
              }}
            >
              Featured Video
            </span>
            <h3
              className="font-serif-display"
              style={{
                fontSize: 'clamp(18px, 2vw, 28px)',
                fontWeight: 300,
                color: '#ffffff',
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              {videoHubConfig.featuredTitle}
            </h3>
          </div>
        </div>
      </div>

      {/* Video categories grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px',
        }}
      >
        {videoHubConfig.categories.map((category) => {
          const Icon = iconMap[category.icon] || Monitor;
          return (
            <div
              key={category.id}
              data-video-item
              style={{
                background: 'rgba(10, 22, 40, 0.7)',
                border: '1px solid rgba(48, 176, 208, 0.2)',
                borderRadius: '16px',
                padding: '32px',
                aspectRatio: '16/10',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(48, 176, 208, 0.5)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(48, 176, 208, 0.2)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onClick={() => {
                window.open('https://www.youtube.com/@UmairAkhlaque', '_blank', 'noopener,noreferrer');
              }}
            >
              {/* Background gradient */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(10,22,40,0.3) 0%, rgba(5,10,15,0.9) 100%)',
                }}
              />
              {/* Icon */}
              <div style={{ position: 'relative', marginBottom: '16px' }}>
                <Icon size={24} style={{ color: '#30B0D0' }} />
              </div>
              {/* Content */}
              <div style={{ position: 'relative' }}>
                <h3
                  className="font-serif-display"
                  style={{
                    fontSize: '18px',
                    fontWeight: 300,
                    color: '#ffffff',
                    marginBottom: '4px',
                  }}
                >
                  {category.title}
                </h3>
                <p
                  className="font-sans-body"
                  style={{
                    fontSize: '11px',
                    color: 'rgba(237, 232, 228, 0.5)',
                    marginBottom: '8px',
                    lineHeight: 1.5,
                  }}
                >
                  {category.description}
                </p>
                <span
                  className="font-sans-body"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    color: '#30B0D0',
                    textTransform: 'uppercase',
                  }}
                >
                  {category.count}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
