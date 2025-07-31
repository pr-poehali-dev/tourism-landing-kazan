import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="MapPin" className="text-primary mr-2" size={28} />
              <span className="text-xl font-montserrat font-bold text-gray-900">КазаньТур</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#programs" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">Программы</a>
                <a href="#prices" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">Цены</a>
                <a href="#attractions" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">Достопримечательности</a>
                <a href="#reviews" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">Отзывы</a>
                <a href="#contacts" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">Контакты</a>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/img/edb0bbd8-d039-4c88-851d-38c0db5a731d.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 animate-fade-in">
            Откройте Казань
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Незабываемые экскурсии для школьных групп в столице Татарстана
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать тур
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8 py-4">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Наши программы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Специально разработанные маршруты для школьников разных возрастов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Icon name="GraduationCap" className="text-primary mr-3" size={32} />
                  <Badge variant="secondary">1-4 классы</Badge>
                </div>
                <CardTitle className="text-xl font-montserrat">Сказочная Казань</CardTitle>
                <CardDescription>Интерактивные экскурсии с играми и квестами</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-nature mr-2" />Кремль с детским гидом</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-nature mr-2" />Музей игрушки</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-nature mr-2" />Мастер-класс по татарским сказкам</li>
                </ul>
                <div className="mt-6">
                  <div className="flex items-center text-2xl font-bold text-primary mb-2">
                    от 1,200 ₽ <span className="text-sm font-normal text-gray-500 ml-1">/ чел</span>
                  </div>
                  <Button className="w-full">Подробнее</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-scale-in border-primary/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Icon name="BookOpen" className="text-primary mr-3" size={32} />
                  <Badge className="bg-primary">5-8 классы</Badge>
                </div>
                <CardTitle className="text-xl font-montserrat">Историческая Казань</CardTitle>
                <CardDescription>Погружение в многовековую историю города</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-nature mr-2" />Казанский Кремль</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-nature mr-2" />Мечеть Кул-Шариф</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-nature mr-2" />Старо-Татарская слобода</li>
                </ul>
                <div className="mt-6">
                  <div className="flex items-center text-2xl font-bold text-primary mb-2">
                    от 1,500 ₽ <span className="text-sm font-normal text-gray-500 ml-1">/ чел</span>
                  </div>
                  <Button className="w-full">Подробнее</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Icon name="Users" className="text-primary mr-3" size={32} />
                  <Badge variant="secondary">9-11 классы</Badge>
                </div>
                <CardTitle className="text-xl font-montserrat">Современная Казань</CardTitle>
                <CardDescription>Культура, традиции и современность</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-nature mr-2" />IT-парк и инновации</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-nature mr-2" />Центр семьи "Казан"</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-nature mr-2" />Национальный музей РТ</li>
                </ul>
                <div className="mt-6">
                  <div className="flex items-center text-2xl font-bold text-primary mb-2">
                    от 1,800 ₽ <span className="text-sm font-normal text-gray-500 ml-1">/ чел</span>
                  </div>
                  <Button className="w-full">Подробнее</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section id="attractions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Достопримечательности</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Самые значимые места Казани в наших экскурсионных программах
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src="/img/edb0bbd8-d039-4c88-851d-38c0db5a731d.jpg" 
                  alt="Казанский Кремль" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-montserrat font-semibold">Казанский Кремль</h3>
                  <p className="text-sm opacity-90">Объект ЮНЕСКО</p>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src="/img/74459bc8-8746-457f-8881-ba2e0b4903c2.jpg" 
                  alt="Мечеть Кул-Шариф" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-montserrat font-semibold">Мечеть Кул-Шариф</h3>
                  <p className="text-sm opacity-90">Главная мечеть Татарстана</p>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src="/img/2bb2be7a-0c10-48cb-9b84-1a3718fc9e03.jpg" 
                  alt="Благовещенский собор" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-montserrat font-semibold">Благовещенский собор</h3>
                  <p className="text-sm opacity-90">Древнейший храм Казани</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Цены и услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Bus" className="text-primary mx-auto mb-2" size={40} />
                <CardTitle className="text-lg">Транспорт</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">от 800 ₽</p>
                <p className="text-sm text-gray-600">за человека</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Icon name="User" className="text-primary mx-auto mb-2" size={40} />
                <CardTitle className="text-lg">Экскурсовод</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">3,500 ₽</p>
                <p className="text-sm text-gray-600">за группу</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Icon name="Camera" className="text-primary mx-auto mb-2" size={40} />
                <CardTitle className="text-lg">Фотосъемка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">2,000 ₽</p>
                <p className="text-sm text-gray-600">дополнительно</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Icon name="Utensils" className="text-primary mx-auto mb-2" size={40} />
                <CardTitle className="text-lg">Обед</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">от 400 ₽</p>
                <p className="text-sm text-gray-600">за человека</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Отзывы школ</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Что говорят о нас учителя и ученики
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Великолепная организация! Дети были в восторге от экскурсии по Кремлю. 
                  Экскурсовод нашел подход к каждому ребенку."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Елена Викторовна</p>
                    <p className="text-sm text-gray-500">Школа №15, Москва</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Отличное соотношение цены и качества. Программа была насыщенной, 
                  но не утомительной для детей 6 класса."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Андрей Сергеевич</p>
                    <p className="text-sm text-gray-500">Гимназия №7, Санкт-Петербург</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Профессионально организованная поездка. Особенно понравилась 
                  интерактивная часть в музее."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Мария Александровна</p>
                    <p className="text-sm text-gray-500">Лицей №8, Казань</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Свяжитесь с нами для организации незабываемой поездки
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <Icon name="Phone" className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (843) 123-45-67</p>
              <p className="text-gray-300">+7 (800) 555-12-34</p>
            </div>
            
            <div>
              <Icon name="Mail" className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@kazantour.ru</p>
              <p className="text-gray-300">booking@kazantour.ru</p>
            </div>
            
            <div>
              <Icon name="MapPin" className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold mb-2">Адрес</h3>
              <p className="text-gray-300">г. Казань</p>
              <p className="text-gray-300">ул. Пушкина, 25</p>
            </div>
            
            <div>
              <Icon name="Clock" className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold mb-2">Режим работы</h3>
              <p className="text-gray-300">Пн-Пт: 9:00-18:00</p>
              <p className="text-gray-300">Сб-Вс: 10:00-16:00</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Icon name="MapPin" className="text-primary mr-2" size={24} />
              <span className="text-lg font-montserrat font-bold">КазаньТур</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 КазаньТур. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;