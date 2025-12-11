let studentsList = [];

export const getAllstudents = () => {
  return studentsList.map((s) => {
    return {
      _id: s._id,
      name: s.name,
      lastName: s.lastName,
      email: s.email,
      boughtCourse: s.boughtCourse,
      paid: s.paid,
    };
  });
};

export const createStudent = (newStudent) => {
  let maxId = studentsList.map((s) => s._id).sort((a, b) => b - a)[0] ?? 0;

  console.log("Id para el nuevo usuario", maxId);



  const aux = {
    ...newStudent,
    paid: false,
    _id:maxId +1,
  };

  studentsList.push(aux)
  
};
