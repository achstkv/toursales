import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Турысейлс</h1>
          <p className="lead">Легко находите и бронируйте лучшие туры по всему миру.</p>
          <a
            className="btn btn-primary btn-lg mt-4"
            href="/tours_list.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Посмотреть доступные туры
          </a>
        </div>
      </header>

      <main>
        <section className="container my-5">
          <h2 className="text-center">Почему выбирают нас</h2>
          <p className="text-center mb-5">Мы предлагаем лучшие туры по доступным ценам с отличным обслуживанием.</p>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Большой выбор туров</h5>
                  <p className="card-text">Мы предлагаем туры на любой вкус и ваш бюджет.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Надежность и качество</h5>
                  <p className="card-text">Мы сотрудничаем только с проверенными туроператорами.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Поддержка 24/7</h5>
                  <p className="card-text">Наша служба поддержки готова помочь вам в любое время.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light py-5">
          <div className="container">
            <h2 className="text-center">Отзывы клиентов</h2>
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img src="https://sotni.ru/wp-content/uploads/2023/08/3d-chelovechki-1-1.webp" className="card-img-top" alt="Иван Иванов" />
                  <div className="card-body">
                    <p className="card-text">"Отличный сервис! Тур был прекрасно организован."</p>
                    <footer className="blockquote-footer">Иван Иванов</footer>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img src="https://sotni.ru/wp-content/uploads/2023/08/chelovechek-10-1.webp" className="card-img-top" alt="Анна Смирнова" />
                  <div className="card-body">
                    <p className="card-text">"Очень доволен, обязательно обращусь снова!"</p>
                    <footer className="blockquote-footer">Анна Смирнова</footer>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img src="https://sotni.ru/wp-content/uploads/2023/08/chelovechek-11-1.webp" className="card-img-top" alt="Петр Сидоров" />
                  <div className="card-body">
                    <p className="card-text">"Все прошло замечательно, спасибо!"</p>
                    <footer className="blockquote-footer">Петр Сидоров</footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container my-5">
          <h2 className="text-center">Контакты</h2>
          <p className="text-center mb-5">Свяжитесь с нами для получения дополнительной информации или поддержки.</p>
          <div className="row">
            <div className="col-md-6">
              <h5>Наш офис</h5>
              <p>г. Москва, ул. Туристическая, д. 10</p>
            </div>
            <div className="col-md-6">
              <h5>Телефон</h5>
              <p>+7 (495) 123-45-67</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Турысейлс. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;
