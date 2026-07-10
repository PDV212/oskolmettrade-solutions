import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SEOHead from '@/components/SEOHead';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Информация об обработке персональных данных | ОСКОЛ-МЕТ-ТРЕЙД"
        description="Информация об обработке персональных данных на сайте ООО «ОСКОЛ-МЕТ-ТРЕЙД»."
        language="ru"
        canonicalUrl="https://oskolmettrade-solutions.lovable.app/privacy"
      />
      <Header language="ru" />
      <main id="main-content" className="py-16">
        <section className="container mx-auto max-w-4xl px-4">
          <article className="space-y-8 rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
            <header className="space-y-4">
              <h1 className="heading-section text-left">Информация об обработке данных</h1>
              <p className="whitespace-pre-line text-base leading-relaxed text-muted-foreground">
                {'Сайт oskolmettrade-solutions.lovable.app принадлежит ООО «ОСКОЛ-МЕТ-ТРЕЙД»\n(ИНН 3127508337, ОГРН 1033108702868).'}
              </p>
            </header>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Обработка данных</h2>
              <p className="leading-relaxed text-muted-foreground">
                На сайте отсутствуют формы обратной связи, рекламные трекеры и подключённые компанией системы веб-аналитики. Для доставки содержимого и обеспечения безопасности хостинг-провайдер может обрабатывать необходимые технические данные. При переходе по ссылкам на email, WhatsApp, WeChat или Яндекс Карты применяются правила соответствующего внешнего сервиса.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Контакт</h2>
              <div className="space-y-1 leading-relaxed text-muted-foreground">
                <p>ООО «ОСКОЛ-МЕТ-ТРЕЙД»</p>
                <p>Адрес: 309181, Белгородская область, г. Губкин, ул. Мира, 20, оф. 312/1</p>
                <p>Телефон: +7 909 097 71 74</p>
                <p>Email: 89090977174@mail.ru</p>
              </div>
            </section>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;