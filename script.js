function generateResume() {
    // Get input data from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;

    // Save the data to localStorage (passing data to the new page)
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('education', education);
    localStorage.setItem('skills', skills);
    localStorage.setItem('experience', experience);

    // Open the resume.html page to show the resume
    window.open('resume.html', '_blank');
}

// If resume.html is loaded, populate the fields with the saved data
if (window.location.pathname.includes('resume.html')) {
    document.getElementById('name').innerText = localStorage.getItem('name');
    document.getElementById('email').innerText = localStorage.getItem('email');
    document.getElementById('phone').innerText = localStorage.getItem('phone');
    document.getElementById('education').innerText = localStorage.getItem('education');
    document.getElementById('skills').innerText = localStorage.getItem('skills');
    document.getElementById('experience').innerText = localStorage.getItem('experience');
}
