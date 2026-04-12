let summary = document.getElementById('summary-list')
let education = document.getElementById('education-list')
let experiance = document.getElementById('experiance-list')
let certificate = document.getElementById('certificate-list')
let skills = document.getElementById('skills-list')
fetch('json/salahghanem.json')
    .then(response => response.json())
    .then(data => {
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
        data.education.year; education.appendChild(edu);
        data.experience.forEach(element => {
            let exo1 = document.createElement('li');
            let exo2 = document.createElement('li');
            exo1.innerHTML =
                element.title + " " + element.type;
            experiance.appendChild(exo1);
            exo2.innerHTML =
                element.company + " | " + element.period;
            experiance.appendChild(exo2);

        });
        data.certificates.forEach(element => {
            let exo1 = document.createElement('li');
            let exo2 = document.createElement('li');
            exo1.innerHTML =
                element.name + " | " + element.duration;
            certificate.appendChild(exo1);
            exo2.innerHTML =
                element.provider + " | " + element.year;
            certificate.appendChild(exo2);

        });
        data.skills.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element;
            skills.appendChild(li);
        });
    }).catch(err => {
    summary.textContent = "fail";
    console.log(err);
  });





//   كود لتجربة انشائ كائن جيسون ثم التعامل معه خارج سكوب الفيتش
// function test() {
//     let response = await fetch('../json/salahghanem.json');
//     let data = await response.json();
//     let sum = document.createElement('h3');
//     sum.textContent = data.summary;
//     summary.appendChild(sum);
//     let edu = document.createElement('h3');
//     edu.innerHTML =
//         data.education.degree + " | " +
//         data.education.grade +
//         "<br>" +
//         data.education.university + " | " +
//         data.education.year;
//     data.education.year; education.appendChild(edu);
//     data.experience.forEach(element => {
//         let exo1 = document.createElement('li');
//         let exo2 = document.createElement('li');
//         exo1.innerHTML =
//             element.title + " " + element.type;
//         experiance.appendChild(exo1);
//         exo2.innerHTML =
//             element.company + " | " + element.period;
//         experiance.appendChild(exo2);

//     });
//     data.certificates.forEach(element => {
//         let exo1 = document.createElement('li');
//         let exo2 = document.createElement('li');
//         exo1.innerHTML =
//             element.name + " | " + element.duration;
//         certificate.appendChild(exo1);
//         exo2.innerHTML =
//             element.provider + " | " + element.year;
//         certificate.appendChild(exo2);

//     });
//     data.skills.forEach(element => {
//         let li = document.createElement('li');
//         li.textContent = element;
//         skills.appendChild(li);
//     });
// }