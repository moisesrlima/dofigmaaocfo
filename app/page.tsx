'use client'

import { useState } from 'react'
import Head from 'next/head'
import { 
  BookOpen, Target, BarChart3, Calculator, FileText, Presentation, 
  Shield, Check, Palette, TrendingUp, Menu, X, BrainCircuit, Link, Library, Download
} from 'lucide-react'
import CountdownBanner from './components/CountdownBanner'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const KIWIFY_URL = "https://pay.kiwify.com.br/Zyk82qK"

  const whatYouGet = [
    { icon: <BookOpen className="lucide-icon" />, text: 'Ebook “Do Figma ao CFO” — método completo UX → Negócio' },
    { icon: <Target className="lucide-icon" />, text: 'Framework UX → Negócio — Problema → Comportamento → Métrica → Impacto → Decisão' },
    { icon: <BarChart3 className="lucide-icon" />, text: 'Matriz de métricas — principal, proteção e diagnóstico' },
    { icon: <Calculator className="lucide-icon" />, text: 'Calculadora de impacto — cenários conservador, provável e ambicioso' },
    { icon: <FileText className="lucide-icon" />, text: 'Business Case de UX em 1 página' },
    { icon: <Presentation className="lucide-icon" />, text: 'Roteiro de apresentação executiva em 5 minutos' },
    { icon: <Shield className="lucide-icon" />, text: 'Respostas para as principais objeções de stakeholders' },
    { icon: <Check className="lucide-icon" />, text: 'Checklist de preparação para apresentação' },
  ]

  const bonuses = [
    {
      icon: <Download className="lucide-icon" />,
      title: 'Amostra Grátis — Canvas UX → Negócio',
      description: 'Baixe uma versão gratuita do nosso principal framework e veja na prática como organizar suas ideias para gerar impacto no negócio.',
      isFreeSample: true,
      link: '/Canvas-gratuito-do-figma-ao-cfo.pdf'
    },
    { icon: <Palette className="lucide-icon" />, title: 'Bônus #1: Canvas UX → Negócio', description: 'Um template visual para alinhar suas propostas de design com os objetivos do negócio desde o início.' },
    { icon: <TrendingUp className="lucide-icon" />, title: 'Bônus #2: Calculadora de Impacto UX', description: 'Uma ferramenta pronta para você simular o ROI de suas soluções e apresentar dados financeiros concretos.' },
    { icon: <BrainCircuit className="lucide-icon" />, title: 'Bônus #3: Arsenal de Prompts de IA', description: 'Prompts de IA prontos para você criar argumentos, acelerar pesquisas e otimizar a criação de apresentações executivas.' },
    { icon: <Link className="lucide-icon" />, title: 'Bônus #4: Curadoria de Ferramentas de IA', description: 'Uma lista de ferramentas de IA que vão otimizar seu fluxo de trabalho, da pesquisa à criação de slides.' },
    { icon: <Library className="lucide-icon" />, title: 'Bônus #5: Biblioteca de Referências', description: 'Links e materiais de estudo complementares para você aprofundar seus conhecimentos em UX, Negócios e Growth.' },
  ]

  return (
    <>
      <Head>
        <title>Do Figma ao CFO - Transforme Design em Resultado de Negócio</title>
        <meta name="description" content="O guia prático para designers que querem aprovar projetos, falar a língua do C-Level e acelerar a carreira." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CountdownBanner />

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
      
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">Do Figma ao CFO</div>
          <nav className="desktop-nav">
            <a href={KIWIFY_URL} target="_blank" rel="noreferrer" className="cta-button">COMPRAR AGORA</a>
          </nav>
          <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X color="white" /> : <Menu color="white" />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <a href={KIWIFY_URL} target="_blank" rel="noreferrer" className="cta-button" onClick={() => setIsMenuOpen(false)}>COMPRAR AGORA</a>
      </div>

      <main>
        <section className="hero-conversion">
          <div className="container hero-inner">
            <div className="hero-content">
              <p className="hero-subtitle">DE DESIGNER EXECUTOR A LÍDER ESTRATÉGICO</p>
              <h1 className="hero-title">Aprenda a falar a língua que aprova projetos: a do dinheiro.</h1>
              <p className="hero-description">Traduza o valor do seu design em impacto financeiro e veja seus projetos saírem do Figma para o mercado.</p>
              <div className="price-box-hero">
                <span className="old-price">De R$297</span>
                <span className="new-price">por R$47</span>
              </div>
              <p className="installments">Oferta por tempo limitado</p>
              <a href={KIWIFY_URL} target="_blank" rel="noreferrer" className="cta-button big-cta-button">QUERO TRANSFORMAR MINHA CARREIRA</a>
              <p className="secure-badge"><Shield size={16} style={{verticalAlign: 'middle', marginRight: '4px'}}/> Compra segura e acesso imediato na Kiwify</p>
            </div>
            <div className="hero-visual">
              <img src="https://i.postimg.cc/wjry9MpC/Code-Generated-Image-optimized.jpg" alt="Capa do Ebook Do Figma ao CFO" />
            </div>
          </div>
        </section>

        <section className="pain-point-section">
          <div className="container">
            <h2>Você se identifica com essa situação?</h2>
            <div className="story-grid">
              <div className="story-card">
                <h3>Cenário 1: O Sonhador</h3>
                <p>Você passa semanas em um projeto incrível, cria um protótipo de alta fidelidade e se prepara para a apresentação. Seu coração acelera. Você mostra tudo, orgulhoso.</p>
                <p className="punchline">No final, o gestor pergunta: "Legal, mas qual o ROI disso?" e seu projeto vai para a gaveta.</p>
              </div>
              <div className="story-card">
                <h3>Cenário 2: O Executor</h3>
                <p>Você é visto como "o cara do desenho", o talento criativo que deixa tudo bonito. Mas nas reuniões estratégicas, sua opinião é um "detalhe" e não uma diretriz.</p>
                <p className="punchline">Você sente que seu potencial é subutilizado e que poderia contribuir muito mais para o negócio se apenas ouvissem você.</p>
              </div>
            </div>
            <p className="pain-point-solution"><strong>A verdade é uma só:</strong> no mundo dos negócios, design sem dados é apenas decoração. Para virar o jogo, você precisa parar de falar de pixels e começar a falar de resultados.</p>
          </div>
        </section>

        <section className="what-you-get-section">
          <div className="container">
            <h2>O que você vai receber</h2>
            <div className="main-get-item">
              {whatYouGet[0].icon}
              <p>{whatYouGet[0].text}</p>
            </div>
            <h3 className="includes-subtitle">O método é composto por 7 capítulos práticos e direto ao ponto:</h3>
            <ol className="get-list">
              {whatYouGet.slice(1).map((item, index) => (
                <li key={index} className="get-list-item">
                  <p>{item.text}</p>
                  {item.icon}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bonuses-section">
          <div className="container">
            <h2>E não é só isso. Você ainda leva 6 bônus exclusivos:</h2>
            <div className="bonuses-grid">
              {bonuses.map((bonus, index) => (
                <div key={index} className={`bonus-card ${bonus.isFreeSample ? 'free-sample' : ''}`}>
                  <div className="bonus-icon">{bonus.icon}</div>
                  <h3>{bonus.title}</h3>
                  <p>{bonus.description}</p>
                  {bonus.isFreeSample && (
                    <a href={bonus.link} download className="download-button">
                      Baixar Agora
                    </a>
                  )}
                </div>
              ))}
            </div>
             <div style={{textAlign: 'center', marginTop: '40px'}}>
                <a href={KIWIFY_URL} target="_blank" rel="noreferrer" className="cta-button big-cta-button">QUERO O E-BOOK + BÔNUS</a>
            </div>
          </div>
        </section>

        <section className="kiwify-section">
          <div className="container">
            <h2>Acesso imediato em uma plataforma completa</h2>
            <p className="kiwify-subtitle">Todo o material — ebook, bônus e atualizações futuras — será entregue na área de membros da Kiwify, a plataforma mais moderna e intuitiva para produtos digitais.</p>
            <div className="kiwify-content">
              <div className="kiwify-video">
                <iframe 
                  src="https://www.youtube.com/embed/OO6GrUyJ_bw?si=ih6LCEsu53R9vAyd" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
                </iframe>
              </div>
              <div className="kiwify-features">
                <h3>O que você encontra lá:</h3>
                <ul>
                  <li><Check className="lucide-icon" /> Acesso organizado por módulos</li>
                  <li><Check className="lucide-icon" /> Consumo de aulas em vídeo e texto</li>
                  <li><Check className="lucide-icon" /> Download de materiais complementares</li>
                  <li><Check className="lucide-icon" /> Acesso vitalício, incluindo novas aulas e bônus</li>
                  <li><Check className="lucide-icon" /> Emissão de certificado de conclusão</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="author-section">
          <div className="container author-inner">
            <div className="author-image">
              <img src="https://i.postimg.cc/d0BQ7C92/Captura-de-Tela-2026-08-22-a-s-12-optimized.jpg" alt="Moisés Rabelo, autor do ebook" />
            </div>
            <div className="author-content">
              <h3>Moisés Rabelo | UX, Growth & IA</h3>
              <p className="author-quote">“O design só gera valor quando sai da tela e vira resultado no caixa. Eu te ensino o caminho.”</p>
              <p>Com mais de 10 anos de experiência, vi projetos incríveis serem barrados por não falarem a língua dos negócios. Por isso, criei um método que conecta o design de experiência a métricas de conversão e retorno financeiro.</p>
              <p>No ebook “Do Figma ao CFO”, reuni essa metodologia para que você transforme suas ideias em projetos aprovados e acelere sua carreira para uma posição realmente estratégica.</p>
            </div>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="container">
            <div className="guarantee-badge">
              <span><Shield size={20} style={{verticalAlign: 'middle', marginRight: '8px'}}/> Garantia Incondicional de 7 Dias</span>
            </div>
            <h2>Seu único risco é continuar tendo projetos engavetados.</h2>
            <p>Se em 7 dias você achar que este material não é um divisor de águas para sua carreira, devolvemos 100% do seu investimento. Simples assim.</p>
            <a href={KIWIFY_URL} target="_blank" rel="noreferrer" className="final-cta-button">COMPRAR POR R$47 AGORA</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© 2026 Moisés Rabelo | Do Figma ao CFO. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}