import Icon from "@/components/ui/icon";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary/20 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Car" size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">APEX26</h3>
                <p className="text-xs text-muted-foreground">Мониторинг транспорта</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Профессиональные решения для мониторинга и безопасности транспорта в Ставрополе. 
              15+ лет опыта, 500+ довольных клиентов.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Навигация</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                О нас
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Отзывы
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Контакты
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">+7 (8652) 123-456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">info@apex26.ru</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="MapPin" size={16} className="text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">г. Ставрополь, ул. Промышленная, 12</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Режим работы</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Пн-Пт:</span>
                <span className="text-foreground">9:00-18:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Суббота:</span>
                <span className="text-foreground">10:00-15:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Воскресенье:</span>
                <span className="text-foreground">выходной</span>
              </div>
              <div className="mt-3 p-2 bg-accent/10 rounded text-center">
                <div className="text-sm font-medium text-foreground">Техподдержка 24/7</div>
                <div className="text-xs text-muted-foreground">+7 (8652) 24-7-365</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 ООО "АПЕКС". Все права защищены.
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-sm text-muted-foreground">Мы в соцсетях:</div>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <Icon name="Phone" size={16} className="text-primary" />
                </div>
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <Icon name="Mail" size={16} className="text-primary" />
                </div>
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <Icon name="MessageCircle" size={16} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;