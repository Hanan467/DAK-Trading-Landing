import main_logo from './assets/images/D_3_-removebg-preview.png'


function Header(){
    return(
        <header className="Header_Container">
            <div className="Content_Holder">
                <img src={main_logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                </ul>
            </div>
        </header>
    )
}

export default Header