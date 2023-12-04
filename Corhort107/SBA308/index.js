function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
  // Validate course ID
  if (assignmentGroup.course_id !== courseInfo.id) {
    throw new Error('Invalid input: AssignmentGroup does not belong to the specified course.');
  }
  
  // Validate and process assignment data
  const assignmentData = processAssignments(assignmentGroup);
  
  // Validate and process learner submissions
  const learnerData = processLearnerSubmissions(learnerSubmissions, assignmentData);
  
  // Calculate weighted average and format result
  const result = calculateWeightedAverage(learnerData);
  
  return result;
}

function processAssignments(assignmentGroup) {
  const assignmentData = {};
  
  for (const assignmentInfo of assignmentGroup.assignments) {
    // Validate points_possible
    if (assignmentInfo.points_possible <= 0) {
      // Handle error gracefully
      console.error(`Invalid data: points_possible is zero or negative for assignment ${assignmentInfo.id}`);
      continue;
    }
    
    // Check if assignment is overdue
    const now = new Date();
    const dueDate = new Date(assignmentInfo.due_at);
    if (now > dueDate) {
      // Deduct 10 percent for late submission
      assignmentInfo.points_possible *= 0.9;
    }
    
    assignmentData[assignmentInfo.id] = assignmentInfo;
  }
  
  return assignmentData;
}

function processLearnerSubmissions(learnerSubmissions, assignmentData) {
  const learnerData = {};
  
  for (const submission of learnerSubmissions) {
    const assignmentInfo = assignmentData[submission.assignment_id];
    
    if (assignmentInfo) {
      const weightedScore = (submission.submission.score / assignmentInfo.points_possible) * 100;
      
      // If assignment is not due, do not include it
      if (new Date() > new Date(assignmentInfo.due_at)) {
        learnerData[assignmentInfo.id] = weightedScore;
      }
    } else {
      // Handle error gracefully
      console.error(`Invalid data: Submission for non-existent assignment ${submission.assignment_id}`);
    }
  }
  
  return learnerData;
}

function calculateWeightedAverage(learnerData) {
  const result = [];
  
  for (const learnerId in learnerData) {
    if (learnerData.hasOwnProperty(learnerId)) {
      const learnerTotal = Object.values(learnerData[learnerId]).reduce((acc, score) => acc + score, 0);
      const totalWeight = Object.keys(learnerData[learnerId]).length;
      
      // Calculate weighted average
      const average = learnerTotal / totalWeight;
      
      // Format result
      result.push({
        id: parseInt(learnerId),
        avg: average,
        ...learnerData[learnerId],
      });
    }
  }
  
  return result;
}

// Example usage:
const courseInfo = { id: 1, name: 'Course 1' };
const assignmentGroup = {
  id: 1,
  name: 'Assignment Group 1',
  course_id: 1,
  group_weight: 10,
  assignments: [
    { id: 101, name: 'Assignment 1', due_at: '2023-12-01', points_possible: 100 },
    { id: 102, name: 'Assignment 2', due_at: '2023-12-10', points_possible: 150 },
  ],
};

const learnerSubmissions = [
  { learner_id: 1, assignment_id: 101, submission: { submitted_at: '2023-11-28', score: 90 } },
  { learner_id: 1, assignment_id: 102, submission: { submitted_at: '2023-12-15', score: 130 } },
];

console.log(getLearnerData(courseInfo, assignmentGroup, learnerSubmissions));
// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
console.log(getLearnerData(courseInfo, assignmentGroup));