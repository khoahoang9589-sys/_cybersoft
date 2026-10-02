import ProductItem from './ProductItem';

const ProductList = (props) => {
  const { productsData, setStateModal } = props;

  const renderProductList = () => {
    return productsData?.map((product) => {
      return (
        <div className="col-12 col-md-6 col-lg-4" key={product.id}>
          <ProductItem item={product} setStateModal={setStateModal} />
        </div>
      );
    });
  };

  return (
    <div className="row g-4">
      {renderProductList()}
    </div>
  );
};

export default ProductList;
