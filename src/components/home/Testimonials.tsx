import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Михаил Петров",
    rating: 5,
    text: "Отличное место с потрясающей атмосферой! Живая музыка и вкусная еда создают идеальное сочетание для вечера. Обязательно приду еще раз!",
    image: "/placeholder.svg",
    date: "10 октября 2023"
  },
  {
    id: 2,
    name: "Елена Смирнова",
    rating: 5,
    text: "Ресторан поразил разнообразием меню и качеством исполнения блюд. Особенно понравились десерты и коктейльная карта. Обслуживание на высшем уровне!",
    image: "/placeholder.svg",
    date: "28 сентября 2023"
  },
  {
    id: 3,
    name: "Александр Иванов",
    rating: 4,
    text: "Прекрасный вечер с джазовой музыкой. Немного шумно, но это часть атмосферы. Еда превзошла все ожидания, особенно стейк. Рекомендую любителям хорошей музыки и вкусной еды.",
    image: "/placeholder.svg",
    date: "15 сентября 2023"
  },
  {
    id: 4,
    name: "Ольга Козлова",
    rating: 5,
    text: "Лучшее место для романтического ужина! Приглушенный свет, живая музыка и отличная кухня. Персонал очень внимательный и вежливый. Обязательно вернемся!",
    image: "/placeholder.svg",
    date: "5 октября 2023"
  },
  {
    id: 5,
    name: "Дмитрий Соколов",
    rating: 5,
    text: "Случайно зашли с друзьями и были приятно удивлены. Отличная подборка живой музыки, интересные блюда и приемлемые цены. Теперь это наше любимое место для встреч.",
    image: "/placeholder.svg",
    date: "1 октября 2023"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-restaurant-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-restaurant-dark">
            Отзывы наших гостей
          </h2>
          <p className="text-lg text-restaurant-gray max-w-3xl mx-auto">
            Мнения посетителей о нашей кухне, музыке и атмосфере
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="h-full border-restaurant-copper/20">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-restaurant-primary/20">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-restaurant-dark">{testimonial.name}</h4>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star 
                              key={index} 
                              className={`w-4 h-4 ${
                                index < testimonial.rating 
                                  ? "text-restaurant-primary fill-restaurant-primary" 
                                  : "text-gray-300"
                              }`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-restaurant-gray mb-3 flex-grow">
                      "{testimonial.text}"
                    </p>
                    <p className="text-sm text-restaurant-gray/80">
                      {testimonial.date}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 bg-restaurant-primary hover:bg-restaurant-accent text-white" />
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 bg-restaurant-primary hover:bg-restaurant-accent text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
