import React from "react";
import PlayerScore from "./PlayerScore";



const Table = props => {
    return (
        <div className="table-container">
            <h4 className="text-primary">HIGH SCORES: <span className="country-color">{props.country}</span></h4>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>
                    {props.data.map((obj, i) => 
                        <PlayerScore scores={obj} key={i}/>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;