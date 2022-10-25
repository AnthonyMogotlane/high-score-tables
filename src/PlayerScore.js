import React from "react";

const PlayerScore = props => {
    let scores = props.scores;
    return (
        <tr>
            <td>{scores.n}</td>
            <td className="text-danger">{scores.s}</td>
        </tr>
    )
}

export default PlayerScore;