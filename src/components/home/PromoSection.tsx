import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const PromoSection = () => {
  return (
    <section className="py-16 bg-restaurant-dark text-white relative overflow-hidden">
      {/* Декоративный фоновый элемент */}
      <div 
        className="absolute inset-0 opacity-10 z-0"
        style={{ 
          backgroundImage: "url('/placeholder.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)"
        }}
      ></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Скидка 15% на первое посещение
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Подпишитесь на нашу рассылку и получите промокод на скидку 15% 
            при первом посещении нашего ресторана-клуба. Мы также будем 
            информировать вас о новых блюдах, специальных предложениях и 
            интересных мероприятиях.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Введите ваш email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" 
              required
            />
            <Button 
              type="submit" 
              className="bg-restaurant-secondary hover:bg-restaurant-primary text-restaurant-dark font-medium"
            >
              Получить промокод
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-gray-400">
            Мы никогда не будем отправлять спам. Вы можете отписаться в любое время.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
