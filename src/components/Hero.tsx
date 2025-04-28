import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-primary overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Вкусно и быстро в любое время!
          </h1>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Наша закусочная предлагает лучшие сосиски в тесте, огромные сытные бутерброды и освежающие напитки
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
              Посмотреть меню
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-primary-foreground border-white/20 hover:bg-white/20">
              Заказать доставку
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
