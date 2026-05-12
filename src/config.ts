/* ============================================================
   UMAIR AKHLAQ SYED — CEO | FOUNDER PORTFOLIO CONFIG
   Single source of truth for all website content
   Now including PPM / SPM and ISO Governance pillars
   ============================================================ */

// ─── Types ───────────────────────────────────────────────────

export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavLink {
  label: string
  targetId: string
}

export interface NavigationConfig {
  brandMark: string
  links: NavLink[]
}

export interface HeroConfig {
  wordmarkText: string
  eyebrow: string
  titleLine1: string
  titleLine2: string
  descriptionLine1: string
  descriptionLine2: string
  supportingLine: string
  ctaText: string
  ctaTextSecondary: string
  ctaTargetId: string
  ctaSecondaryTargetId: string
}

export interface PhilosophyConfig {
  eyebrow: string
  title: string
  body: string
  rollingWords: string[]
}

export interface MetricItem {
  value: string
  label: string
  color: 'cyan' | 'gold' | 'emerald'
  icon: string
  evidenceStatus: 'Publicly Verified' | 'Document-Backed' | 'User-Provided' | 'Evidence Required'
}

export interface ImpactDashboardConfig {
  eyebrow: string
  title: string
  metrics: MetricItem[]
}

export interface ProjectMeta {
  label: string
  value: string
}

export interface ProjectData {
  id: string
  title: string
  location: string
  year: string
  image: string
  subtitle: string
  meta: ProjectMeta[]
  paragraphs: string[]
  domain: string
  scale: string
  evidenceStatus: string
}

export interface GalleryConfig {
  sectionLabel: string
  title: string
  projects: ProjectData[]
}

export interface ProductData {
  id: string
  name: string
  tagline: string
  description: string
  status: string
  color: 'cyan' | 'emerald' | 'gold' | 'silver'
  image: string
  externalLink?: string
}

export interface InnovationLabConfig {
  sectionLabel: string
  title: string
  subtitle: string
  products: ProductData[]
}

export interface ArticleData {
  id: string
  title: string
  category: string
  source: string
  image: string
  externalLink?: string
}

export interface ArticlesConfig {
  sectionLabel: string
  title: string
  articles: ArticleData[]
}

export interface VideoCategory {
  id: string
  title: string
  description: string
  count: string
  icon: string
}

export interface VideoHubConfig {
  sectionLabel: string
  title: string
  featuredVideoId: string
  featuredTitle: string
  categories: VideoCategory[]
}

export interface AwardData {
  award: string
  issuer: string
  year: string
}

export interface AwardsConfig {
  sectionLabel: string
  title: string
  awards: AwardData[]
}

export interface BookConfig {
  sectionLabel: string
  title: string
  subtitle: string
  description: string
  bulletPoints: string[]
  ctaText: string
  ctaSecondaryText: string
  image: string
}

export interface AdvisoryConfig {
  eyebrow: string
  title: string
  description: string
  ctaPrimary: string
  ctaSecondary: string
  linkedinUrl: string
}

export interface MediumItem {
  cn: string
  en: string
  description: string
}

export interface MediumsConfig {
  sectionLabel: string
  items: MediumItem[]
}

export interface FooterEntry {
  text: string
  href?: string
}

export interface FooterColumn {
  heading: string
  entries: FooterEntry[]
}

export interface FooterConfig {
  visionText: string
  brandName: string
  columns: FooterColumn[]
  copyright: string
  videoPath: string
}

export interface ProjectDetailConfig {
  backLabel: string
}

// ─── Config Instances ────────────────────────────────────────

export const siteConfig: SiteConfig = {
  language: 'en',
  siteTitle: 'Umair Akhlaq Syed | CEO | Founder | Transformation Leader | PPM | ISO Governance',
  siteDescription: '25+ years transforming enterprises through cybersecurity, IAM, PPM/SPM, ServiceNow, ISO 20000/27001/22301 governance, and digital transformation. CEO, founder, speaker, and advisor.',
}

