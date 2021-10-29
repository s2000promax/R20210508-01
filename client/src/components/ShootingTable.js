import React from "react";
import classes from '../components/ShootingTable.module.css'
const ShootingTable = (props) => {


    return (
        <div>
            <h1>{props.state.protocolDescription.line1}</h1>

            <table className={classes.Table}>

                <thead >
                    <tr > {props.state.tableHeaders.map((head, index) => (<th key={index} >{head}</th>))} </tr>
                </thead>

                <tbody >
                    {
                        props.state.players.map(({ id_number, name, targets, totals, sign, isCurrent, index }) => {
                            
                            return (<tr  key={index}>
                                                        <td >{id_number} </td>
                                                        <td >{name} </td>
                                                        {targets.map( (value, index) => {
                                                                    
                                                                  return (
                                                                    <td  key={index}> 
                                                                    
                                                                        <label>
                                                                          <input
                                                                             type="checkbox"
                                                                          
                                                                              name={value}
                                                                              disabled={isCurrent ? false: true}
                                                                              onClick={props.consoleHandler}
                                                                             />
                                                                          <span>{}</span>
                                                                       </label>
                                                                      
                                                                   </td>
                                                                  )
                                                                   
                                                                   
                                                                })}

                                    <td >{totals}</td>
                                    <td >
                                        <button disabled={isCurrent ? false: true} onClick={props.onSignHandler}>Sign</button>
                                    </td>
                               </tr>)
                        }
                        )
                    }
                             


                 

                </tbody>


            </table>
            <div style= {{textAlign : "center" , border : "2px solid #000", width: "50%", padding: "10px"}}>
                <p>{props.state.protocolDescription.line9}</p>
                <button 
                disabled={props.state.isResult ? false: true}
                onClick={props.onResultHandler}
                //style={{background: "red"}}
                >
                    Sign</button>
                    <strong>(Main referee of the competition press the button)</strong>
            </div>

        </div>
    )
}

export default ShootingTable