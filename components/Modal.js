export default function Modal({ showModalStatus, setShowModalStatus, setShowBlurBackground, contentModal }) {
  return(
    <div className={'modal-detail ' + showModalStatus}>
      <div className="modal-detail-content">
        {contentModal}
      </div>
      <div className='modal-detail-footer'>
          <button className='btn btn-primary w-100 m-4' onClick={() => {
            setShowModalStatus(false)
            setShowBlurBackground(false)
          }}>Close</button>
      </div>
    </div>
  )
}