export const navigationConfig: NavigationConfig = {
  brandMark: 'UAS',
  links: [
    { label: 'Dashboard', targetId: 'dashboard' },
    { label: 'Expertise', targetId: 'philosophy' },
    { label: 'Stories', targetId: 'gallery' },
    { label: 'Innovation', targetId: 'innovation' },
    { label: 'Articles', targetId: 'articles' },
    { label: 'Book an Appointment', targetId: 'footer' },
  ],
}

export const heroConfig: HeroConfig = {
  wordmarkText: 'Umair A Syed',
  eyebrow: 'CEO | FOUNDER | PORTFOLIO & TRANSFORMATION LEADER',
  titleLine1: 'Building Secure, Governed',
  titleLine2: 'and Intelligent Enterprises',
  descriptionLine1: 'CEO, founder and transformation leader with 25+ years across cybersecurity, IAM, PAM, SSO, MFA, ServiceNow, ITSM, ITOM, AIOps, CMDB, Project Portfolio Management, Broadcom Clarity PPM, ServiceNow SPM and ISO governance.',
  descriptionLine2: '',
  supportingLine: 'From national-scale identity programmes and ServiceNow transformations to PPM/SPM governance, ISO 20000, ISO 27001 and ISO 22301 frameworks — bridging boardroom strategy, delivery governance, enterprise architecture and measurable business outcomes.',
  ctaText: 'Explore My Impact',
  ctaTextSecondary: 'Book Advisory',
  ctaTargetId: 'dashboard',
  ctaSecondaryTargetId: 'footer',
}

export const impactDashboardConfig: ImpactDashboardConfig = {
  eyebrow: 'IMPACT DASHBOARD',
  title: 'Numbers That Matter',
  metrics: [
    { value: '25+', label: 'Years Technology & Portfolio Leadership', color: 'cyan', icon: 'clock', evidenceStatus: 'Document-Backed' },
    { value: '35+', label: 'Enterprise Projects Delivered', color: 'cyan', icon: 'briefcase', evidenceStatus: 'Document-Backed' },
    { value: '9+', label: 'Strategic Programmes Led', color: 'gold', icon: 'target', evidenceStatus: 'Document-Backed' },
    { value: '\u00a340M+', label: 'Portfolio & Programme Impact', color: 'gold', icon: 'trending-up', evidenceStatus: 'Document-Backed' },
    { value: '12+', label: 'Countries Impacted', color: 'emerald', icon: 'globe', evidenceStatus: 'Document-Backed' },
    { value: '200K+', label: 'Daily Authentications Secured', color: 'cyan', icon: 'shield', evidenceStatus: 'User-Provided' },
    { value: '10K+', label: 'ActivePulse Licences Deployed', color: 'emerald', icon: 'cpu', evidenceStatus: 'Evidence Required' },
    { value: '200%', label: 'Portfolio Revenue Growth', color: 'gold', icon: 'bar-chart-3', evidenceStatus: 'Document-Backed' },
    { value: '30%', label: 'Service Desk Call Reduction', color: 'emerald', icon: 'phone-off', evidenceStatus: 'Document-Backed' },
    { value: '3', label: 'ISO Standards: 20000, 27001, 22301', color: 'gold', icon: 'award', evidenceStatus: 'Document-Backed' },
    { value: 'PPM', label: 'Portfolio Governance: Clarity & SPM', color: 'cyan', icon: 'layers', evidenceStatus: 'Document-Backed' },
    { value: '6+', label: 'Governance Domains: ITSM, ISMS, BCM', color: 'emerald', icon: 'shield-check', evidenceStatus: 'Document-Backed' },
  ],
}

export const philosophyConfig: PhilosophyConfig = {
  eyebrow: 'CORE CAPABILITIES',
  title: 'Deep Expertise Across the Enterprise',
  body: 'From boardroom strategy and portfolio governance to technical execution and ISO compliance — a unique combination of transformation leadership, PPM/SPM advisory, ISO governance and hands-on delivery across identity security, service management, automation, and product innovation.',
  rollingWords: ['IDENTITY', 'SECURITY', 'SERVICENOW', 'PPM/SPM', 'AUTOMATION', 'AIOps', 'ISO', 'GOVERNANCE', 'TRANSFORM', 'LEADERSHIP'],
}

