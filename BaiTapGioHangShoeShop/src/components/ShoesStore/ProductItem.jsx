const ProductItem = (props) => {
  const { item, setStateModal } = props;

  if (!item) return null;

  return (
    <div className="card h-100 border p-3 shadow-sm">
      <div className="d-flex align-items-center justify-content-center text-center p-2 mb-3">
        <img
          src={item.image}
          alt={item.name}
          className="img-fluid"
          data-bs-toggle="modal"
          data-bs-target="#shoeModal"
          onClick={() => setStateModal(item)}
          role="button"
        />
      </div>
      <div className="card-body p-0 d-flex flex-column justify-content-between">
        <div>
          <h6
            className="card-title text-capitalize fw-normal mb-1 fs-6 text-truncate"
            title={item.name}
          >
            {item.name}
          </h6>
          <p className="card-text text-dark mb-3">
            {item.price} $
          </p>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-dark text-white px-3 py-2 d-inline-flex align-items-center gap-2"
            data-bs-toggle="modal"
            data-bs-target="#shoeModal"
            onClick={() => setStateModal(item)}
          >
            <span>add to carts</span>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
