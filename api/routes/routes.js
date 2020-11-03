const COURSES = [
  {
    id: 1,
    name: "Course 1",
    status: "Draft",
    instructors: [
      { name: "Jan", image: "" },
      { name: "Roman", image: "" }
    ],
    imageUrl: "http://localhost:3000/course.jpg"
  },
  {
    id: 2,
    name: "Course 2",
    status: "Draft",
    instructors: [],
    imageUrl: "http://localhost:3000/course_2.jpg"
  },
  {
    id: 5,
    name: "Course 3",
    status: "Prepared",
    instructors: [
      { name: "Lech", image: "" },
      { name: "Roman", image: "" }
    ],
    imageUrl: "http://localhost:3000/course_3.jpg"
  }
];

const COURSE_DETAILS = [
  {
    id: 1,
    name: "Course 1",
    status: "Draft",
    instructors: [
      { name: "Jan", image: "" },
      { name: "Roman", image: "" }
    ],
    images: [
      "http://localhost:3000/course.jpg",
      "http://localhost:3000/course_2.jpg",
      "http://localhost:3000/course_3.jpg"
    ]
  },
  {
    id: 5,
    name: "Course 3",
    status: "Prepared",
    instructors: [
      { name: "Lech", image: "" },
      { name: "Roman", image: "" }
    ],
    images: [
      "http://localhost:3000/course.jpg",
      "http://localhost:3000/course_2.jpg",
      "http://localhost:3000/course_3.jpg"
    ]
  },
  {
    id: 2,
    name: "Course 2",
    status: "Draft",
    instructors: [],
    images: [
      "http://localhost:3000/course.jpg",
      "http://localhost:3000/course_2.jpg",
      "http://localhost:3000/course_3.jpg"
    ]
  }
];
var appRouter = function(app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });

  app.get("/course", function(req, res) {
    var data = COURSES;
    res.status(200).send(data);
  });

  app.get("/course/:num", function(req, res) {
    var num = req.params.num;
    var course = COURSE_DETAILS.find(course => course.id == num);
    if (course) {
      res.status(200).send(course);
    } else {
      res.status(400).send({ message: "invalid number supplied" });
    }
  });
};
module.exports = appRouter;
