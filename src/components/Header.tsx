import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Car" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">APEX26</h1>
              <p className="text-xs text-muted-foreground">Мониторинг транспорта</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Отзывы
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('contacts')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
            >
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;