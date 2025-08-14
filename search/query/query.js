const searchStage = {
    $search: {
        index: "released_index",
        near: {
            path:"released",
            origin: new Date ("1984-06-08"),
            pivot: 2592000000,
        } 

    }
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
