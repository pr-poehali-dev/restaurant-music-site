import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section className="section-padding bg-restaurant-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-restaurant-dark mb-6">
              О нашем ресторане-клубе
            </h2>
            <p className="text-lg mb-4 text-gray-700">
              РитмВкуса — это больше, чем просто ресторан. Это место, 
              где искусство кулинарии встречается с магией живой музыки, 
              создавая уникальное пространство для незабываемых вечеров.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Наш шеф-повар создает блюда, вдохновленные мировыми 
              кулинарными традициями, а талантливые музыканты наполняют 
              пространство потрясающими звуками джаза, блюза, рока и 
              классики.
            </p>
            <Button asChild className="bg-restaurant-primary hover:bg-restaurant-accent text-white">
              <Link to="/about">Узнать больше</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Интерьер ресторана-клуба РитмВкуса" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-2/3 aspect-video rounded-lg overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="Живая музыка в РитмВкуса" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