export const galleryConfig: GalleryConfig = {
  sectionLabel: 'SUCCESS STORIES / 006',
  title: 'Transformation Delivered',
  projects: [
    {
      id: '001',
      title: 'National Identity & Governance',
      location: 'Government',
      year: '\u00a36.5M',
      image: 'images/case-study-nic.jpg',
      subtitle: 'Enterprise-scale IAM and SIEM transformation for national-level identity access governance.',
      meta: [
        { label: 'DOMAIN', value: 'IAM / SIEM / Security' },
        { label: 'SCALE', value: '\u00a36.5M Programme' },
        { label: 'TYPE', value: 'National Government' },
        { label: 'STATUS', value: 'Document-Backed' },
      ],
      paragraphs: [
        'Led the design and delivery of a comprehensive Identity Access & Governance programme at national scale, encompassing enterprise IAM architecture, privileged access management, and SIEM integration across multiple government agencies.',
        'The programme established centralized identity governance with automated provisioning, access certification workflows, and compliance evidence collection — replacing fragmented manual processes with a unified security fabric.',
        'Key outcomes included achieving regulatory compliance standards, reducing unauthorized access incidents, and establishing a reusable IAM framework that became the blueprint for subsequent government security programmes.',
        'Anonymised per client confidentiality agreements. Full documentation available for verified advisory engagements.',
      ],
      domain: 'IAM / SIEM / Government Security',
      scale: '\u00a36.5M',
      evidenceStatus: 'Document-backed',
    },
    {
      id: '002',
      title: 'ServiceNow ITSM Enterprise',
      location: 'Semi-Government',
      year: '\u00a34.8M',
      image: 'images/case-study-servicenow.jpg',
      subtitle: 'Full-scale ServiceNow ITSM rollout with CMDB foundation and process transformation.',
      meta: [
        { label: 'DOMAIN', value: 'ServiceNow / ITSM' },
        { label: 'SCALE', value: '\u00a34.8M Rollout' },
        { label: 'TYPE', value: 'Semi-Government' },
        { label: 'STATUS', value: 'Document-Backed' },
      ],
      paragraphs: [
        'Directed the enterprise-wide ServiceNow ITSM implementation encompassing Incident, Problem, Change, Request, and Service Catalogue modules — built on a properly architected CMDB foundation using CSDM methodology.',
        'The transformation replaced legacy service management tools with a unified platform, establishing ITIL-aligned processes, SLA/OLA frameworks, and automated workflow orchestration across 15+ business units.',
        'Key deliverables included a federated CMDB with automated discovery, self-service portal deployment, knowledge management framework, and comprehensive UAT and hypercare support — achieving go-live with zero critical incidents.',
        'Anonymised per client confidentiality agreements. Full documentation available for verified advisory engagements.',
      ],
      domain: 'ServiceNow / ITSM / CMDB',
      scale: '\u00a34.8M',
      evidenceStatus: 'Document-backed',
    },
    {
      id: '003',
      title: 'African Banking PAM',
      location: 'Banking',
      year: '\u00a32.5M',
      image: 'images/case-study-banking.jpg',
      subtitle: 'Privileged Access Management transformation with MFA integration for a major African bank.',
      meta: [
        { label: 'DOMAIN', value: 'PAM / MFA / Banking' },
        { label: 'SCALE', value: '\u00a32.5M Programme' },
        { label: 'TYPE', value: 'African Banking' },
        { label: 'STATUS', value: 'Document-Backed' },
      ],
      paragraphs: [
        'Led the Privileged Access Management transformation for a major African banking institution, implementing privileged identity governance, session management, and multi-factor authentication across critical banking infrastructure.',
        'The programme addressed regulatory requirements for privileged account accountability, implementing zero-trust controls, MFA enforcement for all administrative access, and comprehensive audit-ready privileged workflows.',
        'Key outcomes included achieving banking regulatory compliance, eliminating shared administrator accounts, implementing just-in-time privileged access, and establishing complete audit trails for all privileged sessions.',
        'Anonymised per client confidentiality agreements. Full documentation available for verified advisory engagements.',
      ],
      domain: 'PAM / MFA / Banking',
      scale: '\u00a32.5M',
      evidenceStatus: 'Document-backed',
    },
    {
      id: '004',
      title: 'Application Modernisation',
      location: 'Enterprise',
      year: '\u00a34.7M',
      image: 'images/case-study-migration.jpg',
      subtitle: 'Large-scale legacy modernisation and application migration programme.',
      meta: [
        { label: 'DOMAIN', value: 'Legacy / Migration' },
        { label: 'SCALE', value: '\u00a34.7M Programme' },
        { label: 'TYPE', value: 'Enterprise' },
        { label: 'STATUS', value: 'Document-Backed' },
      ],
      paragraphs: [
        'Spearheaded a comprehensive application modernisation programme transitioning legacy mainframe and DB2-based applications to modern cloud-native architecture — encompassing application assessment, migration planning, and phased execution.',
        'The programme delivered operating model redesign, cloud/hybrid strategy definition, transformation roadmaps, and hands-on migration execution — including data migration, application refactoring, and integration re-platforming.',
        'Key outcomes included significant infrastructure cost reduction, improved application performance and availability, elimination of technical debt, and establishment of a modern DevOps-enabled delivery capability.',
        'Anonymised per client confidentiality agreements. Full documentation available for verified advisory engagements.',
      ],
      domain: 'Legacy Migration / DB2 / Mainframe',
      scale: '\u00a34.7M',
      evidenceStatus: 'Document-backed',
    },
    {
      id: '005',
      title: 'PPM Portfolio Governance',
      location: 'Enterprise',
      year: 'Portfolio',
      image: 'images/case-study-ppm.jpg',
      subtitle: 'Broadcom Clarity PPM-based portfolio governance transformation with executive dashboards, demand management and delivery assurance.',
      meta: [
        { label: 'DOMAIN', value: 'PPM / PMO / Governance' },
        { label: 'TOOL', value: 'Broadcom Clarity PPM' },
        { label: 'TYPE', value: 'Enterprise' },
        { label: 'STATUS', value: 'Document-Backed' },
      ],
      paragraphs: [
        'Supported portfolio governance, delivery assurance and executive reporting design for a complex enterprise transformation environment. The organisation needed stronger visibility and governance across its project and programme portfolio — reporting was fragmented, prioritisation was inconsistent, and leadership lacked a reliable executive view of portfolio health.',
        'Defined the portfolio governance model, structured the demand-to-delivery lifecycle, designed executive portfolio dashboards, improved RAID and RACI discipline, and aligned portfolio reporting with leadership decision cycles. Supported Broadcom Clarity PPM usage for portfolio visibility and control.',
        'Key outcomes included improved portfolio transparency, stronger executive decision-making, better project health visibility, improved resource and risk governance, and more disciplined PMO reporting with board-level portfolio dashboards.',
        'Anonymised per client confidentiality agreements. Full documentation available for verified advisory engagements.',
      ],
      domain: 'Project Portfolio Management / PMO / Executive Governance',
      scale: 'Portfolio-level',
      evidenceStatus: 'Document-backed',
    },
    {
      id: '006',
      title: 'ISO Governance Programme',
      location: 'Multi-Sector',
      year: 'Governance',
      image: 'images/case-study-iso.jpg',
      subtitle: 'ISO 20000, ISO 27001 and ISO 22301 aligned governance frameworks across ITSM, ISMS and BCM domains.',
      meta: [
        { label: 'DOMAIN', value: 'ISO / Governance / Compliance' },
        { label: 'STANDARDS', value: 'ISO 20000 / 27001 / 22301' },
        { label: 'TYPE', value: 'Multi-Sector' },
        { label: 'STATUS', value: 'Document-Backed' },
      ],
      paragraphs: [
        'Led the design and implementation of ISO-aligned governance frameworks across three critical domains: IT Service Management (ISO 20000), Information Security Management (ISO 27001), and Business Continuity Management (ISO 22301). The organisation needed structured, auditable and sustainable operating models with clear policy, process, control and evidence structures.',
        'Developed comprehensive governance frameworks including ISMS governance structure, risk and control mapping, evidence tracking approaches, and management review packs. Aligned IAM, PAM, MFA and security operations with security governance. Supported BIA, RTO, RPO and MTPD alignment for business continuity.',
        'Key outcomes included stronger information security maturity, improved control visibility, better audit evidence, reduced compliance risk, clearer recovery ownership, and stronger resilience governance with executive-level reporting across all three ISO standards.',
        'Anonymised per client confidentiality agreements. Full documentation available for verified advisory engagements.',
      ],
      domain: 'ISO 20000 / ISO 27001 / ISO 22301 Governance',
      scale: 'Multi-domain governance',
      evidenceStatus: 'Document-backed',
    },
  ],
}

