// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "news-november-our-paper-exploring-safer-behaviors-for-deep-reinforcement-learning-has-been-accepted-at-aaai-2022-15-acceptance-rate-june-three-papers-have-been-accepted-at-iros-2021-centralizing-state-values-in-dueling-networks-for-multi-robot-reinforcement-learning-mapless-navigation-benchmarking-safe-deep-reinforcement-learning-in-aquatic-navigation-safe-reinforcement-learning-using-formal-verification-for-tissue-retraction-in-autonomous-robotic-assisted-surgery",
          title: ' November Our paper “Exploring Safer Behaviors for Deep Reinforcement Learning” has been accepted...',
          description: "",
          section: "News",},{id: "news-july-presenting-safety-informed-mutations-for-evolutionary-deep-reinforcement-learning-at-gecco-evorl-workshop-april-excited-to-join-prof-christopher-amato-as-a-postdoctoral-researcher-at-northeastern-university-january-our-paper-enhancing-deep-reinforcement-learning-approaches-for-multi-robot-navigation-via-single-robot-evolutionary-policy-search-has-been-accepted-at-icra-2022",
          title: ' July Presenting “Safety-Informed Mutations for Evolutionary Deep Reinforcement Learning” at Gecco EvoRL Workshop....',
          description: "",
          section: "News",},{id: "news-september-excited-to-share-our-first-collaboration-with-alp-aydeniz-robert-loftin-and-kagan-tumer-has-been-accepted-at-mrs-2023-check-out-entropy-maximization-in-high-dimensional-multiagent-state-spaces-during-the-conference-in-december-may-i-m-thrilled-to-announce-my-new-adventure-as-a-postdoctoral-researcher-at-mit-more-details-will-come-in-november-working-with-chris-amato-has-been-great-and-i-m-looking-forward-to-continuing-our-collaborations-january-our-paper-improving-deep-policy-gradients-with-value-function-search-has-been-accepted-at-iclr-2023-our-paper-safe-deep-reinforcement-learning-by-verifying-task-level-properties-has-been-accepted-at-aamas-2023-our-paper-online-safety-property-collection-and-refinement-for-safe-deep-reinforcement-learning-in-mapless-navigation-has-been-accepted-at-icra-2023",
          title: ' September Excited to share our first collaboration with Alp Aydeniz, Robert Loftin, and...',
          description: "",
          section: "News",},{id: "news-august-our-preprint-on-stateful-value-factorization-in-multi-agent-reinforcement-learning-addresses-an-important-problem-that-has-been-overlooked-in-the-marl-community-for-more-than-half-a-decade-june-our-preprint-improving-policy-optimization-via-ε-retrain-investigates-how-to-improve-policy-optimization-methods-using-restart-distributions-and-is-out-january-our-paper-enumerating-safe-regions-in-deep-neural-networks-with-provable-probabilistic-guarantees-has-been-accepted-at-aaai-2024-congratulations-to-luca-marzari-for-leading-the-project-what-a-great-start-to-2024-another-collaboration-with-the-colleagues-from-oregon-state-university-alp-aydeniz-and-kagan-tumer-has-been-accepted-at-aamas-2024-check-out-our-abstract-entropy-seeking-constrained-multiagent-reinforcement-learning-during-the-conference-in-may",
          title: ' August Our preprint “On Stateful Value Factorization in Multi-Agent Reinforcement Learning” addresses an...',
          description: "",
          section: "News",},{id: "news-january-our-works-on-stateful-value-factorization-in-multi-agent-reinforcement-learning-and-improving-policy-optimization-via-ε-retrain-have-been-accepted-at-aamas-2025",
          title: ' January Our works “On Stateful Value Factorization in Multi-Agent Reinforcement Learning” and “Improving...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
