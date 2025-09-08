import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Nnamdi Azikiwe University',
      date: '2024 - 2027',
    },
 
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 bg-gray-100 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My journey in technology started with web development, which naturally evolved into a focus on cloud infrastructure, cybersecurity, and automation. 
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I specialize in designing, deploying, and securing cloud environments using AWS, Terraform, and Docker, with an emphasis on infrastructure as code and operational efficiency.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Beyond work, I enjoy watching football, basketball, baseball, participating in CTF competitions, and exploring new tools in the cyberspace.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 