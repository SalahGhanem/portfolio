let summary = document.getElementById('summary-list')
let education = document.getElementById('education-list')
let experiance = document.getElementById('experiance-list')
let certificate = document.getElementById('certificate-list')
let skills = document.getElementById('skills-list')

fetch('../json/salahghanem.json')
    .then(response => response.json())
    .then(data => {
        let db = document.createElement('button');
        let di = document.createElement('div');
        di.classList.add('class1');
        let di1 = document.createElement('div');
        let dib = document.createElement('div');
        let sum = document.createElement('h3');
        sum.textContent = data.summary;
        summary.appendChild(sum);
        let edu = document.createElement('h3');
        edu.innerHTML =
            data.education.degree + " | " +
            data.education.grade +
            "<br>" +
            data.education.university + " | " +
            data.education.year;
        education.appendChild(di);
        di.appendChild(di1);
        di.appendChild(dib);
        di1.appendChild(edu);
        dib.appendChild(db);
        data.experience.forEach(element => {
            let db = document.createElement('button');
            let di = document.createElement('div');
            di.classList.add('class1');
            let di1 = document.createElement('div');
            let dib = document.createElement('div');
            let exo1 = document.createElement('li');
            let exo2 = document.createElement('li');
            experiance.appendChild(di);
            exo1.innerHTML =
                element.title + " " + element.type;
            di1.appendChild(exo1);
            exo2.innerHTML =
                element.company + " | " + element.period;
            di1.appendChild(exo2);
            dib.appendChild(db);
            di.appendChild(di1);
            di.appendChild(dib);

        });
        data.certificates.forEach(element => {
            let db = document.createElement('button');
            let di = document.createElement('div');
            di.classList.add('class1');
            let di1 = document.createElement('div');
            let dib = document.createElement('div');
            let exo1 = document.createElement('li');
            let exo2 = document.createElement('li');
            certificate.appendChild(di);
            exo1.innerHTML =
                element.name + " | " + element.duration;
            di1.appendChild(exo1);
            exo2.innerHTML =
                element.provider + " | " + element.year;
            di1.appendChild(exo2);
            dib.appendChild(db);
            di.appendChild(di1);
            di.appendChild(dib);

        });
        data.skills.forEach(element => {
            let db = document.createElement('button');
            let di = document.createElement('div');
            di.classList.add('class1');
            let di1 = document.createElement('div');
            let dib = document.createElement('div');
            let li = document.createElement('li');
            li.textContent = element;
            skills.appendChild(di);
            di1.appendChild(li);
            dib.appendChild(db);
            di.appendChild(di1);
            di.appendChild(dib);
        });
    }).catch(err => console.log(err));

function deleted() {
}