import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "AWS 2048 Game CI/CD Pipeline",
    description:
      "Deployed the 2048 game with a CI/CD pipeline on AWS. Dockerized the app, stored images in ECR, and automated builds and deployments to ECS Fargate using CodePipeline and CodeBuild.",
    technologies: [
      "Docker",
      "AWS ECR",
      "AWS ECS (Fargate)",
      "AWS CodePipeline",
      "AWS CodeBuild",
      "GitHub Actions",
      "CI/CD",
    ],
    github: "https://github.com/ronnienter/aws-2048-cicd-pipeline",
  },
  {
    title: "Stock Market Real-Time Analytics Pipeline",
    description:
      "Real-time stock market analytics pipeline using AWS fully managed, serverless services. The pipeline is capable of streaming, processing, storing, analyzing, and alerting on stock data with minimal operational overhead. ",
    technologies: [
      "AWS Kinesis",
      "AWS Lambda",
      "AWS DynamoDB",
      "Amazon S3",
      "AWS Glue",
      "Amazon SNS",
      "Amazon Athena",
      "Python",
      "Real-time Data Analytics"
    ],
    github: "https://github.com/ronnienter/aws-stock-market-analytics-pipeline",
  },
  {
    title: "Cybersecurity Threat Detection with SageMaker",
    description:
      "I developed a machine learning pipeline on AWS to detect anomalous network activity. Preprocessed logs with Lambda, trained an XGBoost model in SageMaker, and deployed it as an endpoint for real-time threat detection. Integrated CloudWatch for monitoring and logging..",
    technologies: ["Amazon SageMaker", "AWS Lambda", "Amazon S3", "Python", "Amazon CloudWatch", "AWS IAM", "Machine Learning", "XGBoost", "Cybersecurity"],
    github: "https://github.com/ronnienter/aws-cybersecurity-threat-detection-sagemaker",
  },

  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, projects, and experience. Built with React and Tailwind CSS for a modern and responsive design.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Cursor", "Netlify"],
    github: "https://github.com/ronnienter/ronnienter-portfolio-website",
  },
  {
    title: "Serverless 3-Tier Application",
    description:
      "A serverless 3-Tier application deployed on AWS Lambda using Terraform, featuring JWT authentication, MongoDB Atlas integration, and scalable infrastructure.",
    technologies: ["Terraform", "AWS Lambda", "S3", "CloudFront", "MERN Stack"],
    github: "https://github.com/Ofor-David/serverless_mern_app",
  },
  {
    title: "Task Management App",
    description:
      "A containerized task management app with basic CRUD operations and user authentication. Deployed on EC2 with auto scaling and load balancing",
    technologies: [
      "Terraform",
      "Nginx",
      "Docker",
      "EC2",
      "ASG",
      "ALB",
      "S3",
      "CloudFront",
      "MERN Stack",
    ],
    github: "https://github.com/Ofor-David/TasksAPP",
  },
  {
    title: "Bank Simulation App ",
    description:
      "A simple yet functional banking system written in Java that allows users to create and manage accounts, deposit and withdraw funds, view account balances and details, and track their complete transaction history. It's designed to simulate core banking operations in an intuitive and user-friendly way.",
    technologies: ["Java", "OOP"],
    github: "https://github.com/Ofor-David/Bank-Simulation-App",
  },
  {
    title: "Linux Server Setup",
    description:
      "A Linux server setup and monitoring scriptfor a web application written in bash.",
    technologies: ["Bash", "Linux"],
    github: "https://github.com/Ofor-David/linux-server-automation",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-colors duration-300 flex flex-col h-full"
            >
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 