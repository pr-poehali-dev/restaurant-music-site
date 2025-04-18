import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: 'Джазовый вечер с трио "Blue Note"',
    date: '15 ноября 2023',
    time: '19:00',
    image: '/placeholder.svg',
    description: 'Легендарное джазовое трио исполнит классические композиции и авторские произведения',
    link: '/events/1'
  },
  {
    id: 2,
    title: 'Акустический концерт Алексея Петрова',
    date: '18 ноября 2023',
    time: '20:00',
    image: '/placeholder.svg',
    description: 'Талантливый исполнитель представит свою новую программу с лучшими хитами',
    link: '/events/2'
  },
  {
    id: 3,
    title: 'Вечер фламенко: "Страсть Испании"',
    date: '22 ноября 2023',
    time: '19:30',
    image: '/placeholder.svg',
    description: 'Яркое шоу с профессиональными танцорами и живой музыкой, погружающее в культуру Испании',
    link: '/events/3'
  }
];

const EventsPreview = () => {
  return (
    <section className="section-padding bg-restaurant-dark text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-restaurant-secondary">
            Ближайшие мероприятия
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Музыкальные вечера, концерты и тематические мероприятия, 
            которые сделают ваш визит в РитмВкуса незабываемым
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-restaurant-gray/20 border border-restaurant-gray/30 rounded-lg overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                  <div className="flex items-center gap-2 text-restaurant-secondary">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-restaurant-secondary">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-restaurant-secondary transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {event.description}
                </p>
                <div className="flex gap-3">
                  <Button asChild 
                    variant="outline" 
                    className="flex-1 border-restaurant-secondary text-restaurant-secondary hover:bg-restaurant-secondary hover:text-restaurant-dark"
                  >
                    <Link to={event.link}>Подробнее</Link>
                  </Button>
                  <Button asChild 
                    className="flex-1 bg-restaurant-primary hover:bg-restaurant-accent text-white"
                  >
                    <Link to={`${event.link}/tickets`}>Билеты</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild className="bg-restaurant-secondary hover:bg-restaurant-secondary/90 text-restaurant-dark font-medium px-8">
            <Link to="/events">Вся афиша</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
