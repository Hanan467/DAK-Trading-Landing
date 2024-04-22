import main_logo from './assets/images/D_3_-removebg-preview.png'


function Header(){
    return(
        <div className="Header_Container">
            <div className="Content_Holder">
                <img src={main_logo} alt="" />
                <div className='menuHolder'>
                    <ul>
                        <li><a href="www.google.com">Home</a></li>
                        <li><a href="www.google.com">About</a></li>
                        <li><a href="www.google.com">Service</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default Header