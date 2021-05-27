function ModalGameOver(props) {
    return (
      <div>
        <div class="modal fade" id="modalWinner" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-warning" id="exampleModalLongTitle">Winner</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body lead">
                Our stick man is saved! 
                <p className="font-weight-bold display-4 text-primary">You Won this Round</p>
                Would you like to go for another one?
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success mx-auto" onClick={props.reset} data-dismiss="modal">Another Round</button>
              </div>
            </div>
          </div>
        </div>        
      </div>
    )
}
export default ModalGameOver

