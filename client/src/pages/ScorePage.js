import React, { useState } from 'react'

export const ScorePage = () => {
    //start data in
    const dates = {
        id: [1, 2, 3, 4, 5],
        personalNumber: [10, 82, 204, 179, 251],
        rank: ['кмс', 'мс', '2р', 'мсмк', '1р'],
        user: ['Кузьмин Вячеслав', 'Измайлов Илья', 'Трошкин Тимур', 'Звонарев Альберт', 'Иванов Юрий'],
        country: ['Россия', 'Россия', 'Россия', 'Россия', 'Россия'],
        city: ['Армавир', 'Самара', 'Якутск', 'Тольятти', 'Тюмень'],
        club: ['ФССККРА', 'Оренбургская ФПСС', 'НФС и СС РС(Я)', 'Тольятти-Спортинг', 'Стальной азарт'],
        plaingField:[25, 24, 25, 22, 25, 21, 20, 23, 24, 25, 22, 25, 21, 20, 23, 24, 25, 22, 25, 21, 20, 23],
        total: [193, 191, 190, 188, 186],
        restrike: [false, false, false, false, false],
        place: [1, 2, 3, 4, 5],
        norm: ['мс', 'мс', 'мс', 'мс', 'мс']
    }
    //end data in

    //start debug data for Table
    let users = []
    for (let index = 0; index <= 4; index++) {
        users[index] = [dates.id[index], dates.personalNumber[index], dates.rank[index], dates.user[index], dates.country[index],
                        dates.city[index], dates.club[index], 
                        dates.plaingField[index], dates.plaingField[index + 1], dates.plaingField[index + 2], dates.plaingField[index + 3],
                        dates.plaingField[index + 4], dates.plaingField[index + 5], dates.plaingField[index + 6], dates.plaingField[index + 7],
                       dates.total[index], dates.restrike[index], dates.place[index], dates.norm[index]
                       ]   
    }

    //end debug data

    //start Headers for Table
    const headers = ['№ п.п', '№ лич', 'Звание', 'Фамилия Имя', 'Страна', 'Город', 'Клуб', 
                      'пл.1', 'пл.2', 'пл.3', 'пл.4', 'пл.5', 'пл.6', 'пл.7', 'пл.8', 
                      'Сумма', 'Пере стрелка', 'Место', 'Вып. норма'
                    ]
    
//console.log(headers) //For Debug
//end Headers for Table

const [state, setState] = useState()

console.log(state)

    return(<>
        <h1>ScorePage</h1>

        <table style={{border: "1px solid black"}}>
        <thead>
              <tr > {headers.map((head, i)=>(<th key={i} style={{border: "1px solid black"}}>{head}</th>))} </tr>     
        </thead>

        <tbody>
         
          <tr style={{border: "1px solid black"}}>
          {users[0].map((head, i)=>(<td key={i} style={{border: "1px solid black"}} >{head}</td>))} 
          </tr>

          <tr style={{border: "1px solid black"}}>
          {users[1].map((head, i)=>(<td key={i} style={{border: "1px solid black"}} >{head}</td>))} 
          </tr>

          <tr style={{border: "1px solid black"}}>
          {users[2].map((head, i)=>(<td key={i} style={{border: "1px solid black"}} >{head}</td>))} 
          </tr>

          <tr style={{border: "1px solid black"}}>
          {users[3].map((head, i)=>(<td key={i} style={{border: "1px solid black"}} >{head}</td>))} 
          </tr>
          <tr style={{border: "1px solid black"}}>
          {users[4].map((head, i)=>(<td key={i} style={{border: "1px solid black"}} >{head}</td>))} 
          </tr>

          </tbody>
        </table>
        </>
    )
 }