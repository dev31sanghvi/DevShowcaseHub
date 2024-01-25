
import React, { useState } from 'react';

const FormComponent = () => {
  const techOptions = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'];
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
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => {
      if (type === 'checkbox') {

        const updatedTechStack = checked
          ? [...prevData.techStack, value]
          : prevData.techStack.filter((tech) => tech !== value);

        return {
          ...prevData,
          techStack: updatedTechStack,
        };
      } else {
        // Handle other inputs
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
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
    // here the form submit logic will be written
    console.log('Form submitted:', formData);
  };

  return (
    <>
    {/* //heading */}
      <div className="text-center text-2xl font-bold mt-8">OnBoarding Form</div>

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

          {/* tech stack section  */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Technologies
            </label>

            <div className="flex flex-wrap">
              {techOptions.map((tech) => (
                <label key={tech} className="inline-flex items-center mr-4 mb-2">
                  <input
                    type="checkbox"
                    name="techStack"
                    value={tech}
                    checked={formData.techStack.includes(tech)}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2">{tech}</span>
                </label>
              ))}
            </div>
          </div>

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
    </>
  );

};

export default FormComponent;
