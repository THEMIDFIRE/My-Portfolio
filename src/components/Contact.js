import { useState } from 'react';
import Modal from 'react-modal';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { IoClose } from "react-icons/io5";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mzbnweaa");
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        try {
            await handleSubmit(e);
            // Reset form fields if submission is successful
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } finally {
            setIsSending(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div>
            <motion.button className='btn' onClick={() => setIsOpen(true)}
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 2.5 }}
                whileHover={{ scale: 1.1, transition: { delay: 0, type: "spring", stiffness: 400, damping: 10 } }}
            >
                Contact me
            </motion.button>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                contentLabel="Contact Me"
            >
                <button className='btn x' onClick={() => setIsOpen(false)}><IoClose /></button>

                <h2>Get in Touch</h2>
                <p>Have a question or want to work together? Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="name">
                        <input type="text" autoComplete='off' id="name" name="name" value={formData.name} onChange={handleChange} required />
                        <span>Name</span>
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </label>
                    <label htmlFor="email">
                        <input type="email" autoComplete='off' id="email" name="email" value={formData.email} onChange={handleChange} required />
                        <span>Email</span>
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </label>
                    <label htmlFor="subject">
                        <input type="text" autoComplete='off' id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                        <span>Subject</span>
                        <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                    </label>
                    <label htmlFor="message">
                        <textarea id="message" autoComplete='off' name="message" value={formData.message} onChange={handleChange} required></textarea>
                        <span>Message</span>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </label>
                    <motion.button className='btn' type="submit" disabled={state.submitting || isSending} whileHover={{ scale: 1.1, transition: { delay: 0, type: "spring", stiffness: 400, damping: 10 } }}>
                        {isSending ? 'Sending' : 'Submit'}
                    </motion.button>
                </form>
                {state.succeeded && !isSending && <p style={{ color: 'green' }}>Message sent successfully!</p>}
                <button className='btn close' onClick={() => setIsOpen(false)}>Close</button>
            </Modal>
        </div>
    );
}
