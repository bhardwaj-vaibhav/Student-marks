
let studentsData = [];

function addStudent() {
    const studentName = document.getElementById('studentName').value;
    const physicsMarks = document.getElementById('physics').value;
    const chemistryMarks = document.getElementById('chemistry').value;
    const mathsMarks = document.getElementById('maths').value;

    if (studentName && physicsMarks && chemistryMarks && mathsMarks) {
        const physicsInput = document.getElementById('physics');
        const chemistryInput = document.getElementById('chemistry');
        const mathsInput = document.getElementById('maths');

        // Check if marks are greater than 100
        if (parseInt(physicsMarks) > 100) {
            physicsInput.style.border = '2px solid red';
            return;
        } else {
            physicsInput.style.border = '1px solid #ddd';
        }

        if (parseInt(chemistryMarks) > 100) {
            chemistryInput.style.border = '2px solid red';
            return;
        } else {
            chemistryInput.style.border = '1px solid #ddd';
        }

        if (parseInt(mathsMarks) > 100) {
            mathsInput.style.border = '2px solid red';
            return;
        } else {
            mathsInput.style.border = '1px solid #ddd';
        }

        const student = {
            name: studentName,
            physics: parseInt(physicsMarks),
            chemistry: parseInt(chemistryMarks),
            maths: parseInt(mathsMarks)
        };

        studentsData.push(student);

        displayStudents();
        displayLeaderboard();
        clearForm();
    } else {
        alert('Please enter all fields.');
    }
}


function displayStudents() {
    const studentsList = document.getElementById('studentsList');
    studentsList.innerHTML = '';

    studentsData.forEach((student, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'student-item';
        listItem.innerHTML = `<strong>${student.name}</strong> - Physics: ${student.physics}, Chemistry: ${student.chemistry}, Maths: ${student.maths}</span>`;
        studentsList.appendChild(listItem);
    });
}

function displayLeaderboard() {
    const leaderboardBody = document.getElementById('leaderboardBody');
    leaderboardBody.innerHTML = '';

    const sortedStudents = [...studentsData].sort((a, b) => {
        const averageA = (a.physics + a.chemistry + a.maths) / 3;
        const averageB = (b.physics + b.chemistry + b.maths) / 3;
        return averageB - averageA;
    });

    sortedStudents.forEach((student, index) => {
        const row = document.createElement('tr');
        const averageMarks = (student.physics + student.chemistry + student.maths) / 3;
        row.innerHTML = `<td>${index + 1}</td><td>${student.name}</td><td>${averageMarks.toFixed(2)}</td><td class="grade">${getGrade(averageMarks)}</td>`;
        leaderboardBody.appendChild(row);
    });
}

function clearForm() {
    document.getElementById('studentName').value = '';
    document.getElementById('physics').value = '';
    document.getElementById('chemistry').value = '';
    document.getElementById('maths').value = '';
}

function getGrade(averageMarks) {
    if (averageMarks >= 90) {
        return 'A';
    } else if (averageMarks >= 80) {
        return 'B';
    } else if (averageMarks >= 70) {
        return 'C';
    } else if (averageMarks >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

displayStudents();
displayLeaderboard();
