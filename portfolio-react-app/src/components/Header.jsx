import Logo from "./header/Logo.jsx"
import MenuList from "./commons/MenuList.jsx"

export default function Header({data}) {
    const {menus = []} = data || {};

    return (
        <header className="header">
            <Logo 
                img ="/images/favicon.ico" alt = "header-logo" style = "header-logo-img" title = "Judy" 
            />
            <MenuList menus = {menus} style = "header-menu open" />
            {/* <button class="header-toggle" id="menu-toggle"><i class="fa-solid fa-bars"></i></button> */}
        </header>
    )
}