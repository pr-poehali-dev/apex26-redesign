import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const advantages = [
    {
      icon: "Trophy",
      title: "15+ лет опыта",
      description: "Многолетний опыт в сфере мониторинга транспорта"
    },
    {
      icon: "Users",
      title: "Профессиональная команда",
      description: "Сертифицированные специалисты высокой квалификации"
    },
    {
      icon: "Clock",
      title: "Быстрая установка",
      description: "Монтаж оборудования за 1-2 часа"
    },
    {
      icon: "HeadphonesIcon",
      title: "Техподдержка 24/7",
      description: "Круглосуточная поддержка клиентов"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Официальная гарантия на все оборудование"
    },
    {
      icon: "TrendingUp",
      title: "Современные решения",
      description: "Новейшие технологии мониторинга"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            О компании <span className="text-primary">APEX26</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ООО "АПЕКС" — ведущая компания в Ставрополе по установке и обслуживанию 
            систем спутникового мониторинга транспорта. Мы предоставляем полный комплекс 
            услуг для контроля и безопасности вашего автопарка.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={advantage.icon} size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Почему выбирают нас?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Официальный дилер ведущих производителей</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Сертифицированное оборудование</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Индивидуальный подход к каждому клиенту</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Постгарантийное обслуживание</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">довольных клиентов</div>
                <div className="text-4xl font-bold text-primary mb-2 mt-4">1000+</div>
                <div className="text-muted-foreground">установленных систем</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;