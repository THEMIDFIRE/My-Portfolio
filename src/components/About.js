import React from "react";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoSass, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoLogoInstagram, IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io5";
import { BsTelephone, BsEnvelope, BsBootstrapFill } from "react-icons/bs";
import { RiMapPinUserLine } from "react-icons/ri";
import { MdCircle } from "react-icons/md";
import { motion } from "framer-motion";
import ContactForm from "./Contact";

export default function About() {
    const about = [
        { image: 'me.jpg' },
        { name: 'Mohamed Magdy' },
        { title: 'Front-end web developer' },
        { slogan: 'Developing creative thoughts' },
        { status: 'Looking for my next role' },
        { about: 'A passionate, self-taught front-end web developer that enjoys coding, always trying to grow in the profession and looking for possibilities.' },
        { phone: '+201030356638' },
        { email: 'chaoticoder@gmail.com' },
        { location: 'Egypt, Giza' },
        {
            skills: [
                { label: 'HTML5', icon: <IoLogoHtml5 /> },
                { label: 'CSS3', icon: <IoLogoCss3 /> },
                { label: 'JavaScript', icon: <IoLogoJavascript /> },
                { label: 'BootStrap', icon: <BsBootstrapFill /> },
                { label: 'Sass', icon: <IoLogoSass /> },
                { label: 'React', icon: <IoLogoReact /> },
                { label: 'GitHub', icon: <IoLogoGithub /> },
            ]
        },
        {
            social: [
                { label: 'GitHub', url: 'https://github.com/themidfire', icon: <IoLogoGithub /> },
                { label: 'LinkedIn', url: 'https://linkedin.com/in/themidfire/', icon: <IoLogoLinkedin /> },
                { label: 'Twitter', url: 'https://twitter.com/themidfire', icon: <IoLogoTwitter /> },
                { label: 'Instagram', url: 'https://instagram.com/themidfire.dev/', icon: <IoLogoInstagram /> },
                { label: 'Facebook', url: 'https://facebook.com/TH3MIDFIRE', icon: <IoLogoFacebook /> },
                { label: 'WhatsApp', url: 'https://wa.me/201030356638', icon: <IoLogoWhatsapp /> }
            ]
        }
    ];

    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
        transition: { duration: 1.2 }
    };

    return (
        <>
            <aside>
                <section id="about">
                    <motion.img
                        src={about[0].image}
                        alt="Me"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.5 }}
                    />
                    <motion.h2
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.7 }}
                    >
                        {about[1].name}
                    </motion.h2>
                    <motion.p
                        className="title"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.9 }}
                    >
                        {about[2].title}
                    </motion.p>
                    <motion.p
                        className="slogan"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.1 }}
                    >
                        {about[3].slogan}
                    </motion.p>
                    <motion.div
                        id="status"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.3 }}
                    >
                        <motion.div id="circle"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ delay: 1.3, duration: 2, ease: 'linear', repeat: Infinity }}>
                            <MdCircle />
                        </motion.div> <p>{about[4].status}</p>
                    </motion.div>
                    <motion.div
                        className="info"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}
                    >
                        <div id="phone">
                            <BsTelephone /> <a href={`tel:${about[6].phone}`}>{about[6].phone}</a>
                        </div>
                        <div id="email">
                            <BsEnvelope /> <a href={`mailto:${about[7].email}`}>{about[7].email}</a>
                        </div>
                        <div id="location">
                            <RiMapPinUserLine /> {about[8].location}
                        </div>
                    </motion.div>
                    <motion.h3
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.7 }}
                    >
                        Skills
                    </motion.h3>
                    <motion.div
                        className='skills'
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.9 }}
                    >
                        {about[9].skills.map((skill, index) => (
                            <div className='skill' key={index}>
                                {skill.icon}
                            </div>
                        ))}
                    </motion.div>
                    <motion.h3
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 2.1 }}
                    >
                        Social
                    </motion.h3>
                    <motion.div
                        className='social'
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 2.3 }}
                    >
                        {about[10].social.map((social, index) => (
                            <motion.div
                                className='social-link'
                                key={index}
                                initial="y:0"
                                whileHover={{ y: [0, -5, 0], transition: { duration: 1.5, repeat: Infinity } }}
                            >
                                <a href={social.url} target="_blank" rel="noopener noreferrer">
                                    {social.icon}
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className="buttons">
                        <motion.a href="./Mohamed Magdy.pdf" className="btn" download
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 2.5 }}
                            whileHover={{ scale: 1.1, transition: { delay: 0, type: "spring", stiffness: 400, damping: 10 } }}
                        >
                            Download CV
                        </motion.a>
                        <ContactForm />
                    </div>
                </section>
            </aside >
        </>
    );
}
