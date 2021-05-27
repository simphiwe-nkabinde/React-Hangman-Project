function ModalGameOver(props) {
    return (
      <div>
        <div class="modal fade" id="modalTryAgain" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Poor Stick Man...</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>You Lost this round.</p>
                <p className="lead">The correct word was:</p>
                <h4 className="text-danger display-4 font-weight-bold">{props.correctWord}</h4>
                <p>Would you like to try again?</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-warning mx-auto" onClick={props.reset} data-dismiss="modal">Try Again</button>
              </div>
            </div>
          </div>
        </div>        
      </div>
    )
}
export default ModalGameOver

