import React from "react";

const About = () => {
  return (
    <div>
      <div className="about-main w-full min-h-[60vh]">
        <img src="/images/mainPage/variteks-header.png" alt="" />
      </div>
      <div className="about-header w-full min-h-screen py-5">
        <div className="about-header-top w-full min-h-[50vh] py-5 px-[200px] flex flex-col gap-3">
          <h1 className="text-[40px] font-bold">O НАС</h1>
          <p className="text-[15px]">
            STANDARD KORSTEX Medical and Hygienic Products, основанная Ниметом
            Озтюркаталаем в 1958 году, и VARİTEKS Ortopedi Sanayi A.Ş,
            присоединившаяся к группе в 1985 году, с первого дня своего
            существования стала ведущей турецкой компанией в своей области без
            ущерба для качества и постоянно развивающейся структуры. Наиболее
            значимым фактором, лежащим в основе нашего успеха, является наш
            принцип производства качественной продукции по доступным ценам и
            следования процессу от производства до конечного пункта потребления.
            Такая бескомпромиссная политика и наш опыт позволили нам открыть
            новые горизонты в отношении производимой нами продукции. Наша
            история, начавшаяся с небольшой мастерской в 1958 году, сегодня
            продолжается благодаря современным возможностям, квалифицированному
            персоналу и современной корпоративной структуре на нашем заводе,
            площадью более 16.000 м2. Компания VARİTEKS гордится тем, что
            является ведущей компанией Турции в своей области, которая стала
            востребованным брендом со своим именем в более чем 70 странах мира.
            Компания всегда прилагала усилия для того, чтобы предложить наиболее
            точное решение в области медицинских и ортопедических изделий, и
            будет продолжать свой путь в будущем, основанным на таких же
            принципах.
          </p>
          <p className="text-[14px]">Искренне Ваш,</p>
          <h1 className="text-[20px] font-bold">Okan Öztürkatalay</h1>
          <p className="text-[14px]">Председатель Правления Группы компаний</p>
        </div>
        <div className="about-header-bottom w-full min-h-[50vh] py-5 flex flex-wrap justify-around px-[130px] gap-[35px]">
          <div className="history-box text-center w-[200px] py-3 flex flex-col gap-3">
            <div className="history w-[180px] rounded-[15px] border-[5px]">
              <img
                src="/images/mainPage/icon-1.png"
                className="w-full"
                alt="history-icon"
              />
            </div>
            <h2 className="text-[20px] font-bold">История</h2>
          </div>
          <div className="history-box text-center w-[200px] py-3 flex flex-col gap-3">
            <div className="history w-[180px] rounded-[15px] border-[5px]">
              <img
                src="/images/mainPage/icon-2.png"
                className="w-full"
                alt="history-icon"
              />
            </div>
            <h2 className="text-[20px] font-bold">
              Наша Производственная база
            </h2>
          </div>
          <div className="history-box text-center w-[200px] py-3 flex flex-col gap-3">
            <div className="history w-[180px] rounded-[15px] border-[5px]">
              <img
                src="/images/mainPage/icon-3.png"
                className="w-full"
                alt="history-icon"
              />
            </div>
            <h2 className="text-[20px] font-bold">Первый экспорт</h2>
          </div>
          <div className="history-box text-center w-[200px] py-3 flex flex-col gap-3">
            <div className="history w-[180px] rounded-[15px] border-[5px]">
              <img
                src="/images/mainPage/icon-4.png"
                className="w-full"
                alt="history-icon"
              />
            </div>
            <h2 className="text-[20px] font-bold">Инновации Variteks</h2>
          </div>
          <div className="history-box text-center w-[200px] py-3 flex flex-col gap-3">
            <div className="history w-[180px] rounded-[15px] border-[5px]">
              <img
                src="/images/mainPage/icon-5.png"
                className="w-full"
                alt="history-icon"
              />
            </div>
            <h2 className="text-[20px] font-bold">Variteks в мире</h2>
          </div>
          <div className="history-box text-center w-[200px] py-3 flex flex-col gap-3">
            <div className="history w-[180px] rounded-[15px] border-[5px]">
              <img
                src="/images/mainPage/icon-6.png"
                className="w-full"
                alt="history-icon"
              />
            </div>
            <h2 className="text-[20px] font-bold">Сертификаты</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
