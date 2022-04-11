let books = [{
        id: 0,
        name: 'Robinson Crusoe',
        author: 'Daniel Defoue',
        description: 'Survival on a dessert island',
        published: 'April 25, 1719',
        promotion: "PROMOTION",
        users: ["peter", "john"],
        recommendation: [],
        pages: 304
    },
    {
        id: 1,
        name: 'Ana Karenina',
        author: 'Leo Tolstoy',
        description: "It's too complicated... :)",
        published: '1875-1877',
        promotion: "",
        users: ["peter"],
        recommendation: [],
        pages: 865
    },
    {
        id: 2,
        name: 'Alice in Wonderland',
        author: 'Lewis Carol',
        description: "The story of a girl who disappears down a rabbit hole to a fantastic place full of bizarre adventures...",
        published: 'November 1865',
        promotion: "",
        users: ["john"],
        recommendation: [{
            to: "peter",
            from: "john"
        }],
        pages: 200
    }
]

export default books;