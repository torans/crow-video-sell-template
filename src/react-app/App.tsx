import {
  Video,
  Sparkles,
  Layers,
  Music,
  Download,
  Monitor,
  Repeat,
  Smartphone,
  Speaker,
  ArrowRight,
  Check,
  FileText,
  Mail,
} from 'lucide-react';
import './index.css';
import DocsPage from './DocsPage';
import appScreenshot from './assets/app-screenshot.png';

// ─── Nav ───────────────────────────────────────────────
function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <a href="#" className="nav__logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="var(--brand-indigo)" />
              <path d="M2 17L12 22L22 17" stroke="var(--accent-violet)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="var(--accent-violet)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            乌鸦短视频工厂
          </a>
          <ul className="nav__links">
            <li><a href="#features" className="nav__link">功能</a></li>
            <li><a href="#features" className="nav__link">特色</a></li>
            <li><a href="#stats" className="nav__link">数据</a></li>
            <li><a href="#faq" className="nav__link">文档</a></li>
          </ul>
          <div className="nav__actions">
            <a href="#download" className="btn btn-primary">免费下载</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ──────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__badge">
          <span className="badge badge--blue">电商短视频创作工具</span>
        </div>
        <h1 className="text-display hero__title">
          短视频，从文案到成片全自动
        </h1>
        <p className="text-body-large hero__subtitle">
          上传商品，AI 自动写文案、配音、剪辑，<br />
          批量导出竖屏带货视频。专为抖店 / 快手 / TikTok 卖家设计。
        </p>
        <div className="hero__actions">
          <a href="#download" className="btn btn-primary btn-lg">
            <Download size={16} />
            免费下载桌面端
          </a>
          <a href="#features" className="btn btn-secondary btn-lg">
            查看功能
            <ArrowRight size={16} />
          </a>
        </div>
        {/* Product Screenshot */}
        <div className="hero__screenshot">
          <div className="app-mockup">
            <div className="app-mockup__titlebar">
              <span className="app-mockup__dot" style={{ background: '#ff5f57' }} />
              <span className="app-mockup__dot" style={{ background: '#febc2e' }} />
              <span className="app-mockup__dot" style={{ background: '#28c840' }} />
              <span className="app-mockup__label">乌鸦短视频工厂</span>
            </div>
            <img
              src={appScreenshot}
              alt="乌鸦短视频工厂桌面应用界面"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Workflow Section ──────────────────────────────────
function WorkflowSection() {
  const steps = [
    {
      color: 'blue',
      step: 'STEP 01',
      icon: <Layers size={22} />,
      title: '上传商品',
      desc: '录入商品名称、功能、亮点、受众。上传商品图，AI 自动分析颜色与标签，为智能匹配打好基础。',
    },
    {
      color: 'pink',
      step: 'STEP 02',
      icon: <Sparkles size={22} />,
      title: 'AI 写配音',
      desc: '根据产品信息，AI 自动生成 80-150 字口播文案。选择音色，一键合成自然语音。',
    },
    {
      color: 'red',
      step: 'STEP 03',
      icon: <Video size={22} />,
      title: '自动剪辑',
      desc: '智能匹配商品颜色与文案语义，选取最合适的分镜片段。自动混音，导出 9:16 竖屏高清 MP4。',
    },
  ];

  return (
    <section className="section section-dark" id="how-it-works">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p className="text-mono-small" style={{ marginBottom: '12px' }}>
            HOW IT WORKS
          </p>
          <h2 className="text-section">三步，从想法到成片</h2>
        </div>
        <div className="workflow">
          {steps.map((item, i) => (
            <div key={i} className="workflow__item">
              <div className={`workflow__icon`}>
                {item.icon}
              </div>
              <p className={`workflow__step workflow__step--${item.color}`}>{item.step}</p>
              <h3 className="workflow__title">{item.title}</h3>
              <p className="workflow__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Features Section ──────────────────────────────────
function FeaturesSection() {
  const features = [
    {
      icon: <Sparkles size={18} />,
      title: '智能匹配分镜',
      desc: '颜色、标签、文案语义三重对齐，自动选取最匹配的视频片段。',
    },
    {
      icon: <Repeat size={18} />,
      title: '批量全自动',
      desc: '开启批量模式，AI 连续创作，一键日产 1000+ 条原创带货视频。',
    },
    {
      icon: <Smartphone size={18} />,
      title: '竖屏 9:16 输出',
      desc: '默认输出 1080×1920 竖屏，适配抖音、TikTok、快手全平台。',
    },
    {
      icon: <Speaker size={18} />,
      title: '多音色配音',
      desc: '10+ 种音色可选，涵盖年轻女声、成熟男声、活力童声等多种风格。',
    },
    {
      icon: <Music size={18} />,
      title: '随机背景音乐',
      desc: '内置多风格背景音乐，批量创作时随机配乐，无需手动挑选。',
    },
    {
      icon: <Monitor size={18} />,
      title: 'Mac / Windows',
      desc: '原生桌面应用，本地运行无需联网，保护商品数据安全。',
    },
  ];

  return (
    <section className="section" id="features">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p className="text-mono-small" style={{ marginBottom: '12px' }}>
            WHY CHOOSE US
          </p>
          <h2 className="text-section">为什么选择我们</h2>
        </div>
        <div className="features">
          {features.map((f, i) => (
            <div key={i} className="card feature-card">
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats Section ─────────────────────────────────────
function StatsSection() {
  const stats = [
    { number: '2000+', label: '日产视频条数' },
    { number: '3', label: '步完成创作' },
    { number: '10+', label: '配音音色' },
    { number: '30秒', label: '生成一条' },
  ];

  return (
    <section className="section" id="stats">
      <div className="container">
        <div className="stats">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-card__number">{s.number}</div>
              <p className="stat-card__desc">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Helps ──────────────────────────────────────
function HowItHelps() {
  const painPoints = [
    '每天花 3 小时剪辑视频，占用所有运营时间',
    '找不到合适的分镜，拼出来的不自然',
    '配音单调，平台用户已经听腻了',
    '需要量产视频测爆款，人力根本来不及',
  ];

  const solutions = [
    'AI 全自动创作，把时间留给选品和运营策略',
    '智能匹配 + 随机选片双模式，灵活可控',
    '10+ 音色可选，每月换新风格保持新鲜感',
    '批量模式一键启动，一晚上搞定一个月的量',
  ];

  return (
    <section className="section section-dark" id="faq">
      <div className="container">
        <div className="problem-solution">
          {/* Pain */}
          <div>
            <p className="text-mono-small" style={{ color: 'var(--error)', marginBottom: '16px' }}>
              THE PROBLEM
            </p>
            <h2 className="text-section" style={{ marginBottom: '32px' }}>
              手动剪辑，<br />是时候告别了
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {painPoints.map((p, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: 'var(--error)', marginTop: '2px', flexShrink: 0, fontWeight: 'bold' }}>×</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Solution */}
          <div>
            <p className="text-mono-small" style={{ color: 'var(--accent-violet)', marginBottom: '16px' }}>
              THE SOLUTION
            </p>
            <h2 className="text-section" style={{ marginBottom: '32px' }}>
              AI 驱动创作，<br />效率提升 100 倍
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {solutions.map((s, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check size={18} style={{ color: 'var(--success)', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-primary)', fontSize: '1rem', lineHeight: '1.6' }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ───────────────────────────────────────
function CtaSection() {
  return (
    <section className="cta" id="download">
      <div className="container">
        <h2 className="text-section cta__title">准备好提升视频产能了吗？</h2>
        <p className="text-body-large cta__desc">
          免费下载，支持 Mac 和 Windows。<br />
          3 分钟上手，第一条视频即生成。
        </p>
        <div className="cta__buttons">
          <a href="#" className="btn btn-primary btn-lg">
            <Download size={16} />
            免费下载 for Mac
          </a>
          <a href="#" className="btn btn-secondary btn-lg">
            <Download size={16} />
            免费下载 for Windows
          </a>
        </div>
        <p style={{ marginTop: '24px', fontSize: '0.875rem', color: 'var(--text-quaternary)' }}>
          macOS 12+ / Windows 10+
        </p>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <p className="footer__copy">
            © 2026 乌鸦短视频工厂 · 专注电商短视频创作
          </p>
          <ul className="footer__links">
            <li>
              <a href="#docs" className="footer__link">
                <FileText size={14} style={{ display: 'inline', marginRight: '4px' }} />
                文档
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                <Mail size={14} style={{ display: 'inline', marginRight: '4px' }} />
                联系我们
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

// ─── App ───────────────────────────────────────────────
export default function App() {
  const isDocs = window.location.hash === '#docs';

  if (isDocs) {
    return <DocsPage />;
  }

  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <hr className="divider" />
        <WorkflowSection />
        <hr className="divider" />
        <FeaturesSection />
        <hr className="divider" />
        <StatsSection />
        <HowItHelps />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
