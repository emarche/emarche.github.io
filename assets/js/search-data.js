// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
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
          section: "News",},{id: "news-january-our-paper-enumerating-safe-regions-in-deep-neural-networks-with-provable-probabilistic-guarantees-has-been-accepted-at-aaai-2024-congratulations-to-luca-marzari-for-leading-the-project-what-a-great-start-to-2024-another-collaboration-with-the-colleagues-from-oregon-state-university-alp-aydeniz-and-kagan-tumer-has-been-accepted-at-aamas-2024-check-out-our-abstract-entropy-seeking-constrained-multiagent-reinforcement-learning-during-the-conference-in-may",
          title: ' January Our paper “Enumerating Safe Regions in Deep Neural Networks with Provable Probabilistic...',
          description: "",
          section: "News",},{id: "news-september-our-work-designing-control-barrier-function-via-probabilistic-enumeration-for-safe-reinforcement-learning-navigation-has-been-accepted-for-publication-in-the-ieee-robotics-and-automation-letters-january-our-works-on-stateful-value-factorization-in-multi-agent-reinforcement-learning-and-improving-policy-optimization-via-ε-retrain-have-been-accepted-at-aamas-2025",
          title: ' September Our work “Designing Control Barrier Function via Probabilistic Enumeration for Safe Reinforcement...',
          description: "",
          section: "News",},{
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