export const innovationLabConfig: InnovationLabConfig = {
  sectionLabel: 'INNOVATION LAB',
  title: 'Products & Platforms',
  subtitle: 'From concept to deployment — enterprise products built for real-world challenges.',
  products: [
    {
      id: 'activepulse',
      name: 'ActivePulse',
      tagline: 'On-Premises MFA for Regulated Enterprises',
      description: 'Multi-factor authentication purpose-built for Microsoft Exchange ActiveSync and regulated enterprise scenarios where cloud solutions aren\'t viable.',
      status: 'Product Concept',
      color: 'cyan',
      image: 'images/product-activepulse.jpg',
    },
    {
      id: 'secdiscovery',
      name: 'SecDiscovery',
      tagline: 'Agentless IoT/OT Discovery & CMDB Enrichment',
      description: 'Agentless discovery platform that maps IoT and OT assets, automatically enriching CMDB data for ITSM/ITOM ecosystems.',
      status: 'Product Concept',
      color: 'emerald',
      image: 'images/product-secdiscovery.jpg',
    },
    {
      id: 'eagleeye',
      name: 'Eagle Eye CISO360',
      tagline: 'AI-Driven Cybersecurity Intelligence',
      description: 'Compliance, governance, and cybersecurity risk intelligence platform powered by AI for real-time threat visibility.',
      status: 'Product Concept',
      color: 'gold',
      image: 'images/product-eagleeye.jpg',
    },
    {
      id: 'urouj',
      name: 'Urouj',
      tagline: 'Digital Knowledge & Publishing Platform',
      description: 'Knowledge transformation and digital publishing platform for the modern enterprise.',
      status: 'Live Platform',
      color: 'cyan',
      image: 'images/product-urouj.jpg',
      externalLink: 'https://fhz72ls7r32nm.ok.kimi.link/#',
    },
    {
      id: 'cmdb-book',
      name: 'CMDB: The Missing Link',
      tagline: 'The Foundation of IT Transformation',
      description: 'A book and thought-leadership platform establishing CMDB as the missing foundation for AIOps, cybersecurity, and enterprise transformation.',
      status: 'Book / Upcoming',
      color: 'silver',
      image: 'images/product-cmdb-book.jpg',
    },
  ],
}

