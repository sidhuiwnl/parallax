"use client";
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
        title: "Version control",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
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
        title: "Running out of content",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
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
];
export function StickyScrollRevealDemo() {
    return (
        <div className="w-full ">
            <StickyScroll content={content} />
        </div>
    );
}
