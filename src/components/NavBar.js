import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start font-Poppins">
                <div className="dropdown font-Poppins">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden font-Poppins">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-Poppins">
                        <li><a>Home</a></li>
                        <li tabIndex="0">
                            <a className="justify-between">
                                Features
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Pricing</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl font-Poppins">NFT Store</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-Poppins text-sm">
                    <li><a>Home</a></li>
                    <li tabIndex="0">
                        <a>
                            Features
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Pricing</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <CartWidget/>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between font-Poppins">
                            Profile
                            <span className="badge font-Poppins">New</span>
                        </a>
                    </li>
                    <li><a className="font-Poppins">Settings</a></li>
                    <li><a className="font-Poppins">Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar