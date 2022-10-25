import React from "react";

const PlayerScore = props => {
    return (
        <tr>
            <td>{props.obj.name}</td>
            <td>{props.obj.score}</td>
        </tr>
    )
}

export default PlayerScore;