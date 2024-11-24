import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_e6j9l75', 'template_bjz9m24', form.current, 'hGM2QSgkDpO6vP1Gj')
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsModalOpen(true); 
                    form.current.reset(); 
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    const closeModal = () => setIsModalOpen(false); 

    return (
        <div className="contact container section" id="contact">
            <h2 className="section_title">Get In Touch</h2>

            <div className="contact_container grid">
                <div className="contact_info" data-aos="zoom-in-right" data-aos-duration="500">
                    <h3 className="contact_title">Let's talk about everything!</h3>
                    <p className="contact_details">Send me an email. 👋</p>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact_form">
                    <div className="contact_form-group">
                        <div className="contact_form-div" data-aos="zoom-out-right">
                            <input type="text" className="contact_form-input" name="user_name" placeholder="Insert your name" />
                        </div>

                        <div className="contact_form-div" data-aos="zoom-out-left">
                            <input type="email" className="contact_form-input" name="user_email" placeholder="Insert your email" />
                        </div>
                    </div>

                    <div className="contact_form-div" data-aos="zoom-in-up">
                        <input type="text" className="contact_form-input" name="user_subject" placeholder="Insert your subject" />
                    </div>

                    <div className="contact_form-div contact_form-area" data-aos="zoom-in-up">
                        <textarea className="contact_form-input" cols="30" rows="10" name="message" placeholder="Write your message"></textarea>
                    </div>

                    <button className="btn" type="submit" value="Send" data-aos="zoom-out-up" data-aos-duration="1000">
                        Send Message
                    </button>
                </form>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal_content">
                        <p>Pesan berhasil dikirim!</p>
                        <button className="btn" onClick={closeModal}>
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
