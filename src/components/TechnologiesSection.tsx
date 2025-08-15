const TechnologiesSection = () => {
  return (
    <section id="soluciones" className="py-16 gradient-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center">
          <h3 className="text-lg text-muted-foreground mb-8">
            The technologies we work with:
          </h3>
          
          <div className="flex justify-center items-center">
            <div className="bg-card rounded-lg px-8 py-6 shadow-md border border-border">
              <div className="text-2xl font-bold text-gradient">
                Xenko
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Advanced Technology Platform
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;