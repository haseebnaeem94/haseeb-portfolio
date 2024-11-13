import Navbar from "@/Components/Navbar"
import "./page.css"


const Contact = () => {
  return (
    <div>
        <Navbar />
      <section className="contact-section">
        <div className="contact-1">
            <div className="contact-2">
                <h1 className="contact-h" data-aos="flip-right">Contact Me</h1>
                <p className="contact-p" data-aos="flip-right">Feel free to contact me I am always here to welcome you</p>
            </div>
            <div className="contact-3">
                <div className="contact-4">
                    <div className="contact-5">
                        <div className="contact-6">
                            <label htmlFor="name" className="name">Name</label>
                            <input type="text" id="name" name="name" className="name-1"></input>
                        </div>
                    </div>
                    <div className="mail">
                        <div className="mail-2">
                        <label htmlFor="email" className="email">Email</label>
                        <input type="text" id="email1" name="email" className="email-1"></input>
                        </div>
                    </div>
                    <div className="message-1">
                        <div className="message-2">
                            <label htmlFor="message" className="your-message">Message</label>
                            <textarea id="message" name="message" className="message-3" />
                        </div>
                    </div>
                    <div className="button-1">
                        <button className="my-button">Send Message</button>
                    </div>
                    <div className="button-message">
                        <a className="button-message1">haseeb.naeem1994@gmail.com</a>
                        <p className="button-message2">Karachi Sindh Pakistan</p>
                        <span className="button-message3">
                            <a className="button-message4">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="button-message5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                            </a>
                            <a className="icon-2">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="icon2" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
                            </a>
                            <a className="icon-3">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="icon3" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
                            </a>
                            <a className="icon-4">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="icon4" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>

      </section>
    </div>
  )
}

export default Contact
