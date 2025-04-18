import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  UtensilsCrossed, 
  Coffee, 
  Wine 
} from 'lucide-react';

const menuCategories = [
  {
    id: 1,
    title: 'Основное меню',
    icon: <UtensilsCrossed className="h-8 w-8 text-restaurant-primary" />,
    description: 'Изысканные блюда от нашего шеф-повара, сочетающие классические и современные кулинарные традиции',
    imageSrc: '/placeholder.svg',
    link: '/menu/main'
  },
  {
    id: 2,
    title: 'Десерты и кофе',
    icon: <Coffee className="h-8 w-8 text-restaurant-primary" />,
    description: 'Авторские десерты и широкий выбор кофейных напитков, которые идеально дополнят ваш вечер',
    imageSrc: '/placeholder.svg',
    link: '/menu/desserts'
  },
  {
    id: 3,
    title: 'Бар',
    icon: <Wine className="h-8 w-8 text-restaurant-primary" />,
    description: 'Впечатляющая коллекция вин, крафтовых коктейлей и изысканных спиртных напитков от наших барменов',
    imageSrc: '/placeholder.svg',
    link: '/menu/bar'
  }
];

const MenuPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Меню ресторана
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Откройте для себя неповторимые вкусы нашей кухни — сочетание 
            кулинарных традиций и авторских находок нашего шеф-повара
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuCategories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={category.imageSrc} 
                  alt={category.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {category.icon}
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <Button asChild 
                  variant="outline" 
                  className="w-full border-restaurant-primary text-restaurant-primary hover:bg-restaurant-primary hover:text-white"
                >
                  <Link to={category.link}>Посмотреть</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild className="bg-restaurant-primary hover:bg-restaurant-accent text-white px-8">
            <Link to="/menu">Все меню</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
