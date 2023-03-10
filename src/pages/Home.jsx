import React from "react";
import { Link } from "react-router-dom";
import HomeTopBackgroundSwiperPage from "../components/HomeTopBackgroundSwiper";
import NewProductRight from "../components/NewProductRight";
const Home = () => {
  return (
    <div>
      <HomeTopBackgroundSwiperPage />
      {/* Home Page  */}
      <section>
        <div className="variteks-about w-full min-h-screen flex flex-col md:flex-row py-4">
          <div className="variteks-about-left w-full md:w-[60%] min-h-screen flex md:justify-end md:p-0 pl-4 items-center">
            <div className="variteks-about-left-text w-[90%] flex items-start flex-col gap-5">
              <h1 className="text-[45px] font-bold">
                Кто такой Варитекс<span className="text-red-600">?</span>
              </h1>
              <p className="text-[13px]">
                STANDARD KORSTEX Medical and Hygienic Products, основанная
                Ниметом Озтюркаталаем в 1958 году, и VARİTEKS Ortopedi Sanayi
                A.Ş, присоединившаяся к группе в 1985 году, с первого дня своего
                существования стала ведущей турецкой компанией в своей области
                без ущерба для качества и постоянно развивающейся структуры.
                Наиболее значимым фактором, лежащим в основе нашего успеха,
                является наш принцип производства качественной продукции по
                доступным ценам и следования процессу от производства до
                конечного пункта потребления. Такая бескомпромиссная политика и
                наш опыт позволили нам открыть новые горизонты в отношении
                производимой нами продукции. Наша история, начавшаяся с
                небольшой мастерской в 1958 году, сегодня продолжается благодаря
                современным возможностям, квалифицированному персоналу и
                современной корпоративной структуре на нашем заводе, площадью
                более 16.000 м2. Компания VARİTEKS гордится тем, что является
                ведущей компанией Турции в своей области, которая стала
                востребованным брендом со своим именем в более чем 70 странах
                мира. Компания всегда прилагала усилия для того, чтобы
                предложить наиболее точное решение в области медицинских и
                ортопедических изделий, и будет продолжать свой путь в будущем,
                основанным на таких же принципах.
              </p>
              <Link
                to={"/about"}
                className="px-3 flex justify-center items-center py-2 rounded-[15px] bg-red-600 text-white hover:text-red-600 hover:bg-white hover hover-red-600 hover:border-[1px] hover:border-red-600 hover:duration-[.5s]"
              >
                Дополнительная Информация
              </Link>
            </div>
          </div>
          <div className="variteks-about-right md:w-[40%] w-full min-h-screen bg-no-repeat"></div>
        </div>
        <div className="ballerina-page md:flex-row flex-col-reverse w-full min-h-0 flex py-5">
          <div className="ballerina-left w-full md:w-[60%] min-h-0 flex justify-center items-center overflow-hidden">
            <img
              src={require("../images/mainPage/ballerina.png")}
              className="md:w-[500px] max-w-[300px]"
              alt="ballerina"
            />
          </div>
          <div className="ballerina-right flex justify-start items-start w-full md:w-[40%] md:min-h-screen min-h-0">
            <Link
              to={"/"}
              className="text-[18px] px-5 mt-[100px] text-white bg-red-600 rounded-[15px] py-2 flex justify-center gap-5 items-center hover:text-red-600 hover:bg-white hover hover-red-600 border-[2px] hover:border-red-600 hover:duration-[.5s]"
            >
              <i className="fas fas fa-search"></i>
              Поиск
            </Link>
          </div>
        </div>
        <div className="new-product-page w-full min-h-0 flex md:flex-row flex-col py-5 items-center">
          <div className="new-product-left md:w-[55%] w-[90%] min-h-0 flex justify-center">
            <div className="new-product-left-text w-[410px] min-h-0 flex flex-col justify-start">
              <h1 className="text-red-600 text-[40px] font-bold">
                Новая продукция
              </h1>
              <p className="text-[18px]">
                Наша научно-исследовательская деятельность продолжается
                непрерывно, чтобы наши продукты оставались актуальными и не
                отставали от сегодняшнего времени, когда изменения и развитие
                ускоряются во всех областях. Разрабатывая существующие и
                разрабатывая новые продукты, мы руководствуемся принципом
                совместной поддержки и комфорта. Превращение некоторых наших
                маленьких штрихов в большие преимущества делает нас счастливыми
                и дает нам мотивацию на будущее.
              </p>
            </div>
          </div>
          <NewProductRight />
        </div>
      </section>
    </div>
  );
};

export default Home;
