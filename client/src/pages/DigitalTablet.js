import React, { useState } from 'react'

export const DigitalTablet = () => {
    //start test State data
    const [tempData, setTempData] = useState(0)
    const [state, setState] = useState(0)
    //setTempData([2, 3, 4, 5])
    console.log('State:', state)
    //end test State data


    //Summa
    let datas = {
        id: [1, 2, 3, 4, 5],
        user: ['Кузьмин Вячеслав', 'Измайлов Илья', 'Трошкин Тимур', 'Звонарев Альберт', 'Иванов Юрий'],
        score: [0, 0, 0, 0, 0]
    }
    //console.log('Datas is: ',datas)
    //console.log('id:', datas.id[0], 'user:', datas.user[0], 'score:', datas.score[0])
    
    //start Headers for Table
            let headers = []
                headers[0] = '№'
                headers[1] = 'ФИО'
            for (let index = 0; index <= 24; index++) {
                headers[index + 2] = 25 - index    
            }
                headers[27] = 'Сумма'
                headers[28] = 'Подпись стрелка'
            //console.log(headers) //For Debug
    //end Headers for Table

    //start checkboxes id for Table
           let idcheckboxes = []
           for (let index = 0; index <= 24; index++) {
            idcheckboxes[index] = 'id' + (25 -index)   
           }
           //console.log(idcheckboxes) //For Debu
    //end checkboxes id for Table

    //start Function counter chekboxes
            const count = (e) => {
            console.log(e.target.name, e.target.checked)
            if (e.target.checked) {
                                   
                                   setTempData( tempData + 1 ) 
                                   console.log(tempData)
                                   
                                  } else if (!e.target.checked) {
                                    
                                    setTempData(  tempData - 1 ) 
                                    console.log(tempData)
                                    
                                  }
            }
            
    //end Function counter chekboxes

    return (
<>

<h4>
    <p>Национальная федерация спортинга</p>
<p>Протокол соревнований</p>
«Спортинг (большой)»</h4>
<p>____________________________</p>
<p>СПОРТИВНО-СТРЕЛКОВЫЙ КОМПЛЕКС</p>
<p>ПЛОЩАДКА______ ГРУППА________ СЕРИЯ_____</p>

<table style={{border: "1px solid black"}}>
        <thead>
              <tr > {headers.map((head, i)=>(<th key={i} style={{border: "1px solid black"}}>{head}</th>))} </tr>     
        </thead>

        <tbody >
          <tr style={{border: "1px solid black"}}>
            <td style={{border: "1px solid black"}}>1</td>
            <td style={{border: "1px solid black"}}>Кузьмин Вячеслав</td>

            {idcheckboxes.map((id, i)=>(
                       <td key={i} style={{border: "1px solid black"}}>
                         <p>      
                            <label>
                                   <input 
                                     type="checkbox" 
                                     name={id}
                                     onChange={ count }
                                    />
                                   <span></span>
                            </label>
                          </p> 
                        </td>))}
            <td style={{border: "1px solid black"}}>{tempData}</td>
            <td style={{border: "1px solid black"}}>
                 <button onClick={ () => setState(state + 1) }>Подпись стрелка</button>
            </td>
          </tr>


          <tr style={{border: "1px solid black"}}>
            <td style={{border: "1px solid black"}}>2</td>
            <td style={{border: "1px solid black"}}>Измайлов Илья</td>
            
            {idcheckboxes.map((id, i)=>(
                       <td key={i} style={{border: "1px solid black"}}>
                         <p>      
                            <label>
                                   <input 
                                     type="checkbox" 
                                     name={id}
                                     onChange={count}
                                    />
                                   <span></span>
                            </label>
                          </p> 
                        </td>))}
            <td style={{border: "1px solid black"}}>Sum</td>
            <td style={{border: "1px solid black"}}>
                 <button>Подпись стрелка</button>
            </td>
          </tr>
          <tr style={{border: "1px solid black"}}>
            <td style={{border: "1px solid black"}}>3</td>
            <td style={{border: "1px solid black"}}>Трошкин Тимур</td>
            
            {idcheckboxes.map((id, i)=>(
                       <td key={i} style={{border: "1px solid black"}}>
                         <p>      
                            <label>
                                   <input 
                                     type="checkbox" 
                                     name={id}
                                     onChange={count}
                                    />
                                   <span></span>
                            </label>
                          </p> 
                        </td>))}
            <td style={{border: "1px solid black"}}>Sum</td>
            <td style={{border: "1px solid black"}}>
                 <button>Подпись стрелка</button>
            </td>
          </tr>
          <tr style={{border: "1px solid black"}}>
            <td style={{border: "1px solid black"}}>4</td>
            <td style={{border: "1px solid black"}}>Звонарев Альберт</td>
            
            {idcheckboxes.map((id, i)=>(
                       <td key={i} style={{border: "1px solid black"}}>
                         <p>      
                            <label>
                                   <input 
                                     type="checkbox" 
                                     name={id}
                                     onChange={count}
                                    />
                                   <span></span>
                            </label>
                          </p> 
                        </td>))}
            <td style={{border: "1px solid black"}}>Sum</td>
            <td style={{border: "1px solid black"}}>
                 <button>Подпись стрелка</button>
            </td>
          </tr>
          <tr style={{border: "1px solid black"}}>
            <td style={{border: "1px solid black"}}>5</td>
            <td style={{border: "1px solid black"}}>Иванов Юрий</td>
            
            {idcheckboxes.map((id, i)=>(
                       <td key={i} style={{border: "1px solid black"}}>
                         <p>      
                            <label>
                                   <input 
                                     type="checkbox" 
                                     name={id}
                                     onChange={count}
                                    />
                                   <span></span>
                            </label>
                          </p> 
                        </td>))}
            <td style={{border: "1px solid black"}}>Sum</td>
            <td style={{border: "1px solid black"}}>
                 <button>Подпись стрелка</button>
            </td>
          </tr>
        </tbody>
      </table>


      <p>
     <p> Начало стрельбы__________             Подтверждаю итоговый результат серии______________</p>

Подпись последнего стрелка группы
Пл. 1_____________________
Пл. 2_____________________
Пл. 3_____________________
Пл. 4_____________________
<p>Старший судья пл. 4 _______ </p>
      </p>

</>
   
        
    )

}



