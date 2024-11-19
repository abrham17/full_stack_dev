import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DownArrowIcon from '@mui/icons-material/KeyboardArrowDown';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarTrigger,
    SidebarHeader,
  } from "@/components/ui/sidebar"
   
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Diversity2 } from '@mui/icons-material';
export function Pages(){
    const pages = ["Cart","Checkout","Wishlist","Compare","My Account","Login / Register","About Us","Contact Us","404 Page"];

    return(
        <div className="mb-0">  
            <DropdownMenu>
                <DropdownMenuTrigger>Pages</DropdownMenuTrigger>
                <DropdownMenuContent>
                    {pages.map((item, index) => (
                        <DropdownMenuItem key={index} className="">
                            <a href="#" className="text-decoration-none text-secondary hover-dark menu-item border-0"><span className=' menu-text'>{item}</span></a>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>

            </DropdownMenu>
        </div>
    )
}

export function Home() {
    const GroupOne = [    "Home Fashion","Home Fashion Two","Home Fashion Three","Home Fashion Four","Home Fashion Five","Home Fashion Six","Home Fashion Seven","Home Fashion Eight","Home Kids Fashion","Home Cosmetics","Home Furniture","Home Furniture Two", "Home Furniture Three","Home Furniture Four"];
    const GroupTwo = ["Product Details","Product Tab Bottom","Product Tab Left","Product Tab Right","Product Sticky","Product Slider","Product Fixed Image","Product Simple","Product Variation","Product Affiliate"];
    const GroupThree = ["Home Furniture Five","Home Furniture Six","Home Furniture Seven","Home Electronics","Home Electronics Two","Home Electronics Three","Home Book Store","Home Book Store Two","Home Plants","Home Flower Shop","Home Flower Shop Two","Home Organic Food","Home Organic Food Two","Home Onepage Scroll","Home Group Three","Home Grid Banner","Home Auto Parts"];

    const [isHomeOpen, setIsHomeOpen] = useState(false);
    function toggleHome(){
        setIsHomeOpen(!isHomeOpen);
    }
    return(
        <div className=" mb-0 position-relative">
            
            <DropdownMenu>
                <DropdownMenuTrigger>Home</DropdownMenuTrigger>
                <DropdownMenuContent className="p-4" style={{ minWidth: '800px' }}>
                    <div className="row g-4">
                        <div className="col-4">
                            <DropdownMenuLabel className="fw-bold fs-6 mb-2 text-dark">
                                HOME GROUP ONE
                            </DropdownMenuLabel>
                            {GroupOne.map((item, index) => (
                                <DropdownMenuItem key={index} className="py-0 hover:bg-transparent">
                                    <a href="#" className="text-decoration-none text-secondary menu-item w-100">
                                        <span className="menu-text">{item}</span>
                                    </a>
                                </DropdownMenuItem>
                            ))}
                        </div>

                        <div className="col-4">
                            <DropdownMenuLabel className="fw-bold fs-6 mb-2 text-dark">
                                HOME GROUP TWO
                            </DropdownMenuLabel>
                            {GroupTwo.map((item, index) => (
                                <DropdownMenuItem key={index} className="py-0 hover:bg-transparent">
                                    <a href="#" className="text-decoration-none text-secondary menu-item w-100">
                                        <span className="menu-text">{item}</span>
                                    </a>
                                </DropdownMenuItem>
                            ))}
                        </div>

                        <div className="col-4">
                            <DropdownMenuLabel className="fw-bold fs-6 mb-2 text-dark">
                                HOME GROUP THREE
                            </DropdownMenuLabel>
                            {GroupThree.map((item, index) => (
                                <DropdownMenuItem key={index} className="py-0 hover:bg-transparent">
                                    <a href="#" className="text-decoration-none text-secondary menu-item w-100">
                                        <span className="menu-text">{item}</span>
                                    </a>
                                </DropdownMenuItem>
                            ))}
                        </div>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
export function Shop() {
    const ShopLayout = ["Shop Layout","Shop Grid Standard","Shop Grid Filter","Shop Grid Two Column","Shop Grid No Sidebar","Shop Grid Right Sidebar","Shop List Standard","Shop List Full Width","Shop List Two Column","Shop List Full Width"];
    const ShopProduct = ["Product Details","Product Tab Bottom","Product Tab Left","Product Tab Right","Product Sticky","Product Slider","Product Fixed Image","Product Simple","Product Variation","Product Affiliate"];


    const [isShopOpen, setIsShopOpen] = useState(false);
    function toggleShop(){
        setIsShopOpen(!isShopOpen);
    }
    return(
        <DropdownMenu>
  <DropdownMenuTrigger>Shop</DropdownMenuTrigger>
  <DropdownMenuContent className="p-4" style={{ minWidth: '800px' }}>
    <div className="row h-100">
      <div className="col-12 col-md-4 d-flex flex-column">
        <DropdownMenuLabel className="fw-bold fs-6">SHOP LAYOUT</DropdownMenuLabel>
        <div className="flex-grow-1">
          {ShopLayout.map((item, index) => (
            <DropdownMenuItem key={index} className="py-0 hover:bg-transparent">
              <a href="#" className="text-decoration-none text-secondary menu-item w-100">
                <span className='menu-text'>{item}</span>
              </a>
            </DropdownMenuItem>
          ))}
        </div>
      </div>
      <div className="col-12 col-md-4 d-flex flex-column">
        <DropdownMenuLabel className="fw-bold fs-6">PRODUCT DETAILS</DropdownMenuLabel>
        <div className="flex-grow-1">
          {ShopProduct.map((item, index) => (
            <DropdownMenuItem key={index} className="py-0 hover:bg-transparent">
              <a href="#" className="text-decoration-none text-secondary menu-item w-100">
                <span className='menu-text'>{item}</span>
              </a>
            </DropdownMenuItem>
          ))}
        </div>
      </div>
      <div className="col-12 col-md-4">
        <img
          src="/src/assets/navbar/shop-banner.png"
          alt="Shop Banner"
          className="img-fluid h-100 object-fit-cover"
        />
      </div>
    </div>
  </DropdownMenuContent>
</DropdownMenu>

    )
}

export function Blog() {
    const [isBlogOpen, setIsBlogOpen] = useState(false);
    function toggleBlog(){
        setIsBlogOpen(!isBlogOpen);
    }

    const blogItems = [
        "Blog Standard",
        "Blog No Sidebar",
        "Blog Right Sidebar",
        "Blog Details Standard"
    ];

    return (
        <div className="mb-0">
            <DropdownMenu>
                <DropdownMenuTrigger>
                        Blog
                </DropdownMenuTrigger>
                <DropdownMenuContent>

                    {blogItems.map((item, index) => (
                                <DropdownMenuItem key={index} className="border-0">
                                    <a href="#" className="text-decoration-none text-secondary menu-item border-0">
                                        <span className='me-2 menu-text'>{item}</span>
                                    </a>
                                </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>

            </DropdownMenu>
        </div>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAccount , setIsAccount] = useState(false)
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const pages = ["Home", "Shop", "Collections", "Pages", "Blog", "Contact us"];

    return (
        <div className="container-fluid mx-0 px-0">
            <div className="navbar shadow w-100 d-flex justify-content-around align-items-center">
                <Link to="/" className="navbar-brand text-dark d-flex align-items-center mx-3 mx-md-0 justify-content-center justify-content-md-start">
                    <HomeIcon className="fs-1" />
                    <p className="mb-0 ms-2">Flone</p>
                </Link>

                <div className="navbar-links d-none d-md-flex align-items-center justify-content-center">
                    {pages.map((page, index) => (
                        <div className="mx-3 mb-0" key={index}>
                            {page === "Blog"?(
                                <Blog />
                            ): page==="Shop"?(
                                <Shop />
                            ): page === 'Home'?(
                                <Home />
                            ): page === "Pages"?(
                                <Pages />
                            ):
                            page
                        }
                        </div>
                    ))}
                </div>

                <div className="mx-3 py-2 px-2 d-flex justify-content-around">
                    <SearchIcon className="mx-1" />
                    <div>
                        <AccountCircleIcon onClick={() => setIsAccount(!isAccount)} className="mx-1 cursor-pointer"/>
                        {isAccount && 
                        <div className='blog-menu' id='account'>
                            <Link to="/account" className='text-decoration-none text-dark menu-item d-block'> <span className='mx-1 menu-text'>Account</span></Link>
                            <Link to="/login" className='text-decoration-none text-dark menu-item d-block'> <span className='mx-1 menu-text'>Login</span></Link>
                            <Link to="/register" className='text-decoration-none text-dark menu-item d-block'> <span className='mx-1 menu-text'>Register</span></Link>
                        </div>
                        }
                    </div>
                    <div>
                        <Link to="/compare" className='text-decoration-none text-dark'> <CompareArrowsIcon className="mx-1" /></Link>
                    </div>
                    <div>
                        <Link to="/wishlist" className='text-decoration-none text-dark'> <FavoriteIcon className="mx-1" /></Link>
                    </div>
                    <div>
                        <Link to="/cart" className='text-decoration-none text-dark'> <ShoppingCartIcon className="mx-1" /></Link>
                    </div>
                </div>
                <button className="navbar-toggle d-md-none" onClick={toggleNavbar}>
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
                {isOpen && (
                    <div className="navbar-links d-md-none mobile-menu position-absolute w-100 bg-white shadow-lg" 
                         style={{ top: '100%', left: 0, zIndex: 2000 }}>
                        {pages.map((page, index) => (
                            <div key={index} className="border-bottom">
                                {page === "Blog" ? (
                                    <Blog />
                                ) : page === "Shop" ? (
                                    <Shop />
                                ) : page === 'Home' ? (
                                    <Home />
                                ) : page === "Pages" ? (
                                    <Pages />
                                ) : (
                                    <Link to={`/${page.toLowerCase().replace(/\s+/g, '-')}`} 
                                          className="d-block p-3 text-decoration-none text-dark">
                                        {page}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                )}
                {/* End mobile menu */}
            </div>
        </div>
    );
}
