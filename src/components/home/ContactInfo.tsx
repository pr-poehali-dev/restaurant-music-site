import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="section-padding bg-restaurant-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-restaurant-dark">
            Как нас найти
          </h2>
          <p className="text-lg text-restaurant-gray max-w-3xl mx-auto">
            Мы расположены в центре города, в нескольких минутах ходьбы 
            от станции метро и удобной парковкой для гостей
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="mb-4 p-3 bg-restaurant-primary/10 rounded-full">
              <MapPin className="h-8 w-8 text-restaurant-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-restaurant-dark text-center">
              Адрес
            </h3>
            <p className="text-center text-restaurant-gray">
              ул. Музыкальная, 42<br />
              Москва, 123456
            </p>
            <p className="text-center text-restaurant-gray text-sm mt-2">
              Рядом со станцией метро "Центральная"
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="mb-4 p-3 bg-restaurant-primary/10 rounded-full">
              <Clock className="h-8 w-8 text-restaurant-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-restaurant-dark text-center">
              Часы работы
            </h3>
            <div className="text-center text-restaurant-gray">
              <p>Понедельник - Четверг: 12:00 - 00:00</p>
              <p>Пятница - Суббота: 12:00 - 02:00</p>
              <p>Воскресенье: 12:00 - 23:00</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="mb-4 p-3 bg-restaurant-primary/10 rounded-full">
              <Phone className="h-8 w-8 text-restaurant-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-restaurant-dark text-center">
              Контакты
            </h3>
            <div className="text-center">
              <a href="tel:+78001234567" className="text-restaurant-gray hover:text-restaurant-primary block mb-1">
                8 (800) 123-45-67
              </a>
              <a href="mailto:info@ritmvkusa.ru" className="text-restaurant-gray hover:text-restaurant-primary block">
                info@ritmvkusa.ru
              </a>
            </div>
          </div>
        </div>
        
        {/* Интерактивная карта */}
        <div className="mt-10 rounded-lg overflow-hidden shadow-md h-[400px]">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl font-medium text-gray-600 mb-2">Интерактивная карта</p>
              <p className="text-gray-500">(Здесь будет встроена карта с местоположением ресторана)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
