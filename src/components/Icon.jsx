import { motion } from "motion/react";

const Icon = ({ icon }) => {
  return (
    // <div className="bg-gray-200 text-primary text-[30px] font-bold">{icon}</div>
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeIn",
      }}
      className="kbd kbd-xl text-3xl font-bold text-primary bg-transparent"
    >
      {icon}
    </motion.div>
  );
};
export default Icon;
