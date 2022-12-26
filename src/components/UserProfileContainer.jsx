import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const UserProfileContainer = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="flex items-center justify-between gap-8 px-8 py-6">
      <motion.div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shadow-md flex items-center justify-center">
        <motion.img
          src={user?.picture}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  );
};

export default UserProfileContainer;
