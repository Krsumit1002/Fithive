"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { cn } from "../../lib/utils";


export const HeroParallax = ({
  products
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  return (
    <div
  ref={ref}
  className="min-h-screen py-40 overflow-hidden antialiased relative flex flex-col pb-130 [perspective:1000px] [transform-style:preserve-3d]"
>
  <Header />
  <motion.div
    style={{
      rotateX,
      rotateZ,
      translateY,
      opacity,
    }}
  >
    <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
      {firstRow.map((product) => (
        <ProductCard product={product} translate={translateX} key={product.title} />
      ))}
    </motion.div>
    <motion.div className="flex flex-row mb-20 space-x-20">
      {secondRow.map((product) => (
        <ProductCard product={product} translate={translateXReverse} key={product.title} />
      ))}
    </motion.div>
    <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
      {thirdRow.map((product) => (
        <ProductCard product={product} translate={translateX} key={product.title} />
      ))}
    </motion.div>
  </motion.div>
</div>

  );
};

export const Header = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    viewport={{ once: true }}
      className="sm:max-w-[500px] md:max-w-[850px] lg:max-w-[1100px]  mx-auto px-4 w-full relative  left-0 top-0">
      <h1 className="text-4xl md:text-7xl  font-bold dark:text-white">
        Transform Your Fitness <br /> <span className="text-4xl md:text-9xl font-bold text-red-900"> Journey</span>
      </h1>
      <p className="max-w-2xl text-2xl md:text-4xl mt-10 pt-3 dark:text-neutral-200">
      Explore expert workout plans, nutrition tips, and motivation to help you
  unlock your healthiest self. FitHive is your trusted space for sustainable 
  fitness and growth.
      </p>
    </motion.div>
  );
};

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0">
      <a href={product.link} className="block group-hover/product:shadow-2xl ">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-3xl"
          alt={product.title} />
      </a>
      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
