import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";

const timeSlots = [
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", 
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", 
  "21:00", "21:30", "22:00"
];

const Reservation = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы вызов API
    setFormSubmitted(true);
    
    // Сбросить состояние формы через 3 секунды
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Забронировать стол
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              Забронируйте столик заранее, чтобы гарантировать себе место
              и насладиться вечером в нашем ресторане-клубе. Бронирование
              доступно онлайн 24/7.
            </p>
            <div className="bg-restaurant-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-restaurant-primary">
                Почему стоит забронировать стол?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-restaurant-primary mt-1">✓</span>
                  <span>Гарантированное место в желаемое время</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-restaurant-primary mt-1">✓</span>
                  <span>Возможность выбрать лучшие места у сцены</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-restaurant-primary mt-1">✓</span>
                  <span>Предварительное ознакомление с меню и афишей</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-restaurant-primary mt-1">✓</span>
                  <span>Специальные предложения для именинников</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-3 text-restaurant-primary">
                  Столик забронирован!
                </h3>
                <p className="text-gray-700">
                  Мы отправили подтверждение на ваш email. 
                  С нетерпением ждем встречи с вами!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Форма бронирования
                </h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Ваше имя
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Иван Иванов" 
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Телефон
                      </label>
                      <Input 
                        id="phone" 
                        placeholder="+7 (___) ___-__-__" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="example@mail.ru" 
                      required 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Дата
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? (
                              format(date, "PPP", { locale: ru })
                            ) : (
                              <span>Выберите дату</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            locale={ru}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Время
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Количество гостей
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите количество" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 12 }).map((_, i) => (
                          <SelectItem key={i + 1} value={(i + 1).toString()}>
                            {i + 1} {i === 0 ? 'гость' : i < 4 ? 'гостя' : 'гостей'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Особые пожелания
                    </label>
                    <Input 
                      placeholder="Особые пожелания или комментарии к бронированию" 
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full mt-6 bg-restaurant-primary hover:bg-restaurant-accent text-white py-6"
                >
                  Забронировать стол
                </Button>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Нажимая кнопку "Забронировать стол", вы соглашаетесь с нашей 
                  политикой конфиденциальности и обработки персональных данных.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
