import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "MapPin",
      title: "GPS/ГЛОНАСС мониторинг",
      description: "Отслеживание местоположения транспорта в режиме реального времени",
      features: ["Контроль маршрутов", "История поездок", "Геозоны", "Уведомления"]
    },
    {
      icon: "Fuel",
      title: "Контроль расхода топлива",
      description: "Точный учет топлива и предотвращение его нецелевого использования",
      features: ["Датчики уровня топлива", "Анализ расхода", "Отчеты по заправкам", "Контроль сливов"]
    },
    {
      icon: "Shield",
      title: "Противоугонная система IGLA",
      description: "Надежная защита от угона с блокировкой двигателя",
      features: ["Скрытая установка", "Защита от сканера", "Авторизация по метке", "Мобильное приложение"]
    },
    {
      icon: "Truck",
      title: "Мониторинг спецтехники",
      description: "Контроль работы строительной и сельскохозяйственной техники",
      features: ["Моточасы", "Контроль навесного оборудования", "Температурные датчики", "CAN-шина"]
    },
    {
      icon: "Camera",
      title: "Видеонаблюдение",
      description: "Система видеофиксации для контроля водителя и дороги",
      features: ["HD камеры", "Запись на карту", "Онлайн просмотр", "Детекция событий"]
    },
    {
      icon: "Settings",
      title: "Техническое обслуживание",
      description: "Полный комплекс услуг по установке и обслуживанию оборудования",
      features: ["Установка", "Настройка", "Гарантийное обслуживание", "Техподдержка 24/7"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Наши <span className="text-primary">услуги</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Предоставляем полный спектр решений для мониторинга и безопасности транспорта. 
            От простого GPS-трекинга до комплексных систем управления автопарком.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => scrollToSection('contacts')}
                >
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Нужна консультация?
            </h3>
            <p className="text-muted-foreground mb-6">
              Наши специалисты помогут подобрать оптимальное решение для вашего автопарка
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection('contacts')}
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;