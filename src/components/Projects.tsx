import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "AWS 2048 Game CI/CD Pipeline",
    description:
      "Automated deployment of the 2048 game using AWS CodePipeline and CodeBuild. Containerized with Docker, stored in ECR, and deployed on ECS Fargate with zero manual steps.",
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
      "Built a near real-time stock analytics pipeline with Kinesis, Lambda, and DynamoDB. Historical queries via Athena and Glue, plus trend alerts through SNS.",
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
      "I developed a machine learning pipeline on AWS to detect anomalous network activity. Preprocessed logs with Lambda, trained an XGBoost model in SageMaker, and deployed it as an endpoint for real-time threat detection. Integrated CloudWatch for monitoring and logging.",
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
    title: "Production-grade 3-Tier Architecture",
    description:
      "A serverless 3-Tier application deployed on AWS Lambda using Terraform, featuring JWT authentication, MongoDB Atlas integration, and scalable infrastructure.",
    technologies: ["Terraform", "AWS Lambda", "S3", "CloudFront", "MERN Stack"],
    github: "https://github.com/ronnienter/AWS-Grade-3-Tier-Architecture",
  },
  {
    title: "Multicloud-Weather-Tracker-Terraform",
    description:
      "Deployed a weather tracker app across AWS and Azure with disaster recovery. Primary hosting on S3 + CloudFront, backup on Azure Blob Storage, and DNS failover via Route 53. Infrastructure fully automated with Terraform.",
    technologies: [
      "Terraform",
      "AWS S3",
      "CloudFront",
      "AWS Blob Storage",
      "Route 53",
      "Multi-Cloud",
      "Disaster Recovery",
    ],
    github: "https://github.com/ronnienter/aws-multicloud-weather-tracker-terraform",
  },
  {
    title: "WordPress 3-Tier Architecture",
    description:
      "Deployed WordPress on AWS using a secure 3-Tier architecture. Setup includes VPC with public/private subnets, EC2 in Auto Scaling Group, RDS for the database, EFS for shared storage, and an ALB with SSL termination.",
    technologies: ["AWS VPC", "EC2", "RDS", "Auto Scaling", "ALB", "Elastic File System", "NAT Gateway", "IAM", "Security Groups", "SSL/TLS"],
    github: "https://github.com/ronnienter/aws-3-Tier-wordpress",
  },
  {
    title: "SpotiChop (Chrome Extension)",
    description:
      "SpotiChop is a lightweight Chrome extension that skips Spotify Web tracks at a custom cutoff time. I wanted to automate skipping at a set time without touching the player every time.",
    technologies: ["JavaScript", "Chrome Extensions", "Web Automation"],
    github: "https://github.com/ronnienter/SpotiChop",
  },
  {
    title: "n8n Phishing Check",
    description:
      "Automated workflow in n8n that scans submitted URLs with the VirusTotal API and emails a security report. Designed for phishing detection and lightweight SOC automation.",
    technologies: ["n8n", "VirusTotal API", "Automation", "Security"],
    github: "https://github.com/ronnienter/n8n-phishing-check",
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