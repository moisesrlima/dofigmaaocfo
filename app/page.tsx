'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import { 
  BookOpen, Target, BarChart3, Calculator, FileText, Presentation, 
  Shield, Check, Palette, TrendingUp, Menu, X, BrainCircuit, Link, Library, Download
} from 'lucide-react'
import CountdownBanner from './components/CountdownBanner'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)

  const KIWIFY_URL = "https://pay.kiwify.com.br/Zyk82qK"

  const carouselImages = [
    { src: "https://i.postimg.cc/3rVGPGz7/Captura-de-Tela-2026-08-23-a-s-02-47-51.png", alt: "Tela inicial da comunidade", caption: "Tela inicial da comunidade" },
    { src: "https://i.postimg.cc/Qx77strF/Captura-de-Tela-2026-08-23-a-s-02-49-39.png", alt: "Planilha com formulas", caption: "Planilha com formulas" },
    { src: "https://i.postimg.cc/8PDFQVTk/Captura-de-Tela-2026-08-23-a-s-04-19-38.png", alt: "Exemplo do certificado", caption: "Exemplo do certificado" },
    { src: "https://i.postimg.cc/J7vX9XSB/Captura-de-Tela-2026-08-23-a-s-03-25-22.png", alt: "Lista do material anexo disponivel", caption: "Lista do material anexo disponível" },
  ];

  // Auto-play: troca de slide a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        const next = prev + 1;
        return next >= carouselImages.length ? 0 : next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToNext = () => {
    setCurrentSlide(prev => {
      const next = prev + 1;
      return next >= carouselImages.length ? 0 : next;
    });
  };

  const goToPrev = () => {
    setCurrentSlide(prev => {
      const prevIndex = prev - 1;
      return prevIndex < 0 ? carouselImages.length - 1 : prevIndex;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const whatYouGet = [
    { icon: <BookOpen className="lucide-icon" />, text: 'Ebook “Do Figma ao CFO” — método prático UX → Negócio' },
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
              <a href={KIWIFY_URL} target="_blank" rel="noreferrer" className="cta-button big-cta-button">QUERO TRANSFORMAR MINHA CARREIRA</a>
              <p className="secure-badge"><Shield size={16} style={{verticalAlign: 'middle', marginRight: '4px'}}/> Compra segura e acesso imediato na Kiwify</p>
            </div>
            <div className="hero-visual">
              <img src="https://i.postimg.cc/QCSyy65P/Gemini-Generated-Image-nl2l5unl2l5unl2l-optimized.jpg" alt="Capa do Ebook Do Figma ao CFO" />
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
            <h2>E não é só isso. Você ainda recebe 5 bônus + uma amostra gratuita:</h2>
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
            <h2>Acesso imediato pela área de membros</h2>
            <p className="kiwify-subtitle">Todo o material — ebook e bônus — será disponibilizado na área de membros da Kiwify.</p>
            <div className="kiwify-content">
              <div className="kiwify-carousel">
                <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {carouselImages.map((image, index) => (
                    <div className="carousel-slide" key={index} onClick={() => setZoomedImage(image.src)}>
                      <img src={image.src} alt={image.alt} />
                      <span className="slide-caption">{image.caption}</span>
                    </div>
                  ))}
                </div>
                <button 
                  className="carousel-button carousel-prev" 
                  onClick={goToPrev}
                >‹</button>
                <button 
                  className="carousel-button carousel-next" 
                  onClick={goToNext}
                >›</button>
                <div className="carousel-dots">
                  {carouselImages.map((_, index) => (
                    <button 
                      key={index}
                      className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                    ></button>
                  ))}
                </div>
              </div>
              <div className="kiwify-features">
                <h3>O que você encontra lá:</h3>
                <ul>
                  <li><Check className="lucide-icon" /> Acesso organizado por módulos</li>
                  <li><Check className="lucide-icon" /> Conteúdo em texto e vídeo, quando disponível</li>
                  <li><Check className="lucide-icon" /> Download de materiais complementares</li>
                  <li><Check className="lucide-icon" /> Acesso ao conteúdo adquirido enquanto ele estiver disponível na plataforma, conforme as condições da oferta</li>
                  <li><Check className="lucide-icon" /> Certificado de conclusão, conforme os critérios informados na área de membros</li>
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
              <p className="author-quote">“O design gera mais valor quando conseguimos conectar decisões de produto às necessidades das pessoas e aos objetivos do negócio.”</p>
              <p>Com mais de 10 anos de experiência, acompanhei projetos de design e produto em diferentes contextos e percebi como a comunicação com o negócio pode influenciar a forma como uma proposta é avaliada.</p>
              <p>Por isso, criei o <strong>“Do Figma ao CFO”</strong>: uma metodologia prática para ajudar profissionais de UX, UI e Produto a estruturar melhor seus argumentos, métricas, hipóteses e apresentações. O objetivo é desenvolver uma atuação mais orientada ao negócio — sem deixar de lado o pensamento de design.</p>
            </div>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="container">
            <div className="guarantee-badge">
              <span><Shield size={20} style={{verticalAlign: 'middle', marginRight: '8px'}}/> Garantia de 7 Dias</span>
            </div>
            <h2>Conheça o material por 7 dias. Se você decidir que o conteúdo não é adequado para você, poderá solicitar o reembolso dentro do prazo e das condições da garantia oferecida na plataforma.</h2>
            <div className="price-box-final">
              <span className="old-price">De R$297</span>
              <span className="new-price">por apenas R$47</span>
            </div>
            <a href={KIWIFY_URL} target="_blank" rel="noreferrer" className="final-cta-button">GARANTIR MEU ACESSO POR R$47</a>
          </div>
        </section>

        <section className="disclaimer-section">
          <div className="container">
            <h4>Importante</h4>
            <p>Este produto tem caráter <strong>educacional</strong>. Os exemplos, métricas, estimativas e cenários apresentados servem como referências para apoiar a análise e a comunicação de projetos. A aplicação do conteúdo depende do contexto, dos dados disponíveis, da empresa e das decisões dos envolvidos. <strong>O material não garante aprovação de projetos, aumento de receita, promoção, contratação, aumento salarial ou qualquer resultado financeiro ou profissional específico.</strong></p>
            <p style={{ marginTop: '16px', fontSize: '0.8rem' }}>Este é um produto criado por Moisés Rabelo. Todas as marcas e ferramentas mencionadas (como Figma, Kiwify, etc.) são propriedades de seus respectivos donos e são utilizadas apenas para fins educacionais e de referência. Não há qualquer endosso ou afiliação oficial com essas empresas.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© 2026 Moisés Rabelo | Do Figma ao CFO. Todos os direitos reservados.</p>
        </div>
      </footer>

      {zoomedImage && (
        <div className="zoom-modal" onClick={() => setZoomedImage(null)}>
          <img src={zoomedImage} alt="Imagem ampliada" />
          <button className="close-zoom-button" onClick={() => setZoomedImage(null)}><X /></button>
        </div>
      )}
    </>
  )
}