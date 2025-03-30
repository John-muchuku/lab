"use client"
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import Link from './Linki';


const menu = [
  {
    title: "toyota",
    description: "Oh What a Feeling",
    images: ['to.png', 'to3.png'],
    logo: ['toyota.png']

  },
  {
    title: "mercedes",
    description: "The best or nothing",
    images: ['me.png', 'me2.png'],
    logo: ['mercedes.png']
  },
  {
    title: "bmw",
    description: "Sheer Driving Pleasure",
    images: ['be.png', 'be2.png'],
    logo: ['bmw.png']
  },

  {
    title: "volkswagen",
    description: "Think Small",
    images: ['vo.png', 'vo2.png'],
    logo: ['volkswagen.png']
  },

    {
    title: "chevrolet",
    description: "Like a Rock",
    images: ['che.png', 'che2.png'],
    logo: ['chevrolet.png']
  },

   {
    title: "Rolls Royce",
    description: "Strive for perfection",
    images: ['ro.png', 'ro2.png'],
    logo: ['rolls.png']
  },

     {
    title: "Aston Martin",
    description: "Power, Beauty, Soul",
    images: ['m.png', 'm2.png'],
    logo: ['aston.png']
  },
]

export default function index() {

  return (
    <motion.div className='mb-32'>

         <div className='text-8xl text-gr mono-text text-center mb-10'>Brands</div>
       

        <div className={styles.body}>
          {
            menu.map( (el, index) => {
              return <Link data={el} index={index} key={index}/>
            })
          }
        </div>

       

    </motion.div>
  )
}
