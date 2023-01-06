import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-white min-h-[85px] flex z-20 fixed top-0">
        <div className="nav-logo w-[40%] min-h-[85px] flex justify-center gap-2 items-center">
          <NavLink to={"/"}>
            <img
              src={require("../images/mainPage/logo.png")}
              className="w-[185px]"
              alt="logo"
            />
          </NavLink>
          <NavLink
            to={"/login"}
            className="px-[8px] py-2 w-[180px] h-[20px] text-white bg-red-600 flex justify-center items-center text-[10px] rounded-[25px] hover:text-red-600 hover:bg-white hover hover-red-600 hover:border-[2px] hover:border-red-600 hover:duration-[.5s]"
          >
            Антиварикозные Изделия на заказ
          </NavLink>
        </div>
        <div className="nav-menu w-[35%] min-h-[85px] flex justify-around text-black items-center text-[14px]">
          <NavLink to="about">О нас</NavLink>
          <NavLink to="#" className="option" id="option">
            Наша продукция <i className="fas fas fa-angle-down"></i>
          </NavLink>
          <NavLink to="blog">Блог</NavLink>
          <NavLink to="#">
            Контакты <i className="fas fas fa-angle-down"></i>
          </NavLink>
        </div>
        <div className="nav-btn w-[25%] min-h-[85px] px-2 flex items-center justify-end gap-2 text-[13px]">
          <i className="fa fas fas fa-search"></i>
          <i className="fa fas fab fab fa-facebook-f"></i>
          <i className="fab fab fa-instagram"></i>
          <i className="fa fas fab fa-linkedin"></i>
          <i className="fa fas fab fa-twitter"></i>
          <i className="fa fas fab fab fa-youtube"></i>
          <select className="rounded-lg text-[10px]">
            <option value="ru">RU</option>
            <option value="tr">TR</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </nav>
      <div className="select-page overflow-y-scroll fixed justify-around w-full p-3 h-[100vh] hidden border z-50 bg-white top-[85px]">
        <div className="select-page-one w-[20%] flex flex-col">
          <h2 className="text-[15px] text-red-600">Ортопедические Изделия</h2>
          <NavLink to="/vorotnik">
            Воротники Для Фиксации Шейных Позвонков
          </NavLink>
          <NavLink to="/karset">Поясничные Корсеты</NavLink>
          <NavLink to="/brushKarset">Брюшные Корсеты</NavLink>
          <NavLink to="/kolena">Наколенники</NavLink>
          <NavLink to="/bandaj-ruka">Бандажи И Шины Для Руки</NavLink>
          <NavLink to="/shina">Шины-Бандажи На Запястье</NavLink>
          <NavLink to="/bandajPlecho">
            Бандажи Для Плечевого И Локтевого Суставов
          </NavLink>
          <NavLink to="/stopa">
            Бандажи Для Голеностопного Сустава И Стопы
          </NavLink>
          <NavLink to="/silikon">Силиконовая Продукция</NavLink>
          <NavLink to="/sherst">Серия Дзюдо Шерсть</NavLink>
          <NavLink to="/nitgo">Nitgo</NavLink>
          <NavLink to="/nexus">Nexus</NavLink>
          <NavLink to="/sport">Softsport</NavLink>
          <NavLink to="/podushka">Ортопедические Подушки</NavLink>
          <NavLink to="/produksiya">
            Эластичные Бандажи И Другая Продукция
          </NavLink>
          <NavLink to="/serebryannoy">Серебряной Продукт</NavLink>
          <NavLink to="/izdeliya">Изделия Для Детского Возраста</NavLink>
        </div>
        <div className="select-page-two w-[20%] flex flex-col">
          <h2 className="text-[15px] text-red-600">Антиварикозные Изделия</h2>
          <NavLink to="/className-name1">Класс I</NavLink>
          <NavLink to="/className-name2">Класс II</NavLink>
          <NavLink to="/className-name3">Класс III</NavLink>
          <NavLink to="/compretion">
            Компрессионный трикотаж, изготовленные на заказ
          </NavLink>
          <NavLink to="/mettal">
            Комплект Металлический Для Надевания Чулок
          </NavLink>
          <NavLink to="/izdeliya">Антиэмболийные Чулочные Изделия</NavLink>
          <NavLink to="/golf">Компрессионные Гольфы</NavLink>
          <NavLink to="/active">Активные Носки</NavLink>
          <NavLink to="/limferme">Лимфедеме Изделия</NavLink>
          <NavLink to="/elastik">Эластичный Изделия</NavLink>
        </div>
        <div className="select-page-three w-[20%] flex flex-col">
          <h2 className="text-[15px] text-red-600">Липосакционные Корсеты</h2>
          <NavLink to="/elastik">Эластичный Изделия</NavLink>
          <NavLink to="/plastika">Абдоминопластика</NavLink>
          <NavLink to="/face">Подтяжка лица</NavLink>
          <NavLink to="/incDec">Увеличение Уменьшение Груди</NavLink>
          <NavLink to="/men">Мужские Корсеты</NavLink>
          <NavLink to="/product">Вспомогательные продукты</NavLink>
        </div>
        <div className="select-page-four w-[20%] flex flex-col">
          <h2 className="text-[15px] text-red-600">
            Антиварикозные Изделия на заказ
          </h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
