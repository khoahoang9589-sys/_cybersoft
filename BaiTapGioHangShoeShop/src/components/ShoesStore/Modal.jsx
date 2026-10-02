const Modal = (props) => {
  const { content } = props;

  return (
    <div
      className="modal fade"
      id="shoeModal"
      tabIndex="-1"
      aria-labelledby="shoeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="shoeModalLabel">
              {content?.name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row align-items-center">
              <div className="col-4 text-center">
                <img
                  src={content?.image}
                  alt={content?.name}
                  className="img-fluid"
                />
              </div>
              <div className="col-8">
                <h4>{content?.name}</h4>
                <p className="text-danger fs-4 fw-bold">{content?.price} $</p>
                <p>
                  <strong>Mô tả:</strong> {content?.description}
                </p>
                <div className="mb-2">
                  <strong>Size: </strong>
                  {content?.sizes ? (
                    content.sizes.map((s, index) => (
                      <span key={index} className="badge bg-dark me-1">
                        {s}
                      </span>
                    ))
                  ) : (
                    <span>{content?.size}</span>
                  )}
                </div>
                <p>
                  <strong>Số lượng:</strong> {content?.quantity}
                </p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
