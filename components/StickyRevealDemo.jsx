
import React from "react";
import {StickyScroll} from "./sticky-scroll-reveal.jsx";


const content = [
    {
        title: "Engineering Designer & Consulting",
        description:
            "We are providing a detailed electrical designs are passed to the panel manufacturing facility for construction. Our engineers use the lan operate within your specifications as required.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/1.png"
                    style={{ width: "100%", height: "100%" }}
                    className="h-full w-full object-cover"
                    alt="linear board demo" />
            </div>
        ),
    },
    {
        title: "Control Panel Manufacturing",
        description:
            "We can give the complete customized manufacturing solutions to customer for various applications and completely test all control panels by logic sequence test and power  junction boxes to control suites.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/2.png"
                    style={{ width: "100%", height: "100%" }}
                    className="h-full w-full object-cover"
                    alt="linear board demo" />
            </div>
        ),
    },
    {
        title: "Spares & Material Supply",
        description:
            "PCC panel made by high quality Panel Enclosure with the simple structure for easy maintenance. These are capable enough to control various industrial operations with guaranteed performance.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/3.png"
                    style={{ width: "100%", height: "100%" }}
                    className="h-full w-full object-cover"
                    alt="linear board demo" />
            </div>
        ),
    },
    {
        title: "Retrofitting Solutions",
        description:
            "We are providing the retrofitting electrification solutions to your existing panels with the latest technology for improve your plant efficiency & improve your production capacity. ",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/4.png"
                    style={{ width: "100%", height: "100%" }}
                    className="h-full w-full object-cover"
                    alt="linear board demo" />
            </div>
        ),
    },
    {
        title: "Repair and Service/AMC",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/5.png"
                    style={{ width: "100%", height: "100%" }}
                    className="h-full w-full object-cover"
                    alt="analytics dashboard" />
            </div>
        ),
    },
    {
        title: "Service and Repairing",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/6.png"
                    style={{ width: "100%", height: "100%" }}
                    className="h-full w-full object-cover"
                    alt="cloud solutions" />
            </div>
        ),
    },
    {
        title: "On-Site Support ",
        description:
            "Seamlessly integrate your applications with our robust cloud infrastructure. Our cloud solutions offer scalability, security, and reliability for your business needs. With automatic backups, disaster recovery, and 24/7 monitoring, your data is always safe and accessible.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/7.png"
                    style={{ width: "100%", height: "100%" }}
                    className="h-full w-full object-cover"
                    alt="cloud solutions" />
            </div>
        ),
    },
    {
        title: "Genuine Spares Supply(Trading)",
        description:
            "Seamlessly integrate your applications with our robust cloud infrastructure. Our cloud solutions offer scalability, security, and reliability for your business needs. With automatic backups, disaster recovery, and 24/7 monitoring, your data is always safe and accessible.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/8.png"
                    style={{ width: "100%", height: "100%" }}
                    className="h-full w-full object-cover"
                    alt="cloud solutions" />
            </div>
        ),
    },
    {
        title: "Annual Maintenance Contract Support(AMC)",
        description:
            "Seamlessly integrate your applications with our robust cloud infrastructure. Our cloud solutions offer scalability, security, and reliability for your business needs. With automatic backups, disaster recovery, and 24/7 monitoring, your data is always safe and accessible.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/9.png"
                    style={{ width: "100%", height: "100%" }}
                    className="h-full w-full object-cover"
                    alt="cloud solutions" />
            </div>
        ),
    },
    {
        title: "Comprehensive Maintenance Contract Support (CMC)",
        description:
            "Seamlessly integrate your applications with our robust cloud infrastructure. Our cloud solutions offer scalability, security, and reliability for your business needs. With automatic backups, disaster recovery, and 24/7 monitoring, your data is always safe and accessible.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/10.png"
                    style={{ width: "100%", height: "100%" }}
                    className="h-full w-full object-cover"
                    alt="cloud solutions" />
            </div>
        ),
    },
    {
        title: "Maintenance Support",
        description:
            "Seamlessly integrate your applications with our robust cloud infrastructure. Our cloud solutions offer scalability, security, and reliability for your business needs. With automatic backups, disaster recovery, and 24/7 monitoring, your data is always safe and accessible.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/11.png"
                    style={{ width: "100%", height: "100%" }}
                    className="h-full w-full object-cover"
                    alt="cloud solutions" />
            </div>
        ),
    },
    {
        title: "Erection Support",
        description:
            "Seamlessly integrate your applications with our robust cloud infrastructure. Our cloud solutions offer scalability, security, and reliability for your business needs. With automatic backups, disaster recovery, and 24/7 monitoring, your data is always safe and accessible.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/12.png"
                    style={{ width: "100%", height: "100%" }}
                    className="h-full w-full object-cover"
                    alt="cloud solutions" />
            </div>
        ),
    },
    {
        title: "On-Line Support",
        description:
            "Seamlessly integrate your applications with our robust cloud infrastructure. Our cloud solutions offer scalability, security, and reliability for your business needs. With automatic backups, disaster recovery, and 24/7 monitoring, your data is always safe and accessible.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/13.png"
                    style={{ width: "100%", height: "100%" }}
                    className="h-full w-full object-cover"
                    alt="cloud solutions" />
            </div>
        ),
    },
];
export function StickyScrollRevealDemo() {
    return (
        <div className="w-full ">
            
            <StickyScroll content={content} />
        </div>
    );
}
