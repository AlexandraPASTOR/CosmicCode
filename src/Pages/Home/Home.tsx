import Discover from "../../components/Discover/Discover";
import Progress from "../../components/Progress/Progress";
import Learning from "../../components/Learning/Learning";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="flex flex-col items-center p-4 space-y-6">
            <img src="/logo-cosmic.png" alt="logo Cosmic'Code" className="h-30 p-2 "/>

            <div className="grid grid-cols-2 gap-2 w-full max-w-md">
                <section><Discover /></section>
                <section><Learning /></section>
                <section className="col-span-2"><Progress /></section>
            </div>
            <Link to="/game">
            <motion.button
                    whileTap={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
              className="px-20 py-3 bg-gradient-to-b from bg-purple-900 to-black shadow-white/10 shadow-lg hover:bg-purple-600
                text-white font-bold rounded-xl text-2xl cursor-pointer"
            >
                JOUER
            </motion.button>
            </Link>
        </div>
    )
}

export default Home