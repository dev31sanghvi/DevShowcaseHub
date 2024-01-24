// FormComponent.js

import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    github: '',
    linkedin: '',
    twitter: '',
    techStack: '',
    projects: [
      { name: '', githubLink: '', liveDemoLink: '' },
      { name: '', githubLink: '', liveDemoLink: '' },
      { name: '', githubLink: '', liveDemoLink: '' },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      projects: prevData.projects.map((project, i) =>
        i === index ? { ...project, [name]: value } : project
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for form submission or API call here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">User Details</h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Social Links */}
        <div className="mb-4">
          <label htmlFor="github" className="block text-sm font-medium text-gray-700">
            GitHub
          </label>
          <input
            type="text"
            id="github"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
            LinkedIn
          </label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
            Twitter
          </label>
          <input
            type="text"
            id="twitter"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Tech Stack */}
        {/* <div className="mb-4">
          <label htmlFor="techStack" className="block text-sm font-medium text-gray-700">
            Choose Type / Select Type
          </label>
          <select
            id="techStack"
            name="techStack"
            value={formData.techStack}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="" disabled>
              Select Tech Stack
            </option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Full Stack</option>
          </select>
        </div> */}

        {/* Feature Projects */}
        <h2 className="text-2xl font-semibold mb-4">Feature Projects</h2>
        {formData.projects.map((project, index) => (
          <div key={index} className="mb-4">
            <label htmlFor={`projectName${index}`} className="block text-sm font-medium text-gray-700">
              Project Name
            </label>
            <input
              type="text"
              id={`projectName${index}`}
              name="name"
              value={project.name}
              onChange={(e) => handleProjectChange(index, e)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />

            <label htmlFor={`githubLink${index}`} className="block text-sm font-medium text-gray-700 mt-2">
              GitHub Link
            </label>
            <input
              type="text"
              id={`githubLink${index}`}
              name="githubLink"
              value={project.githubLink}
              onChange={(e) => handleProjectChange(index, e)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />

            <label htmlFor={`liveDemoLink${index}`} className="block text-sm font-medium text-gray-700 mt-2">
              Live Demo Link
            </label>
            <input
              type="text"
              id={`liveDemoLink${index}`}
              name="liveDemoLink"
              value={project.liveDemoLink}
              onChange={(e) => handleProjectChange(index, e)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
        ))}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
