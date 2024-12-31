import { Navbar } from "@/components/navbar.jsx";
import { Loadline } from "@/components/loadline.jsx";
import { motion } from "framer-motion";

export function Layout({children}) {
    return (
        <>
            <Loadline />
            <Navbar />
            <motion.main
                style={{
                    marginTop: "9em",
                    marginLeft: "2.5em",
                    marginRight: "2.5em",
                }}
                animate={{
                    opacity: [0, 1],
                    translateX: [30, 0],
                    translateY: [30, 0],
                    
                }}
                transition={{ type: "tween", duration: .25, ease: "easeInOut" }}
            >
                {children}
            </motion.main>
        </>
    );
}
