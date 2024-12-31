import { Layout } from "@/components/Layouts/principal";
import Bento from "@/components/bentogrid";
import ProjectItem from "@/components/projectitem"; 
import { BentoItem } from "@/components/bentoitem";
import styles from "@/css/pages/home.module.css";
import { motion } from "framer-motion";

import tictactoe from "@/assets/projects/tictactoe.png";
import dashboard from "@/assets/projects/dashboard.png";

export function Home() {
    return (
        <Layout>
            <motion.span
                className={styles.iam}
                animate={{
                    fontSize: [".7em", ".9em", ".7em", ".8em"],
                }}
                transition={{
                    duration: 0.5,
                }}
            >
                Hey, my name is
            </motion.span>
            <motion.h1
                className={styles.myname}
                animate={{
                    fontSize: ["4.7em", "5.1em", "4.7em", "5em"],
                }}
                transition={{
                    duration: 0.5,
                }}
            >
                Alexander
            </motion.h1>
            <p className={styles.description}>
                A{" "}
                <span
                    className={styles.resalt}
                    data-text="freelance"
                    style={{
                        "--start-color": "#008CF0",
                        "--end-color": "#00DFD8",
                    }}
                >
                    freelance
                </span>{" "}
                full stack developer who loves{" "}
                <span
                    className={styles.resalt}
                    data-text="programming"
                    style={{
                        "--start-color": "#7928CA",
                        "--end-color": "#FF0080",
                    }}
                >
                    programming
                </span>
                , dedicated to creating and maintaining{" "}
                <span
                    className={styles.resalt}
                    data-text="services and digital experiences"
                    style={{
                        "--start-color": "#FF4D4D",
                        "--end-color": "#F9CB28",
                    }}
                >
                    services <span className={styles.andSeparator}>and</span>{" "}
                    digital experiences
                </span>{" "}
                that your users can enjoy in your company or project.
            </p>
            <h2 className={styles.projectsText}>Projects</h2>
            <Bento>
                <ProjectItem
                    columns="6"
                    url="https://tic-tac-toe-gamedo.vercel.app"
                    imgSrc={tictactoe}
                    altText="Tic Tac Toe game"
                    projectName="Tic-Tac-Toe"
                    description="Simple website where you can play {ttt} by choosing the {bsize}"
                    highlights={[
                        {key: "ttt", text: "tic tac toe", color: "#ee7bdb"},
                        {key: "bsize", text: "board size.", color: "#FD866B"},
                    ]}
                />
                <BentoItem columns="4">article2</BentoItem>
                <BentoItem columns="4">Article3</BentoItem>
                <ProjectItem
                    columns="6"
                    imgSrc={dashboard}
                    altText="Dashboard MyBot"
                    projectName="Bot Dashboard"
                    description="a web page where you can access and {configure}"
                    highlights={[
                        {key: "configure", text: "configure a discord bot.", color: "#ee7bdb"},
                    ]}
                />

                <BentoItem columns="10">Article4</BentoItem>
            </Bento>
        </Layout>
    );
}
