import { motion } from "framer-motion";
import { useEffect } from "react";
import { 
  Zap, Search, TrendingUp, Users, Clock, Phone, AlertCircle, 
  MessageSquare, Sparkles, Globe, Shield, CheckCircle, ChevronDown
} from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { StatCounter } from "@/components/StatCounter";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ProblemCard } from "@/components/ProblemCard";
import { HowItWorksStep } from "@/components/HowItWorksStep";
import { DynamicHeroBackground } from "@/components/DynamicHeroBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Declaración de tipo para el widget de Goeva
declare global {
  interface Window {
    goeva?: {
      init: (config: {
        agentId: string;
        position?: string;
      }) => void;
    };
  }
}

const LuckyNetFinder = () => {
  // Cargar el script de Goeva Widget
  useEffect(() => {
    // Crear y agregar el script del widget de Goeva
    const script = document.createElement('script');
    script.src = 'https://www.goeva.ai/widget.js';
    script.async = true;
    
    // Configurar el widget
    script.onload = () => {
      if (window.goeva) {
        window.goeva.init({
          agentId: 'b8e24ea9-470d-433d-8aa2-f8d1284c80b2',
          position: 'bottom-right'
        });
      }
    };
    
    document.body.appendChild(script);
    
    // Cleanup: remover el script cuando el componente se desmonte
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Dynamic Animated Background */}
        <DynamicHeroBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">La Primera herramienta en su tipo en México</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Encuentra el Internet Perfecto para tu{" "}
              <span className="text-gradient">Negocio</span> en{" "}
              <span className="text-gradient">Segundos</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              La primera herramienta en su tipo en México que conecta 300+ proveedores al instante
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <a
                href="#contacto"
                className="btn-warning px-8 py-4 rounded-lg font-semibold text-lg inline-block text-center"
              >
                Verificar Cobertura Gratis
              </a>
              <a
                href="#soluciones"
                className="btn-outline px-8 py-4 rounded-lg font-semibold text-lg inline-block text-center"
              >
                Ver Demo
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">300+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Proveedores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">&lt;30s</div>
                <div className="text-xs md:text-sm text-muted-foreground">Tiempo de Búsqueda</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  <Globe className="w-8 h-8 md:w-10 md:h-10 mx-auto" />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">Cobertura Nacional</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="servicios" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              ¿Te suena <span className="text-destructive">familiar</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los problemas tradicionales al buscar conectividad para tu negocio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ProblemCard 
              icon={Clock} 
              text="Semanas cotizando con múltiples proveedores" 
              delay={0}
            />
            <ProblemCard 
              icon={AlertCircle} 
              text="Información desactualizada y poco confiable" 
              delay={0.1}
            />
            <ProblemCard 
              icon={Phone} 
              text="Sin visibilidad de todas las opciones disponibles" 
              delay={0.2}
            />
            <ProblemCard 
              icon={TrendingUp} 
              text="Procesos lentos y complicados de comparación" 
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="soluciones" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Presentamos Lucky Net Finder 🚀</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-3xl mx-auto">
              La primera herramienta en <span className="text-gradient">México</span> impulsada por <span className="text-gradient">Inteligencia Artificial</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Con el respaldo de <span className="font-semibold text-foreground">más de 300 aliados estratégicos</span>, te mostramos en tiempo real la cobertura de telecomunicaciones en cualquier punto del país.
              </p>
              <p className="text-xl font-semibold text-foreground">
                Lucky Net Finder analiza al instante y te entrega las mejores alternativas de conectividad:
              </p>
              <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-base font-medium text-foreground">Fibra óptica de última generación</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-base font-medium text-foreground">Enlaces inalámbricos (WISP)</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-base font-medium text-foreground">Conectividad satelital</span>
                </motion.div>
              </div>
              <p className="pt-4">
                Con el respaldo de <span className="font-semibold text-primary">Lucky Intelligence</span>, broker e integrador líder en telecomunicaciones, transformamos la manera de encontrar la red ideal para tu empresa, proyecto o negocio.
              </p>
              <p className="text-2xl font-bold text-foreground pt-2">
                🌐 Un solo clic, toda la cobertura del país.
              </p>
              <p className="text-xl font-semibold text-gradient pt-2">
                Lucky Net Finder: Inteligencia que conecta.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <FeatureCard
              icon={Search}
              title="Búsqueda Instantánea"
              description="300+ proveedores analizados en tiempo real según tus necesidades"
              delay={0}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Comparación Inteligente"
              description="Precios, velocidades y tiempos de instalación al instante"
              delay={0.1}
            />
            <FeatureCard
              icon={Globe}
              title="Cobertura Nacional"
              description="Toda la República Mexicana cubierta en nuestra red"
              delay={0.2}
            />
            <FeatureCard
              icon={Users}
              title="Asesoría Experta"
              description="Acompañamiento desde búsqueda hasta instalación"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="nosotros" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Así de <span className="text-gradient">Simple</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solo 3 pasos para encontrar tu mejor opción
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-12">
            <HowItWorksStep
              step={1}
              icon={MessageSquare}
              title="Conversa con Lucky"
              description="Cuéntale qué velocidad necesitas, tu ubicación y presupuesto. Lucky entiende lenguaje natural."
              delay={0}
            />
            <HowItWorksStep
              step={2}
              icon={Zap}
              title="Resultados Instantáneos"
              description="Lucky analiza 300+ proveedores en segundos y te muestra las mejores opciones con precios y tiempos."
              delay={0.2}
            />
            <HowItWorksStep
              step={3}
              icon={CheckCircle}
              title="Conecta con el Mejor"
              description="Un asesor experto te ayuda a contratar e instalar. Sin complicaciones, sin sorpresas."
              delay={0.4}
              isLast
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
            <StatCounter end={300} label="Proveedores en Red" suffix="+" />
            <StatCounter end={25} label="Años de Experiencia" suffix="+" />
            <StatCounter end={10000} label="Búsquedas Realizadas" suffix="+" />
            <StatCounter end={98} label="Satisfacción Cliente" suffix="%" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Lo que dicen nuestros <span className="text-gradient">clientes</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <TestimonialCard
              name="Carlos Rodríguez"
              company="TechStart México"
              rating={5}
              testimonial="En menos de 30 segundos encontré 3 opciones perfectas. Antes me tomaba semanas. Lucky cambió completamente el proceso."
            />
            <TestimonialCard
              name="María González"
              company="Retail Solutions"
              rating={5}
              testimonial="La comparación de precios fue instantánea y transparente. Ahorramos 40% en conectividad para todas nuestras sucursales."
            />
            <TestimonialCard
              name="José Hernández"
              company="Logística Express"
              rating={5}
              testimonial="El acompañamiento del asesor fue excepcional. Desde la búsqueda hasta la instalación, todo impecable."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Descubre tu Mejor Opción de Internet <span className="text-gradient">Hoy</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Conversa con nuestro asistente inteligente Lucky y obtén resultados al instante
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-12">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>100% Gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Sin Compromiso</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>Respuesta Instantánea</span>
                </div>
              </div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card border border-border rounded-2xl shadow-lg p-8 md:p-12"
              >
                <div className="flex flex-col items-center gap-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Haz clic en el chat flotante</h3>
                    <p className="text-muted-foreground mb-6">
                      Nuestro asistente Lucky está listo para ayudarte. <br />
                      Busca el ícono del chat en la esquina inferior derecha.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="mailto:contacto@luckyintelligence.com"
                      className="btn-outline px-8 py-3 rounded-lg font-semibold inline-block"
                    >
                      O Enviar Email
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Preguntas <span className="text-gradient">Frecuentes</span>
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                ¿Cuánto cuesta usar Lucky Net Finder?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Lucky Net Finder es completamente gratuito. No cobramos por búsquedas ni comparaciones. Nuestro servicio se financia a través de comisiones de los proveedores cuando contratas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                ¿Qué información necesito proporcionar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Solo necesitas tu ubicación, velocidad deseada y presupuesto aproximado. Lucky hace el resto del trabajo por ti.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                ¿Cuánto tarda la búsqueda?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Lucky analiza 300+ proveedores en menos de 30 segundos. Recibirás resultados instantáneos con las mejores opciones disponibles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                ¿Funciona en toda la República?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Sí, tenemos cobertura nacional. Lucky tiene acceso a proveedores locales y nacionales en todos los estados de México.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                ¿Qué pasa después de los resultados?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Un asesor experto te contacta para ayudarte a elegir la mejor opción, negociar precios y coordinar la instalación. Te acompañamos en todo el proceso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">
                ¿Puedo cambiar de proveedor actual?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Absolutamente. Muchos clientes usan Lucky para encontrar mejores opciones. Te ayudamos con el proceso de migración sin interrupciones en tu servicio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LuckyNetFinder;