/*
<table style={{border: "1px solid black"}}>
        <thead>
          <tr style={{border: "1px solid black"}}>
              <th style={{border: "1px solid black"}}>№</th>
              <th style={{border: "1px solid black"}}>ФИО</th>
              <th style={{border: "1px solid black"}}>25</th>
              <th style={{border: "1px solid black"}}>24</th>
              <th style={{border: "1px solid black"}}>23</th>
              <th style={{border: "1px solid black"}}>22</th>
              <th style={{border: "1px solid black"}}>21</th>
              <th style={{border: "1px solid black"}}>20</th>
              <th style={{border: "1px solid black"}}>19</th>
              <th style={{border: "1px solid black"}}>18</th>
              <th style={{border: "1px solid black"}}>17</th>
              <th style={{border: "1px solid black"}}>16</th>
              <th style={{border: "1px solid black"}}>15</th>
              <th style={{border: "1px solid black"}}>14</th>
              <th style={{border: "1px solid black"}}>13</th>
              <th style={{border: "1px solid black"}}>12</th>
              <th style={{border: "1px solid black"}}>11</th>
              <th style={{border: "1px solid black"}}>10</th>
              <th style={{border: "1px solid black"}}>9</th>
              <th style={{border: "1px solid black"}}>8</th>
              <th style={{border: "1px solid black"}}>7</th>
              <th style={{border: "1px solid black"}}>6</th>
              <th style={{border: "1px solid black"}}>5</th>
              <th style={{border: "1px solid black"}}>4</th>
              <th style={{border: "1px solid black"}}>3</th>
              <th style={{border: "1px solid black"}}>2</th>
              <th style={{border: "1px solid black"}}>1</th>
              <th style={{border: "1px solid black"}}>Сумма</th>
              <th style={{border: "1px solid black"}}>Подпись стрелка</th>
          </tr>
        </thead>

        <tbody >
          <tr style={{border: "1px solid black"}}>
            <td style={{border: "1px solid black"}}>1</td>
            <td style={{border: "1px solid black"}}>Кузьмин Вячеслав</td>
            <td style={{border: "1px solid black"}}>
                <p>      
                    <label>
                        <input 
                        type="checkbox" 
                        name="id25"
                        onChange={count}
                        />
                       <span></span>
                   </label>
                </p>
            </td>
            <td style={{border: "1px solid black"}}>
                <p>      
                    <label>
                        <input type="checkbox"
                        name="id24"
                        onChange={count}
                        />
                       <span></span>
                   </label>
                </p>
            </td>
            <td style={{border: "1px solid black"}}>
                <p>      
                    <label>
                        <input type="checkbox"
                        name="id23"
                        onChange={count}
                        />
                       <span></span>
                   </label>
                </p>
            </td>
          </tr>
          <tr style={{border: "1px solid black"}}>
            <td style={{border: "1px solid black"}}>2</td>
            <td style={{border: "1px solid black"}}>Измайлов Илья</td>
            <td style={{border: "1px solid black"}}></td>
            <td style={{border: "1px solid black"}}></td>
          </tr>
          <tr style={{border: "1px solid black"}}>
            <td style={{border: "1px solid black"}}>3</td>
            <td style={{border: "1px solid black"}}>Трошкин Тимур</td>
            <td style={{border: "1px solid black"}}></td>
            <td style={{border: "1px solid black"}}></td>
          </tr>
          <tr style={{border: "1px solid black"}}>
            <td style={{border: "1px solid black"}}>4</td>
            <td style={{border: "1px solid black"}}>Звонарев Альберт</td>
            <td style={{border: "1px solid black"}}></td>
            <td style={{border: "1px solid black"}}></td>
          </tr>
          <tr style={{border: "1px solid black"}}>
            <td style={{border: "1px solid black"}}>5</td>
            <td style={{border: "1px solid black"}}>Иванов Юрий</td>
            <td style={{border: "1px solid black"}}></td>
            <td style={{border: "1px solid black"}}></td>
          </tr>
        </tbody>
      </table>


*/