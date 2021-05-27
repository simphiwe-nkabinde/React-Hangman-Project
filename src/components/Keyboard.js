function keyboard(props) {
    //array of alphabets A-Z are mapped to create a button for each alphabet
    const alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const alphBtns = alph.map((letter) =>
        <button type="button" data-btn="keyboard" onClick={props.handleLetterSelection} className="btn btn-outline-primary m-2 shadow keyboard-key">
            {letter}
        </button>
    )
    return (
        <div className="font-fam-indie keyboard">
            {alphBtns}
        </div>
    )
}

export default keyboard