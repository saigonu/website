import React, { useEffect, useState } from "react";
import { SiFirebase, SiMysql, SiCplusplus, SiAmazondynamodb, SiAngular } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { motion } from "framer-motion";

import {
    SiGit,
    SiDocker,
    SiNextdotjs as SiNextJs,
    SiReact,
    SiTailwindcss as SiTailwindCSS,
    SiTypescript,
    SiSwift,
    SiJavascript,
    SiPython,
    SiGo,
    SiTerraform,
    SiGrafana,
    SiDotnet,
} from "react-icons/si";
import { TechItem } from "../components/TechItem";
import RepoItem from "../components/RepoItem";

interface Repo {
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
}

const Tech = () => {
    const [publicRepos, setPublicRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPublicRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/saigonu/repos?type=public&per_page=100`);
                if (!response.ok) {
                    throw new Error(`Error fetching public repositories: ${response.statusText}`);
                }
                const repos = await response.json();
                setPublicRepos(repos);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPublicRepos();
    }, []);

    const filteredRepos = publicRepos.filter(repo => repo.name !== "saigonu");

    return (
        <div className="mt-36 w-full">
            <h1 className="mt-39 font-bold text-4xl md:text-5xl mb-12">Tech</h1>

            <h2 className="font-medium text-3xl mb-12">I.</h2>
            <h3 className="font-medium text-xl mb-12">Tech Stack</h3>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-6">
                I have experience with various programming languages and cutting-edge technologies. This versatility
                allows me to adapt to project requirements and deliver optimal solutions.
            </p>
            <div className="w-full flex flex-wrap flex-row justify-center p-1 rounded-md bg-white/10 dark:bg-black/10 mb-12">
                <TechItem icon={SiTypescript} name="TypeScript" />
                <TechItem icon={SiGo} name="Go" />
                <TechItem icon={SiReact} name="ReactJS" />
                <TechItem icon={SiJavascript} name="JavaScript" />
                <TechItem icon={SiNextJs} name="NextJS" />
                <TechItem icon={SiTailwindCSS} name="TailwindCSS" />
                <TechItem icon={SiCplusplus} name="C++" />
                <TechItem icon={SiFirebase} name="Firebase" />
                <TechItem icon={SiMysql} name="MySQL" />
                <TechItem icon={SiAmazondynamodb} name="DynamoDB" />
                <TechItem icon={SiAngular} name="Angular" />
                <TechItem icon={SiGit} name="Git" />
                <TechItem icon={SiPython} name="Python" />
                <TechItem icon={FaAws} name="AWS" />
                <TechItem icon={SiDocker} name="Docker" />
                <TechItem icon={SiSwift} name="Swift" />
                <TechItem icon={SiTerraform} name="Terraform" />
                <TechItem icon={SiGrafana} name="Grafana" />
                <TechItem icon={SiDotnet} name=".NET" />
            </div>
            <h2 className="font-medium text-3xl mb-12">II.</h2>
            <h3 className="font-medium text-xl mb-12">Tools</h3>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide ml-4 mb-6">
                <li>
                    <a
                        className="underline underline-offset-2 decoration-2 decoration-white-20 hover:text-white hover:cursor-alias"
                        href="https://arc.net/"
                    >
                        Arc
                    </a>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">[ Browser ]</span>
                </li>
                <li>
                    <a
                        className="underline underline-offset-2 decoration-2 decoration-white-20 hover:text-white hover:cursor-alias"
                        href="https://obsidian.md/"
                    >
                        Obsidian
                    </a>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">[ Note-taking ]</span>
                </li>
                <li>
                    <a
                        className="underline underline-offset-2 decoration-2 decoration-white-20 hover:text-white hover:cursor-alias"
                        href="https://ghostty.org/"
                    >
                        Ghostty
                    </a>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">[ Terminal Emulator ]</span>
                </li>

                <li>
                    <a
                        className="underline underline-offset-2 decoration-2 decoration-white-20 hover:text-white hover:cursor-alias"
                        href="https://code.visualstudio.com/"
                    >
                        Visual Studio Code
                    </a>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">[ Primary IDE ]</span>
                </li>
                <li>
                    <a
                        className="underline underline-offset-2 decoration-2 decoration-white-20 hover:text-white hover:cursor-alias"
                        href="https://neovim.io/"
                    >
                        Neovim
                    </a>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">[ Secondary IDE ]</span>
                </li>
                <li>
                    <a
                        className="underline underline-offset-2 decoration-2 decoration-white-20 hover:text-white hover:cursor-alias"
                        href="https://github.com/nikitabobko/AeroSpace"
                    >
                        Aerospace
                    </a>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">[ Window Manager ]</span>
                </li>
                <li>
                    <a
                        className="underline underline-offset-2 decoration-2 decoration-white-20 hover:text-white hover:cursor-alias"
                        href="https://podman.io/"
                    >
                        Podman
                    </a>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        [ Docker Desktop Alternative ]
                    </span>
                </li>
                <li>
                    <a
                        className="underline underline-offset-2 decoration-2 decoration-white-20 hover:text-white hover:cursor-alias"
                        href="https://insomnia.rest/"
                    >
                        Insomnia
                    </a>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">[ Curl Requests UI ]</span>
                </li>
                <li>
                    <a
                        className="underline underline-offset-2 decoration-2 decoration-white-20 hover:text-white hover:cursor-alias"
                        href="https://www.raycast.com/"
                    >
                        Raycast
                    </a>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">[ Spotlight ]</span>
                </li>
                <li>
                    <a
                        className="underline underline-offset-2 decoration-2 decoration-white-20 hover:text-white hover:cursor-alias"
                        href="https://cleanshot.com/"
                    >
                        CleanShot X
                    </a>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">[ Screen-Shotting/Recording ]</span>
                </li>
            </p>
        </div>
    );
};

export default Tech;
