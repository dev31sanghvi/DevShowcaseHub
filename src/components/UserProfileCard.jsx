// UserProfileCard.js
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.css';
const UserProfileCard = ({ user }) => {
  return (
    <motion.div
      className="w-64 max-w-md mx-2 my-2 bg-white rounded-xl overflow-hidden shadow-md p-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Profile Photo */}
      <div className="flex items-center justify-center">
        <img
          className="h-16 w-16 rounded-full object-cover"
          src={user.profilePhoto}
          alt={`${user.name}'s Profile`}
        />
      </div>

      {/* Name Section */}
      <div className="text-center mt-2">
        <h2 className="text-lg font-bold">{user.name}</h2>
      </div>

      {/* Social Links */}
      <div className="flex justify-center mt-2">
  <a href={user.github} className="mr-1">
    <i className="fab fa-github-square text-gray-600 hover:text-gray-800"></i>
  </a>
  <a href={user.twitter} className="mr-1">
    <i className="fab fa-twitter-square text-blue-400 hover:text-blue-600"></i>
  </a>
  <a href={user.linkedin} className="mr-1">
    <i className="fab fa-linkedin text-indigo-500 hover:text-indigo-700"></i>
  </a>
  <a href={user.portfolio}>
    <i className="fas fa-link text-purple-600 hover:text-purple-800"></i>
  </a>
</div>


      {/* Tech Stack Section */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold mb-1">Tech Stack</h3>
        <p className="text-gray-700 text-sm">{user.techStack}</p>
      </div>

      {/* Featured Projects Section */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold mb-1">Featured Projects</h3>
        {user.featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="mb-2 p-2 bg-gray-100 rounded-md"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-sm font-semibold mb-1">{project.title}</h4>
            <p className="text-gray-700 text-sm mb-1">{project.description}</p>
            <div className="flex">
              <a
                href={project.githubLink}
                className="mr-1 text-blue-600 hover:text-blue-800 text-xs"
              >
                GitHub
              </a>
              <a
                href={project.liveLink}
                className="text-green-600 hover:text-green-800 text-xs"
              >
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};


// for props stuff
UserProfileCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    portfolio: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired,
    featuredProjects: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      githubLink: PropTypes.string.isRequired,
      liveLink: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default UserProfileCard;
