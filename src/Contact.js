import './App.css';
import twitterLogo from './assets/images/twitterx.png'
import facebookLogo from './assets/images/icons8-facebook-50 (1).png'
import youtubeLogo from './assets/images/icons8-youtube-50 (1).png'
import linkedinLogo from './assets/images/icons8-linkedin-50 (1).png'

function Contact(){
    return(
        <div className='contact-container'>
        <div className='d-flex justify-content-between' style={{ marginLeft: '200px', marginTop:'100px' }}>
            <div className='card' style={{ width: '6rem', height: '20rem',marginTop:'70px', backgroundColor:'#7F5523',borderRadius: '0' }}>
                <div className='d-flex flex-column'>
                <a href="" target="_blank" className='mt-5'>
                     <img src={twitterLogo} alt="TwitterLogo" style={{width:'20px',height:'20px'}} />
                </a>
                <a href="" target="_blank" className='mt-5'>
                     <img src={linkedinLogo} alt="linkedinLogo" style={{width:'20px',height:'20px'}} />
                </a>
                <a href="" target="_blank" className='mt-5'>
                     <img src={facebookLogo} alt="FacebookLogo" style={{width:'20px',height:'20px'}} />
                </a>
                <a href="" target="_blank" className='mt-5'>
                     <img src={youtubeLogo} alt="youtubeLogo" style={{width:'20px',height:'20px'}} />
                </a>

                </div>
            </div>
    
            <div className='card bg-white' style={{ width: '27rem', height: '30rem', borderRadius: '5px' }}>
                <h1 className='mt-5'>Get In Touch</h1>
                <div className='card1-content'>
                        
                        <h3 className='contact-content mt-5 me-3'>Meet Us</h3>
                        <p>somewhere, Addis Ababa</p>
                        <h3 className='contact-content mt-3 me-3'>Call Us</h3>
                        <p>097865432</p>
                        <h3 className='contact-content mt-3 me-3'>Email Us</h3>
                        <p>something@gmail.com</p>
                </div>
            </div>
            <iframe src={'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3940.704117730342!2d38.74454407501858!3d8.999349891060813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNTknNTcuNyJOIDM4wrA0NCc0OS42IkU!5e0!3m2!1sen!2set!4v1713292594980!5m2!1sen!2set'} style ={{width:'600px',height:'20rem', border:'0',marginTop:'70px'}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    
       
    )
}
export default Contact
