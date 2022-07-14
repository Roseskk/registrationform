import Head from "next/head";
import Image from "next/image";


function Student({students}) {
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
    return(
        <div className={''}>
            {
                students.map((stud,idx)=>{
                    return(
                        <div key={idx}>
                            <Head>
                                <title>B&D FORM</title>
                                <meta name="description" content="Powered by B&D" />
                            </Head>
                            <div className={'w-a4 h-a4 mx-auto p-3 '}>
                                <div className={'w-full flex items-center justify-between'}>
                                    <table className="w-1/3 h-12 border border-black text-center">
                                        <thead className="border-b border-b-black">
                                        <tr>
                                            <th scope="col" className="text-x1s font-medium text-gray-900 border-r border-r-black">
                                                регистрационный №
                                            </th>
                                            <th scope="col" className="text-x1s font-medium text-gray-900 border-r border-r-black">
                                                дата регистрации
                                            </th>
                                            <th scope="col" className="text-x1s font-medium text-gray-900  border-r border-r-black">
                                                техн. секретарь ПК
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="border-b border-b-black">
                                            <td className="text-sm text-gray-900 font-light px-3 py-2 whitespace-nowrap border-r border-r-black">
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-3 py-2 whitespace-nowrap border-r border-r-black">
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
                                <div className={'flex flex-col gap-2 mt-2'}>
                                    <div className={'flex-wrap flex'}>
                                        <div className={'w-4/6 flex flex-col gap-1 items-center'}>
                                            <div className={'w-full text-sm flex '}>
                                                <label className={'w-1/6 font-bold'}>Фамилия</label>
                                                <input name={'middleName'} readOnly={true}   value={stud.middleName}     className={'w-4/6 border uppercase'} type={"text"} />
                                            </div>
                                            <div className={'w-full text-sm flex '}>
                                                <label className={'w-1/6 font-bold'}>Имя</label>
                                                <input name={'name'}  value={stud.name}  readOnly={true}    className={'w-4/6 border uppercase'} type={"text"} />
                                            </div>
                                            <div className={'w-full text-sm flex '}>
                                                <label className={'w-1/6 font-bold'}>Отчество</label>
                                                <input name={'thirdName'}   value={stud.thirdName} readOnly={true}     className={'w-4/6 border uppercase'} type={"text"} />
                                            </div>
                                        </div>
                                        <div className={'w-2/6'}>
                                            <div className={'flex justify-between items-center text-sm'}>
                                                <h3>Пол</h3>
                                                <lable className={'flex item gap-2'}>
                                                    <input  name={'gender'}  checked={stud.gender === 'мужской'} readOnly={true}     value={'мужской'} type={'radio'} />
                                                    мужской
                                                </lable>
                                                <lable className={'flex item gap-2'}>
                                                    <input  name={'gender'} checked={stud.gender === 'женский' } readOnly={true} value={'женский'} type={'radio'} />
                                                    женский
                                                </lable>
                                            </div>
                                            <div className={'flex mt-2 items-center gap-2'}>
                                                <h2 className={'text-sm font-bold'}>СНИЛС</h2>
                                                <div className={'w-full border border-black'}>
                                                    <input   name={'snils'} value={stud.snils[0] + stud.snils[1] + stud.snils[2] + '-' + stud.snils[3] + stud.snils[4] + stud.snils[5] + '-' + stud.snils[6] + stud.snils[7] + stud.snils[8] + ' ' + stud.snils[9] + stud.snils[10]  } className={' border-none'} readOnly={true} type={'text'}/>
                                                </div>
                                            </div>
                                            <div className={'flex mt-2  text-xs gap-2'}>
                                                <h2>Дата рождения</h2>
                                                <input value={new Date(stud.birthday).toLocaleDateString('ru')} readOnly={true}   />
                                            </div>
                                        </div>
                                        <div className={'flex flex-col text-sm w-full'}>
                                            <div className={'flex gap-6'}>
                                                <h2 className={'font-bold'}>Документ, удостоверящий личность</h2>
                                                <input name={'name'}   value={stud.passportName} readOnly={true} placeholder={'Паспорт'} className={'border'} type={"text"}/>
                                            </div>
                                            <div className={'w-full mt-2 flex items-center ml-10 '}>
                                                <div className={'flex gap-2'}>
                                                    <h3>серия</h3>
                                                    <input name={'seria'}   value={stud.seria} readOnly={true} className={'border'} type={'number'}/>
                                                    <h3>№</h3>
                                                    <input name={'nomer'}   value={stud.nomer} readOnly={true} className={'border'} type={"number"}/>
                                                </div>
                                                <div className={'flex-wrap flex gap-2 ml-20'}>
                                                    <h3>когда выдан</h3>
                                                    <input value={new Date(stud.passportDate).toLocaleDateString('ru')} readOnly={true}   />
                                                </div>
                                            </div>
                                            <div className={'flex mt-2 '}>
                                                <label className={'w-s'}>кем выдан</label>
                                                <div className={'flex flex-col gap-2 w-full'}>
                                                    <textarea name={'kemvidan'}   value={stud.kemvidan} readOnly={true} className={'w-full border border-black'} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={'w-full flex flex-col mt-2'}>
                                            <div className={'flex items-center gap-2'}>
                                                <h2 className={'text-xs'}>Гражданство</h2>
                                                <input name={'grajdanstvo'}  value={stud.grajdanstvo} readOnly={true} className={'border'} type={"text"}/>
                                                <h2 className={'text-sm'}>Иные сведения о гражданстве</h2>
                                                <input name={'inie'}   value={stud.inie} className={'border'} readOnly={true} type={"text"}/>
                                            </div>
                                        </div>
                                        <div className={'w-full ml-24 mt-2 flex flex-col gap-1'}>
                                            <div className={'flex w-full text-xs items-center'}>
                                                <h3 className={'w-1/5'}>страна</h3>
                                                <input name={'country'}   value={stud.country} readOnly={true} className={'w-4/5 p-1'} type={"text"}/>
                                            </div>
                                            <div className={'flex w-full text-xs items-center'}>
                                                <h3 className={'w-1/5'}>республика / область</h3>
                                                <input name={'resp'}   value={stud.resp} readOnly={true} className={'w-4/5 p-1'} type={"text"}/>
                                            </div>
                                            <div className={'flex w-full text-xs items-center'}>
                                                <h3 className={'w-1/5'}>район</h3>
                                                <input name={'rajon'}   value={stud.rajon} readOnly={true} className={'w-4/5 p-1'} type={"text"}/>
                                            </div>
                                            <div className={'flex w-full text-xs items-center'}>
                                                <h3 className={'w-1/5'}>город/нас.пункт/индекс</h3>
                                                <input name={'city'}   value={stud.city} readOnly={true} className={'w-4/5 p-1'} type={"text"}/>
                                            </div>
                                            <div className={'flex w-full text-xs items-center'}>
                                                <h3 className={'w-1/5'}>улица</h3>
                                                <input name={'street'}   value={stud.street} readOnly={true} className={'w-4/5 p-1'} type={"text"}/>
                                            </div>

                                            <div className={'flex w-full text-xs items-center'}>
                                                <div className={'flex gap-20 items-center'}>
                                                    <h3 className={'w-1/5'}>дом</h3>
                                                    <input name={'house'}   value={stud.house} readOnly={true} className={'w-1/5 '} type={"text"}/>
                                                </div>
                                                <div className={'flex gap-1 items-center'}>
                                                    <h3 className={'w-2/5'}>корпус</h3>
                                                    <input name={'corpus'}   value={stud.corpus} readOnly={true} className={'w-1/5 '} type={"text"}/>
                                                </div>
                                                <div className={'flex gap-1 items-center'}>
                                                    <h3 className={'w-2/5'}>квартира</h3>
                                                    <input name={'kv'}   value={stud.kv} readOnly={true} className={'w-1/5 '} type={"text"}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'flex w-full text-xs gap-5 mt-2'}>
                                            <h2 className={''}>Телефон</h2>
                                            <input name={'phone'}  value={stud.phone[0]+ '(' + stud.phone[1] + stud.phone[2] + stud.phone[3] + ')' + '-' + stud.phone[4] + stud.phone[5] + stud.phone[6] + '-' + stud.phone[7] + stud.phone[8] + '-' + stud.phone[9] + stud.phone[10]  } className={'w-2/6'} readOnly={true} type={"text"} />
                                            <h2 className={''}>E-mail</h2>
                                            <input name={'email'}  value={stud.email} className={'w-2/6'} readOnly={true} type={"email"}/>
                                        </div>
                                        <div className={'flex items-center justify-center text-xs w-full mt-4'}>
                                            <p className={'text-center'}><strong>Прошу допустить меня</strong> к участию в конкурсе на зачисление и к вступительным испытаниям<br/>
                                                по направлению подготовки <strong>
                                                    <select name={'course'} className={'border w-fit text-center'}   defaultValue={stud.course}   >
                                                        <option  value={'ДИЗАЙН'}>ДИЗАЙН</option>
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
                                                            <input name={'level'} readOnly={true}  checked={stud.level === 'БАКАЛАВРИАТ'} value={'БАКАЛАВРИАТ'} type={"radio"}/>
                                                        </label>
                                                    </th>
                                                    <th scope="col" className="text-xs font-bold  text-gray-900  border-r">
                                                        <label className={'flex  justify-center items-center  gap-2 text-xs'}>
                                                            {
                                                                stud.course === 'МЕНЕДЖМЕНТ' || stud.course === 'РЕКЛАМА И СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ'
                                                                    ? null
                                                                    : <>
                                                                        МАГИСТРАТУРА
                                                                        <input name={'level'} readOnly={true}  checked={stud.level === 'МАГИСТРАТУРА'}  value={'МАГИСТРАТУРА'} type={"radio"}/>
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
                                                            stud.course === 'ДИЗАЙН'
                                                                ?
                                                                stud.level === 'МАГИСТРАТУРА'
                                                                    ? null
                                                                    : <label className={'flex  justify-center items-center gap-2  text-xs'}>очная<input name={'studyTime'}  readOnly={true}  checked={stud.studyTime === 'очная'} value={'очная'}  type={"radio"}/></label>

                                                                :null
                                                        }
                                                        {
                                                            stud.course === 'МЕНЕДЖМЕНТ'
                                                                ?  <label className={'flex  justify-center items-center gap-2  text-xs'}>очная<input name={'studyTime'} readOnly={true}   checked={stud.studyTime === 'очная'} value={'очная'}  type={"radio"}/></label>
                                                                : null
                                                        }
                                                        {
                                                            stud.course === 'РЕКЛАМА И СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ'
                                                                ? <>
                                                                    <label className={'flex  justify-center items-center gap-2  text-xs'}>очная<input name={'studyTime'}  readOnly={true}  checked={stud.studyTime === 'очная'} value={'очная'}  type={"radio"}/></label>
                                                                    <label className={'flex  justify-center items-center gap-2  text-xs'}>очно-заочная<input name={'studyTime'} readOnly={true}  checked={stud.studyTime === 'очно-заочная'} value={'очно-заочная'}  type={"radio"}/></label>
                                                                </>
                                                                : null
                                                        }
                                                    </td>
                                                    <td className="text-xs font-bold text-gray-900 font-light px-3 py-2 whitespace-nowrap">
                                                        {
                                                            stud.course === 'ДИЗАЙН' ?
                                                                stud.level === 'БАКАЛАВРИАТ'
                                                                    ?  null
                                                                    :  <label className={'flex  justify-center items-center gap-2  text-xs'}>очно-заочная<input name={'studyTime'} readOnly={true}   checked={stud.studyTime  === 'очно-заочная'} value={'очно-заочная'}  type={"radio"}/></label>
                                                                : null
                                                        }
                                                        {
                                                            stud.course === 'МЕНЕДЖМЕНТ'
                                                                ? <>
                                                                    <label className={'flex  justify-center items-center gap-2  text-xs'}>очно-заочная<input name={'studyTime'} readOnly={true}   checked={stud.studyTime === 'очно-заочная'} value={'очно-заочная'}  type={"radio"}/></label>
                                                                </>
                                                                : null
                                                        }
                                                        {
                                                            stud.course === 'РЕКЛАМА И СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ'
                                                                ? <>
                                                                    <label className={'flex  justify-center items-center gap-2  text-xs'}>заочная<input name={'studyTime'} readOnly={true} checked={stud.studyTime === 'заочная'} value={'заочная'}  type={"radio"}/></label>
                                                                </>
                                                                : null
                                                        }
                                                    </td>
                                                </tr>
                                                {
                                                    stud.level === 'МАГИСТРАТУРА'
                                                        ? null
                                                        : <tr className="border-b  ">
                                                            <td className="text-xs text-left w-full  font-bold text-gray-900 font-light px-3 py-2 whitespace-nowrap gap-1 flex flex-col  ">
                                                                {
                                                                    stud.course === 'ДИЗАЙН' ? <span className={'text-xls font-bold'}>Направление подготовки: {design.way} бакалавриат<br/></span>  : null
                                                                }
                                                                {
                                                                    stud.course === 'РЕКЛАМА И СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ' ? <span className={'text-xls font-bold'}>Направление подготовки: {reklama.way} бакалавриат<br/></span>  : null
                                                                }
                                                                {
                                                                    stud.course === 'МЕНЕДЖМЕНТ' ? <span className={'text-xls font-bold'}>Направление подготовки: {management.way} бакалавриат<br/></span> : null
                                                                }
                                                                <span>Направленность (профиль):
                                                                    {
                                                                        stud.course === 'ДИЗАЙН'
                                                                            ? <select name={'wayBC'}  defaultValue={stud.wayBC}   className={'w-full text-center border rounded'}>
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
                                                                        stud.course === 'МЕНЕДЖМЕНТ'
                                                                            ? <select name={'wayBC'} defaultValue={stud.wayBC}  className={'w-full text-center border rounded'}>
                                                                                <option value={'1'}>Выберете направление</option>
                                                                                <option value={'Маркетинг и реклама'}>Маркетинг и реклама</option>
                                                                                <option value={'Бренд-менеджмент'}>Бренд-менеджмент</option>
                                                                            </select>
                                                                            : null
                                                                    }
                                                                    {
                                                                        stud.course === 'РЕКЛАМА И СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ'
                                                                            ? <select name={'wayBC'}  defaultValue={stud.wayBC}   className={'w-full text-center border rounded'}>
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
                                                    stud.level === 'БАКАЛАВРИАТ'
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
                                                stud.course === 'ДИЗАЙН'
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
                                                stud.course === 'МЕНЕДЖМЕНТ'
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
                                                stud.course === 'РЕКЛАМА И СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ'
                                                    ? reklama.subject.map((subject,idx)=>{
                                                        return(
                                                            <div key={idx} className={'text-xs mt-2 w-3/12 '}>
                                                                <span className={'w-full'}>{subject.name}</span>
                                                            </div>
                                                        )
                                                    })
                                                    : null
                                            }
                                            {
                                                stud.course === 'ДИЗАЙН'
                                                ? <>
                                                        <div className={'absolute  top-10 left-36 text-xs'}>
                                                            <label className={'flex gap-2 mt-2 items-center '}><span className={'w-9/12'}>Год сдачи</span>
                                                                <input value={new Date(stud.godSdachi1).getFullYear()} readOnly={true}   />
                                                            </label>
                                                            <label className={'flex items-center mt-1'}><span className={'w-9/12'}>Год сдачи</span>
                                                                <input value={new Date(stud.godSdachi2).getFullYear()} readOnly={true}   />
                                                            </label>
                                                        </div>
                                                </>
                                                :    <>
                                                        <div className={'absolute  top-10 left-36 text-xs'}>
                                                            <label className={'flex gap-2 mt-2 items-center '}><span className={'w-9/12'}>Год сдачи</span>
                                                                <input value={new Date(stud.godSdachi1).getFullYear()} readOnly={true}   />
                                                            </label>
                                                            <label className={'flex items-center mt-1'}><span className={'w-9/12'}>Год сдачи</span>
                                                                <input value={new Date(stud.godSdachi2).getFullYear()} readOnly={true}   />
                                                            </label>
                                                            <label className={'flex items-center mt-1'}><span className={'w-9/12'}>Год сдачи</span>
                                                                <input value={new Date(stud.godSdachi3).getFullYear()} readOnly={true}   />
                                                            </label>
                                                        </div>
                                                    </>
                                            }
                                            {
                                                stud.course === 'ДИЗАЙН'
                                                ?  <div className={'absolute w-2/12 top-10 right-0 text-xs'}>
                                                        <input className={'p-0 text-center h-5 border-l-0 border-t-0 border-r-0'} name={'firstExem'}  readOnly={true}   value={stud.firstExem} type={"number"}/>
                                                        <input className={'p-0 text-center h-5 border-l-0 border-t-0 border-r-0 mt-1'} name={'secondExem'} readOnly={true}    value={stud.secondExem} type={"number"}/>
                                                    </div>
                                                :  <div className={'absolute w-2/12 top-10 right-0 text-xs'}>
                                                        <input className={'p-0 text-center h-5 border-l-0 border-t-0 border-r-0'} name={'firstExem'}  readOnly={true}   value={stud.firstExem} type={"number"}/>
                                                        <input className={'p-0 text-center h-5 border-l-0 border-t-0 border-r-0 mt-1'} name={'secondExem'} readOnly={true}    value={stud.secondExem} type={"number"}/>
                                                        <input className={'p-0 text-center h-5 border-l-0 border-t-0 border-r-0 mt-1'} name={'thirdExem'} readOnly={true}   value={stud.thirdExem} type={"number"}/>
                                                    </div>
                                            }
                                        </div>


                                        <div className={'flex mt-10 flex-col w-full gap-1'}>
                                            <span className={'font-bold text-xs'}>Прошу засчитать в качестве результатов вступительных экзаменов результаты олимпиады:</span>
                                            <div className={'w-full flex text-xs items-center '}>
                                                <div className={'w-1/6 border border-black text-center'}><span>Предмет</span></div>
                                                <div className={'w-5/6 border border-black text-center'}><span>Наименование (номер) олимпиады и реквизиты документа, подтверждающего результаты</span></div>
                                            </div>
                                            <div className={'w-full flex text-xs items-center '}>
                                                <div className={'w-1/6 border border-black text-center'}><input name={'firstSubject'} readOnly={true}  value={stud.firstSubject} className={'w-full border-none'} type={'text'}/> </div>
                                                <div className={'w-5/6 border border-black text-center '}><input name={'firstInfo'} readOnly={true} value={stud.firstInfo} className={'w-full border-none'}/></div>
                                            </div>
                                            <div className={'w-full flex text-xs items-center '}>
                                                <div className={'w-1/6 border border-black text-center'}><input name={'secondSubject'} readOnly={true}  value={stud.secondSubject} className={'w-full border-none'} type={'text'}/> </div>
                                                <div className={'w-5/6 border border-black text-center '}><input name={'secondInfo'} readOnly={true}  value={stud.secondInfo} className={'w-full border-none'}/></div>
                                            </div>
                                            <div className={'w-full flex text-xs items-center '}>
                                                <div className={'w-1/6 border border-black text-center'}><input name={'thirdSubject'} readOnly={true}  value={stud.thirdSubject}  className={'w-full border-none'} type={'text'}/> </div>
                                                <div className={'w-5/6 border border-black text-center '}><input name={'thirdInfo'} readOnly={true}  value={stud.thirdInfo} className={'w-full border-none'}/></div>
                                            </div>
                                        </div>

                                        <div className={'w-full flex flex-col gap-1 text-xs'}>
                                            <span className={'font-bold'}>* Имею право на поступление по результатам вступительных испытаний в форме, установленной вузом (при отсутствии результатов ЕГЭ):</span>
                                            <div className={'w-full flex'}>
                                                <span className={'font-bold w-6/12'}>Предметы</span>
                                                <div className={'w-6/12'}>
                                                    <input name={'withoutEXEM1'}  readOnly={true}  value={stud.withoutEXEM1} className={'w-1/2'} type={'text'}/>
                                                    <input name={'withoutEXEM2'}  readOnly={true}  value={stud.withoutEXEM2} className={'w-1/2'} type={'text'}/>
                                                </div>
                                            </div>
                                            <div className={'flex gap-1'}>
                                                <span className={'font-bold'}>Дополнительное испытание творческой и (или) профессиональной направленности</span>
                                                <input name={'professionalWay'} readOnly={true}   checked={stud.professionalWay} type={"checkbox"}/>
                                            </div>
                                            <div className={'flex gap-1'}>
                                                <span className={'font-bold'}>Собеседование с просмотром</span>
                                                <input name={'interview'} readOnly={true}   checked={stud.interview}  type={"checkbox"}/>
                                            </div>
                                            <div className={'flex gap-5'}>
                                                <span className={''}>язык вступительных испытаний</span>
                                                <span className={'font-extrabold'}>РУССКИЙ</span>
                                            </div>
                                            <div className={'flex flex-col'}>
                                                <span className={'font-bold'}>место сдачи вступительных испытаний с использованием дистанционных технологий</span>
                                                <input name={'placeOfExem'} readOnly={true}   value={stud.placeOfExem} className={'w-full'} type={"text"}/>
                                            </div>
                                        </div>


                                        <div className={'w-full flex flex-col text-xs mt-6'}>
                                            <div className={'flex items-center'}>
                                                <span className={'font-bold'}>Имею особое право на поступление в вуз</span>
                                                <div className={'flex gap-5 items-center ml-36'}>
                                                    <label className={'flex items-center'}>
                                                        <input name={'uniquePerson'} readOnly={true}  checked={stud.uniquePerson === 'да'} value={'да'} className={'p-2'} type={'radio'}/>
                                                        ДА
                                                    </label>
                                                    <label className={'flex items-center'}>
                                                        <input name={'uniquePerson'} readOnly={true}   checked={stud.uniquePerson === 'нет'} value={'нет'} className={'p-2'} type={'radio'}/>
                                                        НЕТ
                                                    </label>
                                                </div>
                                            </div>
                                            {
                                                stud.uniquePerson === 'да'
                                                ? <>
                                                        <ul className={'flex flex-col text-xs'}>
                                                            <li className={'flex gap-1 items-center'}>
                                                                <input name={'categoryInv'} readOnly={true}   checked={stud.categoryInv === 'сирота'} value={'сирота'}  type={"radio"}/>
                                                                <span>– как ребенок-сирота или как ребенок, оставшийся без попечения родителей</span>
                                                            </li>
                                                            <li className={'flex gap-1 items-center'}>
                                                                <input name={'categoryInv'} readOnly={true}   checked={stud.categoryInv === 'инвалид'} value={'инвалид'}  type={"radio"} />
                                                                <span>– как ребенок-инвалид, инвалид I или II группы, инвалид с детства</span>
                                                            </li>
                                                            <li className={'flex gap-1 items-center'}>
                                                                <input name={'categoryInv'} readOnly={true}   checked={stud.categoryInv === 'иная категория'} value={'иная категория'}  type={"radio"} />
                                                                <span>– иная категория</span>
                                                            </li>
                                                        </ul>
                                                        <div className={'w-full flex items-center gap-1'}>
                                                            <span className={'w-2/6'}>если ДА, указать основание</span>
                                                            <input name={'uniquePersonInfo'} readOnly={true}   value={stud.uniquePersonInfo} className={'w-4/6'} type={"text"}/>
                                                        </div>
                                                </>
                                                    : null
                                            }
                                        </div>

                                        <div className={'w-full text-xs flex flex-col mt-1'}>
                                            <div className={'flex gap-8'}>
                                                <span className={'font-bold'}>Нуждаюсь в необходимости создания специальных условий</span>
                                                <div className={'flex gap-2 items-center'}>
                                                    <lable className={'flex items-center gap-1'}>
                                                        <input name={'specialTest'} readOnly={true}   checked={stud.specialTest === 'да'} value={'да'} type={"radio"}/>
                                                        ДА
                                                    </lable>
                                                    <lable className={'flex items-center gap-1'}>
                                                        <input name={'specialTest'} readOnly={true}   checked={stud.specialTest === 'нет'} value={'нет'} type={"radio"}/>
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
                                                    <input name={'specialTestInfo'}  readOnly={true}   value={stud.specialTestInfo} className={'w-full'} type={'text'}/>
                                                </div>
                                            </div>
                                            <div className={'flex  w-full flex-wrap mt-1'}>
                                                <span className={'w-4/12'}>перечень вступительных испытаний</span>
                                                <div className={'w-8/12 flex flex-wrap'}>
                                                    <input name={'passTest1'}  readOnly={true}  value={stud.passTest1} className={'w-1/3'} type={"text"} />
                                                    <input name={'passTest2'} readOnly={true}   value={stud.passTest2} className={'w-1/3'} type={"text"} />
                                                    <input name={'passTest3'} readOnly={true}   value={stud.passTest3} className={'w-1/3'} type={"text"} />
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
                                                        <input name={'uniqueUniversityPass'} readOnly={true}   checked={stud.uniqueUniversityPass === 'да'} value={'да'}  type={"radio"}/>
                                                        ДА
                                                    </label>
                                                    <label className={'flex items-center gap-1'}>
                                                        <input name={'uniqueUniversityPass'} readOnly={true}   checked={stud.uniqueUniversityPass === 'нет'} value={'нет'}  type={"radio"}/>
                                                        Нет
                                                    </label>
                                                </div>
                                            </div>
                                            <div className={'flex w-full'}>
                                                <div className={'w-2/6'}>
                                                    <span>если ДА, указать основание</span>
                                                </div>
                                                <div className={'w-4/6'}>
                                                    <input name={'uniqueUniversityPassInfo'} readOnly={true}   value={stud.uniqueUniversityPassInfo}  className={'w-full'} type={"text"}/>
                                                </div>
                                            </div>

                                            <div className={'w-full flex gap-10'}>
                          <span className={'font-bold'}>
                              Имею индивидуальные достижения
                          </span>
                                                <div>

                                                </div>
                                                <div className={'flex gap-2 mt-1'}>
                                                    <label className={'flex items-center gap-1'}>
                                                        <input name={'uniquePersonAchievements'} readOnly={true}   checked={stud.uniqueUniversityAchievements === 'да'} value={'да'}  type={"radio"}/>
                                                        ДА
                                                    </label>
                                                    <label className={'flex items-center gap-1'}>
                                                        <input name={'uniquePersonAchievements'} readOnly={true}  checked={stud.uniqueUniversityAchievements === 'нет'} value={'нет'}  type={"radio"}/>
                                                        Нет
                                                    </label>

                                                </div>
                                            </div>
                                            <div className={'flex w-full mt-1'}>
                                                <span className={'w-2/6'}>если ДА, указать сведения о них</span>
                                                <div className={'flex flex-col w-4/6 gap-1'}>
                                                    <label className={'flex gap-1'}>
                                                        Диплом/Аттестат с отличием
                                                        <input name={'uniquePersonAchievements1'} defaultChecked={stud.uniqueUniversityAchievements1}  className={''} type={"checkbox"}/>
                                                    </label>
                                                    <label className={'flex gap-1'}>
                                                        Знак ГТО
                                                        <input name={'uniquePersonAchievements2'}  defaultChecked={stud.uniqueUniversityAchievements2}   className={''} type={"checkbox"}/>
                                                    </label>
                                                    <label className={'flex gap-1'}>
                                                        Волонтерская деятельность
                                                        <input name={'uniquePersonAchievements3'} defaultChecked={stud.uniqueUniversityAchievements3}   className={''} type={"checkbox"}/>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={'flex w-full flex-col gap-2 text-xs'}>
                                            <div  className={'flex'}>
                          <span className={'font-bold'}>Сведения о том, что поступающий является лицом, признанным гражданином, или лицом, указанным в части 3.1 ст.5 или ст.6 Федерального закона No 84 -ФЗ
                          </span>
                                                <lable className={'font-bold flex items-center gap-1'}>
                                                    <input name={'zakon'} readOnly={true}  checked={stud.zakon}  type={"checkbox"}/>
                                                    ДА
                                                </lable>
                                            </div>
                                            <div className={'w-full flex flex-col'}>
                                                <input name={'oldStudyName'} readOnly={true}  value={stud.oldStudyName} className={'placeholder:text-black placeholder:font-bold pt-1 pb-1'} placeholder={'Наименование учебного заведения:'} type={"text"}/>
                                                <div className={'flex gap-3 mt-1'}>
                                                    <span className={'font-bold'}>Окончил(а) в </span>
                                                    <input name={'oldYear'} readOnly={true}  value={stud.oldYear} type={"number"}/>
                                                    <span className={'font-normal'}>году</span>
                                                </div>
                                            </div>
                                            <div className={'flex flex-col w-full'}>
                                                <div className={'flex w-full justify-between items-center '}>
                                                    <span><strong>Документ об образовании:</strong> серия № </span>
                                                    <input name={'diplomNumber'} readOnly={true}  value={stud.diplomNumber} className={'w-3/12'} type={"text"}/>
                                                    <span>выдан</span>
                                                    <div className={'w-3/12'}>
                                                        <input value={new Date(stud.diplomDate).toLocaleDateString('ru')} readOnly={true}   />
                                                    </div>
                                                </div>
                                                <div className={'flex flex-col w-full mt-1 gap-1'}>
                                                    <label className={'flex items-center gap-1'}>
                                                        <input name={'studyDoc'} readOnly={true}  checked={stud.studyDoc === 'среднее'} value={'среднее'} type={"radio"}/>
                                                        аттестат о среднем общем образовании Российской Федерации
                                                    </label>
                                                    <label className={'flex items-center gap-1'}>
                                                        <input name={'studyDoc'} readOnly={true}  checked={stud.studyDoc === 'про'} value={'про'} type={"radio"}/>
                                                        диплом о среднем профессиональном образовании Российской Федерации
                                                    </label>
                                                    <label className={'flex items-center gap-1'}>
                                                        <input name={'studyDoc'} readOnly={true}  checked={stud.studyDoc === 'высшее'} value={'высшее'} type={"radio"}/>
                                                        диплом о высшем образовании Российской Федерации
                                                    </label>
                                                    <label className={'flex items-center gap-1'}>
                                                        <input name={'studyDoc'} readOnly={true}  checked={stud.studyDoc === 'иностранец'} value={'иностранец'} type={"radio"}/>
                                                        документ об образовании иностранного государства
                                                    </label>
                                                    <label className={'flex items-center gap-1'}>
                                                        <input name={'studyDoc'} readOnly={true}  checked={stud.studyDoc === 'иной'} value={'иной'} type={"radio"}/>
                                                        иной документ об образовании
                                                    </label>

                                                    <label className={'flex items-center justify-between gap-1'}>
                                                        <span className={'font-bold'}>если иной, указать тип</span>
                                                        <input name={'studyDocInfo'} readOnly={true} value={stud.studyDocInfo} className={'w-9/12'} type={"text"}/>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className={'flex flex-col'}>
                                                <span className={'font-bold'}>Являюсь выпускником подготовительных курсов данного учебного заведения:</span>
                                                <div className={'flex gap-3 font-bold'}>
                                                    <label className={'flex items-center gap-1'}>
                                                        ДА
                                                        <input name={'isStudentCourses'} readOnly={true}  checked={stud.isStudentCourses === '8'} value={'8'} type={"radio"}/>
                                                        8 мес;
                                                    </label>
                                                    <label className={'flex items-center gap-1'}>
                                                        ДА
                                                        <input name={'isStudentCourses'} readOnly={true} checked={stud.isStudentCourses === '6'} value={'6'} type={"radio"}/>
                                                        6 мес;
                                                    </label>
                                                    <label className={'flex items-center gap-1'}>
                                                        ДА
                                                        <input name={'isStudentCourses'} readOnly={true} checked={stud.isStudentCourses === '4'} value={'4'} type={"radio"}/>
                                                        4 мес;
                                                    </label>
                                                    <label className={'flex items-center gap-1'}>
                                                        ДА
                                                        <input name={'isStudentCourses'} readOnly={true}  checked={stud.isStudentCourses === 'лето'} value={'лето'} type={"radio"}/>
                                                        летний курс
                                                    </label>
                                                    <label className={'flex items-center gap-1 ml-10'}>
                                                        НЕТ
                                                        <input name={'isStudentCourses'} readOnly={true}  checked={stud.isStudentCourses === 'нет'} value={'нет'} type={"radio"}/>
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
                                                                        <input name={'docBack'} readOnly={true}  checked={stud.docBack === 'лично'} value={'лично'} type={"radio"}/>
                                                                        Лично
                                                                    </label>
                                                                    <label className={'flex gap-2 font-bold'}>
                                                                        <input name={'docBack'} readOnly={true}   checked={stud.docBack === 'почта'} value={'почта'} type={"radio"}/>
                                                                        Почтой России
                                                                    </label>
                                                                    <label className={'flex gap-2 font-bold'}>
                                                                        <input name={'docBack'} readOnly={true}  checked={stud.docBack === 'доверенность'} value={'доверенность'} type={"radio"}/>
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
                                </div>
                                <div className={'flex flex-col  mt-20 w-full'}>

                                    <div className={'flex flex-col  justify-start'}>
                                        <h2 className={'font-bold text-center'}>СОГЛАСИЕ <br />
                                            на обработку персональных данных поступающего, обучающегося</h2>
                                        <div className={'p-0 m-0 text-xs font-normal w-full flex  items-center '}>
                                            Я,
                                            <div className={'w-full mt-1 '}>
                                                <div className={'w-full flex items-center justify-center border-b border-b-black'}>
                                                    <span className={' text-sm  '}>{stud.middleName + ' ' + stud.name + ' '+  stud.thirdName}</span>
                                                </div>
                                                <span className={'flex items-center justify-center'}>(фамилия, имя, отчество (при наличии) поступающего, обучающегося)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={'w-full flex flex-col text-xs mt-1'}>
                                        <span>Документ, удостоверяющий личность (или иной вид документа, серия, номер, дата выдачи, кем выдан):</span>
                                        <div className={'flex flex-wrap gap-2 w-full'}>
                                            <div className={'flex gap-2'}>
                                                <span>документ:</span>
                                                <span className={'underline'}>{stud.passportName}</span>
                                            </div>
                                            <div className={'flex gap-2'}>
                                                <span>серия:</span>
                                                <span className={'underline'}>{stud.seria}</span>
                                            </div>
                                            <div className={'flex gap-2'}>
                                                <span>номер:</span>
                                                <span className={'underline'}>{stud.nomer}</span>
                                            </div>
                                            <div className={'flex gap-2'}>
                                                <span>дата выдачи</span>
                                                <span className={'underline'}>{new Date(stud.passportDate).toLocaleDateString('ru')}</span>
                                            </div>
                                            <div className={'w-full flex flex-col'}>
                                                <div className={'flex relative w-full gap-2'}>
                                                    <span>выдан:</span>
                                                    <div className={'w-full border-b border-b-black '}>
                                                        <span className={' '}>{stud.kemvidan}</span>
                                                    </div>
                                                </div>
                                                <span className={'flex items-center justify-center'}>(наименование органа, выдавшего документ)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={'w-full flex flex-col text-xs'}>
                                        <div className={'w-full flex flex-col gap-1'}>
                                            <span className={''}>зарегистрированный (ая) по адресу :</span>
                                            <div className={' border-b border-b-black'}>
                                                <div className={'flex flex-wrap gap-2'}>
                                                    <span className={''}>{stud.country}</span>
                                                    <span className={''}>{stud.resp}</span>
                                                    <span className={''}>{stud.rajon}</span>
                                                    <strong>Город</strong>
                                                    <span className={''}>{stud.city}</span>
                                                    <strong>Улица</strong>
                                                    <span className={''}>{stud.street}</span>
                                                    <strong>Дом</strong>
                                                    <span className={''}>{stud.house}</span>
                                                    <strong>Кв.</strong>
                                                    <span className={''}>{stud.kv}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className={'w-full flex items-center justify-center text-xs mt-2'}>именуемый (ая) в дальнейшем Субъект, в соответствии с требованиями Федерального закона от 27.07.2006 No 152-ФЗ «О персональных данных» свободно, своей волей и в своем интересе даю добровольное согласие</p>

                                    <div className={'flex w-full flex-col mt-2 text-xs'}>
                                        <span className={'font-bold text-xs text-center'}>Автономной некоммерческой организации высшего образования <br /> «Институт бизнеса и дизайна», (далее – Институт)</span>
                                        <div className={'w-full border-b border-b-black'}>
                                            <span className={' flex items-center gap-2 justify-center text-xs text-center'}>зарегистрированному по адресу: <strong> 129010, Москва, Протопоповский пер., д.9, стр.1</strong></span>
                                        </div>
                                        <span>(наименование и адрес оператора, получающего согласие на обработку персональных данных)</span>
                                        <span>на обработку своих персональных данных на следующих условиях:</span>

                                        <p className={'flex flex-col items-center justify-center mt-2 '}>
                                            <span className={'indent-2 text-justify'}>1. Субъект дает согласие на обработку Институтом своих персональных данных, то есть совершение, в том числе, следующих действий: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, копирование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</span>
                                            <span className={'indent-2 text-justify'}>2. Институт обязуется использовать персональные данные Субъекта только с целью: защиты конституционных прав и законных интересов; обеспечения права на образование; создания благоприятных условий системы образования;
                                                обеспечения действующего в Институте уровня безопасности, в том числе действующего пропускного режима и контроля его соблюдения, осуществления видеонаблюдения и видеозаписи на территории и в помещениях Института; обеспечения информирования об образовательных, воспитательных и иных мероприятиях, выполняемых исследованиях, реализуемых проектах и их результатах на официальных сайтах Института, на информационных стендах, иных источниках информации; идентификации личности Субъекта; предоставления предусмотренных законодательством социальных гарантий и льгот; взаимодействия с федеральными органами власти (Министерство науки и высшего образования Российской Федерации, правоохранительные органы, налоговые органы, надзорные органы и др.); обеспечения функционирования информационных систем Института; предоставления персональных данных поступающих
                                                и обучающихся в банки для осуществления расчетов по операциям с использованием банковских карт; обеспечения возможности использования сервисов банковских и иных организаций для оплаты образовательных и иных услуг.
                                            </span>
                                            <span className={'indent-2 text-justify'}>
                                                3. Перечень персональных данных обучающегося (поступающего), обрабатываемых Институтом как с использованием автоматизированных средств обработки персональных
                                                данных поступающего и обучающегося, так и без использования средств автоматизации
                                            </span>
                                        </p>
                                    </div>

                                    <div className={'w-full flex text-xs'}>
                                        <div className={'w-1/2 ml-1 mt-3 '}>
                                            <p className={'text-justify'}>
                                                - Фамилия, имя, отчество;<br />
                                                - Год, месяц, день и место рождения, пол;<br />
                                                - Гражданство;<br />
                                                - Серия, номер документа, удостоверяющего личность, а также<br />
                                                информация об органе, выдавшем документ и дате выдачи;<br />
                                                - Семейное положение, данные, указанные в свидетельстве о<br />
                                                заключении брака;<br />
                                                - Адрес регистрации по месту жительства,<br />
                                                - фактическое место жительства, почтовый адрес, адрес<br />
                                                электронной почты, телефон;<br />
                                                - Номер страхового свидетельства (СНИЛС);<br />
                                                - Сведения об образовании, наличии специальных знаний или<br />
                                                подготовки: специальность, квалификация, наименование программы обучения, срок обучения, реквизиты документа об образовании;<br />
                                                - Результаты вступительных испытаний;<br />
                                                - Сведения об ученой степени и звании;<br />
                                                - Место и дата регистрации, вид на жительство, реквизиты<br />
                                                миграционной карты;<br />
                                                - Персональные биометрические (фотографические) изображения, в<br />
                                                том числе содержащееся в личном деле, учебной карточке студента,<br /> студенческом билете, зачетной книжки обучающегося и для<br /> обеспечения однократного и/или многократного прохода на<br /> охраняемую территорию Института (пропуск/допуск);<br />
                                                - Видеоизображения;<br />
                                                - Приказы, содержащиеся в личном деле;<br />
                                                - Сведения, содержащиеся в личном деле: основа обучения, форма<br />
                                                обучения, категория набора, год поступления, No зачетной книжки и иная указанная в ней информация;<br />
                                            </p>
                                        </div>
                                        <div className={'w-1/2 ml-5 mt-2 '}>
                                            <p className={'text-justify'}>
                                                - Номер свидетельства о постановке на налоговый учет, идентификационный номер налогоплательщика;<br />
                                                - Сведения, дающие право на получение дополнительных социальных гарантий и льгот в соответствии с законодательством РФ;<br />
                                                - Сведения о публикациях и участии в грантах (конкурсах);<br />
                                                - Сведения о иных видах доходов;<br />
                                                - Результаты и достижения в олимпиадах, соревнованиях,<br />
                                                конкурсах;<br />
                                                - Сведения, содержащиеся в конкурсном деле: основа<br />
                                                обучения, форма обучения;<br />
                                                - Сведения о состоянии здоровья, о заболеваниях,<br />
                                                затрудняющих (препятствующих) прохождение обучения;<br />
                                                - Сведения о постановке на военный учет и реквизиты<br />
                                                документов воинского учета;<br />
                                                - Сведения о совершенных правонарушениях;<br />
                                                - Банковские реквизиты;<br />
                                                - Направление подготовки; факультет, кафедра, группа;<br />
                                                - Содержание договора на обучение;<br />
                                                - Владение иностранными языками;<br />
                                                - Иные сведения, с которыми поступающий и (или)<br />
                                                обучающийся считает нужным ознакомить Институт, либо дополнительная информация необходимая Институту в связи с заявленными целями обработки персональных данных.<br />
                                            </p>
                                        </div>
                                    </div>

                                    <div className={'flex flex-col text-xs mt-2 text-justify'}>
                                        4. Субъект согласен на хранение Институтом копий документов, содержащих персональных данные, указанные в настоящем Согласии и прилагаемых к нему документах.
                                        <br />5. Субъект дает согласие на включение в общедоступные источники персональных данных (в соответствии с п. 1 ст. 8 ФЗ No152 от 27.07.2006 г.) следующих сведений: фамилия, имя, отчество; институт /факультет; группа; сведения об ученых степенях; сведения о результатах вступительных испытаний; результаты и достижения в олимпиадах, соревнованиях, конкурсах; результаты успеваемости обучения.
                                        <br />6. Субъект дает согласие на передачу персональных данных в следующие организации: государственные и муниципальные органы медицинские учреждения для организации Институтом медицинского обслуживания и медицинских осмотров; иные организации, связанные с Институтом договорными обязательствами. При этом цели и порядок передачи
                                        персональных данных должны соответствовать законодательству РФ о персональных данных.
                                        <br />7. Субъект дает согласие на трансграничную передачу персональных данных в соответствии с Федеральным законом «О
                                        персональных данных» от 27.07.2006 No 152-ФЗ.
                                        <br />8. Субъект персональных данных по письменному запросу имеет право на получение информации, касающейся обработки его персональных данных (в соответствии со ст. 14 ФЗ No152 от 27.06.2006 г.).
                                        <br />9. Обработка персональных данных прекращается при достижении целей обработки, истечении сроков хранения персональных данных.
                                        <br />10. Субъектперсональныхданныхнесетответственностьзадостоверностьпредставленныхсведений.
                                        <br />11. Настоящее согласие действует на период обучения субъекта, а также по истечению срока обучения в архивных целях на срок, предусмотренный законодательством РФ.
                                        <br />12. Субъект имеет право отозвать согласие на обработку персональных данных путем направления соответствующего заявления в адрес Института.
                                        <br />13. С Политикой в отношении обработки персональных данных в АНО ВО «Институт бизнеса и дизайна», Положением о защите, хранении, обработке и передаче персональных данных работников поступающих и обучающихся в АНО ВО «Институт бизнеса и дизайна», ознакомлен (а).
                                        <br />14. Контактныеданные:тел._______________________,e-mail:_____________________________
                                    </div>

                                    <div className={'flex justify-around text-justify text-xs mt-5'}>
                                        <span>«___» ____________ 20__ г.</span>
                                        <div className={'flex flex-col'}>
                                            <span>________________________/_______________________</span>
                                            <div className={'flex justify-around'}>
                                                <span>(подпись)</span>
                                                <span>(расшифровка)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={'flex flex-col items-center justify-center gap-3 text-xs mt-3'}>
                                        <span>СОГЛАСИЕ</span>
                                        <span>законного представителя на обработку персональных данных поступающего и обучающегося</span>
                                        <span>(ЗАПОЛНЯЕТСЯ ОДНИМ ИЗ РОДИТЕЛЕЙ (ИЛИ ИНЫМ ЗАКОННЫМ ПРЕДСТАВИТЕЛЕМ НЕСОВЕРШЕННОЛЕТНЕГО))</span>
                                    </div>

                                    <div className={'flex flex-col  text-xs'}>
                                        <div className={'flex items-center w-full'}>
                                            <span>Я, _________________________________________________________________________________________________________________</span>
                                        </div>
                                        <span className={'text-center'}>(фамилия, имя, отчество (при наличии) законного представителя)</span>
                                        <div className={'flex flex-col'}>
                                            <p className={'text-justify indent-2 leading-4'}>
                                                Документ, удостоверяющий личность (или иной вид документа, серия, номер, дата выдачи, кем выдан): паспорт/___________________: серия ____________, номер ___________________,
                                                дата выдачи________________, выдан___________________________________________________
                                                _____________________________________________ _________________________________
                                                _______________________________________________________________
                                            </p>
                                            <span>(наименование органа, выдавшего документ)</span>
                                            <span>_____________________________________________________________________________________________________________</span>
                                            <span>(наименование и реквизиты документа, удостоверяющие права законного представителя, в случае если законный представитель не является родителем)</span>
                                            <span>зарегистрированный (ая)по адресу_________________________________________________________________</span>
                                            <span className={'flex items-center justify-center'}>(указать адрес регистрации по месту жительства</span>
                                            <span className={''}>______________________________________________________________________________________________________________,</span>
                                            <span className={'flex items-center justify-center'}>и/или по месту пребывания (фактического проживания))</span>
                                            <span className={'mt-2'}>с настоящим согласием на обработку персональных данных ознакомлен(а), даю несовершеннолетнему ___________________________________________________________________________согласие на его подписание.</span>
                                            <span className={'mt-5'}>
                                                Контактные данные: тел. _______________________, e-mail: _____________________________
                                            </span>
                                            <div className={'flex justify-around text-justify text-xs mt-10'}>
                                                <span>«___» ____________ 20__ г.</span>
                                                <div className={'flex flex-col'}>
                                                    <span>________________________/_______________________</span>
                                                    <div className={'flex justify-around'}>
                                                        <span>(подпись)</span>
                                                        <span>(расшифровка)</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className={'flex w-full flex-col text-sm mt-96'}>

                                    <div className={'flex items-center justify-center'}>
                                        <Image src={'/shapka.png'}  layout={'fixed'} width={'1000px'} height={'200px'} objectFit={"cover"} />
                                    </div>

                                    <div className={'flex flex-col justify-end mt-2'}>
                                        <span className={' flex justify-end items-end'}>Председателю приемной комиссии</span>
                                        <span className={' flex justify-end items-end'}>Ректору АНО ВО «Институт бизнеса и дизайна»</span>
                                        <span className={' flex justify-end items-end'}>С.С. Юрову</span>
                                    </div>

                                    <div className={'flex items-center justify-center mt-5'}>
                                        <span className={'font-bold text-lg text-center'}>
                                            Заявление <br />
                                            о согласии  на зачисление
                                        </span>
                                    </div>

                                    <div>
                                        <div className={'flex flex-col  justify-start'}>
                                            <h2 className={'font-bold text-center'}>СОГЛАСИЕ <br />
                                                на обработку персональных данных поступающего, обучающегося</h2>
                                            <div className={'p-0 m-0 text-xs font-normal w-full flex  items-center '}>
                                                Я,
                                                <div className={'w-full mt-1 '}>
                                                    <div className={'w-full flex items-center justify-center border-b border-b-black'}>
                                                        <span className={' text-sm  '}>{stud.middleName + ' ' + stud.name + ' '+  stud.thirdName}</span>
                                                    </div>
                                                    <span className={'flex items-center justify-center'}>(Ф.И.О)</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={'w-full flex flex-col text-xs mt-1'}>
                                            <div className={'flex flex-wrap gap-2 w-full'}>
                                                <div className={'flex gap-2'}>
                                                    <span>документ:</span>
                                                    <span className={'underline'}>{stud.passportName}</span>
                                                </div>
                                                <div className={'flex gap-2'}>
                                                    <span>серия:</span>
                                                    <span className={'underline'}>{stud.seria}</span>
                                                </div>
                                                <div className={'flex gap-2'}>
                                                    <span>№</span>
                                                    <span className={'underline'}>{stud.nomer}</span>
                                                </div>

                                                <div className={'w-full flex flex-col'}>
                                                    <div className={'flex relative w-full gap-2'}>
                                                        <span>кем, когда выдан</span>
                                                        <div className={'w-3/4 border-b border-b-black '}>
                                                            <span className={''}>{stud.kemvidan + ' ' + new Date(stud.passportDate).toLocaleDateString('ru')}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={'w-full flex flex-col text-xs'}>
                                            <div className={'w-full flex flex-col gap-1'}>
                                                <span className={''}>зарегистрированный (ая) по адресу :</span>
                                                <div className={' border-b border-b-black'}>
                                                    <div className={'flex flex-wrap gap-2'}>
                                                        <span className={''}>{stud.country}</span>
                                                        <span className={''}>{stud.resp}</span>
                                                        <span className={''}>{stud.rajon}</span>
                                                        <strong>Город</strong>
                                                        <span className={''}>{stud.city}</span>
                                                        <strong>Улица</strong>
                                                        <span className={''}>{stud.street}</span>
                                                        <strong>Дом</strong>
                                                        <span className={''}>{stud.house}</span>
                                                        <strong>Кв.</strong>
                                                        <span className={''}>{stud.kv}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className={'text-sm mt-1 text-justify'}>даю своё согласие на зачисление в <strong>АНО ВО «Институт бизнеса и дизайна».</strong></span>
                                        </div>

                                        <div className={'w-full flex flex-col'}>
                                            <span><strong>Условия поступления:</strong></span>
                                            {
                                                stud.level === 'БАКАЛАВРИАТ'
                                                ? <div className={'flex gap-2 items-center'}>
                                                    <span>бакалавриат</span>
                                                    <span className={'w-4 h-4 bg-black rounded text-center text-white'}>&#10004;</span>
                                                  </div>
                                                :  <div className={'flex gap-2 items-center'}>
                                                        <span>магистратура</span>
                                                        <span className={'w-4 h-4 bg-black rounded text-center text-white'}>&#10004;</span>
                                                    </div>
                                            }
                                            <div className={'flex items-center gap-2'}>
                                                <span>направление подготовки</span>
                                                <div className={'w-3/4 border-b border-b-black text-center'}>
                                                    <span className={' font-bold '}>{stud.wayBC}</span>
                                                </div>
                                            </div>
                                            <span className={'text-center'}>(наименование образовательной программы)</span>

                                            <div className={'flex flex-col gap-1 mt-2'}>
                                                {
                                                    stud.studyTime === 'очная'
                                                    ? <div className={'flex gap-2'}>
                                                        <span>очная форма обучения</span>
                                                        <span className={'w-4 h-4 bg-black rounded text-center text-white'}>&#10004;</span>
                                                      </div>
                                                    : <div className={'flex gap-2'}>
                                                            <span>очно-заочная форма обучения</span>
                                                            <span className={'w-4 h-4 bg-black rounded text-center text-white'}>&#10004;</span>
                                                        </div>
                                                }
                                            </div>

                                            <div className={'flex flex-col relative'}>
                                                <span><strong>Основание приема:</strong></span>
                                                <p>на места по договорам об образовании на обучение по образовательным  программам высшего образования, заключаемым при приеме на обучение за счет средств физических и (или) юридических лиц в соответствии с  Правилами приема на 2022/2023 учебный год  в АНО ВО «Институт бизнеса и дизайна».
                                                    <span className={'absolute w-4 h-4 border border-black translate-y-0.5 translate-x-1 '}> </span>
                                                </p>
                                            </div>

                                            <div className={'flex justify-around mt-4'}>
                                                <span>«______»_____________ 2022 г.</span>
                                                <div className={'flex flex-col'}>
                                                    <span>_______________/_______________________________ </span>
                                                    <div className={'flex justify-around'}>
                                                        <span>подпись </span>
                                                        <span>(расшифровка подписи) </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={'flex flex-col mt-2  items-end'}>
                                                <span className={'text-sm font-bold'}>С условиями приема в АНО ВО «Институт бизнеса и дизайна» ознакомлен(а).                        </span>
                                                <span>______________________________________________________/_______________________</span>
                                                <span>подпись законного представителя (в случае несовершеннолетнего абитуриента) </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export const getStaticPaths = async () =>  {
    const response = await fetch(`http://172.16.10.5:8083/api/r/form/path`);
    const paths = await response.json();
    const path = paths.map((item)=>({
        params: { id: item.id.toString() }
    }));
    return{
        paths: [...path],
        fallback: false
    }
}

export const  getStaticProps = async (ctx) =>  {
    const response = await fetch(`http://172.16.10.5:8083/api/r/form/search/${ctx.params.id}`)
    const students = await response.json()
    return{
        props: {
            students
        }
    }
}

export default Student