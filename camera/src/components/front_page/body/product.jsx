import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import shoes from './shoes.png';
const products = [
    { id: 0, name: 'Product 1', image: shoes, price: "100$" },
    { id: 1, name: 'Product 2', image: shoes, price: "100$" },
    { id: 2, name: 'Product 3', image: shoes, price: "100$" },
  ];
export default function Product() {
  return (
    <div className="items container mx-3">
      <div className="row">
        {products.map((item, index) => (
          <Link to={`/product/${item.id}`} key={item.id} className="col-md-3 col-sm-12 position-relative text-center cursor-pointer item-container">
            <p className="badge bg-danger position-absolute top-0 end-0 m-2 rounded-pill shadow-sm text-muted">New</p>
            <p className="badge bg-warning text-dark position-absolute top-0 end-0 mt-5 me-2 rounded-pill shadow-sm text-muted">-10%</p>
            <img src={item.image}  alt="item" className="img-fluid mt-4 mb-3 border border-3 border-primary rounded shadow-sm" />
            <div className="d-flex justify-content-center position-absolute top-50 start-50 translate-middle bg-light rounded-pill shadow-sm p-2">
              <span className="text-danger bg-white rounded-circle p-2 mx-1 border border-danger d-flex align-items-center justify-content-center">
                <FavoriteIcon fontSize="small" />
              </span>
              <span className="text-info bg-white rounded-circle p-2 mx-1 border border-info d-flex align-items-center justify-content-center">
                <RemoveRedEyeIcon fontSize="small" />
              </span>
              <span className="text-success bg-white rounded-circle p-2 mx-1 border border-success d-flex align-items-center justify-content-center">
                <ShoppingCartIcon fontSize="small" />
              </span>
            </div>
            <div>
              <div className="d-flex justify-content-between align-items-center text-danger">
                <p className="mb-0">{item.name}</p>
                <FavoriteIcon fontSize="small" className="m-0" />
              </div>
              <span className="fw-bold text-start text-muted small d-block">{item.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
