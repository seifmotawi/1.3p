<!-- Template with fade transition, contact page, form, name, email, message input and a submit button -->
<template>
    <transition name="fade">
      <div class="contact-page">
        <h3 class="typing">{{ subtitle }}</h3>
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="input-group">
            <label for="name">Your Name:</label>
            <input type="text" id="name" v-model="name" required>
          </div>
          <div class="input-group">
            <label for="email">Your Email:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="input-group">
            <label for="message">Your Message:</label>
            <textarea id="message" v-model="message" required></textarea>
          </div>
          <div class="input-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    data() {
        // Reactive data for the contact page
      return {
        subtitle: '', // Subtitle to display
        subtitles: ['Contact Me.'], // Possible subtitle to be written
        subtitleIndex: 0, //Subtitle index to keep track
        eraseTimeout: 10000, // Time before the erase effect starts
        typeTimeout: 0, // Delay time between characters typing
        erase: false,
        name: '', // Users name entered
        email: '', // Users email entered
        message: '' // Users message entered
      };
    },
    methods: {
      submitForm() {
        // Handle form submission
      },
      // Method for the typing and erasing effect
      typeSubtitle() {
        this.typeInterval = setInterval(() => {
          if (!this.erase) {
            if (this.subtitle.length < this.subtitles[this.subtitleIndex].length) {
              this.subtitle += this.subtitles[this.subtitleIndex].charAt(this.subtitle.length);
            } else {
              clearInterval(this.typeInterval);
              this.eraseInterval = setTimeout(() => {
                this.erase = true;
                this.typeSubtitle();
              }, this.eraseTimeout);
            }
          } else {
            if (this.subtitle.length > 0) {
              this.subtitle = this.subtitle.slice(0, -1);
            } else {
              clearInterval(this.typeInterval);
              this.erase = false;
              this.subtitleIndex = (this.subtitleIndex + 1) % this.subtitles.length;
              this.typeSubtitle();
            }
          }
        }, this.typeTimeout);
      },
    },
    // Start the typing/erasing effect when the component is mounted
    mounted() {
      this.typeSubtitle();
    },

  beforeUnmount() {
    // This method gets executed right before the component gets destroyed
    // Clear the interval and timeout to prevent memory leaks
    if (this.typeInterval) {
      clearInterval(this.typeInterval);
    }
    if (this.eraseInterval) {
      clearTimeout(this.eraseInterval);
    }
  },
};
  </script>
  
  <!-- Styles for the contact page -->
  <style scoped>
  .contact-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
  
  .title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .contact-form {
    width: 100%;
    max-width: 500px;
  }
  
  .input-group {
    margin-bottom: 1rem;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .input-group input, .input-group textarea {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
  }
  
  .input-group textarea {
    min-height: 150px;
    resize: vertical;
  }
  
  .input-group button {
    display: block;
    width: 100%;
    padding: 0.75rem;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .input-group button:hover {
    background-color: #2c2c2c;
  }
  
  /* Media queries for responsive design */
  @media (max-width: 600px) {
    .contact-page {
      padding: 1rem;
    }
  
    .contact-form {
      max-width: 100%;
    }
  
    .input-group textarea {
      min-height: 120px;
    }
  
    .title {
      font-size: 2rem;
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

  h3.typing {
  font-size: 2em;
  color: #ff0000;
  font-family: 'Raleway', sans-serif;
  margin-top: 0.0em;
  text-align: center;
}

h3 {
  text-align: left;
}
  </style>
  