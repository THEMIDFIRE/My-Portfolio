import React from "react";
import { IoCodeSlash, IoAccessibility, IoLogoWebComponent } from "react-icons/io5";
import { LuMonitorSmartphone } from "react-icons/lu";
import { TbSettingsBolt, TbHeadset } from "react-icons/tb";

export default function Services() {
    const services = [
        {
            id: 1,
            title: "Web Development",
            description: "Building modern, responsive, and scalable web applications.",
            icon: <IoCodeSlash />
        },
        {
            id: 2,
            title: "Responsive Design",
            description: "Ensuring your web applications look great on any device.",
            icon: <LuMonitorSmartphone />
        },
        {
            id: 3,
            title: "Accessibility",
            description: "Ensure your web applications are accessible to all users.",
            icon: <IoAccessibility />
        },
        {
            id: 4,
            title: "Web Components",
            description: "Modular and reusable components for scalable development.",
            icon: <IoLogoWebComponent />
        },
        {
            id: 5,
            title: "Optimization",
            description: "Optimizing web applications for speed and performance.",
            icon: <TbSettingsBolt />
        },
        {
            id: 6,
            title: "Support",
            description: "Providing support services to keep your web apps up-to-date.",
            icon: <TbHeadset />
        }
    ];

    return (
        <section id="services">
            <h2>Services</h2>
            <p>Offering a wide range of front-end development services to help you build stunning and performant web applications.</p>
            <div className="cards">
                {services.map((service) => (
                    <div className="card" key={service.id}>
                        <h3>{service.icon}  {service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}