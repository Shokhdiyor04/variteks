import React from 'react'

const ContactUs = () => {
    return (
      <>
        <div className="w-full min-h-[60vh]">
          <img
            src={require("../images/navbar/selectPage4.jpg")}
            className="min-h-[60vh]"
            alt="football"
          />
        </div>
        <div className="w-full min-h-screen flex">
          <div className="w-[50%] px-5 py-5 min-h-[50vh] flex flex-col gap-5 border">
            <h1 className="text-[25px] text-red-600 font-bold">
              Социальные сети
            </h1>
            <div className="flex w-full border min-h-[10vh]"></div>
            <h1 className="text-[25px] font-bold">Контакты</h1>
            <div className="w-full min-h-[100px] border flex">
              <div className="w-[15%] border"></div>
              <div className="w-[85%] min-h-full px-5 border">
                <p className="text-[18px]">
                  MERKEZ OFİS/FABRİKA Variteks Ortopedi Sanayi A.Ş. Ferhatpaşa
                  Sb. Mah. Menekşe Sk. Variteks Blok No:3 İç Kapı No:Z1, 34540
                  Çatalca - İstanbul/Türkiye
                </p>
              </div>
            </div>
            <div className="w-full min-h-[100px] border flex">
              <div className="w-[15%] border"></div>
              <div className="w-[85%] min-h-full flex flex-col gap-3 px-5 border">
                <p className="text-[18px]">
                  Variteks Yurtiçi Ana Satış Variteks Medikal Sanayi Ticaret
                  A.Ş. Ferhatpaşa Mah. Ayışığı Sk. Reyhan Mar Sitesi No: 4/1
                  Çatalca/İSTANBUL
                </p>
                <p>Variteks Medikal : +90 212 544 19 58</p>
              </div>
            </div>
            <div className="w-[250px] border-r-0 border-l-0 border-[2px] border-black mx-auto py-5 flex justify-center font-bold gap-3">
              <p>+90 212 544 30 50</p>
            </div>
            <div className="w-[250px] border-r-0 border-l-0 border-[2px] border-black mx-auto py-5 flex justify-center font-bold gap-3">
              <p>+90 212 544 90 20</p>
            </div>
            <div className="w-[250px] font-bold mx-auto py-5 flex justify-center gap-3">
              <p>info@variteks.com</p>
            </div>
          </div>
          <div className="w-[50%] min-h-[50vh] px-5 py-5 flex flex-col gap-5 border">
            <h1 className="text-[25px] font-bold">Форма для контактов</h1>
            <input
              type="text"
              className="w-[400px] border-[2px] border-black rounded-lg py-2 px-3"
              placeholder="Фамилия Имя"
            />
            <input
              type="text"
              className="w-[400px] border-[2px] border-black rounded-lg py-2 px-3"
              placeholder="Электронный адрес"
            />
            <input
              type="text"
              className="w-[400px] border-[2px] border-black rounded-lg py-2 px-3"
              placeholder="Тематика"
            />
            <input
              type="text"
              className="w-[400px] h-[100px] border-[2px] border-black rounded-lg px-3"
              placeholder="Сообщение"
            />
            <button className='w-[200px] py-3 flex justify-center items-center text-white bg-red-600 rounded-lg cursor-pointer hover:text-red-600 hover:bg-white hover:border-red-600 hover:border-[2px] hover:duration-500'>Кнопка Послать</button>
          </div>
        </div>
      </>
    );
}

export default ContactUs