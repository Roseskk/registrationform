import Head from 'next/head'
import Image from 'next/image'
import {useState} from "react";

export default function Home() {
    const [select,setSelect] = useState('ДИЗАЙН');
    const [level,setLevel] = useState('БАКАЛАВРИАТ');
    const [isLevel,setIsLevel] = useState(false);
    const [study_level,setStudy_level] = useState('очная');
    const [isStudy,setIsStudy] = useState(false);


    const handleSelect = (e) => {
        setSelect(e.target.value)
        console.log(select)
    }

    // const [discipline,setDiscipline] = useState()

    const design = {
       way: '54.03.01 ДИЗАЙН',
       subject: ['литература','русский язык']
    }
    const reklama = {
        way: '42.03.01 РЕКЛАМА И СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ',
        subject: ['русский язык','обществознание','иностранный язык']
    }
    const management = {
        way: '38.03.02 МЕНЕДЖМЕНТ',
        subject: ['математика','русский язык','обществознание']
    }
  return (
    <div >
      <Head>
        <title>B&D FORM</title>
        <meta name="description" content="Powered by B&D" />
      </Head>
      <div className={'w-a4 h-a4 mx-auto p-3'}>
          <div className={'w-full flex items-center justify-between'}>
                  <table className="w-1/3 border text-center">
                      <thead className="border-b">
                      <tr>
                          <th scope="col" className="text-xxs font-medium text-gray-900 border-r">
                              регистрационный №
                          </th>
                          <th scope="col" className="text-xxs font-medium text-gray-900 border-r">
                              дата регистрации
                          </th>
                          <th scope="col" className="text-xxs font-medium text-gray-900  border-r">
                              техн. секретарь ПК
                          </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr className="border-b">
                          <td className="text-sm text-gray-900 font-light px-3 py-2 whitespace-nowrap border-r">
                          </td>
                          <td className="text-sm text-gray-900 font-light px-3 py-2 whitespace-nowrap border-r">
                          </td>
                          <td className="text-sm text-gray-900 font-light px-3 py-2 whitespace-nowrap">
                          </td>
                      </tr>
                      </tbody>
                  </table>
                  {/*<div className={'translate-x-20 m-0 p-0 -translate-y-2'}>*/}
                  {/*    <span className={'text-center text-xxs'}>(заполняет сотрудник ПК)</span>*/}
                  {/*</div>*/}
              <div className={'w-1/2'}>
                  <div className={'text-xs text-center text-black font-extrabold'}>
                      Председателю приемной комиссии<br /> Ректору АНО ВО «Институт бизнеса и дизайна»
                      <br />С.С. ЮРОВУ
                  </div>
              </div>
          </div>
          <div className={'flex items-center justify-center'}>
              <h2 className={'text-sm font-extrabold mt-4'}>Заявление</h2>
          </div>
          <form className={'flex flex-col gap-2 mt-2'}>
              <div className={'flex-wrap flex'}>
                  <div className={'w-4/6 flex flex-col gap-1 items-center'}>
                      <div className={'w-full text-sm flex '}>
                          <label className={'w-1/6 font-bold'}>Фамилия</label>
                          <input className={'w-4/6 border uppercase'} />
                      </div>
                      <div className={'w-full text-sm flex '}>
                          <label className={'w-1/6 font-bold'}>Имя</label>
                          <input className={'w-4/6 border uppercase'} />
                      </div>
                      <div className={'w-full text-sm flex '}>
                          <label className={'w-1/6 font-bold'}>Отчество</label>
                          <input className={'w-4/6 border uppercase'} />
                      </div>
                  </div>
                  <div className={'w-2/6'}>
                    <div className={'flex justify-between items-center text-sm'}>
                        <h3>Пол</h3>
                        <lable className={'flex item gap-2'}>
                            <input type={'checkbox'} />
                            мужской
                        </lable>
                        <lable className={'flex item gap-2'}>
                            <input type={'checkbox'} />
                            женский
                        </lable>
                    </div>
                    <div className={'flex mt-2 items-center gap-2'}>
                        <h2 className={'text-sm font-bold'}>СНИЛС</h2>
                        <input className={'border'} type={'text'}/>
                    </div>
                    <div className={'flex mt-2  text-xs gap-2'}>
                        <h2>Дата рождения</h2>
                        <input className={'border'} type={'text'}/>
                    </div>
                  </div>
                  <div className={'flex flex-col text-sm w-full'}>
                      <div className={'flex gap-6'}>
                          <h2 className={'font-bold'}>Документ, удостоверящий личность</h2>
                          <input placeholder={'Паспорт'} className={'border'} type={"text"}/>
                      </div>
                      <div className={'w-full mt-2 flex items-center ml-10 '}>
                          <div className={'flex gap-2'}>
                              <h3>серия</h3>
                              <input className={'border'} type={'number'}/>
                              <h3>№</h3>
                              <input className={'border'} type={"number"}/>
                          </div>
                          <div className={'flex-wrap flex gap-2 ml-20'}>
                             <h3>когда выдан</h3>
                             <input className={'border'} type={"text"}/>
                          </div>
                      </div>
                      <div className={'flex mt-2 '}>
                          <label className={'w-s'}>кем выдан</label>
                          <div className={'flex flex-col gap-2 w-full'}>
                              <input className={'w-full border'} type={"text"}/>
                              <input className={'w-full border'} type={"text"}/>
                          </div>
                      </div>
                  </div>

                  <div className={'w-full flex flex-col mt-2'}>
                      <div className={'flex items-center gap-2'}>
                          <h2 className={'text-xs'}>Гражданство</h2>
                          <input className={'border'} type={"text"}/>
                          <h2 className={'text-sm'}>Иные сведения о гражданстве</h2>
                          <input className={'border'} type={"text"}/>
                      </div>
                  </div>
                  <div className={'w-full ml-24 mt-2 flex flex-col gap-1'}>
                      <div className={'flex w-full text-x2s items-center'}>
                          <h3 className={'w-1/5'}>страна</h3>
                          <input className={'w-4/5 p-1'} type={"text"}/>
                      </div>
                      <div className={'flex w-full text-x2s items-center'}>
                          <h3 className={'w-1/5'}>республика / область</h3>
                          <input className={'w-4/5 p-1'} type={"text"}/>
                      </div>
                      <div className={'flex w-full text-x2s items-center'}>
                          <h3 className={'w-1/5'}>район</h3>
                          <input className={'w-4/5 p-1'} type={"text"}/>
                      </div>
                      <div className={'flex w-full text-x2s items-center'}>
                          <h3 className={'w-1/5'}>город/нас.пункт/индекс</h3>
                          <input className={'w-4/5 p-1'} type={"text"}/>
                      </div>
                      <div className={'flex w-full text-x2s items-center'}>
                          <h3 className={'w-1/5'}>улица</h3>
                          <input className={'w-4/5 p-1'} type={"text"}/>
                      </div>

                      <div className={'flex w-full text-x2s items-center'}>
                          <div className={'flex gap-20 items-center'}>
                              <h3 className={'w-1/5'}>дом</h3>
                              <input className={'w-1/5 '} type={"text"}/>
                          </div>
                          <div className={'flex gap-1 items-center'}>
                              <h3 className={'w-2/5'}>корпус</h3>
                              <input className={'w-1/5 '} type={"text"}/>
                          </div>
                          <div className={'flex gap-1 items-center'}>
                              <h3 className={'w-2/5'}>квартира</h3>
                              <input className={'w-1/5 '} type={"text"}/>
                          </div>
                      </div>
                  </div>
                  <div className={'flex w-full text-xs gap-5 mt-2'}>
                      <h2 className={''}>Телефон</h2>
                      <input className={'w-2/6'} type={"number"} />
                      <h2 className={''}>E-mail</h2>
                      <input className={'w-2/6'} type={"email"}/>
                  </div>
                  <div className={'flex items-center justify-center text-xs w-full mt-4'}>
                      <p className={'text-center'}><strong>Прошу допустить меня</strong> к участию в конкурсе на зачисление и к вступительным испытаниям<br/>
                          по направлению подготовки <strong>
                              <select className={'border w-fit text-center'} value={select} onChange={handleSelect}  >
                                  <option value={'ДИЗАЙН'}>ДИЗАЙН</option>
                                  <option value={'МЕНЕДЖМЕНТ'}>МЕНЕДЖМЕНТ</option>
                                  <option value={'РЕКЛАМА И СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ'}>РЕКЛАМА И СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ</option>
                              </select>
                      </strong> на места по договорам об оказании платных образовательных услуг:</p>
                  </div>
                  <div className={'w-full'}>
                      <table className="w-full border text-center">
                          <caption className={'text-xs border'}>КОНКУРС</caption>
                          <thead className="border-b">
                          <tr>
                              <th scope="col" className="text-xs font-bold  text-gray-900 border-r">
                                  Уровень образования
                              </th>
                              <th scope="col" className="text-xs font-bold  text-gray-900 border-r">
                                  <label className={'flex  justify-center items-center gap-2  text-xs'}>
                                      БАКАЛАВРИАТ
                                      <input onClick={(event)=> { setIsLevel(!isLevel); isLevel ? null :  setIsStudy(false);  isLevel ? setLevel(event.target.value) : null }} checked={isLevel}  value={level} type={"checkbox"}/>
                                  </label>
                              </th>
                              <th scope="col" className="text-xs font-bold  text-gray-900  border-r">
                                  <label className={'flex  justify-center items-center  gap-2 text-xs'}>
                                      МАГИСТРАТУРА
                                      <input onClick={(event)=>{setIsStudy(!isStudy); isStudy ? null : setIsLevel(false);  isStudy ? setStudy_level(event.target.value) : null }} checked={isStudy}  value={study_level} type={"checkbox"}/>
                                  </label>
                              </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr className="border-b">
                              <td className="text-xs font-bold text-gray-900 font-light px-3 py-2 whitespace-nowrap border-r">
                                  ФОРМА ОБУЧЕНИЯ
                              </td>
                              <td className="text-xs font-bold text-gray-900 font-light px-3 py-2 whitespace-nowrap border-r">
                                  <label className={'flex  justify-center items-center gap-2  text-xs'}>
                                      очная
                                      <input value={'очная'} type={"checkbox"}/>
                                  </label>
                              </td>
                              <td className="text-xs font-bold text-gray-900 font-light px-3 py-2 whitespace-nowrap">
                                  <label className={'flex  justify-center items-center gap-2  text-xs'}>
                                      очно-заочная
                                      <input value={'очно-заочная'} type={"checkbox"}/>
                                  </label>
                              </td>
                          </tr>
                          <tr className="border-b  ">
                              <td className="text-xs text-left w-full  font-bold text-gray-900 font-light px-3 py-2 whitespace-nowrap gap-1 flex flex-col  ">
                                  {
                                      select === 'ДИЗАЙН' ? <span className={'text-xls font-bold'}>Направление подготовки: {design.way} бакалавриат<br/></span>  : null
                                  }
                                  {
                                      select === 'РЕКЛАМА И СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ' ? <span className={'text-xls font-bold'}>Направление подготовки: {reklama.way} бакалавриат<br/></span>  : null
                                  }
                                  {
                                      select === 'МЕНЕДЖМЕНТ' ? <span className={'text-xls font-bold'}>Направление подготовки: {management.way} бакалавриат<br/></span> : null
                                  }
                                  <span>Направленность (профиль): <input className={' '} type={"text"}/></span>

                              </td>
                          </tr>
                          <tr className={'w-full'}>
                              <td className="text-xs text-left w-full  font-bold text-gray-900 font-light px-3 py-2 whitespace-nowrap gap-1 flex flex-col ">
                                  <span>Направление подготовки: 54.03.01 ДИЗАЙН магистратура</span> <br />
                                  <span>Направленность (профиль): __________________________</span>
                              </td>
                          </tr>
                          </tbody>
                      </table>
                  </div>
                  <div className={'w-full flex flex-col gap-0'}>
                      <span className={'font-bold text-xs pl-3'}>Прошу засчитать в качестве результатов вступительных экзаменов результаты ЕГЭ:</span>
                      <table className="w-full border text-center">
                          <thead className="border-b w-full">
                          <tr className={'w-full'}>
                              <th scope="col" className="text-xs font-bold w-1/6  text-gray-900 border-r">
                                  Предметы
                              </th>
                              <th scope="col" className="text-xs font-bold w-4/6  text-gray-900 border-r">

                              </th>
                              <th scope="col" className="text-xs font-bold w-1/6  text-gray-900  border-r">
                                  Баллы
                              </th>
                          </tr>
                          </thead>
                      </table>
                      <div className={'text-xs w-full mt-1 flex items-center justify-between'}>
                          <div className={'flex gap-5 items-center w-7/12'}>
                              <span className={'w-4/12'}>литерутара</span>
                              <div className={'flex items-center gap-1 '}>
                                  <label>год сдачи</label>
                                  <input className={'border-t-0 border-l-0 border-r-0 '} type={'text'}/>
                              </div>
                          </div>
                          <input className={'border pl-2 pr-2   w-1/12'}/>
                      </div>
                      <div className={'text-xs w-full mt-1 flex items-center justify-between'}>
                          <div className={'flex gap-5 items-center w-7/12'}>
                              <span className={'w-4/12'}>русский язык</span>
                              <div className={'flex items-center gap-1'}>
                                  <label>год сдачи</label>
                                  <input className={'border-t-0 border-l-0 border-r-0 '} type={'text'}/>
                              </div>
                          </div>
                          <input className={'border pl-2 pr-2   w-1/12'}/>
                      </div>
                  </div>
                  {/*{*/}
                  {/*    result()*/}
                  {/*}*/}
                  <div className={'flex mt-2 flex-col w-full gap-1'}>
                      <span className={'font-bold text-xs'}>Прошу засчитать в качестве результатов вступительных экзаменов результаты олимпиады:</span>
                      <div className={'w-full flex text-xs items-center '}>
                          <div className={'w-1/6 border border-black text-center'}><span>Предмет</span></div>
                          <div className={'w-5/6 border border-black text-center'}><span>Наименование (номер) олимпиады и реквизиты документа, подтверждающего результаты</span></div>
                      </div>
                      <div className={'w-full flex text-xs items-center '}>
                          <div className={'w-1/6 border border-black text-center'}><input className={'w-full border-none'} type={'text'}/> </div>
                          <div className={'w-5/6 border border-black text-center '}><input className={'w-full border-none'}/></div>
                      </div>
                      <div className={'w-full flex text-xs items-center '}>
                          <div className={'w-1/6 border border-black text-center'}><input className={'w-full border-none'} type={'text'}/> </div>
                          <div className={'w-5/6 border border-black text-center '}><input className={'w-full border-none'}/></div>
                      </div>
                      <div className={'w-full flex text-xs items-center '}>
                          <div className={'w-1/6 border border-black text-center'}><input className={'w-full border-none'} type={'text'}/> </div>
                          <div className={'w-5/6 border border-black text-center '}><input className={'w-full border-none'}/></div>
                      </div>
                  </div>

                  <div className={'w-full flex flex-col gap-1 text-xs'}>
                      <span className={'font-bold'}>* Имею право на поступление по результатам вступительных испытаний в форме, установленной вузом (при отсутствии результатов ЕГЭ):</span>
                      <div className={'w-full flex'}>
                          <span className={'font-bold w-6/12'}>Предметы</span>
                          <div className={'w-6/12'}>
                              <input className={'w-1/2'} type={'text'}/>
                              <input className={'w-1/2'} type={'text'}/>
                          </div>
                      </div>
                      <div className={'flex gap-1'}>
                          <span className={'font-bold'}>Дополнительное испытание творческой и (или) профессиональной направленности</span>
                          <input type={"checkbox"}/>
                      </div>
                      <div className={'flex gap-1'}>
                          <span className={'font-bold'}>Собеседование с просмотром</span>
                          <input type={"checkbox"}/>
                      </div>
                      <div className={'flex gap-5'}>
                          <span className={''}>язык вступительных испытаний</span>
                          <span className={'font-extrabold'}>РУССКИЙ</span>
                      </div>
                      <div className={'flex flex-col'}>
                          <span className={'font-bold'}>место сдачи вступительных испытаний с использованием дистанционных технологий</span>
                          <input className={'w-full'} type={"text"}/>
                      </div>
                  </div>


                  <div className={'w-full flex flex-col text-xs mt-4'}>
                      <div className={'flex items-center'}>
                          <span className={'font-bold'}>Имею особое право на поступление в вуз</span>
                          <div className={'flex gap-5 items-center ml-36'}>
                              <label className={'flex items-center'}>
                                  <input className={'p-2'} type={'checkbox'}/>
                                  ДА
                              </label>
                              <label className={'flex items-center'}>
                                  <input className={'p-2'} type={'checkbox'}/>
                                  НЕТ
                              </label>
                          </div>
                      </div>

                      <ul className={'flex flex-col text-xs'}>
                          <li className={'flex gap-1 items-center'}>
                              <input type={"checkbox"}/>
                              <span>– как ребенок-сирота или как ребенок, оставшийся без попечения родителей</span>
                          </li>
                          <li className={'flex gap-1 items-center'}>
                              <input type={"checkbox"}/>
                              <span>– как ребенок-инвалид, инвалид I или II группы, инвалид с детства</span>
                          </li>
                          <li className={'flex gap-1 items-center'}>
                              <input type={"checkbox"}/>
                              <span>– иная категория</span>
                          </li>
                      </ul>
                      <div className={'w-full flex items-center gap-1'}>
                            <span className={'w-2/6'}>если ДА, указать основание</span>
                            <input className={'w-4/6'} type={"text"}/>
                      </div>
                  </div>

                  <div className={'w-full text-xs flex flex-col mt-1'}>
                      <div className={'flex gap-8'}>
                         <span className={'font-bold'}>Нуждаюсь в необходимости создания специальных условий</span>
                          <div className={'flex gap-2 items-center'}>
                              <lable className={'flex items-center gap-1'}>
                                  <input type={"checkbox"}/>
                                  ДА
                              </lable>
                              <lable className={'flex items-center gap-1'}>
                                  <input type={"checkbox"}/>
                                  НЕТ
                              </lable>
                          </div>
                      </div>
                      <span className={'font-bold'}>при проведении вступительных испытаний в связи<br/> с ограниченными возможностями здоровья или инвалидностью</span>
                      <div className={'w-full flex'}>
                          <div className={'w-4/12'}>
                              <span >если ДА, указать специальные условия</span>
                          </div>
                          <div className={'w-8/12'}>
                              <input className={'w-full'} type={'text'}/>
                          </div>
                      </div>
                      <div className={'flex  w-full flex-wrap mt-1'}>
                          <span className={'w-4/12'}>перечень вступительных испытаний</span>
                          <div className={'w-8/12 flex flex-wrap'}>
                              <input className={'w-1/3'} type={"text"} />
                              <input className={'w-1/3'} type={"text"} />
                              <input className={'w-1/3'} type={"text"} />
                          </div>
                      </div>
                  </div>

                  <div className={'w-full mt-1 flex-col flex text-xs'}>
                      <div className={'w-full flex gap-10'}>
                          <span className={'font-bold'}>
                              Имею преимущественное право при зачислении в вуз
                          </span>
                          <div className={'flex gap-2'}>
                              <label className={'flex items-center gap-1'}>
                                  <input type={"checkbox"}/>
                                  ДА
                              </label>
                              <label className={'flex items-center gap-1'}>
                                  <input type={"checkbox"}/>
                                  Нет
                              </label>
                          </div>
                      </div>
                      <div className={'flex w-full'}>
                          <div className={'w-2/6'}>
                              <span>если ДА, указать основание</span>
                          </div>
                          <div className={'w-4/6'}>
                              <input className={'w-full'} type={"text"}/>
                          </div>
                      </div>

                      <div className={'w-full flex gap-10'}>
                          <span className={'font-bold'}>
                              Имею индивидуальные достижения
                          </span>
                          <div className={'flex gap-2 mt-1'}>
                              <label className={'flex items-center gap-1'}>
                                  <input type={"checkbox"}/>
                                  ДА
                              </label>
                              <label className={'flex items-center gap-1'}>
                                  <input type={"checkbox"}/>
                                  Нет
                              </label>
                          </div>
                      </div>

                      <div className={'flex w-full mt-1'}>
                            <span className={'w-2/6'}>если ДА, указать сведения о них</span>
                            <div className={'flex flex-col w-4/6 gap-1'}>
                                <input className={'w-full'} type={"text"}/>
                                <input className={'w-full'} type={"text"}/>
                                <input className={'w-full'} type={"text"}/>
                            </div>
                      </div>
                  </div>

                  <div className={'flex flex-col w-full'}>

                  </div>

              </div>
          </form>
      </div>
    </div>
  )
}
