function ResetGame(props) {

    return (
        <button id="resetBtn" type="button" onClick={props.reset} className="btn btn-primary my-3 shadow">
            Start Game
        </button>
    )
}

export default ResetGame