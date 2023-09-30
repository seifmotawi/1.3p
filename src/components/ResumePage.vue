<!-- Template with fade transition, resume information to fill into the cards/columns -->
<template>
    <transition name="fade">
    <div class="resume-page">
      <div class="column-wrapper">
        <ResumeColumn title="Career History." :items="careerHistory" />
        <ResumeColumn title="Education." :items="education" />
      </div>
      <div class="button-wrapper">
        <a href="../assets/SeifMotawiResume2022.pdf" download class="download-button">Download Resume</a>
      </div>
    </div>
</transition>
  </template>
  
  <script>
  import ResumeColumn from './ResumeColumn.vue';
  
  export default {
    components: {
      ResumeColumn
    },
    data() {
      return {
      careerHistory: [
  {
    year: 'January 2022 - Present',
    title: 'Global IT Support Analyst',
    company: 'Laithwaites Wines',
    description: [
      'Answer the Service Desk phone, emails and walks ups.',
      'Accurately log all faults and requests onto the call management system.',
      'Actively monitor and progress all incidents and service requests to ensure resolution within SLA.',
      'Complete local Service Desk requirements providing support for the users across the local business.',
    ],
  },
  {
    year: 'July 2021 – January 2022',
    title: 'IT Helpdesk – L1/L2 Support',
    company: 'Tonic Media Network',
    description: [
      'Management of customer enquiries via CRM, telephone & email.',
      'Provided exceptional customer service experience to Medibank employees',
      'Utilized Citrix, remote desktops, and various Medibank-related applications',
      'Managed ticketing systems, problem-solving, and phone calls concurrently',
    ],
  },
  {
    year: 'December 2020 – July 2021',
    title: 'Service Desk – Level 1 Support',
    company: 'Innovation Philosophy Pty',
    description: [
      'Installing and configuring computer hardware, software, systems, networks, printers, and scanners.',
      'Exceled in working quickly and logically in high-pressure environments',
      'Monitoring and maintaining computer systems and networks.',
      'Responding in a timely manner to service issues and requests.',
      'Providing technical support across the company (this may be in person or over the phone).',
    ],
  },

],
education: [
  {
    year: '2021 - Present',
    title: 'Bachelor of IT',
    company: 'DEAKIN UNIVERSITY',
    description: [],
  },

        ],
      };
    },
  }
  
  </script>
  
  <style>

.resume-page {
  display: center;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  padding-top: 1px; 
}

.column-wrapper {
  display: center;
  justify-content: space-around;
  width: 60%;
  margin: auto;
  padding: 20px;
}

.resume-item {
  transition: background-color 0.5s ease;
}

.resume-item:hover {
  background-color: #d52222;
  color: #fff;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Raleway', sans-serif;
}

.title {
  font-family: 'Raleway', sans-serif;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
}

.download-button {
  display: inline-block;
  background-color: #ff0000;
  color: Black;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 50px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-size: 1.2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.download-button:hover {
  background-color: #41fe00;
  transform: scale(1.05);
}

/* Media queries for responsiveness */

/* For screens with a maximum width of 768px */
@media (max-width: 768px) {
  .column-wrapper {
    flex-direction: column;
    width: 90%;
    padding: 10px;
  }

  .resume-item {
    margin-bottom: 20px;
  }

  .button-wrapper {
    padding: 10px;
  }
}

/* For screens with a maximum width of 480px */
@media (max-width: 480px) {
  .column-wrapper {
    width: 100%;
  }

  .download-button {
    font-size: 1rem;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-leave, .fade-enter-to {
  opacity: 1;
}
}
</style>