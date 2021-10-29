import React from "react";
import classes from '../components/ShootingTable.module.css'

const ParpTable = (props) => {


    return (
        <div>
            <h1>Participants of the competition</h1>

            <table className={classes.Table}>

                <thead>
                    <tr> {props.state.pTableHeaders.map((head, index) => (<th key={index} >{head}</th>))} </tr>
                </thead>
               
                <tbody >
                    {
                        props.state.players.map(({ id_number, pnumber, rank,  name, country, city, club, index }) => {
                            
                            return (<tr key={index}>
                                                        <td >{id_number} </td>
                                                        <td >{pnumber} </td>
                                                        <td >{rank} </td>
                                                        <td >{name} </td>
                                                        <td >{country} </td>
                                                        <td >{city} </td>
                                                        <td >{club} </td>
                                                        
                                    
                               </tr>)
                        }
                        )
                    }
                             


                 

                </tbody>


            </table>

        </div>
    )
}

export default ParpTable