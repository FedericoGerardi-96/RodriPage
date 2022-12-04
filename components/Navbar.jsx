'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../styles';
import { navVariants } from '../utils/motion'; /* Animations: show y hidden */

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    {/* py-8 es de tailwind */}
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Image
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
        layout="fill"
        objectFit="cover"
      />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        9 de Noviembre 2022
      </h2>
      <Image
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
        layout="fill"
        objectFit="cover"
      />
    </div>
  </motion.nav>
);

export default Navbar;