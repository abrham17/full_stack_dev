import React from 'react';
import {useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './product_detail.css';
import shoes from './shoes.png';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

// Sample product data with alternative images
const products = [
  {
    id: 0,
    name: 'Product 1',
    image: [
      { image: shoes, id: 1 },
      { image: shoes, id: 2 },
      { image: shoes, id: 3 },
      { image: shoes, id: 4 },
    ],
  },
  {
    id: 1,
    name: 'Product 2',
    image: [
      { image: shoes, id: 1 },
      { image: shoes, id: 2 },
      { image: shoes, id: 3 },
      { image: shoes, id: 4 },
    ],
  },
  {
    id: 2,
    name: 'Product 3',
    image: [
      { image: shoes, id: 1 },
      { image: shoes, id: 2 },
      { image: shoes, id: 3 },
      { image: shoes, id: 4 },
    ],
  },
  // Add more products as needed
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const item = products[0]; // Assuming you have a product array

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };
  const [rating , setRating] = useState(0);
  const [quantity , setQuantity] = useState(1);
  const [favorite , setFavorite] = useState(false);
  const [compare , setCompare] = useState(false);
  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Product Images Section */}
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center">
          {/* Main Image */}
          <Link to={`/product/${product.id}/image/${product.image[0].id}`}>
            <img
              src={product.image[0].image}
              alt="product"
              className="img-fluid rounded mb-4 w-100 main-product-image"
              style={{ objectFit: 'cover' }}
            />
          </Link>

          {/* Thumbnail Images */}
          <div className="row g-2">
            {product.image.map((image) => (
              <div className="col-3" key={image.id}>
                <Link to={`/product/${product.id}/image/${image.id}`}>
                  <img
                    src={image.image}
                    alt={`alternative ${image.id}`}
                    className="img-fluid rounded thumbnail-image"
                    style={{ objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => handleImageClick(index)}
                
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="col-lg-6 col-md-12 d-flex flex-column">
          <div className="ps-lg-4">
            <h1 className="h2 text-center">{product.name}</h1>
            <p className="fs-5 text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum.
            </p>

            <span className="h3 fw-bold text-primary">$100.00</span>
            <div className="stars mb-2">
                {[...Array(5)].map((star, index) =>(
                    <FaStar
                    key={index}
                    className={`cursor-pointer ${rating>=index+1 ? 'filled' : 'unfilled'}`}
                    onClick={()=>setRating(index+1)}
                    />
                ))}
            </div>
            <div className="d-flex align-items-center justify-content-start gap-3 d-block">
              <div className='d-flex align-items-center quantity-selector border rounded'>
                <button 
                  className='btn btn-outline-none border-0 px-3'
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className='px-4 py-2 border-start border-end'>
                  {quantity}
                </span>
                <button 
                  className='btn btn-outline-none border-0 px-3'
                  onClick={() => quantity < 99 && setQuantity(quantity + 1)}
                  disabled={quantity >= 99}
                >
                  +
                </button>
              </div>
              <button className="btn btn-primary btn-lg px-5 me-md-3 mb-3 mb-md-0">
                Add to Cart
              </button>
              {favorite ? <MdFavorite className='filled' onClick={()=>setFavorite(!favorite)} /> : <MdOutlineFavoriteBorder className='unfilled' onClick={()=>setFavorite(!favorite)} />}
              {compare ? <CompareArrowsIcon className='filled' onClick={()=>setCompare(!compare)} /> : <CompareArrowsIcon className='unfilled' onClick={()=>setCompare(!compare)} />}
            </div>
            <small className='d-block'>Categories :<a href='#'>Shoes</a></small>
            <small className='d-block'>Tags :<a href='#'>Shoes</a>,<a href='#'>Shoes</a>,<a href='#'>Shoes</a></small>
          </div>
        </div>
      </div>
    </div>
  );
}
