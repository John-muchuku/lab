"use client";
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import LinkItem from './Linki';

const menu = [
  { title: "toyota" },
  { title: "mercedes" },
  { title: "bmw" },
  { title: "volkswagen" },
  { title: "chevrolet" },
  { title: "Rolls Royce" },
  { title: "Aston Martin" },
];

export default function Index() {
  return (
    <motion.div className='mb-32'>
      <div className='text-8xl text-gray-900 mono-text text-center mb-10'>Brands</div>
      <div className={styles.body}>
        {menu.map((el, index) => (
          <LinkItem data={el} index={index} key={index} />
        ))}
      </div>
    </motion.div>
  );
}
