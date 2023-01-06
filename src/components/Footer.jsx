import React from "react";

const Footer = () => {
  return (
    <footer className="w-full min-h-screen py-5">
      <div className="footer-top w-full min-h-[50vh] flex justify-between">
        <div className="footer-logo flex items-center justify-center">
          <img
            src={require("../images/mainPage/logo.png")}
            className="w-[200px]"
            alt="Logo"
          />
        </div>
        <div className="footer-corporation flex flex-col gap-2">
          <h1 className="text-[20px] text-red-600 font-bold">Корпоративный</h1>
          <a href="#" className="text-[15px]">
            О нас
          </a>
          <a href="#" className="text-[15px]">
            Сертификаты
          </a>
          <a href="#" className="text-[15px]">
            Управление-персоналом
          </a>
          <a href="#" className="text-[15px]">
            Вход в систему для дилеров
          </a>
          <a href="#" className="text-[15px]">
            Блог
          </a>
          <a href="#" className="text-[15px]">
            Сведения о компании РУ
          </a>
          <a href="#" className="text-[15px]">
            Наша Политика в Отношении Персональных Данных
          </a>
        </div>
        <div className="footer-product flex flex-col gap-3">
          <h1 className="text-[20px] text-red-600 font-bold">Наша Продукция</h1>
          <a href="#" className="text-[15px]">
            Ортопедические Издели
          </a>
          <a href="#" className="text-[15px]">
            Антиварикозные Изделия
          </a>
          <a href="#" className="text-[15px]">
            липосакционные корсеты
          </a>
          <a href="#" className="text-[15px]">
            На заказ
          </a>
        </div>
        <div className="footer-news flex flex-col gap-3">
          <h1 className="text-[20px] text-red-600 font-bold">Новости</h1>
          <a href="#" className="text-[15px]">
            События
          </a>
          <a href="#" className="text-[15px]">
            Анонсы
          </a>
        </div>
        <div className="footer-catalog">
          <h1 className="text-[20px] text-red-600 font-bold">Каталог</h1>
        </div>
      </div>
      <div className="footer-bottom w-full min-h-[50vh]">
        <div className="footer-contact flex flex-col gap-5">
          <div className="footer-contact-text w-full px-5">
            <h1 className="text-red-600 font-bold">Контакты</h1>
          </div>

          <div className="footer-contact-office w-full px-5 flex flex-col gap-2">
            <p className="text-[15px]">Офис</p>
            <p className="text-[15px]">Variteks Ortopedi Sanayi A.Ş.</p>
            <p className="text-[15px]">Ferhatpaşa Sb. Mah. Menekşe Sk.</p>
            <p className="text-[15px]">
              Variteks Blok No:3 İç Kapı No:Z1, 34540 Çatalca - İstanbul/Türkiye
            </p>
          </div>

          <div className="footer-contact-location w-full px-5 flex flex-col gap-2">
            <p className="text-[15px]">Variteks Yurtiçi Ana Satış</p>
            <p className="text-[15px]">Variteks Medikal Sanayi Ticaret A.Ş.</p>
            <p className="text-[15px]">Ferhatpaşa Mah. Ayışığı Sk.</p>
            <p className="text-[15px]">
              Reyhan Mar Sitesi No: 4/1 Çatalca/İSTANBUL
            </p>
          </div>

          <div className="footer-contact-phone w-full px-5 flex flex-col gap-2">
            <p className="text-[15px]">Variteks Medikal : +90 212 544 19 58</p>
            <p className="text-[15px]">+90 212 544 30 50</p>
            <p className="text-[15px]">+90 212 544 90 20</p>
            <a href="#">info@variteks.com</a>
          </div>

          <div className="footer-contact-copyrighting w-full px-5">
            <p className="text-[15px]">
              Copryright © Variteks 2023 | Защита авторских прав.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
