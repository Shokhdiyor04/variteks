import React from 'react'

const PersonnalManagement = () => {
  return (
    <>
      <div className="w-full min-h-[60vh]">
        <img
          src={require("../images/navbar/selectPage4.jpg")}
          className="min-h-[60vh]"
          alt="football"
        />
      </div>
      <div className="w-[70%] mx-auto flex flex-col gap-4 py-5">
        <h1 className="text-[45px] font-bold">ЧЕЛОВЕЧЕСКИЕ РЕСУРСЫ</h1>
        <h3 className="text-[20px] font-bold">Человеческие Ресурсы</h3>
        <p className="text-[18px]">
          Наша цель, как команды отдела кадров Variteks, состоит в том, чтобы
          привлечь в компанию нужных людей, поддержать, раскрыть потенциал и
          повысить их ценность, чтобы наша компания могла достичь своих целей.
          Наш принцип - быть справедливыми во всех правах, предоставляемых
          сотрудникам. Отдел кадров компании Variteks с 1958 года имеет
          стратегическое значение благодаря нашему антропоцентрическому подходу
          к управлению. Мы рады обеспечить справедливую и ориентированную на
          результат рабочую среду для наших сотрудников с помощью наших
          последовательных процедур и практик, соблюдая правила этики, равенства
          и конфиденциальности.
        </p>
        <img src={require("../images/navbar/selectPage5.png")} alt="err" />
        <h3 className="text-[20px] font-bold">Образование</h3>
        <p className="text-[18px]">
          Каждый человек в семье Variteks оценивается на лучших позициях, где он
          может реализовать свои способности. С целью приобретения членства
          семьи, когда к нам присоединяется новый друг, Variteks предоставляет
          всю необходимую поддержку под названием "Ориентационное обучение".
        </p>
        <p className="text-[18px]">
          Помимо их собственных требований, обучение наших сотрудников
          определяется их руководителями и отделом кадров. Для улучшения
          профессиональных навыков и компетенций организуются соответствующие
          тренинги, учитывающие личные запросы и потребности.
        </p>
        <h3 className="text-[20px] font-bold">Производительность</h3>
        <p className="text-[18px]">
          Наша компания, тщательно следящая за эффективностью работы, оценивает
          результаты деятельности своих сотрудников не реже двух раз в год. При
          окончательной оценке в конце года оценки эффективности работы
          увязываются с достаточно организованной системой премирования после
          тонкой проработки.
        </p>
        <p className="text-[18px]">
          Все идеи, повышающие эффективность работы наших сотрудников, имеют
          большое значение. По этому поводу не реже двух раз в год проводятся
          опросы, направленные на повышение производительности; эффективность
          работы оценивается путем оценки не только сотрудника, но и компании.
          Кроме того, для высокоэффективных сотрудников предусмотрено
          планирование карьеры.
        </p>
        <h3 className="text-[20px] font-bold">Мероприятия</h3>
        <p className="text-[18px]">
          Хотя мы подчеркиваем, насколько важна для нашей компании концепция
          семьи, независимо от подчиненного, внутрикорпоративные мероприятия,
          повышающие мотивацию, проводятся часто для того, чтобы все наши
          сотрудники были счастливы, независимо от их обязанностей, и чтобы наши
          сотрудники не просто занимались делом, а работали так, как будто они
          занимаются своим делом.
        </p>
        <h3 className="text-[20px] font-bold">Career Opportunity</h3>
        <div className='flex gap-5'>
          <button className='w-[200px] py-3 flex justify-center items-center text-white bg-red-600 rounded-lg cursor-pointer'>Kariyer.net</button>
          <button className='w-[200px] py-3 flex justify-center items-center text-white bg-red-600 rounded-lg cursor-pointer'>Elman.net</button>
        </div>
      </div>
    </>
  );
}

export default PersonnalManagement