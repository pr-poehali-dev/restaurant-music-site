import { NavLink } from 'react-router-dom';
import { 
  Music, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-restaurant-dark text-white">
      <div className="container-custom pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Music className="h-8 w-8 text-restaurant-secondary" />
              <span className="text-xl font-bold">РитмВкуса</span>
            </div>
            <p className="text-gray-300 mb-4">
              Ресторан-музыкальный клуб с уникальной атмосферой. 
              Наслаждайтесь изысканной кухней и живой музыкой в 
              самом сердце города.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="text-gray-300 hover:text-restaurant-secondary" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" className="text-gray-300 hover:text-restaurant-secondary" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://youtube.com" className="text-gray-300 hover:text-restaurant-secondary" aria-label="Youtube">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/menu" className="text-gray-300 hover:text-restaurant-secondary">
                  Меню
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className="text-gray-300 hover:text-restaurant-secondary">
                  Афиша мероприятий
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-restaurant-secondary">
                  О ресторане
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="text-gray-300 hover:text-restaurant-secondary">
                  Галерея
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts" className="text-gray-300 hover:text-restaurant-secondary">
                  Контакты
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-xl font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/reservation" className="text-gray-300 hover:text-restaurant-secondary">
                  Бронирование столиков
                </NavLink>
              </li>
              <li>
                <NavLink to="/delivery" className="text-gray-300 hover:text-restaurant-secondary">
                  Доставка еды
                </NavLink>
              </li>
              <li>
                <NavLink to="/tickets" className="text-gray-300 hover:text-restaurant-secondary">
                  Билеты на выступления
                </NavLink>
              </li>
              <li>
                <NavLink to="/catering" className="text-gray-300 hover:text-restaurant-secondary">
                  Выездное обслуживание
                </NavLink>
              </li>
              <li>
                <NavLink to="/gift-cards" className="text-gray-300 hover:text-restaurant-secondary">
                  Подарочные карты
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-restaurant-secondary mt-0.5" />
                <span className="text-gray-300">ул. Музыкальная, 42, Москва, 123456</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-restaurant-secondary" />
                <a href="tel:+78001234567" className="text-gray-300 hover:text-restaurant-secondary">
                  8 (800) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-restaurant-secondary" />
                <a href="mailto:info@ritmvkusa.ru" className="text-gray-300 hover:text-restaurant-secondary">
                  info@ritmvkusa.ru
                </a>
              </div>
              <div>
                <p className="text-gray-300">
                  Часы работы:<br />
                  Пн-Чт: 12:00 - 00:00<br />
                  Пт-Сб: 12:00 - 02:00<br />
                  Вс: 12:00 - 23:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} РитмВкуса. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
