'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import styles from "./v1.module.css";

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["400", "700"],
    subsets: ["latin"],
});

/**
 * Minimal reimplementation of react-simple-typewriter's useTypewriter,
 * so the archived v1 page needs no extra dependency.
 */
function useTypewriter(words: string[], typeSpeed = 120, deleteSpeed = 60, pause = 1500) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIndex % words.length];

        if (!deleting && text === current) {
            const timeout = setTimeout(() => setDeleting(true), pause);
            return () => clearTimeout(timeout);
        }

        if (deleting && text === "") {
            setDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setText((prev) =>
                deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
            );
        }, deleting ? deleteSpeed : typeSpeed);

        return () => clearTimeout(timeout);
    }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

    return text;
}

const TYPEWRITER_WORDS = [
    "Software developer",
    "Gamer",
    "Tech Enthusiast",
    "Problem Solver",
    "Knowledge Seeker",
];

const socials = [
    { img: "/v1/social-logos/linkedinc.png", link: "https://www.linkedin.com/in/yuvalelarat/", alt: "LinkedIn" },
    { img: "/v1/social-logos/githubc1.png", link: "https://github.com/yuvalelarat", alt: "GitHub" },
];

const skills = [
    { name: "HTML", img: "htmlc.png" },
    { name: "CSS", img: "cssc.png" },
    { name: "JavaScript", img: "jsc.png" },
    { name: "Python", img: "pythonc.png" },
    { name: "React", img: "reactc.png" },
    { name: "Node.js", img: "nodejsc.png" },
    { name: "MongoDB", img: "mongodbc.png" },
    { name: "PostgreSQL", img: "postgresqlc.png" },
    { name: "Git", img: "gitc.png" },
    { name: "GitHub", img: "githubc.png" },
];

const projects = [
    {
        id: 1,
        img: "/v1/project-pics/TripSync.png",
        text: "TripSync",
        info: "(UNFINISHED) Collaborative trip planning with friends!",
        tech: "React, Nodejs(Express), postgreSQL",
        link: "https://github.com/yuvalelarat/TripSync",
    },
    {
        id: 2,
        img: "/v1/project-pics/tagiac.png",
        text: "Tagia",
        info: "CS degree project for ordering and managing events (backend team).",
        tech: "React, Nodejs(Express), MongoDB",
        link: "https://github.com/yuvalelarat/order-management-system",
    },
    {
        id: 3,
        img: "/v1/project-pics/poneglyphc.png",
        text: "Poneglyph",
        info: "Encode/decode text in images and download or share with others users.",
        tech: "Python, Flask, SQLite, Bootsrap",
        link: "https://github.com/yuvalelarat/Poneglyph",
    },
    {
        id: 4,
        img: "/v1/project-pics/zombiegamec.png",
        text: "Zombie Game",
        info: "OOP course project, all the characters designs were created by me.",
        tech: "C#, WinForms",
        link: "https://github.com/yuvalelarat/Zombie-Game",
    },
    {
        id: 5,
        img: "/v1/project-pics/discordbotc.png",
        text: "Discord Music Bot",
        info: "Discord bot that can play music/playlists from YouTube.",
        tech: "Python",
        link: "https://github.com/yuvalelarat/Discord-Music-Bot",
    },
];

export default function V1Portfolio() {
    const typed = useTypewriter(TYPEWRITER_WORDS);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () =>
        setCurrentIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
    const handleNext = () =>
        setCurrentIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

    const card = projects[currentIndex];

    return (
        <div className={`${poppins.variable} ${styles.page}`}>
            <Link href="/" className={styles.backLink}>
                ← Back to current portfolio
            </Link>

            {/* Top */}
            <div className={styles.topdiv}>
                <h1>Yuval Elarat</h1>
                <h3>
                    {typed}
                    <span className={styles.cursor}>|</span>
                </h3>
            </div>

            {/* Mid */}
            <div className={styles.hellodiv}>
                <p style={{ textAlign: "center", margin: 0 }}>
                    Hello my name is Yuval, welcome to my portfolio!
                </p>
                <p className={styles.underline}>yuvalelarat@gmail.com</p>

                <div className={styles.socialdiv}>
                    {socials.map((item) => (
                        <a
                            key={item.alt}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIconLink}
                        >
                            <Image
                                src={item.img}
                                alt={item.alt}
                                width={25}
                                height={25}
                                className={styles.socialIconImg}
                            />
                        </a>
                    ))}
                </div>
            </div>

            <div className={styles.aboutdiv}>
                <div>
                    <h4 className={styles.underline}>Experience:</h4>
                    <p className={styles.expText}>Software Engineer</p>
                    <p className={styles.expText}>IDF (J6 &amp; Cyber Defense)</p>
                    <p className={styles.expText}>2023-Present</p>
                </div>
                
                <div>
                    <h4 className={styles.underline}>Skills:</h4>
                    <div className={styles.gallery}>
                        {skills.map((skill) => (
                            <div key={skill.name} className={styles.galleryItemContainer}>
                                <Image
                                    src={`/v1/skill-logos/${skill.img}`}
                                    alt={skill.name}
                                    width={50}
                                    height={50}
                                    className={styles.galleryItem}
                                />
                                <p className={styles.imageText}>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Projects */}
            <div className={styles.sliderContainer}>
                <h4 className={styles.projectsTitle}>My projects:</h4>
                <div className={styles.slider}>
                    <button
                        className={`${styles.sliderButton} ${styles.left}`}
                        onClick={handlePrev}
                        aria-label="Previous project"
                    >
                        ❮
                    </button>
                    <div className={styles.card}>
                        <Image
                            src={card.img}
                            alt={card.text}
                            width={250}
                            height={170}
                            className={styles.cardImg}
                        />
                        <h4 style={{ marginTop: 0, marginBottom: "5px" }}>{card.text}</h4>
                        <p className={styles.cardInfo} style={{ margin: 0 }}>
                            {card.info}
                        </p>
                        <p style={{ margin: 0, textDecoration: "underline" }}>Made with:</p>
                        <p style={{ margin: 0 }}>{card.tech}</p>
                        <a href={card.link} target="_blank" rel="noopener noreferrer">
                            <button className={styles.codeLink}>Source code on github</button>
                        </a>
                    </div>
                    <button
                        className={`${styles.sliderButton} ${styles.right}`}
                        onClick={handleNext}
                        aria-label="Next project"
                    >
                        ❯
                    </button>
                </div>
                <div className={styles.dotsContainer}>
                    {projects.map((project, index) => (
                        <span
                            key={project.id}
                            className={`${styles.dot} ${currentIndex === index ? styles.active : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom */}
            <footer className={styles.bottomdiv}>
                <p className={styles.bottomp}>
                    I know nothing about design but I tried my best &#128517;
                    <br /> © Made by Yuval Elarat{" "}
                </p>
            </footer>
        </div>
    );
}
