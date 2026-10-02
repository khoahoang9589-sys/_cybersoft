import { useState } from 'react';
import ProductList from './ProductList';
import Modal from './Modal';

const products = [
  {
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    size: "[36,37,38,39,40,41,42]",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    deleted: false,
    categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
    relatedProducts: "[2,3,4]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/adidas-prophere.png"
  },
  {
    id: 2,
    name: "Adidas Prophere Black White",
    alias: "adidas-prophere-black-white",
    price: 450,
    description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    size: "[36,37,38,39,40,41,42]",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 980,
    deleted: false,
    categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
    relatedProducts: "[1,3,4]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/adidas-prophere-black-white.png"
  },
  {
    id: 3,
    name: "Adidas Prophere Customize",
    alias: "adidas-prophere-customize",
    price: 375,
    description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    size: "[36,37,38,39,40,41,42]",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 970,
    deleted: false,
    categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
    relatedProducts: "[1,2,4]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/adidas-prophere-customize.png"
  },
  {
    id: 4,
    name: "Adidas Super Star Red",
    alias: "adidas-super-star-red",
    price: 350,
    description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    size: "[36,37,38,39,40,41,42]",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 950,
    deleted: false,
    categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
    relatedProducts: "[1,2,3]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/adidas-super-star-red.png"
  },
  {
    id: 5,
    name: "Adidas Swift Run",
    alias: "adidas-swift-run",
    price: 350,
    description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    size: "[36,37,38,39,40,41,42]",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 960,
    deleted: false,
    categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
    relatedProducts: "[1,2,4]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/adidas-swift-run.png"
  },
  {
    id: 6,
    name: "Adidas Tenisky Super Star",
    alias: "adidas-tenisky-super-star",
    price: 350,
    description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    size: "[36,37,38,39,40,41,42]",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 940,
    deleted: false,
    categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
    relatedProducts: "[4,5,7]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/adidas-tenisky-super-star.png"
  },
  {
    id: 7,
    name: "Adidas Ultraboost 4",
    alias: "adidas-ultraboost-4",
    price: 450,
    description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    size: "[36,37,38,39,40,41,42]",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 930,
    deleted: false,
    categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
    relatedProducts: "[5,6,8]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/adidas-ultraboost-4.png"
  },
  {
    id: 8,
    name: "Adidas Yeezy 350",
    alias: "adidas-yeezy-350",
    price: 450,
    description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    size: "[36,37,38,39,40,41,42]",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 920,
    deleted: false,
    categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
    relatedProducts: "[5,6,7]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/adidas-yeezy-350.png"
  },
  {
    id: 9,
    name: "Nike Adapt BB",
    alias: "nike-adapt-bb",
    price: 350,
    description: "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    size: "[32,33,34,35]",
    sizes: [32, 33, 34, 35],
    shortDescription: "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    quantity: 200,
    deleted: false,
    categories: '[{"id": "NIKE","category":"NIKE"}]',
    relatedProducts: "[10,11,12]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/nike-adapt-bb.png"
  },
  {
    id: 10,
    name: "Nike Air Max 270",
    alias: "nike-air-max-270",
    price: 350,
    description: "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    size: "[32,33,34,35]",
    sizes: [32, 33, 34, 35],
    shortDescription: "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    quantity: 200,
    deleted: false,
    categories: '[{"id": "NIKE","category":"NIKE"}]',
    relatedProducts: "[9,11,12]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/nike-air-max-270-react.png"
  },
  {
    id: 11,
    name: "Converse Chuck Taylor",
    alias: "converse-chuck-taylor",
    price: 250,
    description: "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    size: "[32,33,34,35]",
    sizes: [32, 33, 34, 35],
    shortDescription: "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    quantity: 200,
    deleted: false,
    categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
    relatedProducts: "[9,10,12]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/converse-chuck-taylor.png"
  },
  {
    id: 12,
    name: "Vans Old School",
    alias: "vans-old-school",
    price: 200,
    description: "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    size: "[32,33,34,35]",
    sizes: [32, 33, 34, 35],
    shortDescription: "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    quantity: 200,
    deleted: false,
    categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
    relatedProducts: "[9,10,11]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/van-old-school.png"
  }
];

const ShoesStore = () => {
  const [productDetail, setProductDetail] = useState(products[0]);

  const setStateModal = (product) => {
    setProductDetail(product);
  };

  return (
    <div className="container-fluid min-vh-100 bg-white">
      <div className="row">
        <div className="col-12 col-md-3 col-lg-2 border-end border-info border-2 min-vh-100 p-4">
          <div className="d-flex flex-column gap-2">
            <a
              href="#home"
              className="border border-info border-2 text-secondary text-decoration-none px-3 py-1 d-block"
            >
              Home
            </a>
            <a
              href="#shop"
              className="text-secondary text-decoration-none px-3 py-1 d-block"
            >
              Shop
            </a>
          </div>
          <div className="border-top border-secondary-subtle mt-5 pt-5 d-none d-md-block"></div>
        </div>

        <div className="col-12 col-md-9 col-lg-10 p-4 pb-5">
          <h1 className="text-center text-secondary fw-light my-4">Shoes shop</h1>
          <ProductList productsData={products} setStateModal={setStateModal} />
          <Modal content={productDetail} />
        </div>
      </div>
    </div>
  );
};

export default ShoesStore;
