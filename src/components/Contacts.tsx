import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { toast } from "sonner";

const Contacts = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.phone) {
      toast.error("Заполните обязательные поля");
      return;
    }

    // Имитация отправки формы
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setContactForm({ name: "", phone: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (8652) 123-456",
      description: "Звоните с 9:00 до 18:00"
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@apex26.ru",
      description: "Отвечаем в течение часа"
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "г. Ставрополь, ул. Промышленная, 12",
      description: "Офис и склад оборудования"
    },
    {
      icon: "Clock",
      title: "Режим работы",
      value: "Пн-Пт: 9:00-18:00",
      description: "Сб: 10:00-15:00, Вс: выходной"
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Контакты</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Готовы ответить на ваши вопросы и предложить оптимальное решение для вашего бизнеса. 
            Свяжитесь с нами удобным способом.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Наши контакты</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon name={contact.icon} size={24} className="text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{contact.title}</h4>
                    <p className="text-foreground font-medium mb-1">{contact.value}</p>
                    <p className="text-sm text-muted-foreground">{contact.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="MapPin" size={20} className="text-primary mr-2" />
                    Как нас найти
                  </h4>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <p className="text-sm text-muted-foreground">
                      Наш офис находится в промышленной зоне Ставрополя, рядом с автосервисами. 
                      Удобная парковка для клиентов.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      🚗 Парковка
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      🏢 Офис + склад
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      🔧 Монтажная зона
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Заказать консультацию</h3>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <form onSubmit={handleSubmitContact} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Имя *
                    </label>
                    <Input
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Телефон *
                    </label>
                    <Input
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      placeholder="+7 (___) ___-__-__"
                      type="tel"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      placeholder="your@email.com"
                      type="email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="Опишите ваши задачи или задайте вопрос..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <Icon name="Shield" size={16} className="inline mr-1" />
                    Ваши данные защищены и не передаются третьим лицам
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Экстренная связь 24/7
            </h3>
            <p className="text-muted-foreground mb-6">
              Техническая поддержка работает круглосуточно для наших клиентов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (8652) 24-7-365
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;