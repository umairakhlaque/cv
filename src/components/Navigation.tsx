import { useEffect, useRef, useState } from 'react';
import { navigationConfig } from '../config';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  if (!navigationConfig.brandMark && navigationConfig.links.length === 0) {
    return null;
  }

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          padding: '20px 4vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background-color 0.5s ease, backdrop-filter 0.5s ease',
          backgroundColor: scrolled ? 'rgba(5, 10, 15, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        {/* Brand mark */}
        <div
          className="font-accent"
          style={{
            fontSize: '20px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: '#FFFFFF',
            cursor: 'pointer',
          }}
          onClick={() => handleNavClick('hero-section')}
        >
          {navigationConfig.brandMark}
        </div>

        {/* Desktop nav links */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }}
          className="nav-desktop"
        >
          {navigationConfig.links.map((item) => (
            <button
              key={item.targetId}
              onClick={() => handleNavClick(item.targetId)}
              className="font-sans-body"
              style={{
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                opacity: 0.6,
                fontSize: '12px',
                letterSpacing: '0.12em',
                cursor: 'pointer',
                transition: 'opacity 0.4s ease',
                padding: 0,
                textTransform: 'uppercase',
                fontWeight: 400,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.opacity = '0.6';
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Toggle menu"
        >
          <span
            style={{
              width: '24px',
              height: '1.5px',
              background: '#FFFFFF',
              transition: 'all 0.3s ease',
              transform: mobileOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none',
            }}
          />
          <span
            style={{
              width: '24px',
              height: '1.5px',
              background: '#FFFFFF',
              transition: 'all 0.3s ease',
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: '24px',
              height: '1.5px',
              background: '#FFFFFF',
              transition: 'all 0.3s ease',
              transform: mobileOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            background: 'rgba(5, 10, 15, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
          }}
        >
          {navigationConfig.links.map((item, i) => (
            <button
              key={item.targetId}
              onClick={() => handleNavClick(item.targetId)}
              className="font-serif-display"
              style={{
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '28px',
                fontWeight: 300,
                letterSpacing: '0.08em',
                cursor: 'pointer',
                opacity: 0,
                animation: `fadeInUp 0.4s ease ${i * 0.08}s forwards`,
              }}
            >
              {item.label}
            </button>
          ))}
          <style>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        .nav-desktop {
          display: flex !important;
        }
        .nav-mobile {
          display: none !important;
        }
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
