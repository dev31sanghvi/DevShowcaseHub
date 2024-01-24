// App.jsx
import React from 'react';
import UserProfileCard from './components/UserProfileCard';
import Header from './components/Headesr';
import FormComponent from './components/Form';
function App() {
  const users = [
    {
      name: "John Doe",
      profilePhoto: "path/to/john-doe.jpg",
      github: "https://github.com/dev31sanghvi",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      portfolio: "https://johndoe.dev",
      techStack: "React, Node.js, JavaScript",
      featuredProjects: [
        {
          title: "Project 1",
          description: "A description of Project 1.",
          githubLink: "https://github.com/johndoe/project1",
          liveLink: "https://project1.live",
        },

      ],
    },

    {
      name: "Jane Smith",
      profilePhoto: "path/to/jane-smith.jpg",
      github: "https://github.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      portfolio: "https://janesmith.dev",
      techStack: "Vue.js, Python, HTML, CSS",
      featuredProjects: [
        {
          title: "Project 1",
          description: "A description of Project 1.",
          githubLink: "https://github.com/janesmith/project1",
          liveLink: "https://project1.live",
        },
        // Additional projects...
      ],
    },
    // User 3, 4, 5, 6...
  ];

  return (
    <>
    <div className='app'>
      <FormComponent />
    <Header />
      <div className="grid grid-cols-3 gap-4">
        {users.map((user, index) => (
          <UserProfileCard key={index} user={user} />
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
