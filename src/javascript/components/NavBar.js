import React, { useState } from "react";
import { motion } from "framer-motion";
import Items from "./Items";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <motion.nav drag animate={isOpen ? "open" : "closed"}>
                <motion.button
                    className="nav-button"
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <i className="circle-icon fas fa-bars"></i>
                </motion.button>
                <Items />
            </motion.nav>
        </div>
    );
};

export default NavBar;
