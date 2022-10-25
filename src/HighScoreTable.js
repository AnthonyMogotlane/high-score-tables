import React from "react";
import PlayerScore from "./PlayerScore";



const Table = props => {
    return (
        <div className="table-container">
            <h4>HIGH SCORES: {props.country}</h4>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>
                    {props.data.map((obj, i) => (
                        <PlayerScore obj={obj} key={i}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;