import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Professional (In Progress)',
    issuer: 'Amazon Web Services',
    date: 'Loading',
    credentialId: '--',
    icon: 'aws',
    verifyUrl: '',
  },
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: '2024',
    credentialId: '5Q0NMS1RNMRQ19KJ',
    icon: 'comptia',
    verifyUrl: 'https://www.credly.com/badges/3ee23a64-037d-4290-a4b7-ec79473d2037/public_url',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: '185d339b48334be1b26abb711fbb00a5',
    icon: 'aws',
    verifyUrl: 'https://www.credly.com/badges/42375920-8a7c-4f96-af69-f7dd2e3f7aa8/public_url',
  },
  {
    name: 'Jr Penetration Tester',
    issuer: 'TryHackMe',
    date: '2023',
    credentialId: 'THM-MOVG5VFX77',
    icon: 'tryhackme',
    verifyUrl: 'https://drive.google.com/file/d/19AxfsMuhEIAUMls6swoa3PBGrP34nOYj/view?usp=share_link',
  } 
];

const Certifications = () => {
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

  return (
    <section
      ref={ref}
      id="certifications"
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
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={`/icons/${cert.icon}.svg`}
                    alt={cert.issuer}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `/icons/${cert.icon}.png`;
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    Issued by: {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    Issued: {cert.date}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Credential ID: {cert.credentialId}
                  </p>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                    >
                      Verify Credential
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 