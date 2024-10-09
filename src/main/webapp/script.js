// Redirect based on role
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var role = document.getElementById('role').value;
    if (role === 'student') {
        window.location.href = 'student.html';
    } else if (role === 'teacher') {
        window.location.href = 'teacher.html';
    }
});

// Mock assignment submission for student
document.getElementById('assignmentForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Assignment submitted successfully!');
});

// Mock assignment upload by teacher
document.getElementById('uploadAssignmentForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Assignment uploaded successfully!');
});

// Mock grading and feedback for student
document.getElementById('gradesList')?.insertAdjacentHTML('beforeend', '<li>Assignment 1: A+ | Feedback: Excellent work!</li>');

// Mock submissions for teacher to review
document.getElementById('submissionList')?.insertAdjacentHTML('beforeend', '<li>Student: John | Assignment 1 | Grade: Pending</li>');
