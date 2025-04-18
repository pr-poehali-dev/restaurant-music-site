import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Music, 
  Phone 
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-restaurant-dark sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <NavLink to="/" className="flex items-center gap-2">
            <Music className="h-8 w-8 text-restaurant-secondary" />
            <span className="text-white text-xl font-bold">РитмВкуса</span>
          </NavLink>

          {/* Кнопка меню для мобильных устройств */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Навигационное меню для десктопа */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/menu" className="text-white hover:text-restaurant-secondary transition-colors">
              Меню
            </NavLink>
            <NavLink to="/events" className="text-white hover:text-restaurant-secondary transition-colors">
              Афиша
            </NavLink>
            <NavLink to="/about" className="text-white hover:text-restaurant-secondary transition-colors">
              О нас
            </NavLink>
            <NavLink to="/gallery" className="text-white hover:text-restaurant-secondary transition-colors">
              Галерея
            </NavLink>
            <NavLink to="/contacts" className="text-white hover:text-restaurant-secondary transition-colors">
              Контакты
            </NavLink>
          </nav>

          {/* Кнопки действий */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+78001234567" className="flex items-center gap-1 text-white hover:text-restaurant-secondary">
              <Phone size={18} />
              <span>8 (800) 123-45-67</span>
            </a>
            <Button className="bg-restaurant-primary hover:bg-restaurant-accent text-white">
              Забронировать стол
            </Button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-3">
            <NavLink to="/menu" 
              className="text-white hover:text-restaurant-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Меню
            </NavLink>
            <NavLink to="/events" 
              className="text-white hover:text-restaurant-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Афиша
            </NavLink>
            <NavLink to="/about" 
              className="text-white hover:text-restaurant-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </NavLink>
            <NavLink to="/gallery" 
              className="text-white hover:text-restaurant-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Галерея
            </NavLink>
            <NavLink to="/contacts" 
              className="text-white hover:text-restaurant-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </NavLink>
            <Button className="bg-restaurant-primary hover:bg-restaurant-accent text-white mt-2">
              Забронировать стол
            </Button>
            <a href="tel:+78001234567" className="flex items-center gap-1 text-white hover:text-restaurant-secondary py-2">
              <Phone size={18} />
              <span>8 (800) 123-45-67</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
