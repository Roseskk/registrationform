import Head from 'next/head'
import Image from 'next/image'
import {useState} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {

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

    /* Олимпиады предметы ЕГЭ собес место сдачи инфо */

    const [stateAdvancedSubjects,setStateAdvancedSubjects] = useState({
        firstSubject: '',
        secondSubject: '',
        thirdSubject: '',
        firstInfo:'',
        secondInfo: '',
        thirdInfo: '',
        withoutEXEM1: '',
        withoutEXEM2: '',
        professionalWay: false,
        interview: false,
        placeOfExem: ''
    })

    /* Q&A TEST */

    const [stateQuestionAnswer,setStateQuestionAnswer] = useState({
        uniquePerson : '',
        categoryInv: '',
        uniquePersonInfo: '',
        specialTest: '',
        specialTestInfo: '',
        passTest1: '',
        passTest2: '',
        passTest3: '',
        uniqueUniversityPass: '',
        uniqueUniversityPassInfo: '',
        uniquePersonAchievements: '',
        uniquePersonAchievements1: '',
        uniquePersonAchievements2: '',
        uniquePersonAchievements3: '',
    })

    /* footer Закон образование когда тип и что дальше */

    const [stateOldStudyStatus,setStateOldStudyStatus] = useState({
        zakon: false,
        oldStudyName: '',
        oldYear: '',
        diplomNumber: '',
        studyDoc: '',
        studyDocInfo: '',
        isStudentCourses: '',
        docBack: ''
    })


    /* ДАТЫ */
    const [birthday,setBirthday] = useState(new Date());
    const [passportDate,setPassportDate] = useState(new Date());
    const [godSdachi1,SETgodSdachi0] = useState(new Date());
    const [godSdachi2,SETgodSdachi1] = useState(new Date());
    const [godSdachi3,SETgodSdachi2] = useState(new Date());
    const [diplomDate,setDiplomDate] = useState(new Date());

    /**
     * FORM
     */
    const handleForm = (e) => {
        e.preventDefault()
        console.log(e)
    }

    /* FIO */
    const handleFioInput = (e) => {
        const value = e.target.value
        setStateFIO({
            ...stateFIO,
            [e.target.name] : value
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
            ...stateContacts,
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

    /* Олимпиады предметы ЕГЭ собес место сдачи инфо */

    const handleAdvancedSubject = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setStateAdvancedSubjects({
            ...stateAdvancedSubjects,
            [e.target.name] : value
        })
    }

    /* Q&A TEST */

    const handleQuestionAnswer = (e) => {
        const value =  e.target.value
        console.log(value)
        setStateQuestionAnswer({
            ...stateQuestionAnswer,
            [e.target.name] : value
        })
    }

    /* footer Закон образование когда тип и что дальше */

    const handleOldStudy = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        console.log(value)
        setStateOldStudyStatus({
            ...stateOldStudyStatus,
            [e.target.name] : value
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
    <div className={''}>
      <Head>
        <title>B&D FORM</title>
        <meta name="description" content="Powered by B&D" />
      </Head>
      <div className={'w-a4 h-a4 mx-auto p-3 '}>
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
          <form onSubmit={handleForm} className={'flex flex-col gap-2 mt-2'}>
              <div className={'flex-wrap flex'}>
                  <div className={'w-4/6 flex flex-col gap-1 items-center'}>
                      <div className={'w-full text-sm flex '}>
                          <label className={'w-1/6 font-bold'}>Фамилия</label>
                          <input name={'middleName'} onChange={handleFioInput} value={stateFIO.middleName} className={'w-4/6 border uppercase'} type={"text"} />
                      </div>
                      <div className={'w-full text-sm flex '}>
                          <label className={'w-1/6 font-bold'}>Имя</label>
                          <input name={'name'} onChange={handleFioInput} value={stateFIO.name} className={'w-4/6 border uppercase'} type={"text"} />
                      </div>
                      <div className={'w-full text-sm flex '}>
                          <label className={'w-1/6 font-bold'}>Отчество</label>
                          <input name={'thirdName'} onChange={handleFioInput} value={stateFIO.thirdName} className={'w-4/6 border uppercase'} type={"text"} />
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
                                              <span className={'w-full'}>{subject.name}</span>
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
                                              <span className={'w-full'}>{subject.name}</span>
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
                          <div className={'w-1/6 border border-black text-center'}><input name={'firstSubject'} onChange={handleAdvancedSubject} value={stateAdvancedSubjects.firstSubject} className={'w-full border-none'} type={'text'}/> </div>
                          <div className={'w-5/6 border border-black text-center '}><input name={'firstInfo'} onChange={handleAdvancedSubject} value={stateAdvancedSubjects.firstInfo} className={'w-full border-none'}/></div>
                      </div>
                      <div className={'w-full flex text-xs items-center '}>
                          <div className={'w-1/6 border border-black text-center'}><input name={'secondSubject'} onChange={handleAdvancedSubject} value={stateAdvancedSubjects.secondSubject} className={'w-full border-none'} type={'text'}/> </div>
                          <div className={'w-5/6 border border-black text-center '}><input name={'secondInfo'} onChange={handleAdvancedSubject} value={stateAdvancedSubjects.secondInfo} className={'w-full border-none'}/></div>
                      </div>
                      <div className={'w-full flex text-xs items-center '}>
                          <div className={'w-1/6 border border-black text-center'}><input name={'thirdSubject'} onChange={handleAdvancedSubject} value={stateAdvancedSubjects.thirdSubject}  className={'w-full border-none'} type={'text'}/> </div>
                          <div className={'w-5/6 border border-black text-center '}><input name={'thirdInfo'} onChange={handleAdvancedSubject} value={stateAdvancedSubjects.thirdInfo} className={'w-full border-none'}/></div>
                      </div>
                  </div>

                  <div className={'w-full flex flex-col gap-1 text-xs'}>
                      <span className={'font-bold'}>* Имею право на поступление по результатам вступительных испытаний в форме, установленной вузом (при отсутствии результатов ЕГЭ):</span>
                      <div className={'w-full flex'}>
                          <span className={'font-bold w-6/12'}>Предметы</span>
                          <div className={'w-6/12'}>
                              <input name={'withoutEXEM1'} onChange={handleAdvancedSubject} value={stateAdvancedSubjects.withoutEXEM1} className={'w-1/2'} type={'text'}/>
                              <input name={'withoutEXEM2'} onChange={handleAdvancedSubject} value={stateAdvancedSubjects.withoutEXEM2} className={'w-1/2'} type={'text'}/>
                          </div>
                      </div>
                      <div className={'flex gap-1'}>
                          <span className={'font-bold'}>Дополнительное испытание творческой и (или) профессиональной направленности</span>
                          <input name={'professionalWay'} onChange={handleAdvancedSubject} checked={stateAdvancedSubjects.professionalWay} type={"checkbox"}/>
                      </div>
                      <div className={'flex gap-1'}>
                          <span className={'font-bold'}>Собеседование с просмотром</span>
                          <input name={'interview'} onChange={handleAdvancedSubject} checked={stateAdvancedSubjects.interview}  type={"checkbox"}/>
                      </div>
                      <div className={'flex gap-5'}>
                          <span className={''}>язык вступительных испытаний</span>
                          <span className={'font-extrabold'}>РУССКИЙ</span>
                      </div>
                      <div className={'flex flex-col'}>
                          <span className={'font-bold'}>место сдачи вступительных испытаний с использованием дистанционных технологий</span>
                          <input name={'placeOfExem'} onChange={handleAdvancedSubject} value={stateAdvancedSubjects.placeOfExem} className={'w-full'} type={"text"}/>
                      </div>
                  </div>


                  <div className={'w-full flex flex-col text-xs mt-4'}>
                      <div className={'flex items-center'}>
                          <span className={'font-bold'}>Имею особое право на поступление в вуз</span>
                          <div className={'flex gap-5 items-center ml-36'}>
                              <label className={'flex items-center'}>
                                  <input name={'uniquePerson'} onChange={handleQuestionAnswer} checked={stateQuestionAnswer.uniquePerson === 'да'} value={'да'} className={'p-2'} type={'radio'}/>
                                  ДА
                              </label>
                              <label className={'flex items-center'}>
                                  <input name={'uniquePerson'} onChange={handleQuestionAnswer} checked={stateQuestionAnswer.uniquePerson === 'нет'} value={'нет'} className={'p-2'} type={'radio'}/>
                                  НЕТ
                              </label>
                          </div>
                      </div>

                      <ul className={'flex flex-col text-xs'}>
                          <li className={'flex gap-1 items-center'}>
                              <input name={'categoryInv'} onChange={handleQuestionAnswer} checked={stateQuestionAnswer.categoryInv === 'сирота'} value={'сирота'}  type={"radio"}/>
                              <span>– как ребенок-сирота или как ребенок, оставшийся без попечения родителей</span>
                          </li>
                          <li className={'flex gap-1 items-center'}>
                              <input name={'categoryInv'} onChange={handleQuestionAnswer} checked={stateQuestionAnswer.categoryInv === 'инвалид'} value={'инвалид'}  type={"radio"} />
                              <span>– как ребенок-инвалид, инвалид I или II группы, инвалид с детства</span>
                          </li>
                          <li className={'flex gap-1 items-center'}>
                              <input name={'categoryInv'} onChange={handleQuestionAnswer} checked={stateQuestionAnswer.categoryInv === 'иная категория'} value={'иная категория'}  type={"radio"} />
                              <span>– иная категория</span>
                          </li>
                      </ul>
                      <div className={'w-full flex items-center gap-1'}>
                            <span className={'w-2/6'}>если ДА, указать основание</span>
                            <input name={'uniquePersonInfo'} onChange={handleQuestionAnswer} value={stateQuestionAnswer.uniquePersonInfo} className={'w-4/6'} type={"text"}/>
                      </div>
                  </div>

                  <div className={'w-full text-xs flex flex-col mt-1'}>
                      <div className={'flex gap-8'}>
                         <span className={'font-bold'}>Нуждаюсь в необходимости создания специальных условий</span>
                          <div className={'flex gap-2 items-center'}>
                              <lable className={'flex items-center gap-1'}>
                                  <input name={'specialTest'} onChange={handleQuestionAnswer} checked={stateQuestionAnswer.specialTest === 'да'} value={'да'} type={"radio"}/>
                                  ДА
                              </lable>
                              <lable className={'flex items-center gap-1'}>
                                  <input name={'specialTest'} onChange={handleQuestionAnswer} checked={stateQuestionAnswer.specialTest === 'нет'} value={'нет'} type={"radio"}/>
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
                              <input name={'specialTestInfo'} onChange={handleQuestionAnswer}  value={stateQuestionAnswer.specialTestInfo} className={'w-full'} type={'text'}/>
                          </div>
                      </div>
                      <div className={'flex  w-full flex-wrap mt-1'}>
                          <span className={'w-4/12'}>перечень вступительных испытаний</span>
                          <div className={'w-8/12 flex flex-wrap'}>
                              <input name={'passTest1'} onChange={handleQuestionAnswer} value={stateQuestionAnswer.passTest1} className={'w-1/3'} type={"text"} />
                              <input name={'passTest2'} onChange={handleQuestionAnswer} value={stateQuestionAnswer.passTest2} className={'w-1/3'} type={"text"} />
                              <input name={'passTest3'} onChange={handleQuestionAnswer} value={stateQuestionAnswer.passTest3} className={'w-1/3'} type={"text"} />
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
                                  <input name={'uniqueUniversityPass'} onChange={handleQuestionAnswer} checked={stateQuestionAnswer.uniqueUniversityPass === 'да'} value={'да'}  type={"radio"}/>
                                  ДА
                              </label>
                              <label className={'flex items-center gap-1'}>
                                  <input name={'uniqueUniversityPass'} onChange={handleQuestionAnswer} checked={stateQuestionAnswer.uniqueUniversityPass === 'нет'} value={'нет'}  type={"radio"}/>
                                  Нет
                              </label>
                          </div>
                      </div>
                      <div className={'flex w-full'}>
                          <div className={'w-2/6'}>
                              <span>если ДА, указать основание</span>
                          </div>
                          <div className={'w-4/6'}>
                              <input name={'uniqueUniversityPassInfo'} onChange={handleQuestionAnswer} value={stateQuestionAnswer.uniqueUniversityPassInfo}  className={'w-full'} type={"text"}/>
                          </div>
                      </div>

                      <div className={'w-full flex gap-10'}>
                          <span className={'font-bold'}>
                              Имею индивидуальные достижения
                          </span>
                          <div className={'flex gap-2 mt-1'}>
                              <label className={'flex items-center gap-1'}>
                                  <input name={'uniquePersonAchievements'} onChange={handleQuestionAnswer} checked={stateQuestionAnswer.uniquePersonAchievements === 'да'} value={'да'}  type={"radio"}/>
                                  ДА
                              </label>
                              <label className={'flex items-center gap-1'}>
                                  <input name={'uniquePersonAchievements'} onChange={handleQuestionAnswer} checked={stateQuestionAnswer.uniquePersonAchievements === 'нет'} value={'нет'}  type={"radio"}/>
                                  Нет
                              </label>
                          </div>
                      </div>

                      <div className={'flex w-full mt-1'}>
                            <span className={'w-2/6'}>если ДА, указать сведения о них</span>
                            <div className={'flex flex-col w-4/6 gap-1'}>
                                <input name={'uniquePersonAchievements1'} onChange={handleQuestionAnswer} value={stateQuestionAnswer.uniquePersonAchievements1}  className={'w-full'} type={"text"}/>
                                <input name={'uniquePersonAchievements2'} onChange={handleQuestionAnswer} value={stateQuestionAnswer.uniquePersonAchievements2}  className={'w-full'} type={"text"}/>
                                <input name={'uniquePersonAchievements3'} onChange={handleQuestionAnswer} value={stateQuestionAnswer.uniquePersonAchievements3}  className={'w-full'} type={"text"}/>
                            </div>
                      </div>
                  </div>

                  <div className={'flex w-full flex-col gap-2 text-xs'}>
                      <div  className={'flex'}>
                          <span className={'font-bold'}>Сведения о том, что поступающий является лицом, признанным гражданином, или лицом, указанным в части 3.1 ст.5 или ст.6 Федерального закона No 84 -ФЗ
                          </span>
                          <lable className={'font-bold flex items-center gap-1'}>
                              <input name={'zakon'} onChange={handleOldStudy} checked={stateOldStudyStatus.zakon}  type={"checkbox"}/>
                              ДА
                          </lable>
                      </div>
                      <div className={'w-full flex flex-col'}>
                          <input name={'oldStudyName'} onChange={handleOldStudy} value={stateOldStudyStatus.oldStudyName} className={'placeholder:text-black placeholder:font-bold pt-1 pb-1'} placeholder={'Наименование учебного заведения:'} type={"text"}/>
                          <div className={'flex gap-3 mt-1'}>
                              <span className={'font-bold'}>Окончил(а) в </span>
                              <input name={'oldYear'} onChange={handleOldStudy} value={stateOldStudyStatus.oldYear} type={"number"}/>
                              <span className={'font-normal'}>году</span>
                          </div>
                      </div>
                      <div className={'flex flex-col w-full'}>
                          <div className={'flex w-full justify-between items-center '}>
                              <span><strong>Документ об образовании:</strong> серия № </span>
                              <input name={'diplomNumber'} onChange={handleOldStudy} value={stateOldStudyStatus.diplomNumber} className={'w-3/12'} type={"text"}/>
                              <span>выдан</span>
                              <div className={'w-3/12'}>
                                  <DatePicker selected={diplomDate} onChange={(date)=>setDiplomDate(date)}  className={''} />
                              </div>
                          </div>
                          <div className={'flex flex-col w-full mt-1 gap-1'}>
                              <label className={'flex items-center gap-1'}>
                                  <input name={'studyDoc'} onChange={handleOldStudy} checked={stateOldStudyStatus.studyDoc === 'среднее'} value={'среднее'} type={"radio"}/>
                                  аттестат о среднем общем образовании Российской Федерации
                              </label>
                              <label className={'flex items-center gap-1'}>
                                  <input name={'studyDoc'} onChange={handleOldStudy} checked={stateOldStudyStatus.studyDoc === 'про'} value={'про'} type={"radio"}/>
                                  диплом о среднем профессиональном образовании Российской Федерации
                              </label>
                              <label className={'flex items-center gap-1'}>
                                  <input name={'studyDoc'} onChange={handleOldStudy} checked={stateOldStudyStatus.studyDoc === 'высшее'} value={'высшее'} type={"radio"}/>
                                  диплом о высшем образовании Российской Федерации
                              </label>
                              <label className={'flex items-center gap-1'}>
                                  <input name={'studyDoc'} onChange={handleOldStudy} checked={stateOldStudyStatus.studyDoc === 'иностранец'} value={'иностранец'} type={"radio"}/>
                                  документ об образовании иностранного государства
                              </label>
                              <label className={'flex items-center gap-1'}>
                                  <input name={'studyDoc'} onChange={handleOldStudy} checked={stateOldStudyStatus.studyDoc === 'иной'} value={'иной'} type={"radio"}/>
                                  иной документ об образовании
                              </label>

                              <label className={'flex items-center justify-between gap-1'}>
                                  <span className={'font-bold'}>если иной, указать тип</span>
                                  <input name={'studyDocInfo'} onChange={handleOldStudy} value={stateOldStudyStatus.studyDocInfo} className={'w-9/12'} type={"text"}/>
                              </label>
                          </div>
                      </div>

                      <div className={'flex flex-col'}>
                           <span className={'font-bold'}>Являюсь выпускником подготовительных курсов данного учебного заведения:</span>
                           <div className={'flex gap-3 font-bold'}>
                              <label className={'flex items-center gap-1'}>
                                  ДА
                                  <input name={'isStudentCourses'}  onChange={handleOldStudy} checked={stateOldStudyStatus.isStudentCourses === '8'} value={'8'} type={"radio"}/>
                                  8 мес;
                              </label>
                               <label className={'flex items-center gap-1'}>
                                   ДА
                                   <input name={'isStudentCourses'} onChange={handleOldStudy} checked={stateOldStudyStatus.isStudentCourses === '6'} value={'6'} type={"radio"}/>
                                   6 мес;
                               </label>
                               <label className={'flex items-center gap-1'}>
                                   ДА
                                   <input name={'isStudentCourses'} onChange={handleOldStudy} checked={stateOldStudyStatus.isStudentCourses === '4'} value={'4'} type={"radio"}/>
                                   4 мес;
                               </label>
                               <label className={'flex items-center gap-1'}>
                                   ДА
                                   <input name={'isStudentCourses'} onChange={handleOldStudy} checked={stateOldStudyStatus.isStudentCourses === 'лето'} value={'лето'} type={"radio"}/>
                                   летний курс
                               </label>
                               <label className={'flex items-center gap-1 ml-10'}>
                                   НЕТ
                                   <input name={'isStudentCourses'} onChange={handleOldStudy} checked={stateOldStudyStatus.isStudentCourses === 'нет'} value={'нет'} type={"radio"}/>
                               </label>
                           </div>

                          <div className={'flex flex-col w-full mt-3 '}>
                              <div className={'flex flex-col gap-2'}>
                                  <div className={'flex justify-between'}>
                                      <span className={'font-bold'}>С отсутствием у вуза общежития ознакомлен(а)</span>
                                      <span>_________________Подпись</span>
                                  </div>
                                  <div className={'flex justify-between'}>
                                      <span className={'font-bold'}>Подтверждаю подачу заявлений в не более чем пять вузов, три направления (специальности</span>
                                      <span>_________________Подпись</span>
                                  </div>
                                  <span className={'font-bold'}>Ознакомлен(а)</span>
                                  <div className={'flex flex-col gap-1 '}>
                                    <span className={'w-9/12'}>- с копией лицензии на право ведения образовательной деятельности (с приложением);</span>
                                    <span className={'w-9/12'}>- с копией свидетельства о государственной аккредитации программ (с приложением), реализуемых Институтом;
                                    </span>
                                    <span className={'w-9/12'}>- с информацией о предоставляемых поступающим особых правах и преимуществах при приеме на Об отсутствие у вуза общежития ознакомлен (а)обучение по программам бакалавриата и программам магистратуры;
                                    </span>
                                    <div className={'flex justify-between '}>
                                        <span className={'w-9/12'}>
                                        - с Правилами приема, в том числе правилами подачи апелляции по результатам вступительных испытаний в АНО ВО « Институт бизнеса и дизайна»;
                                        </span>
                                        <span>_________________Подпись</span>
                                    </div>
                                    <div className={'flex justify-between'}>
                                        <span className={'w-9/12'}>
                                            С датами завершения представления поступающими заявления о согласии на зачисление на места по договорам об оказании платных образовательных услуг <strong>ознакомлен(а):</strong>
                                        </span>
                                        <span>_________________Подпись</span>
                                    </div>
                                    <div className={'flex justify-between'}>
                                        <span className={'w-9/12 font-bold'}>Даю согласие на обработку своих персональных данных
                                        </span>
                                        <span>_________________Подпись</span>
                                    </div>
                                      <div className={'flex justify-between items-center'}>
                                        <span className={'w-9/12 font-bold'}>Подтверждаю подачу заявления о приеме на основании соответствующего особого права только в АНО ВО «Институт бизнеса и дизайна» на одну образовательную программу (при наличии особого права)
                                        </span>
                                          <span>_________________Подпись</span>
                                      </div>
                                      <div className={'flex justify-between items-center'}>
                                        <span className={'w-9/12 font-bold'}>Ознакомлен(а) с информацией об ответственности за достоверность сведений, указываемых в заявлении о приеме, и за подлинность документов, подаваемых для поступления
                                        </span>
                                          <span>_________________Подпись</span>
                                      </div>
                                      <div className={'flex flex-col w-full mt-2'}>
                                          <span className={'font-bold'}>Способ возврата поданных документов</span>
                                          <div className={'flex justify-between'}>
                                              <label className={'flex gap-2 font-bold'}>
                                                  <input name={'docBack'} onChange={handleOldStudy} checked={stateOldStudyStatus.docBack === 'лично'} value={'лично'} type={"radio"}/>
                                                  Лично
                                              </label>
                                              <label className={'flex gap-2 font-bold'}>
                                                  <input name={'docBack'} onChange={handleOldStudy} checked={stateOldStudyStatus.docBack === 'почта'} value={'почта'} type={"radio"}/>
                                                  Почтой России
                                              </label>
                                              <label className={'flex gap-2 font-bold'}>
                                                  <input name={'docBack'} onChange={handleOldStudy} checked={stateOldStudyStatus.docBack === 'доверенность'} value={'доверенность'} type={"radio"}/>
                                                  По доверенности
                                              </label>
                                          </div>
                                          <div className={'flex items-center justify-between mt-4'}>
                                              <span>«______»___________ 2022 г.</span>
                                              <div className={'flex items-center gap-1'}>
                                                  <span>______________________подпись абитуриента</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={'w-full flex flex-col text-xs gap-1 mt-3'}>
                      <span className={'flex w-full justify-end font-bold'}>
                          С условиями приема в АНО ВО «Институт бизнеса и дизайна» ознакомлен (а)
                      </span>
                      <span className={'flex w-full justify-end font-bold'}>
                          __________________________________________/______________________________
                      </span>
                      <span className={'flex w-full justify-end font-bold'}>
                          подпись законного представителя (в случае несовершеннолетнего абитуриента)
                      </span>
                      <div className={'flex justify-between mt-2'}>
                          <span>Отозваны документы от участия в конкурсе</span>
                          <span>«___»___________ 2022 г.</span>
                          <span>__________подпись</span>
                      </div>
                      <div className={'flex justify-between mt-2'}>
                          <div className={'flex flex-col gap-0 items-center'}>
                              <span>Отозваны документы от участия в конкурсе</span>
                              <span className={'text-x2s'}>(при условии его сдачи)</span>
                          </div>
                          <span>«___»___________ 2022 г.</span>
                          <span>__________подпись</span>
                      </div>
                  </div>
              </div>
              <div className={'p-2'}>
                  <button className={'border border-black w-full flex justify-center items-center rounded pt-1 pb-1 '}>Подать заявление</button>
              </div>
          </form>
      </div>
    </div>
  )
}
