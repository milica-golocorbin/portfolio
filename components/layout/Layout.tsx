import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        key={Math.random()}
        className="w-full min-h-[calc(100vh-6.125rem)] mx-auto leading-relaxed tracking-wider overflow-x-hidden"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default Layout;
