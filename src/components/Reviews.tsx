import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { toast } from "sonner";

const Reviews = () => {
  const [newReview, setNewReview] = useState({
    name: "",
    company: "",
    rating: 5,
    text: ""
  });

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Александр Петров",
      company: "ООО \"Логистика Юг\"",
      rating: 5,
      text: "Отличная работа! Установили систему мониторинга на весь наш автопарк. Теперь полный контроль над расходом топлива и маршрутами. Рекомендую!",
      date: "15.07.2024"
    },
    {
      id: 2,
      name: "Мария Иванова",
      company: "Строительная компания \"Альфа\"",
      rating: 5,
      text: "Профессиональный подход, качественное оборудование. Система окупилась уже через 3 месяца за счет экономии топлива. Спасибо команде APEX26!",
      date: "28.06.2024"
    },
    {
      id: 3,
      name: "Дмитрий Козлов",
      company: "Такси \"Комфорт\"",
      rating: 5,
      text: "Быстрая установка, подробная консультация. Система работает стабильно, техподдержка всегда на связи. Очень довольны сотрудничеством.",
      date: "10.06.2024"
    }
  ]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newReview.name || !newReview.text) {
      toast.error("Заполните обязательные поля");
      return;
    }

    const review = {
      id: Date.now(),
      ...newReview,
      date: new Date().toLocaleDateString('ru-RU')
    };

    setReviews([review, ...reviews]);
    setNewReview({ name: "", company: "", rating: 5, text: "" });
    toast.success("Отзыв добавлен! Спасибо за обратную связь.");
  };

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            name="Star"
            size={20}
            className={`${
              star <= rating ? 'text-accent fill-current' : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-accent' : ''}`}
            onClick={() => interactive && onRatingChange && onRatingChange(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Отзывы <span className="text-primary">клиентов</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Мнения наших клиентов — лучшая оценка качества нашей работы. 
            Читайте реальные отзывы и делитесь своим опытом.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Отзывы клиентов</h3>
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id} className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{review.name}</h4>
                        {review.company && (
                          <p className="text-sm text-muted-foreground">{review.company}</p>
                        )}
                      </div>
                      <div className="text-right">
                        {renderStars(review.rating)}
                        <p className="text-sm text-muted-foreground mt-1">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Оставить отзыв</h3>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <form onSubmit={handleSubmitReview} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Имя *
                    </label>
                    <Input
                      value={newReview.name}
                      onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Компания
                    </label>
                    <Input
                      value={newReview.company}
                      onChange={(e) => setNewReview({...newReview, company: e.target.value})}
                      placeholder="Название компании (необязательно)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Оценка
                    </label>
                    {renderStars(newReview.rating, true, (rating) => 
                      setNewReview({...newReview, rating})
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Отзыв *
                    </label>
                    <Textarea
                      value={newReview.text}
                      onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                      placeholder="Поделитесь своим опытом..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить отзыв
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9</div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-muted-foreground">Средняя оценка</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Отзывов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;