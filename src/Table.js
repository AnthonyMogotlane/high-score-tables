import React from "react";



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
                        <tr key={i}>
                            <td>{obj.name}</td>
                            <td>{obj.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;