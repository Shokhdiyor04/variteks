import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full min-h-screen flex flex-wrap justify-between py-5 px-2 flex-col  md:flex-row">
      <div className="footer-logo flex items-center justify-center">
        <img
          src={require("../images/footer/logo-footer.png")}
          className="w-[200px]"
          alt="Logo"
        />
      </div>
      <div className="footer-corporation md:w-[20%] w-full flex flex-col gap-2 pl-4">
        <h1 className="text-[20px] text-red-600 font-bold">Корпоративный</h1>
        <Link to={"/about"} className="text-[15px]">
          О нас
        </Link>
        <Link to={"/certificate"} className="text-[15px]">
          Сертификаты
        </Link>
        <Link to={"/"} className="text-[15px]">
          Управление-персоналом
        </Link>
        <Link to={"/"} className="text-[15px]">
          Вход в систему для дилеров
        </Link>
        <Link to={"/"} className="text-[15px]">
          Блог
        </Link>
        <Link to={"/"} className="text-[15px]">
          Сведения о компании РУ
        </Link>
        <Link to={"/"} className="text-[15px]">
          Наша Политика в Отношении Персональных Данных
        </Link>
      </div>
      <div className="footer-product flex md:w-[20%] w-full flex-col gap-3 pl-4">
        <h1 className="text-[20px] text-red-600 font-bold">Наша Продукция</h1>
        <Link to={"/"} className="text-[15px]">
          Ортопедические Издели
        </Link>
        <Link to={"/"} className="text-[15px]">
          Антиварикозные Изделия
        </Link>
        <Link to={"/"} className="text-[15px]">
          липосакционные корсеты
        </Link>
        <Link to={"/"} className="text-[15px]">
          На заказ
        </Link>
      </div>
      <div className="footer-news flex flex-col gap-3 pl-4">
        <h1 className="text-[20px] text-red-600 font-bold">Новости</h1>
        <Link to={"/"} className="text-[15px]">
          События
        </Link>
        <Link to={"/"} className="text-[15px]">
          Анонсы
        </Link>
      </div>
      <div className="footer-catalog md:w-[20%] w-full pl-4">
        <h1 className="text-[20px] text-red-600 font-bold">Каталог</h1>
      </div>
      <div className="footer-contact md:w-[30%] w-full flex flex-col gap-5">
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
          <a href="tel:+90 212 544 19 58" className="text-[15px]">
            Variteks Medikal : +90 212 544 19 58
          </a>
          <a href="tel:+90 212 544 30 50" className="text-[15px]">
            +90 212 544 30 50
          </a>
          <a href="tel:+90 212 544 90 20" className="text-[15px]">
            +90 212 544 90 20
          </a>
          <Link to={"/"}>info@variteks.com</Link>
        </div>

        <div className="footer-contact-copyrighting w-full px-5">
          <p className="text-[15px]">
            Copryright © Variteks 2023 | Защита авторских прав.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
