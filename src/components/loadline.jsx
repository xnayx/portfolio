import {useState} from "react";
import {motion} from "framer-motion";
import styles from "@/css/components/loadline.module.css";

export function Loadline() {
    const [completed, setComplete] = useState(false);

    return (
        <motion.div
            style={{
                height: "2px",
                background: "#fff",
                position: "fixed",
                top: 0,
                left: 0,
            }}
            className={completed ? styles.hidden : ""}
            initial={{width: '0%'}}
            animate={{width: "100%"}}
            transition={{duration: 0.3}}
            onAnimationComplete={() => setComplete(c => !c)}
            exit={{opacity: 0}}
        ></motion.div>
    );
}