export const articlesConfig: ArticlesConfig = {
  sectionLabel: 'THOUGHT LEADERSHIP',
  title: 'Published Insights',
  articles: [
    {
      id: 'article-1',
      title: 'Adopting Machine Learning in Identity & Governance Solutions in Cybersecurity Framework: A BETH Dataset Study',
      category: 'AI / IAM',
      source: 'Academic Publication',
      image: 'images/article-ml-iam.jpg',
      externalLink: 'https://ijisae.org/index.php/IJISAE/article/view/7618',
    },
    {
      id: 'article-2',
      title: 'AI/ML-Driven Service Management for Enhancing Organizational Overall KPIs and Security',
      category: 'AI/ML / ITSM',
      source: 'Academic Publication',
      image: 'images/article-aiml-itsm.jpg',
      externalLink: 'https://powertechjournal.com/index.php/journal/article/view/1937',
    },
    {
      id: 'article-3',
      title: 'Resilient Cybersecurity Architecture for Modern Power Systems: Addressing Threats to Critical Infrastructure',
      category: 'Cybersecurity',
      source: 'Academic Publication',
      image: 'images/article-cyber-power.jpg',
    },
    {
      id: 'article-4',
      title: 'From Failure to Foundation: The IAM Success Where Innovation Redefines Identity and Access',
      category: 'IAM / Innovation',
      source: 'NY Weekly Feature',
      image: 'images/article-iam-success.jpg',
      externalLink: 'https://nyweekly.com/tech/from-failure-to-foundation-the-iam-success-where-innovation-redefines-identity-and-access/',
    },
    {
      id: 'article-5',
      title: 'Why Enterprises Can\'t Rely on a Single Monitoring or Observability Tool — No Matter the Hype',
      category: 'AIOps / Observability',
      source: 'Industry Article',
      image: 'images/article-aiml-itsm.jpg',
    },
    {
      id: 'article-6',
      title: 'CMDB: The Missing Link — The Critical Foundation for AIOps, Cybersecurity & Enterprise Transformation',
      category: 'CMDB / CSDM',
      source: 'Book / Upcoming',
      image: 'images/product-cmdb-book.jpg',
    },
  ],
}

