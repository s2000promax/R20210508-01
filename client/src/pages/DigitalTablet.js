
import React from 'react';
import update from 'react-addons-update';
import ShootingTable from '../components/ShootingTable';
import ResultTable from '../components/ResultTable';
import ParpTable from '../components/pTable';

class DigitalTablet extends React.Component {
  constructor(props) {
    super(props)

    const targets_fields = [
      'id25', 'id24', 'id23', 'id22', 'id21',
      'id20', 'id19', 'id18', 'id17', 'id16', 'id15', 'id14', 'id13', 'id12', 'id11',
      'id10', 'id9', 'id8', 'id7', 'id6', 'id5', 'id4', 'id3', 'id2', 'id1'
    ]

    this.state = {
      shootersCount: 0,
      currentItem: 0,
      isRusultComp: false,

      gameStep: {
        startGame: false,
        step0: true,
        step1: false,
        step2: false,
        step3: false
      },
      protocolDescription: {
        line1: 'National Federation of Sporting',
        line2: 'Competition protocol',
        line3: 'Sporting (big)',
        line4: 'SPORTS AND SHOOTING COMPLEX',
        line5: 'AREA',
        line6: 'GROUP',
        line7: 'SERIES',
        line8: 'Shooting start',
        line9: 'I confirm the final result of the series',
        line10: 'Signature of the last shooter of the group'
      },
      tableHeaders: [
        '№', 'NAME', 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 'TOTAL', 'Signature'
      ],
      tableResultHeaders: ['№', 'P.NUMBER', 'RANK', 'NAME', 'COUNTRY', 'CITY', 'CLUB', 
                            'AREA1', 'AREA2', 'AREA3', 'AREA4', 'AREA5', 'AREA6', 'AREA7', 'AREA8', 'TOTAL',
                          'SHOOTOUT', 'RATING', 'NORM'],

      pTableHeaders: ['№', 'P.NUMBER', 'RANK', 'NAME', 'COUNTRY', 'CITY', 'CLUB'],

      players: [
        {
          id_number: 1,
          name: 'Velaskes Fernandos',
          targets: targets_fields,
          totals: 0,
          sign: false,
          isCurrent: false,
          pnumber: 10,
          rank: 'ms',
          country: 'Poland',
          city: 'Warshawa',
          club: 'clubName',
          rating: '-'
 
        },

        {
          id_number: 2,
          name: 'Faruco Romanos',
          targets: targets_fields,
          totals: 0,
          sign: false,
          isCurrent: false,
          pnumber: 197,
          rank: 'ms',
          country: 'Turkey',
          city: 'Ismir',
          club: 'clubName',
          rating: '-'
        },

        {
          id_number: 3,
          name: 'Geraldo Marierro',
          targets: targets_fields,
          totals: 0,
          sign: false,
          isCurrent: false,
          pnumber: 45,
          rank: 'ms',
          country: 'Spain',
          city: 'Madrid',
          club: 'clubName',
          rating: '-'
        },

        {
          id_number: 4,
          name: 'Pabulo Matildo',
          targets: targets_fields,
          totals: 0,
          sign: false,
          isCurrent: false,
          pnumber: 522,
          rank: 'ms',
          country: 'France',
          city: 'Lion',
          club: 'clubName',
          rating: '-'
        },

        {
          id_number: 5,
          name: 'Rick Gordon',
          targets: targets_fields,
          totals: 0,
          sign: false,
          isCurrent: false,
          pnumber: 182,
          rank: 'ms',
          country: 'Italy',
          city: 'Rome',
          club: 'clubName',
          rating: '-'
        }

      ]
    }


  }

  /*
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
  */


  consoleHandler = (e) => {

    //console.log(e.target.name, e.target.checked)
    var newData = [...this.state.players];
    
    if (e.target.checked) {newData[this.state.currentItem - 1].totals++ } else {newData[this.state.currentItem - 1].totals--}
    this.setState({ newData });

  }

  startComptHandler = () => {

    this.setState(update(this.state, {
      players: { [this.state.currentItem]: { isCurrent: { $set: true } } }
    }));


    this.setState({
      shootersCount: this.state.players.length,
      currentItem: 1,
      gameStep: {
        startGame: true,
        step0: false,
        step1: true,
        step2: false,
        step3: false
      }

    })
  }

  onSignHandler = () => {

    if (this.state.currentItem < this.state.shootersCount) {

      var newData = [...this.state.players];
      newData[this.state.currentItem - 1].isCurrent = false;
      newData[this.state.currentItem].isCurrent = true;
      this.setState({ newData });
      this.setState({currentItem: this.state.currentItem + 1})

    } else {
      newData = [...this.state.players];
      newData[this.state.currentItem - 1].isCurrent = false;
      this.setState({ newData });
      this.setState({ isResult: true });
      
    }
  }

  onResultHandler = () => {
    this.setState({
      
      gameStep: {
        startGame: true,
        step0: false,
        step1: false,
        step2: true,
        step3: false
      } })
  }

  onRepeatHandler = () => {
    var newData = [...this.state.players];
   for (let i=0;i<this.state.shootersCount;i++)
    {newData[i].totals = 0;}
    
    this.setState({ newData });
    this.setState({
      currentItem: 0,
      isRusultComp: false,
      gameStep: {
        startGame: false,
        step0: true,
        step1: false,
        step2: false,
        step3: false
      }  
    })

  }

  render() {
    return (
      <div>
        
        {
          (!this.state.gameStep.startGame) 
          && 
          <div>
          <ParpTable state={this.state} />
          <div style= {{textAlign : "center" , border : "2px solid #000", width: "50%", padding: "10px"}}>
          <button style={{background: "red"}} onClick={this.startComptHandler}>Start Competition</button>
          <strong>(Main referee of the competition press the button)</strong>
          </div>
          </div>
        }

        {
          (this.state.gameStep.startGame && this.state.gameStep.step1) 
          && 
          <ShootingTable 
          state={this.state} 
          consoleHandler={this.consoleHandler} 
          onSignHandler={this.onSignHandler} 
          onResultHandler={this.onResultHandler}
          />
        }

        { (this.state.gameStep.step2) 
        &&
        <ResultTable 
        state={this.state} 
        onRepeatHandler={this.onRepeatHandler}
        />
}


      </div>
    )
  }

}


export default DigitalTablet
