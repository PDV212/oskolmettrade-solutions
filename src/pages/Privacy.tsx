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
      <main className="py-16">
        <section className="container mx-auto max-w-4xl px-4">
          <article className="space-y-8 rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
            <header className="space-y-4">
              <h1 className="heading-section text-left">Информация об обработке персональных данных</h1>
              <p className="whitespace-pre-line text-base leading-relaxed text-muted-foreground">
                {'Сайт oskolmettrade-solutions.lovable.app является информационно-справочным\nресурсом ООО «ОСКОЛ-МЕТ-ТРЕЙД» (ИНН 3127508337, ОГРН 1033108702868).'}
              </p>
            </header>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">1. Сбор данных через сайт</h2>
              <p className="whitespace-pre-line leading-relaxed text-muted-foreground">
                {'Сайт не содержит форм обратной связи, регистрации, подписки, корзины,\nонлайн-оплаты или иных механизмов сбора персональных данных посетителей.\nМы не запрашиваем у вас имя, телефон, электронную почту или иные\nидентифицирующие сведения через веб-интерфейс.'}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">2. Файлы cookie и технические данные</h2>
              <p className="whitespace-pre-line leading-relaxed text-muted-foreground">
                {'На сайте используются исключительно технические файлы и служебные запросы,\nнеобходимые для корректного отображения страниц. Рекламные пиксели, системы\nвеб-аналитики (Яндекс.Метрика, Google Analytics), онлайн-чаты и сторонние\nтрекеры не подключены.'}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">3. Каналы связи</h2>
              <p className="whitespace-pre-line leading-relaxed text-muted-foreground">
                {'Для обратной связи используйте телефон, электронную почту или мессенджеры,\nуказанные в разделе «Контакты». Сообщая нам свои данные через эти каналы,\nвы самостоятельно выбираете способ коммуникации; правовым основанием\nобработки в таких случаях является заключение и исполнение договора либо\nрассмотрение вашего обращения (ст. 6 ФЗ-152).'}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">4. Контакт для вопросов об обработке данных</h2>
              <div className="space-y-1 leading-relaxed text-muted-foreground">
                <p>ООО «ОСКОЛ-МЕТ-ТРЕЙД»</p>
                <p>Адрес: 309181, Белгородская область, г. Губкин, ул. Мира, 20, оф. 312/1</p>
                <p>Телефон: +7 909 097 71 74</p>
                <p>Email: 89090977174@mail.ru</p>
              </div>
            </section>

            <p className="text-sm text-muted-foreground">Дата публикации: 23 апреля 2026 г.</p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;