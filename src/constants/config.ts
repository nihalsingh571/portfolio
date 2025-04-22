type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Nihal kumar singh",
    fullName: "Nihal",
    email: "nihalsinghwithroman@gmail.com",
  },
  hero: {
    name: "Nihal kumar singh",
    p: ["I develop creative visuals, user", "interfaces and web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am an aspiring Software Developer and being a developer brings you many challenges and different view to see the teach world like each function and working of any technology that makes you think how they have developed this unique updates.
I'm also learning Devops so that to understand how the team work is envolved and all the working process behind the development and being in efficient using AI in development. 
I have worked on many levels problem of DSA using Java to be efficient in algorithm and problem solving. 
In web development I'm proficient in React. js for the frontend development and for the backend I have learnt MongoDB, SQL.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Certifications",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
