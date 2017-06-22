```js{
  currentUser: {
    id: 1,
    name: "Rick Sanchez"
  },

  errors: {
    errors: []
  },

  projects: {
    1: {
      id: 1,
      title: "Anatomy Park",
      main_image_url: "anatomypark.png",
      description: "Jurassic Park clone",
      category: "design",
      creator_id: 2
      }
    }
    2: {
      id: 2,
      title: "Interdimensional Cable Box",
      main_image_url: "icb-image.png",
      description: "Like Optimum, but better",
      category_id: "technolgy",
      creator_id: 3
  },

  users: {
    1: {
      id: 1,
      name: "App Academy"
    },
    2: {
      id: 2,
      name: "Morty Smith"
    },
    3: {
      id: 3,
      name: "Jerry smith"
    }
  }

  projectDetail: {
    id: 1,
    title: "Anatomy Park",
    creator_name: "Rick Sanchez",
    main_image_url: "anatomypark.png",
    description: "Jurrasic Park clone",
    category: "design",
    details: "",
    end_date: "09/15/2017",
    funding_goal: 5000
  }

    rewards: {
      1: {
        id: 1,
        title: "Day at the park",
        amount: 10,
        limit: 50,
        description: "Spend a full day at Anatomy Park!",
        pledges: {
          1: {
            id: 1,
            backer_name: "Pencilvester"
          },
          2: {
            id: 2,
            backer_name: "Nathaniel"
          }
        }
      }
    }
  },

  }
}```
