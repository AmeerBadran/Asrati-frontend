import { motion as Motion } from "framer-motion";

const ShapesMotion = () => {
  return (
    <div>
      <Motion.div
        initial={{ opacity: 0, y: 100, x: -100 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute 2xl:w-250 2xl:h-250 lg:w-210 lg:h-210 md:w-180 md:h-180 w-150 h-150 shape bg-secondary-100/70 -bottom-60 -left-60 md:-bottom-80 md:-left-80"
      ></Motion.div>
      <Motion.div
        initial={{ opacity: 0, y: 100, x: -100 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="absolute 2xl:w-230 2xl:h-230 lg:w-190 lg:h-190 md:w-165 md:h-165 w-135 h-135 shape bg-secondary-200 -bottom-60 -left-60 md:-bottom-80 md:-left-80"
      ></Motion.div>
      <Motion.div
        initial={{ opacity: 0, y: 100, x: -100 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1.1, delay: 0.4 }}
        className="absolute 2xl:w-210 2xl:h-210 lg:w-170 lg:h-170 md:w-150 md:h-150 w-120 h-120 shape bg-secondary-300 -bottom-60 -left-60 md:-bottom-80 md:-left-80"
      ></Motion.div>
      <Motion.div
        initial={{ opacity: 0, y: -100, x: 100 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute 2xl:w-220 2xl:h-220 lg:w-200 lg:h-200 md:w-170 md:h-170 w-130 h-130 shape2 bg-secondary-100 -top-40 -right-60 md:-top-50 md:-right-80"
      ></Motion.div>
      <Motion.div
        initial={{ opacity: 0, y: -100, x: 100 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="absolute 2xl:w-200 2xl:h-200 lg:w-180 lg:h-180 md:w-150 md:h-150 w-115 h-115 shape2 bg-secondary-200 -top-40 -right-60 md:-top-50 md:-right-80"
      ></Motion.div>
      <Motion.div
        initial={{ opacity: 0, y: -100, x: 100 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1.1, delay: 0.4 }}
        className="absolute 2xl:w-180 2xl:h-180 lg:w-160 lg:h-160 md:w-130 md:h-130 w-100 h-100 shape2 bg-secondary-300 -top-40 -right-60 md:-top-50 md:-right-80"
      ></Motion.div>
    </div>
  );
};

export default ShapesMotion;