export const videoHubConfig: VideoHubConfig = {
  sectionLabel: 'VIDEO HUB',
  title: 'Watch & Learn',
  featuredVideoId: 'iW822Olk2oI',
  featuredTitle: 'When Software Disappears — The Future of Enterprise Technology',
  categories: [
    {
      id: 'tech-talks',
      title: 'Technology Talks',
      description: 'Deep-dive discussions on IAM, ServiceNow, PPM/SPM, ISO governance and enterprise tech.',
      count: '15+ Videos',
      icon: 'monitor',
    },
    {
      id: 'leadership',
      title: 'Leadership Reflections',
      description: 'CEO insights, transformation lessons, and board-level strategy perspectives.',
      count: '8+ Videos',
      icon: 'users',
    },
    {
      id: 'explainers',
      title: 'Product Explainers',
      description: 'Walkthroughs of ActivePulse, SecDiscovery, Eagle Eye, and platform demonstrations.',
      count: '5+ Videos',
      icon: 'cpu',
    },
    {
      id: 'community',
      title: 'Community & Speaking',
      description: 'Conference talks at GISEC Dubai, London IAM events, CA World, and community contributions.',
      count: '10+ Videos',
      icon: 'mic',
    },
  ],
}

export const awardsConfig: AwardsConfig = {
  sectionLabel: 'RECOGNITION',
  title: 'Awards & Honors',
  awards: [
    { award: 'Best Partner Award — EMEA Innovation', issuer: 'CA Technologies', year: 'RECOGNITION' },
    { award: 'Employee of the Year', issuer: 'Duroob Technology', year: 'RECOGNITION' },
    { award: 'Award of Appreciation — Successful ITSM Project', issuer: 'First Bank', year: 'RECOGNITION' },
    { award: 'PeerSpot Recognition & Leaderboard Profile', issuer: 'PeerSpot', year: 'ACTIVE' },
    { award: 'Speaking Reference — GISEC Dubai', issuer: 'GISEC', year: 'RECOGNITION' },
    { award: 'Speaking Reference — London IAM Events', issuer: 'Industry', year: 'RECOGNITION' },
    { award: 'Speaking Reference — CA World / CA Partner Conference', issuer: 'CA Technologies', year: 'RECOGNITION' },
  ],
}

export const bookConfig: BookConfig = {
  sectionLabel: 'UPCOMING BOOK',
  title: 'CMDB: The Missing Link',
  subtitle: 'Why Configuration Management Database is the Foundation of Modern IT Transformation, AIOps, and Cybersecurity Resilience',
  description: 'A comprehensive thought-leadership work establishing CMDB and CSDM as the critical missing foundation for enterprise transformation. Drawing from 25+ years of delivery experience across government, banking, energy, and regulated sectors.',
  bulletPoints: [
    'The hidden cost of CMDB neglect in enterprise transformations',
    'How CMDB enables AIOps, automated remediation, and predictive operations',
    'Building the business case for CMDB investment',
    'Practical frameworks for CMDB implementation and CSDM adoption',
  ],
  ctaText: 'Join the Waitlist',
  ctaSecondaryText: 'Learn More',
  image: 'images/product-cmdb-book.jpg',
}

export const advisoryConfig: AdvisoryConfig = {
  eyebrow: 'ADVISORY SERVICES',
  title: "Let's Build Something Transformative",
  description: 'Available for board advisory, transformation consulting, PPM/SPM governance, ISO certification readiness, product strategy, and keynote speaking engagements across the UK, Middle East, and Africa.',
  ctaPrimary: 'Book Advisory Discussion',
  ctaSecondary: 'View LinkedIn Profile',
  linkedinUrl: 'https://www.linkedin.com/in/umairakhlaque/',
}

