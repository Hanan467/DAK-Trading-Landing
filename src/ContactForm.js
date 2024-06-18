import './App.css';

function ContactForm(){
    return (
        <div className='contactForm-container d-flex justify-content-between'>
            <div className='Content_Holder'> 
                <div class="row content_box">
                    <div className='col-lg-6 col-md-12 col-sm-12 ContactForm-content d-flex flex-column'>
                        <h2>Contact US</h2>
                        <p>Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Deleniti repudiandae provident consequatur sapiente culpa
                                nemo illo autem ipsum non veniam cupiditate ullam ex soluta quas optio, quidem quis iure obcaecati?
                            </p>
                    </div>
                    <div className='contactForm-form col-lg-6 col-md-12 col-sm-12'>
                    <div class="mb-3 mt-5">
                        <label htmlFor="exampleFormControlInput1" className="form-label" style={{width:'100%', textAlign:'start'}}>Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{width:'100%',textAlign:'start'}}>Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className='mb-3'>
                        <button className='btn btn-primary ' style={{width:'100%', textAlign:'center'}}>Submit</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactForm
