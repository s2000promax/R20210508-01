import React from "react";
import classes from '../components/ShootingTable.module.css'

const ResultTable = (props) => {


    return (
        <div>
            <h1>Result Table</h1>

            <table className={classes.Table}>

                <thead>
                    <tr> {props.state.tableResultHeaders.map((head, index) => (<th key={index} >{head}</th>))} </tr>
                </thead>
               
                <tbody >
                    {
                        props.state.players.map(({ id_number, pnumber, rank,  name, country, city, club, totals, rating, index }) => {
                            
                            return (<tr key={index}>
                                                        <td >{id_number} </td>
                                                        <td >{pnumber} </td>
                                                        <td >{rank} </td>
                                                        <td >{name} </td>
                                                        <td >{country} </td>
                                                        <td >{city} </td>
                                                        <td >{club} </td>
                                                        <td >{totals} </td>
                                                        <td >- </td>
                                                        <td >- </td>
                                                        <td >- </td>
                                                        <td >- </td>
                                                        <td >- </td>
                                                        <td >- </td>
                                                        <td >- </td>
                                                        <td>{totals}</td>
                                                        <td></td>
                                                        <td>{rating}</td>
                                                        <td></td>
                                    
                               </tr>)
                        }
                        )
                    }
                             


                 

                </tbody>


            </table>
            <div>
                <p></p>
                <button
                onClick={props.onRepeatHandler}
                >
                    Repeat</button>
            </div>

        </div>
    )
}

export default ResultTable