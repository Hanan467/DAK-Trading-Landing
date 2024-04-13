import main_logo from './assets/images/D_3_-removebg-preview.png'


function Header(){
    return(
        <div className="Header_Container">
            <div className="Content_Holder">
                <img src={main_logo} alt="" />
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a></li>
                </ul>
            </div>
        </div>
    )
}



export default Header