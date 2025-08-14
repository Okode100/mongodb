const searchStage = {
  $search: {
    index: "released_index",
    range: {
      path: "released",
      gt: new Date("1987-01-01"),
      lt: new Date("1990-01-01"),
    },
  },
};

const projectStage = {
    $project: {
        _id: 0,
        title: 1,
        released: 1,
        score: { $meta: "searchScore" },
    },
};

const limitStage = { $limit: 10 };
