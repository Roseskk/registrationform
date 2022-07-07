import Head from 'next/head'
import Image from 'next/image'
import {useState} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {


    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();

    /* ФИО СНИЛС ПОЛ ДР */

    const [stateFIO,setStateFIO] = useState({
        middleName : '',
        name: '',
        thirdName: '',
        gender: '',
        snils: '',
    });

    /* ПАСПОРТНЫЕ ДАННЫЕ */
    const [statePassport,setStatePassport] = useState({
        name: '',
        seria: '',
        nomer: '',
        kemvidan: '',
        grajdanstvo: '',
        inie: '',
        country: '',
        resp: '',
        rajon: '',
        city: '',
        street: '',
        house: '',
        corpus: '',
        kv: ''
    });

    /* ТЕЛЕФОН ПОЧТА */
    const [stateContacts,setStateContacts] = useState({
        phone: '',
        email: ''
    })

    /* Уровень образования форма обучания направление */
    const [stateStudyCourses,setStateStudyCourses] = useState({
        course: 'ДИЗАЙН',
        level:'',
        studyTime:'',
        wayBC: ''
    })

    /* Баллы */

    const [stateScore,setStateScore] = useState({
        firstExem: '',
        secondExem: '',
        thirdExem: ''
    })

    /* ДАТЫ */
    const [birthday,setBirthday] = useState(new Date());
    const [passportDate,setPassportDate] = useState(new Date());
    const [godSdachi1,SETgodSdachi0] = useState(new Date());
    const [godSdachi2,SETgodSdachi1] = useState(new Date());
    const [godSdachi3,SETgodSdachi2] = useState(new Date());


    /* Прошу засчитать в качестве результатов вступительных экзаменов результаты ЕГЭ: */


    /* Прошу засчитать в качестве результатов вступительных экзаменов результаты олимпиады: */


    /* FIO */
    const handleFioInput = (e) => {
        setStateFIO({
            ...stateFIO,
            [e.target.name] : e.target.value
        })
    }

    /* PASSPORT */
    const handlePassportInput = (e) => {
        setStatePassport({
            ...statePassport,
            [e.target.name] : e.target.value
        })
    }


    /* CONTACTS */

    const handleContactsInput = (e) => {
        setStateContacts({
            ...statePassport,
            [e.target.name] : e.target.value
        })
    }

    /* Уровень образования форма обучания направление */

    const handleCourseForm = (e) => {
        setStateStudyCourses({
            ...stateStudyCourses,
            [e.target.name] : e.target.value
        })
    }

    /* Баллы */

    const handleScore = (e) => {
        setStateScore({
            ...stateScore,
            [e.target.name] : e.target.value
        })
    }


    const design = {
       way: '54.03.01 ДИЗАЙН',
       subject: [
           {name: 'литература'},
           {name: 'русский язык'},
       ]
    }
    const reklama = {
        way: '42.03.01 РЕКЛАМА И СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ',
        subject: [
            {name: 'русский язык'},
            {name: 'обществознание'},
            {name: 'иностранный язык'},
        ]
    }
    const management = {
        way: '38.03.02 МЕНЕДЖМЕНТ',
        subject: [
            {name: 'математика'},
            {name: 'русский язык'},
            {name: 'обществознание'},
        ]
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
                          <input name={'middleName'} onChange={handleFioInput} value={stateFIO.middleName} className={'w-4/6 border uppercase'} />
                      </div>
                      <div className={'w-full text-sm flex '}>
                          <label className={'w-1/6 font-bold'}>Имя</label>
                          <input name={'name'} onChange={handleFioInput} value={stateFIO.name} className={'w-4/6 border uppercase'} />
                      </div>
                      <div className={'w-full text-sm flex '}>
                          <label className={'w-1/6 font-bold'}>Отчество</label>
                          <input name={'thirdName'} onChange={handleFioInput} value={stateFIO.thirdName} className={'w-4/6 border uppercase'} />
                      </div>
                  </div>
                  <div className={'w-2/6'}>
                    <div className={'flex justify-between items-center text-sm'}>
                        <h3>Пол</h3>
                        <lable className={'flex item gap-2'}>
                            <input onChange={handleFioInput} name={'gender'}  checked={stateFIO.gender === 'мужской'} value={'мужской'} type={'radio'} />
                            мужской
                        </lable>
                        <lable className={'flex item gap-2'}>
                            <input onChange={handleFioInput} name={'gender'} checked={stateFIO.gender === 'женский'} value={'женский'} type={'radio'} />
                            женский
                        </lable>
                    </div>
                    <div className={'flex mt-2 items-center gap-2'}>
                        <h2 className={'text-sm font-bold'}>СНИЛС</h2>
                        <input onChange={handleFioInput} name={'snils'} value={stateFIO.snils} className={'border'} type={'text'}/>
                    </div>
                    <div className={'flex mt-2  text-xs gap-2'}>
                        <h2>Дата рождения</h2>
                        <DatePicker selected={birthday} onChange={(date)=>setBirthday(date)} />
                    </div>
                  </div>
                  <div className={'flex flex-col text-sm w-full'}>
                      <div className={'flex gap-6'}>
                          <h2 className={'font-bold'}>Документ, удостоверящий личность</h2>
                          <input name={'name'} onChange={handlePassportInput} value={statePassport.name} placeholder={'Паспорт'} className={'border'} type={"text"}/>
                      </div>
                      <div className={'w-full mt-2 flex items-center ml-10 '}>
                          <div className={'flex gap-2'}>
                              <h3>серия</h3>
                              <input name={'seria'} onChange={handlePassportInput} value={statePassport.seria} className={'border'} type={'number'}/>
                              <h3>№</h3>
                              <input name={'nomer'} onChange={handlePassportInput} value={statePassport.nomer} className={'border'} type={"number"}/>
                          </div>
                          <div className={'flex-wrap flex gap-2 ml-20'}>
                             <h3>когда выдан</h3>
                              <DatePicker selected={passportDate} onChange={(date)=>setPassportDate(date)} />
                          </div>
                      </div>
                      <div className={'flex mt-2 '}>
                          <label className={'w-s'}>кем выдан</label>
                          <div className={'flex flex-col gap-2 w-full'}>
                              <textarea name={'kemvidan'} onChange={handlePassportInput} value={statePassport.kemvidan} className={'w-full border border-black'} />
                          </div>
                      </div>
                  </div>

                  <div className={'w-full flex flex-col mt-2'}>
                      <div className={'flex items-center gap-2'}>
                          <h2 className={'text-xs'}>Гражданство</h2>
                          <input name={'grajdanstvo'} onChange={handlePassportInput} value={statePassport.grajdanstvo} className={'border'} type={"text"}/>
                          <h2 className={'text-sm'}>Иные сведения о гражданстве</h2>
                          <input name={'inie'} onChange={handlePassportInput} value={statePassport.inie} className={'border'} type={"text"}/>
                      </div>
                  </div>
                  <div className={'w-full ml-24 mt-2 flex flex-col gap-1'}>
                      <div className={'flex w-full text-x2s items-center'}>
                          <h3 className={'w-1/5'}>страна</h3>
                          <input name={'country'} onChange={handlePassportInput} value={statePassport.country} className={'w-4/5 p-1'} type={"text"}/>
                      </div>
                      <div className={'flex w-full text-x2s items-center'}>
                          <h3 className={'w-1/5'}>республика / область</h3>
                          <input name={'resp'} onChange={handlePassportInput} value={statePassport.resp} className={'w-4/5 p-1'} type={"text"}/>
                      </div>
                      <div className={'flex w-full text-x2s items-center'}>
                          <h3 className={'w-1/5'}>район</h3>
                          <input name={'rajon'} onChange={handlePassportInput} value={statePassport.rajon} className={'w-4/5 p-1'} type={"text"}/>
                      </div>
                      <div className={'flex w-full text-x2s items-center'}>
                          <h3 className={'w-1/5'}>город/нас.пункт/индекс</h3>
                          <input name={'city'} onChange={handlePassportInput} value={statePassport.city} className={'w-4/5 p-1'} type={"text"}/>
                      </div>
                      <div className={'flex w-full text-x2s items-center'}>
                          <h3 className={'w-1/5'}>улица</h3>
                          <input name={'street'} onChange={handlePassportInput} value={statePassport.street} className={'w-4/5 p-1'} type={"text"}/>
                      </div>

                      <div className={'flex w-full text-x2s items-center'}>
                          <div className={'flex gap-20 items-center'}>
                              <h3 className={'w-1/5'}>дом</h3>
                              <input name={'house'} onChange={handlePassportInput} value={statePassport.house} className={'w-1/5 '} type={"text"}/>
                          </div>
                          <div className={'flex gap-1 items-center'}>
                              <h3 className={'w-2/5'}>корпус</h3>
                              <input name={'corpus'} onChange={handlePassportInput} value={statePassport.corpus} className={'w-1/5 '} type={"text"}/>
                          </div>
                          <div className={'flex gap-1 items-center'}>
                              <h3 className={'w-2/5'}>квартира</h3>
                              <input name={'kv'} onChange={handlePassportInput} value={statePassport.kv} className={'w-1/5 '} type={"text"}/>
                          </div>
                      </div>
                  </div>
                  <div className={'flex w-full text-xs gap-5 mt-2'}>
                      <h2 className={''}>Телефон</h2>
                      <input name={'phone'} onChange={handleContactsInput} value={stateContacts.phone} className={'w-2/6'} type={"number"} />
                      <h2 className={''}>E-mail</h2>
                      <input name={'email'} onChange={handleContactsInput} value={stateContacts.email} className={'w-2/6'} type={"email"}/>
                  </div>
                  <div className={'flex items-center justify-center text-xs w-full mt-4'}>
                      <p className={'text-center'}><strong>Прошу допустить меня</strong> к участию в конкурсе на зачисление и к вступительным испытаниям<br/>
                          по направлению подготовки <strong>
                              <select name={'course'} className={'border w-fit text-center'} value={stateStudyCourses.course} onChange={handleCourseForm}  >
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
                                      <input name={'level'} onChange={handleCourseForm} checked={stateStudyCourses.level === 'БАКАЛАВРИАТ'} value={'БАКАЛАВРИАТ'} type={"radio"}/>
                                  </label>
                              </th>
                              <th scope="col" className="text-xs font-bold  text-gray-900  border-r">
                                  <label className={'flex  justify-center items-center  gap-2 text-xs'}>
                                      {
                                          stateStudyCourses.course === 'МЕНЕДЖМЕНТ' || stateStudyCourses.course === 'РЕКЛАМА И СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ'
                                          ? null
                                          : <>
                                                  МАГИСТРАТУРА
                                                  <input name={'level'} onChange={handleCourseForm} checked={stateStudyCourses.level === 'МАГИСТРАТУРА'}  value={'МАГИСТРАТУРА'} type={"radio"}/>
                                              </>
                                      }
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
                                  {
                                      stateStudyCourses.course === 'ДИЗАЙН'
                                      ?
                                      stateStudyCourses.level === 'МАГИСТРАТУРА'
                                          ? null
                                          : <label className={'flex  justify-center items-center gap-2  text-xs'}>очная<input name={'studyTime'} onChange={handleCourseForm} checked={stateStudyCourses.studyTime === 'очная'} value={'очная'}  type={"radio"}/></label>

                                      :null
                                  }
                                  {
                                      stateStudyCourses.course === 'МЕНЕДЖМЕНТ'
                                      ?  <label className={'flex  justify-center items-center gap-2  text-xs'}>очная<input name={'studyTime'} onChange={handleCourseForm} checked={stateStudyCourses.studyTime === 'очная'} value={'очная'}  type={"radio"}/></label>
                                      : null
                                  }
                                  {
                                      stateStudyCourses.course === 'РЕКЛАМА И СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ'
                                      ? <>
                                              <label className={'flex  justify-center items-center gap-2  text-xs'}>очная<input name={'studyTime'} onChange={handleCourseForm} checked={stateStudyCourses.studyTime === 'очная'} value={'очная'}  type={"radio"}/></label>
                                              <label className={'flex  justify-center items-center gap-2  text-xs'}>очно-заочная<input name={'studyTime'} onChange={handleCourseForm} checked={stateStudyCourses.studyTime === 'очно-заочная'} value={'очно-заочная'}  type={"radio"}/></label>
                                          </>
                                      : null
                                  }
                              </td>
                              <td className="text-xs font-bold text-gray-900 font-light px-3 py-2 whitespace-nowrap">
                                  {
                                      stateStudyCourses.course === 'ДИЗАЙН' ?
                                          stateStudyCourses.level === 'БАКАЛАВРИАТ'
                                          ?  null
                                          :  <label className={'flex  justify-center items-center gap-2  text-xs'}>очно-заочная<input name={'studyTime'} onChange={handleCourseForm} checked={stateStudyCourses.studyTime  === 'очно-заочная'} value={'очно-заочная'}  type={"radio"}/></label>
                                      : null
                                  }
                                  {
                                      stateStudyCourses.course === 'МЕНЕДЖМЕНТ'
                                          ? <>
                                                  <label className={'flex  justify-center items-center gap-2  text-xs'}>очно-заочная<input name={'studyTime'} onChange={handleCourseForm} checked={stateStudyCourses.studyTime === 'очно-заочная'} value={'очно-заочная'}  type={"radio"}/></label>
                                            </>
                                          : null
                                  }
                                  {
                                      stateStudyCourses.course === 'РЕКЛАМА И СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ'
                                      ? <>
                                          <label className={'flex  justify-center items-center gap-2  text-xs'}>заочная<input name={'studyTime'} onChange={handleCourseForm} checked={stateStudyCourses.studyTime === 'заочная'} value={'заочная'}  type={"radio"}/></label>
                                        </>
                                      : null
                                  }
                              </td>
                          </tr>
                          {
                              stateStudyCourses.level === 'МАГИСТРАТУРА'
                              ? null
                              : <tr className="border-b  ">
                                      <td className="text-xs text-left w-full  font-bold text-gray-900 font-light px-3 py-2 whitespace-nowrap gap-1 flex flex-col  ">
                                          {
                                              stateStudyCourses.course === 'ДИЗАЙН' ? <span className={'text-xls font-bold'}>Направление подготовки: {design.way} бакалавриат<br/></span>  : null
                                          }
                                          {
                                              stateStudyCourses.course === 'РЕКЛАМА И СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ' ? <span className={'text-xls font-bold'}>Направление подготовки: {reklama.way} бакалавриат<br/></span>  : null
                                          }
                                          {
                                              stateStudyCourses.course === 'МЕНЕДЖМЕНТ' ? <span className={'text-xls font-bold'}>Направление подготовки: {management.way} бакалавриат<br/></span> : null
                                          }
                                          <span>Направленность (профиль):
                                              {
                                                  stateStudyCourses.course === 'ДИЗАЙН'
                                                      ? <select name={'wayBC'} value={stateStudyCourses.wayBC} onChange={handleCourseForm} className={'w-full text-center border rounded'}>
                                                          <option value={'123'}>Выберете направление</option>
                                                          <option value={'Архитектурная среда и дизайн'}>Архитектурная среда и дизайн</option>
                                                          <option value={'Анимация'}>Анимация</option>
                                                          <option value={'Графический дизайн'}>Графический дизайн</option>
                                                          <option value={'Гейм-дизайн'}>Гейм-дизайн</option>
                                                          <option value={'Дизайн костюма'}>Дизайн костюма</option>
                                                          <option value={'Дизайн интерьера'}>Дизайн интерьера</option>
                                                          <option value={'Иллюстрация в дизайне'}>Иллюстрация в дизайне</option>
                                                          <option value={'Моушен-дизайн'}>Моушен-дизайн</option>
                                                          <option value={'Цифровой дизайн'}>Цифровой дизайн</option>
                                                          <option value={'Визуальные коммуникации'}>Визуальные коммуникации</option>
                                                          <option value={'Менеджмент в дизайне и бизнеса'}>Менеджмент в дизайне и бизнеса</option>
                                                      </select>
                                                      :null
                                              }
                                              {
                                                  stateStudyCourses.course === 'МЕНЕДЖМЕНТ'
                                                  ? <select name={'wayBC'} value={stateStudyCourses.wayBC} onChange={handleCourseForm} className={'w-full text-center border rounded'}>
                                                          <option value={'1'}>Выберете направление</option>
                                                          <option value={'Маркетинг и реклама'}>Маркетинг и реклама</option>
                                                          <option value={'Бренд-менеджмент'}>Бренд-менеджмент</option>
                                                      </select>
                                                  : null
                                              }
                                              {
                                                  stateStudyCourses.course === 'РЕКЛАМА И СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ'
                                                      ? <select name={'wayBC'} value={stateStudyCourses.wayBC} onChange={handleCourseForm} className={'w-full text-center border rounded'}>
                                                          <option value={'3'}>Выберете направление</option>
                                                          <option value={'Цифровые коммуникации'}>Цифровые коммуникации</option>
                                                          <option value={'Цифровые коммуникации'}>Цифровые коммуникации</option>
                                                      </select>
                                                      : null
                                              }
                                  </span>

                                      </td>
                                  </tr>
                          }
                          {
                              stateStudyCourses.level === 'БАКАЛАВРИАТ'
                              ? null
                              : <tr className={'w-full'}>
                                      <td className="text-xs text-left w-full  font-bold text-gray-900 font-light px-3 py-2 whitespace-nowrap gap-1 flex flex-col ">
                                          <span>Направление подготовки: 54.03.01 ДИЗАЙН магистратура</span> <br />
                                          <span>Направленность (профиль): __________________________</span>
                                      </td>
                                  </tr>
                          }
                          </tbody>
                      </table>
                  </div>
                  <div className={'w-full relative flex flex-col gap-0'}>
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
                      {
                          stateStudyCourses.course === 'ДИЗАЙН'
                          ? design.subject.map((subject,idx)=>{
                              return(
                                  <div key={idx} className={'text-xs  mt-3 w-3/12 '}>
                                          <span className={'w-full'}>{subject.name}</span>
                                  </div>
                              )
                          })
                          : null
                      }
                      {
                          stateStudyCourses.course === 'МЕНЕДЖМЕНТ'
                              ? management.subject.map((subject,idx)=>{
                                  return(
                                      <div key={idx} className={'text-xs mt-2 w-3/12 '}>
                                              <span className={'wfull'}>{subject.name}</span>
                                      </div>
                                  )
                              })
                              : null
                      }
                      {
                          stateStudyCourses.course === 'РЕКЛАМА И СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ'
                              ? reklama.subject.map((subject,idx)=>{
                                  return(
                                      <div key={idx} className={'text-xs mt-2 w-3/12 '}>
                                              <span className={'wfull'}>{subject.name}</span>
                                      </div>
                                  )
                              })
                              : null
                      }
                      <div className={'absolute  top-10 left-36 text-xs'}>
                          <label className={'flex gap-2 mt-2 items-center '}><span className={'w-9/12'}>Год сдачи</span> <DatePicker  selected={godSdachi1} onChange={(date)=>SETgodSdachi0(date)} /></label>
                          <label className={'flex items-center mt-1'}><span className={'w-9/12'}>Год сдачи</span> <DatePicker selected={godSdachi2} onChange={(date)=>SETgodSdachi1(date)} /></label>
                          <label className={'flex items-center mt-1'}><span className={'w-9/12'}>Год сдачи</span> <DatePicker selected={godSdachi3} onChange={(date)=>SETgodSdachi2(date)} /></label>
                      </div>
                      <div className={'absolute w-2/12 top-10 right-0 text-xs'}>
                          <input className={'p-0 text-center h-5 border-l-0 border-t-0 border-r-0'} name={'firstExem'}  onChange={handleScore} value={stateScore.firstExem} type={"number"}/>
                          <input className={'p-0 text-center h-5 border-l-0 border-t-0 border-r-0 mt-1'} name={'secondExem'}  onChange={handleScore} value={stateScore.secondExem} type={"number"}/>
                          <input className={'p-0 text-center h-5 border-l-0 border-t-0 border-r-0 mt-1'} name={'thirdExem'}  onChange={handleScore} value={stateScore.thirdExem} type={"number"}/>
                      </div>
                  </div>


                  <div className={'flex mt-10 flex-col w-full gap-1'}>
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
                      <div className={'flex w-full mt-32'}>
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
