/*
*Creates a block of letters of specific word on UI.
*Only Displays the correct letters selected by user.
*/
function WordBlock(props) {
    const word = props.word;
    const wordArr = word.split("");    
    let selectedLetters = props.selectedLetters;

    return (
        <div className="d-flex justify-content-center my-2 font-fam-raleway">

            {wordArr.map((letter) => 
                <div className="wordblock-letter m-1 text-success">
                    <span className={hideUnselectedLetters(selectedLetters, letter)}>
                        {letter}
                    </span>
                </div>
            )}

        </div>
    );
}

export default WordBlock

function hideUnselectedLetters(selectedLetters, letter) {
    if (!selectedLetters.includes(letter))
        return 'd-none'
}