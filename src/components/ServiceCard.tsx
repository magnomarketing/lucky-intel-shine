interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  const CardContent = () => (
    <>
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

      {/* Call to Action Link */}
      {link && (
        <div className="mt-6 text-center">
          <span className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors">
            Ver más 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <a 
        href={link}
        className="bg-card rounded-lg p-6 shadow-md border border-border card-hover block group"
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div className="bg-card rounded-lg p-6 shadow-md border border-border card-hover">
      <CardContent />
    </div>
  );
};

export default ServiceCard;