export const mediumsConfig: MediumsConfig = {
  sectionLabel: 'CAPABILITY MATRIX',
  items: [
    {
      cn: 'IAM',
      en: 'IDENTITY & ACCESS',
      description: 'Identity governance, privileged access management, SSO, MFA, and enterprise authentication architecture across regulated environments.',
    },
    {
      cn: 'ITSM',
      en: 'SERVICE MANAGEMENT',
      description: 'ServiceNow ITSM/ITOM implementation, CMDB/CSDM architecture, process automation, and enterprise service transformation.',
    },
    {
      cn: 'PPM',
      en: 'PORTFOLIO MANAGEMENT',
      description: 'Project Portfolio Management, Strategic Portfolio Management, Broadcom Clarity PPM, ServiceNow SPM, PMO governance, demand management and executive portfolio dashboards.',
    },
    {
      cn: 'ISO',
      en: 'GOVERNANCE & COMPLIANCE',
      description: 'ISO 20000 IT Service Management, ISO 27001 Information Security, ISO 22301 Business Continuity, audit readiness, control mapping, and governance framework development.',
    },
    {
      cn: 'AIOps',
      en: 'INTELLIGENT OPERATIONS',
      description: 'Observability strategy, event correlation, monitoring consolidation, and AI-driven operational intelligence platforms.',
    },
    {
      cn: 'CYBER',
      en: 'SECURITY & GRC',
      description: 'Cybersecurity governance, ISO 27001/20000/22301 compliance, risk management frameworks, and CISO advisory services.',
    },
    {
      cn: 'TRANSFORM',
      en: 'DIGITAL TRANSFORMATION',
      description: 'Enterprise transformation strategy, legacy modernisation, operating model design, and portfolio delivery leadership.',
    },
  ],
}

export const footerConfig: FooterConfig = {
  visionText: 'Helping enterprises, governments, and regulated organisations transform complex technology, security, service management and project portfolio environments into secure, governed, measurable and business-aligned digital platforms.',
  brandName: 'UMAIR AKHLAQ SYED',
  columns: [
    {
      heading: 'NAVIGATE',
      entries: [
        { text: 'Impact Dashboard', href: '#dashboard' },
        { text: 'Expertise', href: '#philosophy' },
        { text: 'Success Stories', href: '#gallery' },
        { text: 'Innovation Lab', href: '#innovation' },
        { text: 'Articles', href: '#articles' },
      ],
    },
    {
      heading: 'CONNECT',
      entries: [
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/umairakhlaque/' },
        { text: 'YouTube', href: 'https://www.youtube.com/@UmairAkhlaque' },
        { text: 'PeerSpot', href: 'https://www.peerspot.com/users/umair-abu-mohaymin-akhlaque' },
        { text: 'Urouj', href: 'https://fhz72ls7r32nm.ok.kimi.link/#' },
      ],
    },
    {
      heading: 'CONTACT',
      entries: [
        { text: 'Book Advisory Discussion', href: 'https://calendly.com/umairakhlaque78/30min' },
        { text: 'PPM/SPM Consultation', href: 'https://calendly.com/umairakhlaque78/30min' },
        { text: 'ISO Governance Advisory', href: 'https://calendly.com/umairakhlaque78/30min' },
        { text: 'Speaking Inquiries', href: 'https://calendly.com/umairakhlaque78/30min' },
        { text: "Available for advisory, consulting,\nand speaking engagements across\nUK, Middle East, and Africa." },
      ],
    },
  ],
  copyright: '\u00a9 2025 Umair Akhlaq Syed. All rights reserved.',
  videoPath: 'videos/footer-ambient.mp4',
}

export const projectDetailConfig: ProjectDetailConfig = {
  backLabel: '\u2190 Back',
}

// ─── Helpers ─────────────────────────────────────────────────

export function getProjectById(id: string): ProjectData | undefined {
  return galleryConfig.projects.find((p) => p.id === id)
}

export function getProductById(id: string): ProductData | undefined {
  return innovationLabConfig.products.find((p) => p.id === id)
}
