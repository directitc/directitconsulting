import React, { useState } from 'react';
import Button from '../../Button/Button';
import './ContactForm.css';

const ContactForm = () => {
    const [status, setStatus] = useState('Submit');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(details),
        });
        setStatus('Submit');
        let result = await response.json();
        alert(result.status);
    };

    return (
        <form className="contact-form w3-padding-small" onSubmit={handleSubmit}>
            <div className="contact-form-input w3-padding-small">
                <label htmlFor="name" />
                <input type="text" id="name" placeholder="Name" required />
            </div>
            <div className="contact-form-input w3-padding-small">
                <label htmlFor="email" />
                <input type="text" id="email" placeholder="Email" required />
            </div>
            <div className="contact-form-input w3-padding-small">
                <label htmlFor="message" />
                <textarea
                    type="text"
                    id="message"
                    placeholder="Type message here..."
                    required
                />
            </div>
            <div className="button-fstart w3-padding-small w3-padding-32">
                <Button
                    classStyle={'w3-button w3-large contact-button-background'}
                    name={status}
                    type={'submit'}
                />
            </div>
        </form>
    );
};

export default ContactForm;