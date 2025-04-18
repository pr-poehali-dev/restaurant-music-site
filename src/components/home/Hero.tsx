import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center">
      {/* Фоновое изображение с улучшенным затемнением для контраста */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/placeholder.svg')",
          backgroundPosition: "center 30%"
        }}
      ></div>
      
      {/* Содержимое с улучшенной читаемостью */}
      <div className="container-custom relative z-20 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-shadow-lg">
            РитмВкуса
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white text-shadow">
            Уникальное место, где гастрономические изыски 
            сочетаются с живой музыкой и неповторимой атмосферой
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-restaurant-primary hover:bg-restaurant-accent text-white text-lg px-8 py-6">
              <Link to="/reservation">Забронировать стол</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-6">
              <Link to="/events">Афиша мероприятий</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
