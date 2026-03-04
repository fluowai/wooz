/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Globe, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Users, 
  Zap,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  MessageSquare,
  Send,
  Bot
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// --- Components ---

const Logo = ({ className = "h-8" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Recreating the stylized gold W from the logo */}
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
        </defs>
        <path 
          d="M10 30 L30 80 L50 40 L70 80 L90 30" 
          fill="none" 
          stroke="url(#goldGrad)" 
          strokeWidth="12" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M50 75 L40 90 L50 100 L60 90 Z" 
          fill="url(#goldGrad)" 
        />
      </svg>
    </div>
    <span className="text-2xl font-bold tracking-tighter text-white">
      Wooz<span className="text-gold-500">.</span>
    </span>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Cases', href: '#portfolio' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-gold-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="gold-gradient px-6 py-2 rounded-full text-sm font-semibold text-black hover:scale-105 transition-transform">
            Falar com Especialista
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass py-8 px-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-gold-400"
              >
                {link.name}
              </a>
            ))}
            <button className="gold-gradient w-full py-3 rounded-xl text-black font-bold">
              Falar com Especialista
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold-900/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass text-gold-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} />
            Presença Digital & Processos Comerciais
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-medium leading-tight mb-6">
            Elevamos sua marca ao <span className="text-gold italic">próximo nível</span>
          </h1>
          <p className="text-lg text-white/60 mb-8 max-w-lg leading-relaxed">
            A Wooz combina estratégia comercial avançada com presença digital de alto impacto para transformar leads em clientes fiéis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="gold-gradient px-8 py-4 rounded-full text-black font-bold flex items-center justify-center gap-2 group">
              Começar Agora
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-semibold">
              Ver Cases
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden glass p-4">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
              alt="Estratégia Wooz" 
              className="w-full h-full object-cover rounded-2xl opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Stats */}
          <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-2xl">
            <div className="text-3xl font-bold text-gold-400">+150%</div>
            <div className="text-xs text-white/50 uppercase tracking-wider">Crescimento Médio</div>
          </div>
          <div className="absolute -top-6 -right-6 glass p-6 rounded-2xl shadow-2xl">
            <div className="flex gap-1 mb-1">
              {[1,2,3,4,5].map(i => <Zap key={i} size={12} className="fill-gold-400 text-gold-400" />)}
            </div>
            <div className="text-xs text-white/50 uppercase tracking-wider">Excelência Digital</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Processos Comerciais",
      description: "Estruturamos sua máquina de vendas para escala previsível e alta performance.",
      icon: <TrendingUp size={32} />,
      benefits: [
        "Aumento de 40% na taxa de conversão",
        "Redução do ciclo de vendas médio",
        "Previsibilidade de receita mensal"
      ],
      features: ["Otimização de CRM", "Treinamento de SDR/Closers", "Playbook de Vendas", "Gestão de Funil"]
    },
    {
      title: "Presença Digital",
      description: "Criação de autoridade online através de design premium e posicionamento estratégico.",
      icon: <Globe size={32} />,
      benefits: [
        "Autoridade instantânea no mercado",
        "Atração de leads qualificados",
        "Identidade visual memorável"
      ],
      features: ["Websites de Alta Conversão", "Gestão de Tráfego Pago", "Branding & Identidade", "SEO Estratégico"]
    },
    {
      title: "Estratégia de Growth",
      description: "Análise de dados e experimentação contínua para escalar seu negócio de forma sustentável.",
      icon: <Target size={32} />,
      benefits: [
        "Escala sem perda de eficiência",
        "Decisões baseadas em dados reais",
        "Otimização constante de custos"
      ],
      features: ["Análise de Dados", "Inbound Marketing", "Retenção de Clientes", "CRO (Conversion Rate Optimization)"]
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-white/2 overflow-hidden">
      {/* Background Logo Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <Logo className="scale-[10]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Logo className="opacity-50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display mb-4">Nossas Soluções</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Abordagem holística que une o comercial ao digital para garantir que sua empresa não apenas seja vista, mas que venda mais.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl group hover:border-gold-500/50 transition-colors flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-3">Principais Benefícios</h4>
                <ul className="space-y-2">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/90">
                      <Zap size={14} className="text-gold-500 mt-1 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">O que entregamos</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-white/60 border border-white/10">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const cases = [
    {
      company: "TechFlow Solutions",
      industry: "SaaS B2B",
      challenge: "Processo comercial manual e falta de autoridade digital resultando em baixo volume de leads qualificados.",
      solution: "Implementação de CRM automatizado, treinamento de SDRs e novo portal institucional com foco em conversão.",
      result: "Aumento de 210% no volume de MQLs e redução de 35% no custo de aquisição (CAC).",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      company: "Nexus Invest",
      industry: "Fintech",
      challenge: "Dificuldade em transmitir confiança e segurança através do posicionamento digital atual.",
      solution: "Rebranding completo focado em autoridade e desenvolvimento de landing pages de alta performance.",
      result: "Crescimento de 150% na base de usuários ativos em apenas 4 meses.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="opacity-50 scale-75 origin-left" />
              <div className="h-px w-12 bg-gold-500/30" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display">Cases de Sucesso</h2>
          </div>
          <p className="text-white/50 max-w-md">
            Resultados reais para empresas que confiaram na metodologia Wooz para escalar seus negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {cases.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 glass">
                <img 
                  src={item.image} 
                  alt={item.company} 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-gold-500/20">
                    {item.industry}
                  </span>
                </div>
              </div>
              
              <h3 className="text-3xl font-display mb-6">{item.company}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">O Desafio</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{item.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">A Solução Wooz</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{item.solution}</p>
                </div>
                <div className="p-4 rounded-2xl bg-gold-500/10 border border-gold-500/20">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-2">O Resultado</h4>
                  <p className="text-gold-100 font-medium">{item.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=400" alt="Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-2xl glass flex flex-col items-center justify-center text-center p-4">
                <div className="text-4xl font-bold text-gold-400">10+</div>
                <div className="text-xs text-white/50 uppercase tracking-widest">Anos de Exp.</div>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-square rounded-2xl glass flex flex-col items-center justify-center text-center p-4">
                <div className="text-4xl font-bold text-gold-400">500+</div>
                <div className="text-xs text-white/50 uppercase tracking-widest">Projetos</div>
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400" alt="Office" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Por que a Wooz?</h2>
          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            Não somos apenas uma agência. Somos parceiros de crescimento. Entendemos que a presença digital sem um processo comercial sólido é apenas vaidade.
          </p>
          <div className="space-y-6">
            {[
              { title: "Foco em ROI", desc: "Cada centavo investido deve retornar em lucro real." },
              { title: "Metodologia Própria", desc: "Processos validados em centenas de nichos diferentes." },
              { title: "Time de Elite", desc: "Especialistas sêniores cuidando da sua conta." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full glass flex items-center justify-center text-gold-400">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gold-500/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[40px] overflow-hidden grid lg:grid-cols-2">
          <div className="p-12 md:p-16 bg-gold-500 text-black flex flex-col justify-between">
            <div>
              <Logo className="mb-12 opacity-80" />
              <h2 className="text-4xl font-display font-bold mb-8">Vamos escalar seu negócio?</h2>
              <p className="text-black/70 mb-12 text-lg leading-relaxed">
                Preencha o formulário e um de nossos especialistas em processos comerciais e presença digital entrará em contato em até 24 horas.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                    <Mail size={18} className="text-black/60" />
                  </div>
                  <span className="font-semibold">contato@wooz.com.br</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                    <Phone size={18} className="text-black/60" />
                  </div>
                  <span className="font-semibold">+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                    <MapPin size={18} className="text-black/60" />
                  </div>
                  <span className="font-semibold">São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-12">
              <a href="#" className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-gold-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-gold-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="p-12 md:p-16">
            <div className="lg:hidden mb-8">
              <Logo className="opacity-50" />
            </div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">Nome Completo</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold-500 outline-none transition-colors" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">E-mail Corporativo</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold-500 outline-none transition-colors" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">Telefone / WhatsApp</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold-500 outline-none transition-colors" placeholder="(11) 99999-9999" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">Empresa</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold-500 outline-none transition-colors" placeholder="Nome da sua empresa" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">Mensagem</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold-500 outline-none transition-colors" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button className="gold-gradient w-full py-4 rounded-xl text-black font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl shadow-gold-500/10">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <Logo />
        <div className="text-white/40 text-sm">
          © {new Date().getFullYear()} Wooz Estratégia Digital. Todos os direitos reservados.
        </div>
        <div className="flex gap-8 text-sm text-white/60">
          <a href="#" className="hover:text-gold-400">Privacidade</a>
          <a href="#" className="hover:text-gold-400">Termos</a>
        </div>
      </div>
    </footer>
  );
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: 'Olá! Sou o assistente virtual da Wooz. Como posso ajudar você a escalar seu negócio hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: {
          systemInstruction: `Você é o assistente virtual da Wooz, uma empresa especializada em processos comerciais e presença digital. 
          Seu objetivo é responder dúvidas de potenciais clientes de forma profissional, elegante e persuasiva.
          
          Informações sobre a Wooz:
          - Serviços Principais: Processos Comerciais (CRM, treinamento de vendas, playbooks) e Presença Digital (Websites de alta conversão, Branding, Tráfego Pago).
          - Diferenciais: Foco em ROI, metodologia própria validada, time de elite.
          - Cases: TechFlow Solutions (SaaS B2B, +210% MQLs) e Nexus Invest (Fintech, +150% usuários).
          - Localização: São Paulo, SP.
          - Tom de voz: Profissional, sofisticado (Dark Luxury), direto ao ponto e focado em resultados.
          
          Responda sempre em Português do Brasil. Se não souber algo, peça para o usuário entrar em contato pelo formulário do site ou pelo WhatsApp +55 (11) 99999-9999.`,
        },
      });

      const botText = response.text || "Desculpe, tive um problema ao processar sua solicitação. Poderia repetir?";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "No momento estou passando por uma manutenção rápida. Você pode falar conosco pelo formulário de contato abaixo!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] glass rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gold-500/20"
          >
            {/* Header */}
            <div className="bg-gold-500 p-4 flex items-center justify-between text-black">
              <div className="flex items-center gap-3">
                <Logo className="scale-75 origin-left" />
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-1 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-gold-500 text-black rounded-tr-none' 
                      : 'bg-white/10 text-white border border-white/10 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1">
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-black/60 border-t border-white/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite sua dúvida..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:border-gold-500 outline-none transition-colors"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="gold-gradient p-2 rounded-xl text-black hover:scale-105 transition-transform disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 gold-gradient rounded-full shadow-2xl flex items-center justify-center text-black group relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageSquare size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-[10px] font-bold text-white flex items-center justify-center rounded-full border-2 border-black">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default function App() {
  return (
    <div className="font-sans selection:bg-gold-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}
