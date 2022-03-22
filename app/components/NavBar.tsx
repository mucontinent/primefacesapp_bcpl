import { Link, LiveReload, Outlet, ScrollRestoration } from "remix";
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { useRef } from "react";

const blockContent = {
    padding: "0 !important",
    margin: "-1% -1% -1% -1%",
}

export default function NavBar() {
    const menu = useRef(null);
    const items = [
        {
            label: "Logout",
            command: () => {
                console.log("Logout")
            }
        }
    ]
    
    return (
        <div className="block-content" style={blockContent}>
            <div className="flex flex-column">
                <div className="bg-indigo-500 py-3 px-5 flex align-items-center justify-content-between relative lg:static">
                    <img src="https://www.primefaces.org/primeblocks-react/assets/images/blocks/logos/hyper-300.svg" alt="hyper-300" height="40" className="mr-0 lg:mr-6" />
                    <Link to="/" className='lg:hidden'><i className="pi pi-bars" style={{ 'fontSize': '2em', color: "white" }}></i></Link>
                    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-indigo-500 left-0 top-100 z-1 shadow-2 lg:shadow-none">
                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                            <li>
                                <Link to="" style={{textDecoration: "none"}} className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i
                                        className="pi pi-home mr-2"></i><span>Home</span><span className="p-ink"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="inventory" style={{textDecoration: "none"}} className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                    <i
                                        className="pi pi-book mr-2"></i><span>Inventory</span><span className="p-ink"></span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
                            <li className="border-top-1 border-indigo-400 lg:border-top-none">
                                <Menu model={items} popup ref={menu} id="popup_menu" />
                                <Button onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup>
                                    <Avatar className="mr-3 lg:mr-0" style={{ width: "32px", height: "32px" }} image="https://www.primefaces.org/primereact/images/avatar/amyelsner.png"></Avatar>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-5 flex flex-column flex-auto">
                    <Outlet />
                    <ScrollRestoration />
                    <LiveReload />
                </div>
            </div>
        </div>
    );
}
