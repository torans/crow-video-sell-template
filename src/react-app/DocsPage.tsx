import {
  Sparkles,
  Repeat,
  Smartphone,
  Speaker,
  Music,
  Monitor,
  Upload,
  FileText,
  Scissors,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import './index.css';

// ─── Docs Nav ───────────────────────────────────────────
function DocsNav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <a href="#" className="nav__logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#171717" />
              <path d="M2 17L12 22L22 17" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            乌鸦视频工厂
          </a>
          <ul className="nav__links">
            <li><a href="#features" className="nav__link">功能</a></li>
            <li><a href="#workflow" className="nav__link">工作流</a></li>
            <li><a href="#stats" className="nav__link">数据</a></li>
            <li><a href="#docs" className="nav__link">文档</a></li>
          </ul>
          <div className="nav__actions">
            <a href="#download" className="btn btn-primary">免费下载</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ─── Product Intro ──────────────────────────────────────
function ProductIntro() {
  const features = [
    { icon: <Sparkles size={20} />, title: '智能匹配分镜', desc: '颜色、标签、文案语义三重对齐，自动选取最匹配的视频片段' },
    { icon: <Repeat size={20} />, title: '批量全自动', desc: '一键日产1000+条原创带货视频，7×24小时不间断创作' },
    { icon: <Smartphone size={20} />, title: '竖屏9:16输出', desc: '默认1080×1920竖屏，适配抖音、TikTok、快手全平台' },
    { icon: <Speaker size={20} />, title: '多音色配音', desc: '10+种音色可选，涵盖年轻女声、成熟男声、活力童声等' },
    { icon: <Music size={20} />, title: '随机背景音乐', desc: '内置多风格背景音乐，批量创作时随机配乐，无需手动挑选' },
    { icon: <Monitor size={20} />, title: 'Mac/Windows跨平台', desc: '原生桌面应用，本地运行无需联网，保护商品数据安全' },
  ];

  return (
    <section className="section" id="features">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="text-mono-small" style={{ color: 'var(--gray-400)', marginBottom: '12px' }}>
            PRODUCT INTRO
          </p>
          <h2 className="text-section">产品介绍</h2>
          <p className="text-body-large" style={{ maxWidth: '600px', margin: '24px auto 0' }}>
            乌鸦视频工厂是一款专为电商卖家设计的 AI 短视频创作工具。通过人工智能技术，实现从文案撰写、配音合成到视频剪辑的全流程自动化，让卖家专注于选品和运营策略。
          </p>
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

// ─── Tutorial ───────────────────────────────────────────
function Tutorial() {
  const steps = [
    {
      step: '01',
      icon: <Upload size={24} />,
      color: 'blue',
      title: '上传商品',
      items: [
        '录入商品名称、功能、亮点、受众',
        '上传商品图片，AI 自动分析颜色与标签',
        '选择视频时长和分镜数量',
      ],
    },
    {
      step: '02',
      icon: <FileText size={24} />,
      color: 'pink',
      title: 'AI 写配音',
      items: [
        '输入一句提示词，AI 自动生成 80-150 字口播文案',
        '预览文案内容，可手动调整',
        '选择音色，一键合成自然语音',
      ],
    },
    {
      step: '03',
      icon: <Scissors size={24} />,
      color: 'red',
      title: '自动剪辑',
      items: [
        '智能匹配商品颜色与文案语义',
        '自动选取最合适的分镜片段',
        '自动混音，导出 9:16 竖屏 MP4',
      ],
    },
  ];

  return (
    <section className="section" id="workflow" style={{ background: 'var(--gray-50)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="text-mono-small" style={{ color: 'var(--gray-400)', marginBottom: '12px' }}>
            HOW TO USE
          </p>
          <h2 className="text-section">使用教程</h2>
          <p className="text-body-large" style={{ maxWidth: '520px', margin: '24px auto 0' }}>
            三步完成一条带货视频，操作简单，5 分钟上手
          </p>
        </div>
        <div className="workflow">
          {steps.map((item, i) => (
            <div key={i} className="workflow__item">
              <div className={`workflow__icon workflow__icon--${item.color}`}>
                {item.icon}
              </div>
              <p className={`workflow__step workflow__step--${item.color}`}>STEP {item.step}</p>
              <h3 className="workflow__title">{item.title}</h3>
              <ul style={{ listStyle: 'none', textAlign: 'left', marginTop: '16px' }}>
                {item.items.map((li, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px', fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                    <ArrowRight size={14} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--gray-400)' }} />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="card" style={{ marginTop: '48px', padding: '32px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px' }}>批量模式</h3>
          <p className="text-body" style={{ maxWidth: '480px', margin: '0 auto' }}>
            开启批量模式后，AI 会连续创作多条视频。设置好模板后，一键启动，一晚上可搞定一个月的量，轻松应对大促期间的视频需求。
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ────────────────────────────────────────────────
function FAQ() {
  const faqs = [
    {
      q: '支持 Mac 和 Windows 吗？',
      a: '支持。目前已支持 macOS 12+ 和 Windows 10+ 系统。',
    },
    {
      q: '数据安全吗？',
      a: '安全。应用采用本地运行模式，无需联网即可完成全部创作流程，商品数据不会上传到任何服务器。',
    },
    {
      q: '生成一条视频需要多久？',
      a: '约 3 分钟即可生成一条 1080P 竖屏带货视频，实际时间取决于商品图片数量和网络状况。',
    },
    {
      q: '支持哪些平台？',
      a: '支持抖音、TikTok、快手全平台。默认输出 9:16 竖屏格式，直接导出上传即可。',
    },
    {
      q: '可以批量生成吗？',
      a: '可以。开启批量模式后，一键启动，日产 1000+ 条视频，轻松应对大促和日常运营需求。',
    },
    {
      q: '需要付费吗？',
      a: '提供免费试用版本，包含基础功能。高级功能如更多音色、批量模式等可按需解锁。',
    },
  ];

  return (
    <section className="section" id="faq">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="text-mono-small" style={{ color: 'var(--gray-400)', marginBottom: '12px' }}>
            FAQ
          </p>
          <h2 className="text-section">常见问题</h2>
        </div>
        <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((item, i) => (
            <div key={i} className="card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <HelpCircle size={20} style={{ color: 'var(--develop-blue)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '8px', color: 'var(--black)' }}>
                    {item.q}
                  </h3>
                  <p className="text-body" style={{ margin: 0 }}>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Docs Footer ────────────────────────────────────────
function DocsFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <p className="footer__copy">
            © 2025 乌鸦视频工厂 · 专注电商短视频创作
          </p>
          <ul className="footer__links">
            <li>
              <a href="https://github.com/torans" target="_blank" rel="noopener noreferrer" className="footer__link">
                GitHub
              </a>
            </li>
            <li>
              <a href="#docs" className="footer__link">
                文档
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                联系
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

// ─── DocsPage ───────────────────────────────────────────
export default function DocsPage() {
  return (
    <div>
      <DocsNav />
      <main>
        <section className="hero" style={{ paddingBottom: '64px' }}>
          <div className="container">
            <div className="hero__badge">
              <span className="badge badge--blue">使用文档</span>
            </div>
            <h1 className="text-display hero__title" style={{ fontSize: '2.5rem' }}>
              乌鸦视频工厂<br />使用指南
            </h1>
            <p className="text-body-large hero__subtitle">
              快速上手全自动电商短视频创作，从商品上传到批量导出，<br />
              几步即可完成。
            </p>
          </div>
        </section>
        <hr className="divider" />
        <ProductIntro />
        <hr className="divider" />
        <Tutorial />
        <hr className="divider" />
        <FAQ />
      </main>
      <DocsFooter />
    </div>
  );
}
