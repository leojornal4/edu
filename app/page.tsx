"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Shield,
  Users,
  Scale,
  MessageCircleMoreIcon,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Mail,
  ChevronDown,
  Gavel,
  FileText,
  Eye,
  Award,
  Menu,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LawFirmPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  const faqData = [
    {
      question: "O que fazer em caso de prisão?",
      answer:
        "Entre em contato imediatamente conosco através do WhatsApp ou telefone. Atuamos 24h em casos de emergência, inclusive em prisões em flagrante e audiências de custódia. Nossa equipe está preparada para atuar rapidamente, orientando sobre os direitos do preso e tomando as medidas cabíveis para garantir a melhor defesa possível.",
    },
    {
      question: "Posso ser representado mesmo estando em outro estado?",
      answer:
        "Sim! Atendemos clientes em todo o Brasil, tanto presencialmente quanto por videoconferência, garantindo o mesmo nível de qualidade. Temos experiência em processos em diversas comarcas do país e utilizamos tecnologia para manter comunicação constante com nossos clientes, independentemente da distância.",
    },
    {
      question: "Vocês atendem causas militares?",
      answer:
        "Sim, temos especialização em Direito Penal Militar, atuando na defesa de militares da ativa e reserva em auditorias militares e IPMs (Inquéritos Policiais Militares). Nossa experiência inclui crimes militares como deserção, insubordinação, violência contra superior, entre outros previstos no Código Penal Militar.",
    },
    {
      question: "O atendimento é sigiloso?",
      answer:
        "Absolutamente. Mantemos sigilo total sobre todos os casos, respeitando rigorosamente o código de ética da advocacia. Todas as informações compartilhadas conosco são protegidas pelo sigilo profissional, garantindo total confidencialidade e discrição em todos os atendimentos e processos.",
    },
    {
      question: "Como funciona o pagamento dos honorários?",
      answer:
        "Oferecemos diferentes modalidades de pagamento para facilitar o acesso à justiça. Os honorários podem ser pagos à vista com desconto, parcelados ou através de outras formas de acordo com cada caso. Durante a consulta inicial, apresentamos um orçamento transparente e discutimos as melhores opções de pagamento para sua situação.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#1D1C1C] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-yellow-600/20 bg-[#1D1C1C]/95 backdrop-blur-md supports-[backdrop-filter]:bg-[#1D1C1C]/90 transition-all duration-300">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            <Image
              src="/logo-edu-transp.png"
              alt="Eduardo Domingos Advocacia Criminal"
              width={200}
              height={60}
              className="h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium hover:text-yellow-400 transition-all duration-300 relative group"
            >
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("areas")}
              className="text-sm font-medium hover:text-yellow-400 transition-all duration-300 relative group"
            >
              Áreas de Atuação
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium hover:text-yellow-400 transition-all duration-300 relative group"
            >
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="text-sm font-medium hover:text-yellow-400 transition-all duration-300 relative group"
            >
              Diferenciais
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium hover:text-yellow-400 transition-all duration-300 relative group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold hidden md:inline-flex transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link
                href="https://wa.me/5521964224724?text=Olá,%20gostaria%20de%20falar%20com%20um%20advogado%20criminalista."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Atendimento Rápido via WhatsApp
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-yellow-600/20 bg-[#1D1C1C]/95 backdrop-blur-md animate-in slide-in-from-top-2 duration-300">
            <nav className="container px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block text-sm font-medium hover:text-yellow-400 transition-all duration-300 w-full text-left py-2 px-3 rounded-md hover:bg-yellow-400/10"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("areas")}
                className="block text-sm font-medium hover:text-yellow-400 transition-all duration-300 w-full text-left py-2 px-3 rounded-md hover:bg-yellow-400/10"
              >
                Áreas de Atuação
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block text-sm font-medium hover:text-yellow-400 transition-all duration-300 w-full text-left py-2 px-3 rounded-md hover:bg-yellow-400/10"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("diferenciais")}
                className="block text-sm font-medium hover:text-yellow-400 transition-all duration-300 w-full text-left py-2 px-3 rounded-md hover:bg-yellow-400/10"
              >
                Diferenciais
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block text-sm font-medium hover:text-yellow-400 transition-all duration-300 w-full text-left py-2 px-3 rounded-md hover:bg-yellow-400/10"
              >
                FAQ
              </button>
              <Button
                asChild
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-semibold mt-4 transition-all duration-300 hover:scale-105"
              >
                <Link
                  href="https://wa.me/5521964224724?text=Olá,%20gostaria%20de%20falar%20com%20um%20advogado%20criminalista."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className={`relative py-20 md:py-32 min-h-screen flex items-center bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
          visibleSections.has("inicio") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{
          backgroundImage: `url('/courtroom-hero.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D1C1C]/85 via-[#1D1C1C]/75 to-[#2A2828]/85"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-600/20 border border-yellow-600/30 backdrop-blur-sm">
                <span className="text-yellow-400 text-sm font-medium">
                  🏛️ Eduardo Domingos - Advocacia Criminal Especializada
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-2xl">
                <span className="text-yellow-400">Defesa Criminal</span> com
                <br />
                Experiência, Discrição e <span className="text-yellow-400">Agilidade</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                Mais de 10 anos atuando na defesa de clientes em todo o território nacional.
                <br className="hidden md:block" />
                Atendimento 24h, com total sigilo e dedicação aos seus direitos.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <Button
                asChild
                size="lg"
                className="text-lg px-12 py-6 bg-yellow-600 hover:bg-yellow-700 text-black font-semibold shadow-2xl hover:shadow-yellow-600/25 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Link
                  href="https://wa.me/5521964224724?text=Olá,%20gostaria%20de%20falar%20com%20um%20advogado%20criminalista."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Fale Agora com um Advogado
                </Link>
              </Button>

              <div className="flex items-center space-x-3 text-gray-300 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                <span className="text-sm font-medium">Disponível 24h • Atendimento Imediato</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="flex flex-col items-center space-y-4 p-8 rounded-xl bg-black/40 border border-yellow-600/20 backdrop-blur-md hover:bg-black/50 transition-all duration-300 hover:scale-105">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-600/30 backdrop-blur-sm">
                  <Check className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-yellow-400 text-lg">Atendimento Humanizado</h3>
                <p className="text-sm text-gray-300 text-center leading-relaxed">
                  Cuidado pessoal e atenção dedicada a cada caso
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 p-8 rounded-xl bg-black/40 border border-yellow-600/20 backdrop-blur-md hover:bg-black/50 transition-all duration-300 hover:scale-105">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-600/30 backdrop-blur-sm">
                  <Shield className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-yellow-400 text-lg">Estratégia Jurídica</h3>
                <p className="text-sm text-gray-300 text-center leading-relaxed">
                  Planejamento detalhado para cada situação
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 p-8 rounded-xl bg-black/40 border border-yellow-600/20 backdrop-blur-md hover:bg-black/50 transition-all duration-300 hover:scale-105">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-600/30 backdrop-blur-sm">
                  <Clock className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-yellow-400 text-lg">Disponível 24h</h3>
                <p className="text-sm text-gray-300 text-center leading-relaxed">
                  Emergências atendidas a qualquer hora
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section
        id="areas"
        className={`py-20 md:py-32 transition-all duration-1000 ${
          visibleSections.has("areas") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="w-fit mx-auto border-yellow-600 text-yellow-400 px-4 py-2 text-sm">
              Áreas de Atuação
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Especialidades em <span className="text-yellow-400">Direito Criminal</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-[800px] mx-auto leading-relaxed">
              Atuação especializada em todas as áreas do direito penal, com experiência comprovada e resultados
              efetivos.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Scale,
                title: "Direito Penal Comum",
                desc: "Crimes contra a pessoa, patrimoniais e contra a honra. Defesa completa em todas as instâncias.",
              },
              {
                icon: Shield,
                title: "Lei de Drogas",
                desc: "Tráfico, porte, associação. Atuação em prisões em flagrante e audiências de custódia.",
              },
              {
                icon: Gavel,
                title: "Tribunal do Júri",
                desc: "Defesa especializada em casos de homicídio doloso consumado ou tentado.",
              },
              {
                icon: Award,
                title: "Direito Penal Militar",
                desc: "Defesa de militares da ativa e reserva. Atuação em auditorias militares e IPMs.",
              },
              {
                icon: FileText,
                title: "Crimes contra Administração",
                desc: "Corrupção, peculato, lavagem de dinheiro e ações de improbidade administrativa.",
              },
              {
                icon: Users,
                title: "Violência Doméstica",
                desc: "Defesa em casos da Lei Maria da Penha e representação em medidas protetivas.",
              },
              {
                icon: Eye,
                title: "Crimes Virtuais",
                desc: "Invasão de dispositivos, ameaças online e estelionato digital.",
              },
              {
                icon: Scale,
                title: "Execução Penal",
                desc: "Progressão de regime, livramento condicional, indultos e benefícios.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-yellow-600/20 bg-[#2A2828]/80 backdrop-blur-sm hover:bg-[#333131]/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-600/10 group"
              >
                <CardHeader className="p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-600/20 group-hover:bg-yellow-600/30 transition-all duration-300">
                    <item.icon className="h-7 w-7 text-yellow-400" />
                  </div>
                  <CardTitle className="text-yellow-400 text-lg group-hover:text-yellow-300 transition-colors duration-300">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Escritório */}
      <section
        id="sobre"
        className={`py-20 md:py-32 bg-[#2A2828]/50 backdrop-blur-sm transition-all duration-1000 ${
          visibleSections.has("sobre") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto space-y-16">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit mx-auto border-yellow-600 text-yellow-400 px-4 py-2">
                Sobre o Escritório
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Mais de 10 anos defendendo <span className="text-yellow-400">liberdades</span>, com ética e competência
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Escritório com atuação destacada em Direito Penal, com advogados experientes, estratégicos e combativos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Scale,
                  title: "Experiência Comprovada",
                  desc: "Atuação em todas as fases: inquérito, processo, júri e execução penal com resultados efetivos",
                },
                {
                  icon: MapPin,
                  title: "Atuação Nacional",
                  desc: "Atendemos em todo o Brasil, presencialmente ou por videoconferência, mantendo a mesma qualidade",
                },
                {
                  icon: Award,
                  title: "OAB Regularizada",
                  desc: "Registro ativo na Ordem dos Advogados do Brasil, garantindo legalidade e ética profissional",
                },
                {
                  icon: Eye,
                  title: "Sigilo Absoluto",
                  desc: "Total confidencialidade e discrição em todos os atendimentos, respeitando o código de ética",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-yellow-600/20 bg-[#1D1C1C]/80 backdrop-blur-sm p-8 text-center hover:bg-[#1D1C1C]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-600/10 group"
                >
                  <div className="space-y-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-600/20 mx-auto group-hover:bg-yellow-600/30 transition-all duration-300">
                      <item.icon className="h-10 w-10 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-transparent rounded-xl"></div>
              <div className="relative p-10 bg-[#1D1C1C]/80 border border-yellow-600/20 rounded-xl backdrop-blur-sm hover:bg-[#1D1C1C]/90 transition-all duration-300">
                <div className="flex items-center justify-center mb-8">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-yellow-600/20">
                    <Gavel className="h-12 w-12 text-yellow-400" />
                  </div>
                </div>
                <blockquote className="text-xl md:text-2xl font-semibold text-yellow-400 italic text-center leading-relaxed mb-6">
                  "Experiência não se improvisa. São mais de 10 anos dedicados à advocacia criminal com resultados
                  concretos e a confiança de centenas de clientes."
                </blockquote>
                <div className="text-center">
                  <p className="text-gray-300 font-medium text-lg">Dr. Eduardo Domingos</p>
                  <p className="text-sm text-gray-400">Advogado Criminalista • OAB/RJ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section
        id="diferenciais"
        className={`py-20 md:py-32 transition-all duration-1000 ${
          visibleSections.has("diferenciais") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="w-fit mx-auto border-yellow-600 text-yellow-400 px-4 py-2">
              Diferenciais
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Por que escolher nosso <span className="text-yellow-400">escritório</span>?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Scale,
                title: "100% Especializado",
                desc: "Foco exclusivo em Direito Penal, garantindo expertise máxima em cada caso.",
              },
              {
                icon: Award,
                title: "Mais de uma Década",
                desc: "Experiência consolidada com mais de 10 anos de atuação na área criminal.",
              },
              {
                icon: Clock,
                title: "Atendimento 24h",
                desc: "Disponibilidade total para emergências, inclusive finais de semana e feriados.",
              },
              {
                icon: Gavel,
                title: "Tribunais e Júri",
                desc: "Atuação experiente em todas as instâncias, incluindo Tribunal do Júri.",
              },
              {
                icon: Shield,
                title: "Sigilo Absoluto",
                desc: "Total discrição e confidencialidade em todos os atendimentos e processos.",
              },
              {
                icon: MapPin,
                title: "Suporte Nacional",
                desc: "Atendimento presencial ou remoto em todo o território brasileiro.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center space-y-6 p-6 rounded-xl hover:bg-[#2A2828]/30 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-600/20 mx-auto group-hover:bg-yellow-600/30 transition-all duration-300">
                  <item.icon className="h-10 w-10 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className={`py-20 md:py-32 bg-[#2A2828]/30 backdrop-blur-sm transition-all duration-1000 ${
          visibleSections.has("faq") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="w-fit mx-auto border-yellow-600 text-yellow-400 px-4 py-2">
              Perguntas Frequentes
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Tire suas <span className="text-yellow-400">dúvidas</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <Card
                key={index}
                className="border-yellow-600/20 bg-[#2A2828]/80 backdrop-blur-sm overflow-hidden hover:bg-[#2A2828]/90 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/10"
              >
                <CardHeader className="p-6">
                  <button onClick={() => toggleFAQ(index)} className="w-full text-left">
                    <CardTitle className="text-yellow-400 flex items-center justify-between hover:text-yellow-300 transition-colors duration-300 text-lg">
                      {faq.question}
                      <ChevronDown
                        className={`h-6 w-6 transition-transform duration-300 ${openFAQ === index ? "rotate-180" : ""}`}
                      />
                    </CardTitle>
                  </button>
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      openFAQ === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <CardDescription className="text-gray-300 leading-relaxed text-base">{faq.answer}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Proteja sua liberdade com quem tem experiência de verdade
            </h2>
            <p className="text-xl leading-relaxed">
              Entre em contato agora mesmo. Agimos com urgência, responsabilidade e estratégia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-10 py-4 bg-[#1D1C1C] text-yellow-400 hover:bg-[#2A2828] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Link
                  href="https://wa.me/5521964224724?text=Olá,%20gostaria%20de%20falar%20com%20um%20advogado%20criminalista."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircleMoreIcon className="mr-2 h-5 w-5" />
                  Fale com um Advogado Agora
                </Link>
              </Button>
            </div>
            <p className="text-sm opacity-90">📞 Atendimento 24h | 📍 Atuação em todo o Brasil</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D1C1C] border-t border-yellow-600/20 py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Image
                src="/logo-edu-transp.png"
                alt="Eduardo Domingos Advocacia Criminal"
                width={200}
                height={60}
                className="h-12 w-auto transition-transform duration-300 hover:scale-105"
              />
              <p className="text-gray-400 leading-relaxed">
                Advocacia criminal especializada com mais de 10 anos de experiência na defesa de liberdades.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-yellow-400">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-400 hover:text-gray-300 transition-colors duration-300">
                  <Phone className="h-4 w-4" />
                  <span>(21) 99999-9999</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 hover:text-gray-300 transition-colors duration-300">
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp 24h</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 hover:text-gray-300 transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                  <span>contato@eduardodomingos.adv.br</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-yellow-400">Áreas de Atuação</h3>
              <ul className="space-y-3">
                {["Direito Penal Comum", "Lei de Drogas", "Tribunal do Júri", "Direito Penal Militar"].map((area) => (
                  <li key={area}>
                    <button
                      onClick={() => scrollToSection("areas")}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-left"
                    >
                      {area}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-yellow-400">Informações</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                    OAB/RJ 123.456
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                    CNPJ: 00.000.000/0001-00
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                    Termo LGPD
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-yellow-600/20 mt-12 pt-8 text-center">
            <p className="text-gray-400 mb-2">
              &copy; {new Date().getFullYear()} Eduardo Domingos Advocacia Criminal. Todos os direitos reservados.
            </p>
            <p className="text-sm text-yellow-400">Em conformidade com o Código de Ética da OAB</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
