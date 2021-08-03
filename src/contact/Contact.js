import React, {Component} from 'react';
import { Twitter,Facebook,Instagram } from '@material-ui/icons';
import axios from 'axios';
import './contact.css'

class Contact extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
  }

  submitEmail(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:5000/endMails", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
      }else if(response.data.status === 'fail'){
          alert("Message failed to send.")
      }
    })
}

resetForm(){
    this.setState({name: '', email: '', message: ''})
}
  
  render() {
    return (

      <body>
        
     

      
        <div id="contact">
         <div className="contact-">
        <div className="section">
            <div className="contact-container">
                <div>
                    <div >
                        <div className="section-title">
                          <div className="title">
                            <h2 >راسلنا</h2>
                            <p>اسمح لنا أن نعرف ما هو رأيك! من أجل تقديم خدمة أفضل من فضلك لا تتردد في إرسال ملاحظاتك إلينا. </p><hr/>
                                 </div>
                            <form name="contact" method="post">
           <input type="hidden" name="form-name" value="contact" />
           <div class="form-group">
             <input
               class="form-control"
               type="text"
               name="name"
               placeholder="Nom"
               required
             />
           </div>
           <div class="form-group">
             <input
               class="form-control"
               type="email"
               name="email"
               placeholder="Email"
               required
             />
           </div>
           <div class="form-group">
             <textarea
               class="form-control"
               name="message"
               placeholder="Message"
               required
             />
           </div>           
           <button class="btn btn-block btn-lg btn-primary" type="submit">
             Send
           </button>
         </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </div>
    </div>  
              <footer class="footer">
              <div class="container">
              
                <p class="social-icons">
                    <ul>
                      <a className="fa" href="https://www.facebook.com/shlailacademy"><Facebook/></a>
                      <a className="tw" href="https://www.twitter.com/shlail_acadeemy"><Twitter/></a>
                      <a className="in" href="https://www.instagram.com/shlail_acadeemy"><Instagram/></a>
                    </ul>
                </p>
              </div>
            </footer>

            </body>  
        
    );
}

onNameChange(event) {
  this.setState({name: event.target.value})
}

onEmailChange(event) {
  this.setState({email: event.target.value})
}

onMsgChange(event) {
  this.setState({message: event.target.value})
}
}

export default Contact;