import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  UtensilsCrossed, 
  Coffee, 
  Wine,
  Star
} from 'lucide-react';

// Категории меню
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

// Популярные блюда
const popularDishes = [
  {
    id: 1,
    name: "Стейк Рибай с трюфельным пюре",
    price: "1800 ₽",
    description: "Сочный стейк из мраморной говядины с пюре из картофеля и трюфельным маслом",
    image: "/placeholder.svg",
    category: "Основные блюда",
    isNew: false,
    isVegetarian: false,
    isRecommended: true
  },
  {
    id: 2,
    name: "Тирамису с амаретто",
    price: "550 ₽",
    description: "Классический итальянский десерт с добавлением ликера амаретто и свежими ягодами",
    image: "/placeholder.svg",
    category: "Десерты",
    isNew: false,
    isVegetarian: true,
    isRecommended: true
  },
  {
    id: 3,
    name: "Лосось гриль с соусом из шампанского",
    price: "1400 ₽",
    description: "Нежный лосось, приготовленный на гриле, подается с изысканным соусом из шампанского и сезонными овощами",
    image: "/placeholder.svg",
    category: "Основные блюда",
    isNew: true,
    isVegetarian: false,
    isRecommended: true
  },
  {
    id: 4,
    name: "Джаз-коктейль",
    price: "750 ₽",
    description: "Авторский коктейль от нашего бармена на основе виски, с добавлением цитрусовых и пряностей",
    image: "/placeholder.svg",
    category: "Бар",
    isNew: true,
    isVegetarian: true,
    isRecommended: true
  }
];

const Menu = () => {
  return (
    <Layout>
      {/* Hero секция */}
      <section className="relative py-20 bg-restaurant-dark">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ 
            backgroundImage: "url('/placeholder.svg')",
          }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">
              Меню ресторана РитмВкуса
            </h1>
            <p className="text-lg md:text-xl mb-0 text-shadow">
              Изысканные блюда, созданные с любовью и вдохновением
            </p>
          </div>
        </div>
      </section>

      {/* Популярные позиции */}
      <section className="py-16 bg-restaurant-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-restaurant-dark">
              Популярные позиции
            </h2>
            <p className="text-lg text-restaurant-gray max-w-3xl mx-auto">
              Фирменные блюда, которые полюбились нашим гостям и стали визитной карточкой ресторана
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDishes.map((dish) => (
              <div 
                key={dish.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    {dish.isNew && (
                      <span className="bg-restaurant-secondary text-restaurant-dark text-xs font-bold py-1 px-2 rounded-full">
                        Новинка
                      </span>
                    )}
                    {dish.isVegetarian && (
                      <span className="bg-green-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                        Вегетарианское
                      </span>
                    )}
                    {dish.isRecommended && (
                      <span className="bg-restaurant-primary text-white text-xs font-bold py-1 px-2 rounded-full flex items-center gap-1">
                        <Star className="h-3 w-3" fill="white" /> Хит
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-restaurant-dark">{dish.name}</h3>
                    <span className="font-semibold text-restaurant-primary">{dish.price}</span>
                  </div>
                  <p className="text-sm text-restaurant-gray mb-2">
                    {dish.description}
                  </p>
                  <p className="text-xs text-restaurant-gray/70">
                    {dish.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Категории меню */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-restaurant-dark">
              Категории меню
            </h2>
            <p className="text-lg text-restaurant-gray max-w-3xl mx-auto">
              Откройте для себя неповторимые вкусы нашей кухни — сочетание 
              кулинарных традиций и авторских находок нашего шеф-повара
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuCategories.map((category) => (
              <div 
                key={category.id} 
                className="bg-restaurant-cream/70 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
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
                    <h3 className="text-xl font-bold text-restaurant-dark">{category.title}</h3>
                  </div>
                  <p className="text-restaurant-gray mb-4">
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
        </div>
      </section>

      {/* Информация о специальных предложениях */}
      <section className="py-12 bg-restaurant-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-restaurant-dark/50 p-6 rounded-lg border border-restaurant-gray/30">
              <h3 className="text-xl font-bold mb-3 text-restaurant-secondary">Бизнес-ланч</h3>
              <p className="text-gray-300 mb-2">
                Понедельник-пятница с 12:00 до 16:00 
              </p>
              <p className="text-gray-300">
                Комплексный обед из трех блюд всего за 990 ₽
              </p>
            </div>
            <div className="bg-restaurant-dark/50 p-6 rounded-lg border border-restaurant-gray/30">
              <h3 className="text-xl font-bold mb-3 text-restaurant-secondary">Счастливые часы</h3>
              <p className="text-gray-300 mb-2">
                Ежедневно с 17:00 до 19:00
              </p>
              <p className="text-gray-300">
                Скидка 20% на все коктейли и вина по бокалам
              </p>
            </div>
            <div className="bg-restaurant-dark/50 p-6 rounded-lg border border-restaurant-gray/30">
              <h3 className="text-xl font-bold mb-3 text-restaurant-secondary">Ужин с живой музыкой</h3>
              <p className="text-gray-300 mb-2">
                Четверг-суббота с 19:00
              </p>
              <p className="text-gray-300">
                Специальное сет-меню для двоих за 4900 ₽
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
