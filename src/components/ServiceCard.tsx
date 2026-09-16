interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  ctaLabel?: string;
}

const ServiceCard = ({ icon, title, description, tags, link, ctaLabel }: ServiceCardProps) => {
  const href = link ?? '#contacto';
  const label = ctaLabel ?? (link ? 'Ver más' : 'Solicitar demo');

  return (
    <div className="bg-card rounded-lg p-6 shadow-md border border-border card-hover h-full flex flex-col">
      {/* Service Icon */}
      <div className="mb-6">
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-16 h-16 mx-auto object-contain"
        />
      </div>

      {/* Service Title */}
      <h3 className="text-xl font-bold text-foreground mb-4 text-center">
        {title}
      </h3>

      {/* Service Description */}
      <p className="text-muted-foreground text-center leading-relaxed">
        {description}
      </p>

      {/* Key Attributes */}
      {tags && tags.length > 0 && (
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Call to Action Link */}
      <div className="mt-auto pt-6 text-center">
        <a
          href={href}
          className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
        >
          {label}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
