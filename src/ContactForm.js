import './App.css';

function ContactForm(){
    return (
        <div className='contactForm-container d-flex justify-content-between'>
            <div className='ContactForm-content d-flex flex-column'>
                <h2>Contact US</h2>
                <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Deleniti repudiandae provident consequatur sapiente culpa 
                        nemo illo autem ipsum non veniam cupiditate ullam ex soluta quas optio, quidem quis iure obcaecati?
                    </p>
            </div>
            <div className='contactForm-form'>
            <div class="mb-3 mt-5">
                <label for="exampleFormControlInput1" class="form-label" style={{width:'100%', textAlign:'start'}}>Email address</label>
                 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label" style={{width:'100%',textAlign:'start'}}>Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            </div>
        </div>
    )
}
export default ContactForm
