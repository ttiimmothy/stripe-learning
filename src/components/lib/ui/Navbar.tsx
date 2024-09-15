"use client";
import CartModal from "@/components/shop/CartModal";
import {useGetUser} from "@/lib/services/useGetUser";
import {AppDispatch, RootState} from "@/lib/store";
import Link from "next/link";
import React, {useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
import AvatarImg from "@/assets/avatar.png"
import {useLogout} from "@/lib/services/useLogout";
import {useRouter} from "next/navigation";
import {logout} from "@/lib/features/authSlice";
export const Navbar = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  }
  const dispatch = useDispatch<AppDispatch>();
  const {user} = useSelector((state: RootState) => state.auth);
  const {data, loading, error} = useGetUser();
  const [logoutUser] = useLogout();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  // admin dropdown menus
  const adminDropdownMenus = [
    {"label": "Dashboard", path: "/dashboard/admin"},
    {"label": "Manage Items", path: "/dashboard/manage-products"},
    {"label": "All Orders", path: "/dashboard/manage-orders"},
    {"label": "Add New Post", path: "/dashboard/add-new-post"}
  ]
  // user dropdown menus
  const userDropdownMenus = [
    {"label": "Dashboard", path: "/dashboard/"},
    {"label": "Profile", path: "/dashboard/profile"},
    {"label": "Payments", path: "/dashboard/payments"},
    {"label": "Orders", path: "/dashboard/orders"}
  ]
  const dropdownMenus = user?.role === "admin" ? [...adminDropdownMenus] : [...userDropdownMenus]
  const [profilePicture, setProfilePicture] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logoutUser()
       dispatch(logout())
      router.push("/")
    } catch (error) {
      throw error
    }
  }
  return (
    <header className="fixed-nav-bar w-nav mb-8">
      <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
        <ul className="nav__links">
          <li className="link"><Link href={"/"}>Home</Link></li>
          <li className="link"><Link href={"/shop"}>Shop</Link></li>
          <li className="link"><Link href={"/"}>Pages</Link></li>
          <li className="link"><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="nav__logo">
          <Link href={"/"}>Hibyebye<span>.</span></Link>
        </div>
        <div className="nav__icons relative">
          <span>
            <Link href={"/search"}>
              <i className="ri-search-line"></i>
            </Link>
          </span>
          <span>
            <button className="hover:text-primary" onClick={(e) => {
              e.stopPropagation();
              handleCartToggle()
            }}>
              <i className="ri-shopping-bag-line"></i>
              <sup className="size-4 text-sm inline-block text-white rounded-full bg-primary text-center">
                <div className="flex justify-center items-center size-full text-xs">
                  {products.length}
                </div>
              </sup>
            </button>
          </span>
          {isMounted && <span>
            {
            user ? 
            <>
            {/* <i className="ri-user-line"></i> */}
            {/* {isMounted ? <p>Client side code executed</p>: 
            (<p>Server side rendering</p>)} */}
            <Image onClick={handleDropdownToggle} src={user.profilePicture || AvatarImg} alt="profile" width={20} height={20} className="size-6 rounded-full cursor-pointer object-cover"/>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 p-4 w-48 bg-white border-gray-200 rounded-lg shadow-lg z-50">
                <ul className="font-medium space-y-4 p-2">
                  {dropdownMenus.map((menu, index) => (
                    <li key={menu.label}>
                      <Link className="dropdown-items" onClick={() => setIsDropdownOpen(false)} href={menu.path}>{menu.label}</Link>
                    </li>
                  ))}
                  <li><Link className="dropdown-items" onClick={handleLogout} href={"#"}>Logout</Link></li>
                </ul>
              </div>
            )}</> : 
            <>
            {/* <Image src={""} alt={"profile"} loading={"lazy"} width={20} height={20} className="size-0"/> */}
            <Link href={"/login"}><i className="ri-user-line"></i></Link>
            </>
            }
            {/* <Link href={"/login"}><i className="ri-user-line"></i></Link> */}
          </span>}
        </div>
      </nav>
      <CartModal products={products} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}/>
    </header>
  )
}