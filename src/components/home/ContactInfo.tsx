import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="section-padding bg-restaurant-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Как нас найти
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Мы расположены в центре города, в нескольких минутах ходьбы 
            от станции метро и удобной парковкой для гостей
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-restaurant-dark">
              Контактная информация
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-restaurant-primary mt-1" />
                <div>
                  <p className="font-medium">Адрес:</p>
                  <p className="text-gray-700">ул. Музыкальная, 42, Москва, 123456</p>
                  <p className="text-gray-600 text-sm mt-1">Рядом со станцией метро "Центральная"</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-restaurant-primary mt-1" />
                <div>
                  <p className="font-medium">Телефон:</p>
                  <a href="tel:+78001234567" className="text-gray-700 hover:text-restaurant-primary">
                    8 (800) 123-45-67
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-restaurant-primary mt-1" />
                <div>
                  <p className="font-medium">Email:</p>
                  <a href="mailto:info@ritmvkusa.ru" className="text-gray-700 hover:text-restaurant-primary">
                    info@ritmvkusa.ru
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-restaurant-primary mt-1" />
                <div>
                  <p className="font-medium">Часы работы:</p>
                  <p className="text-gray-700">Пн-Чт: 12:00 - 00:00</p>
                  <p className="text-gray-700">Пт-Сб: 12:00 - 02:00</p>
                  <p className="text-gray-700">Вс: 12:00 - 23:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-md h-[400px]">
            {/* Здесь будет интерактивная карта, пока используем заглушку */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl font-medium text-gray-600 mb-2">Интерактивная карта</p>
                <p className="text-gray-500">(Здесь будет встроена карта с местоположением ресторана)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
