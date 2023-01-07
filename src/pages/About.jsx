import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const About = () => {
  const [cataglog, setCatalog] = useState([]);
  const dropDawnMessage = useRef(null);
  const dropDawnMessageBox = useRef(null);
  useEffect(() => {
    const getCatalag = async (url) => {
      const response = await axios.get(url);
      setCatalog(await response.data);
    };
    getCatalag("jsons/aboutCatalog.json");
  });

  const handleMessageBtn = () => {
    dropDawnMessage.current.classList.toggle("active");
    dropDawnMessageBox.current.classList.toggle("active");
  };
  if (!cataglog) return null;
  return (
    <div className="relative">
      <div
        className="drop-dawn-message duration-300 w-full h-screen overflow-y-auto bg-black/70 fixed z-[1000] hidden justify-center items-center"
        ref={dropDawnMessage}
      >
        <div
          className="duration-300 drop-dawn-message-box w-[800px] max-w-[95%] min-h-[500px] bg-white rounded-2xl relative overflow-hidden scale-0"
          ref={dropDawnMessageBox}
        >
          <div
            className="duration-300 w-[80px] h-[80px] text-red-500 absolute flex justify-center items-center top-0 right-0 text-2xl cursor-pointer active:border active:border-black rounded-tr-2xl"
            onClick={handleMessageBtn}
          >
            <FaTimes />
          </div>
          <div className="title w-full min-h-[80px] border-b-2 border-red-500 flex items-center p-4">
            <h2 className="text-2xl text-red-500">История</h2>
          </div>
          <div className="message p-4">
            <p>Message</p>
          </div>
        </div>
      </div>
      <div className="about-main w-full min-h-[60vh]">
        <img src={require("../images/mainPage/variteks-header.png")} alt="" />
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
        <div className="about-header-bottom w-[80%] mx-auto min-h-[50vh] py-5 flex flex-wrap justify-around px-[130px] gap-[50px]">
          {cataglog.map((page) => (
            <Link
              to={page.url}
              className="history-box text-center w-[200px] py-3 flex flex-col gap-3 cursor-pointer"
              key={page.id}
              onClick={handleMessageBtn}
            >
              <div className="history w-[180px] rounded-[15px] border-[5px]">
                <img src={page.img} className="w-full" alt="history-icon" />
              </div>
              <h2 className="text-[20px] font-bold">{page.text}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
