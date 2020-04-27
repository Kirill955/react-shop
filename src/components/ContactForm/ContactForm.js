import React from 'react'
import './ContactForm.sass'

const ContactForm = () => {
    return (
        <div className="contacts">
            <form>
                <label for="name">Name</label>
                <input name="name" id="name" type="text" placeholder="ваше имя"/>

                <label from="email">Email</label>
                <input name="email" id="email" type="email" placeholder="email"/>
                
                <label for="message">Message</label>
                <input name="message" id="message" type="text" placeholder="сообщение"/>

                <button className="btn-submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm