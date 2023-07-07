import React from 'react'

const Contact = () => {
    return (
        <section className='h-60 p-20'>
            <h5>Get In Touch</h5>

            <div className="flex gap-20">
                <div className="contact__options">

                    <h4>Email</h4>
                    <h5>codebooter@gmail.com</h5>
                    <a href="mailto:nehak78800@gmail.com" target='_blank' rel="noreferrer">Send a message</a>

                </div>

                {/* end of contact options */}
                <div>
                <form className='flex flex-col'>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea>Enter</textarea>
                </form>
                </div>
            </div>
        </section>
    )
}

export default Contact