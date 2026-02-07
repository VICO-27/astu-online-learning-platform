import { motion } from "framer-motion";
import "../styles/topicbar.css";

const topics = [
  "C++",
  "Java",
  "DSA",
  "Why You Should Learn",
  "LeetCode",
  "Codeforces",
  "Fields",
  "CTF",
  "Plan",
];

const TopicBar = () => {
  return (
    <motion.div
      className="topic-bar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {topics.map((topic, index) => (
        <motion.div
          key={index}
          className="topic-item"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {topic}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TopicBar;
