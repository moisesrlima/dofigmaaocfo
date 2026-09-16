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
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizFinished, setQuizFinished] = useState(false)
  const [quizIndex, setQuizIndex] = useState(0)
  const [quizScore, setQuizScore] = useState(0)
  const [quizTimeLeft, setQuizTimeLeft] = useState(60)
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null)

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
    { icon: <BookOpen className="lucide-icon" />, text: 'Ebook “Do Figma ao CFO” — método prático para transformar ideias em argumentos de negócio' },
    { icon: <Target className="lucide-icon" />, text: 'Método Blindagem de Evidências de Ideias — Problema → Comportamento → Métrica → Impacto → Decisão' },
    { icon: <BarChart3 className="lucide-icon" />, text: 'Matriz de métricas para validar seu projeto antes de apresentar' },
    { icon: <Calculator className="lucide-icon" />, text: 'Calculadora de impacto com cenários realistas (conservador, provável, ambicioso)' },
    { icon: <FileText className="lucide-icon" />, text: 'Business Case em 1 página — o documento que decisores realmente leem' },
    { icon: <Presentation className="lucide-icon" />, text: 'Roteiro de apresentação executiva em 5 minutos — prepare-se para a sala de reunião' },
    { icon: <Shield className="lucide-icon" />, text: 'Respostas prontas para as principais objeções de stakeholders' },
    { icon: <Check className="lucide-icon" />, text: 'Checklist de pré-apresentação — chegue confiante e preparado' },
  ]

  const bonuses = [
    {
      icon: <Download className="lucide-icon" />,
      title: 'Canvas de Decisão',
      description: 'Template visual para estruturar seu argumento PROBLEMA → COMPORTAMENTO → MÉTRICA → IMPACTO → DECISÃO.',
      isFreeSample: true,
      link: '/Canvas-gratuito-do-figma-ao-cfo.pdf'
    },
    { icon: <Palette className="lucide-icon" />, title: 'Bônus #1: Canvas de Decisão', description: 'Ferramenta prática para mapear seu projeto antes de qualquer apresentação.' },
    { icon: <TrendingUp className="lucide-icon" />, title: 'Bônus #2: Leituras Estratégicas', description: 'Seleção de materiais sobre negócios, tomada de decisão e persuasão executiva.' },
    { icon: <BrainCircuit className="lucide-icon" />, title: 'Bônus #3: Arsenal de Prompts', description: 'Prompts prontos para criar argumentos de negócio e otimizar sua preparação.' },
    { icon: <Link className="lucide-icon" />, title: 'Bônus #4: Curadoria de Ferramentas', description: 'Lista de ferramentas que vão ajudar na pesquisa, criação de métricas e apresentações.' },
    { icon: <Library className="lucide-icon" />, title: 'Bônus #5: Biblioteca de Referências', description: 'Materiais complementares para aprofundar sua capacidade de argumentação de negócio.' },
  ]

  const learningJourney = [
    ['01', 'Problema', 'Identifique o que realmente precisa ser resolvido.'],
    ['02', 'Comportamento', 'Conecte a situação às ações das pessoas.'],
    ['03', 'Métricas', 'Escolha sinais que ajudam a provar sua hipótese.'],
    ['04', 'Impacto', 'Traduza a mudança em valor para o negócio.'],
    ['05', 'Business Case', 'Organize o raciocínio em uma página.'],
    ['06', 'Pitch', 'Apresente sua proposta em cinco minutos.'],
    ['07', 'Objeções', 'Prepare respostas para as perguntas difíceis.'],
    ['08', 'Decisão', 'Chegue à conversa pronto para avançar.'],
  ]

  const audience = [
    'Empreendedores digitais validando uma nova iniciativa',
    'Profissionais de produto e gestores defendendo prioridades',
    'Pessoas em transição de carreira ou assumindo mais responsabilidade',
    'Designers migrando para estratégia e negócio',
    'Intraempreendedores apresentando propostas para a liderança',
    'Quem precisa convencer clientes, sócios ou investidores',
  ]

  const objections = [
    ['“Não sou bom com números.”', 'Você não precisa virar especialista em finanças. Precisa saber quais números sustentam a sua decisão.'],
    ['“Ainda não tenho dados.”', 'O método ajuda a trabalhar com hipóteses, referências e cenários claros enquanto você constrói evidências.'],
    ['“Não trabalho com UX.”', 'A lógica parte do problema e do comportamento, mas serve para qualquer pessoa defendendo um projeto.'],
    ['“Minha ideia ainda está no começo.”', 'Quanto antes você organiza o raciocínio, mais cedo percebe o que precisa validar antes de pedir recursos.'],
  ]

  const quizQuestions = [
    {
      question: 'Antes de defender uma ideia, o que precisa estar claro?',
      options: ['O visual da solução', 'O problema que precisa ser resolvido', 'O nome do projeto', 'A opinião da equipe'],
      answer: 1,
    },
    {
      question: 'Por que observar o comportamento das pessoas?',
      options: ['Para entender como o problema aparece na prática', 'Para escolher uma cor melhor', 'Para evitar qualquer hipótese', 'Para substituir a decisão do negócio'],
      answer: 0,
    },
    {
      question: 'Uma boa métrica deve ajudar você a...',
      options: ['Encher a apresentação de números', 'Provar qualquer conclusão', 'Acompanhar se a mudança gerou o efeito esperado', 'Garantir um resultado financeiro'],
      answer: 2,
    },
    {
      question: 'Como apresentar o impacto de uma iniciativa?',
      options: ['Com uma promessa sem cenário', 'Conectando a mudança a valor e hipóteses claras', 'Usando apenas métricas de vaidade', 'Evitando falar de incertezas'],
      answer: 1,
    },
    {
      question: 'O que torna uma ideia mais preparada para uma decisão?',
      options: ['Ter a resposta para toda pergunta', 'Apresentar mais slides', 'Conectar problema, evidência, impacto e próximo passo', 'Pedir aprovação antes de pesquisar'],
      answer: 2,
    },
  ]

  const startQuiz = () => {
    setQuizStarted(true)
    setQuizFinished(false)
    setQuizIndex(0)
    setQuizScore(0)
    setQuizTimeLeft(60)
    setQuizFeedback(null)
  }

  const advanceQuiz = (isCorrect: boolean) => {
    const nextScore = quizScore + (isCorrect ? 1 : 0)
    setQuizScore(nextScore)
    setQuizFeedback(isCorrect ? 'Boa resposta. Você está construindo uma defesa com evidências.' : 'Essa resposta mostra um ponto que ainda precisa ser preparado antes da mesa.')

    if (quizIndex === quizQuestions.length - 1) {
      setQuizFinished(true)
    }
  }

  const submitQuizAnswer = (answerIndex: number) => {
    if (quizFeedback || quizFinished) return
    advanceQuiz(answerIndex === quizQuestions[quizIndex].answer)
  }

  useEffect(() => {
    if (!quizStarted || quizFinished || quizFeedback) return

    if (quizTimeLeft <= 0) {
      advanceQuiz(false)
      return
    }

    const timer = setTimeout(() => setQuizTimeLeft(prev => prev - 1), 1000)

    return () => clearTimeout(timer)
  }, [quizStarted, quizFinished, quizFeedback, quizIndex, quizScore, quizTimeLeft])

  const quizPercentage = Math.round(5 + (quizScore / quizQuestions.length) * 90)

  return (
    <>
      <Head>
        <title>Kit SABATINA 2.0 — Método Blindagem de Evidências de Ideias</title>
        <meta name="description" content="Kit SABATINA 2.0: prepare as evidências da sua ideia e sobreviva às perguntas que decidem com o Método Blindagem de Evidências de Ideias." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CountdownBanner />

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
      
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">SABATINA</div>
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
              <p className="hero-subtitle">KIT SABATINA 2.0</p>
              <h1 className="hero-title">Prepare as evidências da sua ideia. Sobreviva às perguntas que decidem.</h1>
              <p className="hero-description">SABATINA é o kit que aplica o Método Blindagem de Evidências de Ideias para transformar ideias, produtos e projetos em argumentos prontos para a mesa de decisão.</p>
              <div className="hero-actions">
                <a href={KIWIFY_URL} target="_blank" rel="noopener noreferrer" className="cta-button big-cta-button" data-cta="hero">QUERO ME PREPARAR PARA A SABATINA</a>
                <button type="button" className="quiz-trigger" onClick={startQuiz}>TESTAR SE ESTOU PREPARADO</button>
              </div>
              <p className="secure-badge"><Shield size={16} style={{verticalAlign: 'middle', marginRight: '4px'}}/> Compra segura e acesso imediato na Kiwify</p>
              <div className="quiz-panel" id="teste-sabatina">
                {!quizStarted && (
                  <>
                    <span className="quiz-label">DIAGNÓSTICO RÁPIDO</span>
                    <h2>Você está preparado para a SABATINA?</h2>
                    <p>5 perguntas para testar se sua ideia está pronta para as perguntas que decidem. Você terá 1 minuto por pergunta.</p>
                    <button type="button" className="quiz-start-button" onClick={startQuiz}>COMEÇAR TESTE</button>
                  </>
                )}
                {quizStarted && !quizFinished && (
                  <>
                    <div className="quiz-progress">
                      <span>PERGUNTA {quizIndex + 1} DE {quizQuestions.length}</span>
                      <strong>{quizTimeLeft}s</strong>
                    </div>
                    <h2>{quizQuestions[quizIndex].question}</h2>
                    <div className="quiz-options">
                      {quizQuestions[quizIndex].options.map((option, optionIndex) => (
                        <button type="button" key={option} onClick={() => submitQuizAnswer(optionIndex)} disabled={Boolean(quizFeedback)}>{option}</button>
                      ))}
                    </div>
                    {quizFeedback && <div className="quiz-feedback"><p>{quizFeedback}</p>{quizIndex < quizQuestions.length - 1 && <button type="button" onClick={() => { setQuizFeedback(null); setQuizIndex(prev => prev + 1); setQuizTimeLeft(60) }}>PRÓXIMA PERGUNTA</button>}</div>}
                  </>
                )}
                {quizFinished && (
                  <>
                    <span className="quiz-label">RESULTADO DA SABATINA</span>
                    <div className="quiz-result-score">{quizPercentage}%</div>
                    <h2>{quizScore === quizQuestions.length ? 'Você está preparado para a mesa.' : 'Você ainda não está preparado.'}</h2>
                    <p>{quizScore === quizQuestions.length ? 'Sua base está consistente. Agora transforme esse preparo em uma defesa completa.' : 'Uma ou mais respostas revelaram pontos frágeis. O Kit SABATINA 2.0 ajuda você a preparar as evidências antes de encarar a mesa.'}</p>
                    <a href={KIWIFY_URL} target="_blank" rel="noreferrer" className="quiz-buy-button">ADQUIRIR O KIT SABATINA 2.0</a>
                    <button type="button" className="quiz-restart-button" onClick={startQuiz}>REFAZER TESTE</button>
                  </>
                )}
              </div>
            </div>
            <div className="hero-visual">
              <img src="/ebook-sabatina-2.0.png" alt="Capa do Kit SABATINA 2.0" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="pain-point-section">
          <div className="container">
            <p className="section-kicker">Antes da mesa, vem a prova</p>
            <h2>Você está pronto para a sabatina?</h2>
            <div className="pain-points-grid">
              <div className="story-card">
                <h3>“Qual problema isso resolve?”</h3>
                <p>Você tem uma proposta, mas ainda não consegue mostrar por que ela importa e para quem.</p>
              </div>
              <div className="story-card">
                <h3>“Quanto isso pode gerar?”</h3>
                <p>A conversa muda quando pedem evidências, impacto, prioridade e um motivo concreto para decidir agora.</p>
              </div>
            </div>
            <p className="pain-point-solution"><strong>Uma boa ideia não se defende sozinha.</strong> A blindagem começa antes da reunião: problema, comportamento, métrica, impacto e decisão.</p>
          </div>
        </section>

        <section className="journey-section">
          <div className="container">
            <p className="section-kicker">Método Blindagem de Evidências de Ideias</p>
            <h2>O sistema que você aplica antes da mesa</h2>
            <div className="journey-grid">
              {learningJourney.map(([number, title, description]) => (
                <div className="journey-step" key={number}>
                  <span className="journey-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="positioning-section">
          <div className="container positioning-grid">
            <div>
              <p className="section-kicker">A lógica do Kit SABATINA 2.0</p>
              <h2>Não é sobre improvisar uma resposta. É sobre blindar o raciocínio.</h2>
            </div>
            <p>O Método Blindagem de Evidências de Ideias organiza o raciocínio por trás de uma decisão de negócio. Você parte do problema, conecta comportamento e métricas, estima impacto e chega à reunião pronto para responder: por que isso, por que agora e qual o impacto?</p>
          </div>
        </section>

        <section className="audience-section">
          <div className="container audience-grid">
            <div>
              <p className="section-kicker">Para quem encara a mesa</p>
              <h2>Para quem precisa sustentar uma ideia quando as perguntas começam.</h2>
            </div>
            <ul className="audience-list">
              {audience.map((item) => <li key={item}><Check className="lucide-icon" />{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="transformation-section">
          <div className="container">
            <p className="section-kicker">O efeito da blindagem</p>
            <h2>Você deixa de torcer por aprovação para entrar na sabatina com uma tese.</h2>
            <div className="transformation-grid">
              <div className="transformation-card before"><span>ANTES</span><strong>“Tenho uma ideia.”</strong><p>Uma proposta solta, difícil de priorizar e defender.</p></div>
              <div className="transformation-arrow">→</div>
              <div className="transformation-card after"><span>DEPOIS</span><strong>“Tenho evidências para decidir.”</strong><p>Um argumento claro, com impacto, cenários e próximo passo.</p></div>
            </div>
          </div>
        </section>

        <section className="what-you-get-section">
          <div className="container">
            <p className="section-kicker">O que existe dentro do produto</p>
            <h2>O Kit SABATINA 2.0, na prática</h2>
            <div className="main-get-item">
              {whatYouGet[0].icon}
              <p>{whatYouGet[0].text}</p>
            </div>
            <h3 className="includes-subtitle">Tudo o que você precisa para defender sua ideia do primeiro raciocínio à decisão:</h3>
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
            <h2>E não é só isso. Você ainda recebe 5 bônus + um canvas exclusivo:</h2>
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
                <a href={KIWIFY_URL} target="_blank" rel="noreferrer" className="cta-button big-cta-button">QUERO DEFENDER MEU PROJETO</a>
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
              <h3>Moisés Rabelo | Produto, estratégia & IA</h3>
              <p className="author-quote">“O design gera mais valor quando conseguimos conectar decisões de produto às necessidades das pessoas e aos objetivos do negócio.”</p>
              <p>Com mais de 10 anos de experiência, acompanhei projetos de design e produto em diferentes contextos e percebi como a comunicação com o negócio pode influenciar a forma como uma proposta é avaliada.</p>
              <p>Por isso, criei o <strong>“Do Figma ao CFO”</strong>: um kit prático para qualquer pessoa que precise estruturar argumentos, métricas, hipóteses e apresentações antes de pedir uma decisão. A origem está no design de produto, mas a aplicação vai muito além dele.</p>
            </div>
          </div>
        </section>

        <section className="objections-section">
          <div className="container">
            <p className="section-kicker">A mesa vai perguntar</p>
            <h2>As perguntas difíceis fazem parte da SABATINA. Prepare-se para elas.</h2>
            <div className="objections-grid">
              {objections.map(([question, answer]) => <div className="objection-card" key={question}><h3>{question}</h3><p>{answer}</p></div>)}
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
            <a href={KIWIFY_URL} target="_blank" rel="noreferrer" className="final-cta-button">QUERO ENTRAR PREPARADO NA SABATINA POR R$47</a>
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