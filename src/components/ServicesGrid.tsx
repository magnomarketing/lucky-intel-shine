import ServiceCard from './ServiceCard';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  ctaLabel?: string;
}

const ServicesGrid = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: '/icons/luckynetfinder.svg',
      title: "LuckyNet Finder",
      description: "Encuentra conectividad en minutos con IA. Consulta en tiempo real la cobertura de más de 300 proveedores y obtén las mejores opciones de precio y tiempo de entrega en cada zona.",
      tags: ["Cobertura en tiempo real", "+300 proveedores", "Búsqueda con IA"],
      link: "/lucky-net-finder",
      ctaLabel: "Ver más"
    },
    {
      id: 2,
      icon: '/icons/luckydashboard.svg',
      title: "Lucky Dashboard",
      description: "Gestiona tus leads a través de nuestros aliados y amplía tu cobertura comercial. Da seguimiento en tiempo real a cada oportunidad desde un solo panel.",
      tags: ["Gestión de leads", "+300 aliados", "Seguimiento en vivo"]
    },
    {
      id: 3,
      icon: '/icons/luckylinkmanager.svg',
      title: "Lucky Analytics",
      description: "Convierte tu red WiFi en una fuente de inteligencia para tu negocio. Portal cautivo con IA para conocer a quienes se conectan y activar automatizaciones según su perfil.",
      tags: ["Portal cautivo", "Analítica de usuarios", "Automatizaciones IA"]
    },
    {
      id: 4,
      icon: '/icons/luckyancolo.svg',
      title: "Lucky Ancolo",
      description: "Colocation y virtualización de infraestructura con conectividad Capa 2. Respaldados por Cernet y nuestro socio global Equinix, desde una unidad de rack hasta racks completos.",
      tags: ["Colocation Capa 2", "Equinix y Cernet", "Escalable"]
    },
    {
      id: 5,
      icon: '/icons/LuckyIntelligence.svg',
      title: "Lucky AI",
      description: "Agentes de inteligencia artificial diseñados para tu negocio. Creamos, configuramos y administramos agentes que automatizan conversaciones, atención, ventas y procesos.",
      tags: ["Agentes a medida", "Atención y ventas", "Gestionado por Lucky"]
    },
    {
      id: 6,
      icon: '/icons/luckyled.svg',
      title: "Lucky Led",
      description: "Soluciones LED para cualquier espacio. Desde tótems y kioscos hasta pantallas de gran formato, con la posibilidad de integrar experiencias impulsadas por inteligencia artificial.",
      tags: ["Tótems y kioscos", "Gran formato", "Experiencias con IA"]
    }
  ];

  return (
    <section id="servicios" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones integrales de telecomunicaciones potenciadas por inteligencia artificial
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              tags={service.tags}
              link={service.link}
              ctaLabel={service.ctaLabel}
            />
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Quieres ver alguna de estas soluciones en acción?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
            >
              Agendar una demo
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-8 py-3 font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Hablar con un asesor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
