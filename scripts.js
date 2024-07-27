document.addEventListener('DOMContentLoaded', function() {
    const courseList = document.querySelector('.course-list');

    const courses = [
        { title: 'Course 1', description: 'Description for course 1' },
        { title: 'Course 2', description: 'Description for course 2' },
        { title: 'Course 3', description: 'Description for course 3' },
    ];

    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
        `;
        courseList.appendChild(courseItem);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
    });
});
