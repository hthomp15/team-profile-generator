generateManager = manager => {
    return `
        <div class="col-4 mt-5">
            <div class="card h-100">
                <div class="bg-primary text-white p-2">
                    <h2 class="manager-name">${manager.name}</h2>
                    <h3 class="manager-title"><i class="fa  fa-solid fa-mug-hot"></i> Manger</h3>
                </div>

                <div class="card-body bg-light">
                    <p class="bg-white manager-id card-text m-0 p-3 border">ID: ${manager.id}</p>
                    <p class="bg-white manager-email card-text m-0 p-3 border">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="bg-white manager-number card-text m-0 p-3 border">Office Number: <a href="tel:${manager.officeNumber}">${manager.officeNumber}</a></p>
                </div>
            </div>
        </div>
    
    `
}

generateEngineer = engineer => {
    return `
        <div class="col-4 mt-5">
            <div class="card h-100">
                <div class="bg-primary text-white p-2">
                    <h2 class="engineer-name">${engineer.name}</h2>
                    <h3 class="engineer-title"><i class="fa fa-solid fa-glasses"></i> Engineer</h3>
                </div>

                <div class="card-body bg-light">
                    <p class="bg-white p-1 engineer-id card-text m-0 p-3 border">ID: ${engineer.id}</p>
                    <p class="bg-white p-1 engineer-email card-text m-0 p-3 border">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="bg-white p-1 engineer-github card-text m-0 p-3 border">Github: <a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
                </div>
            </div>
        </div>

    `
}

generateIntern = intern => {
    return `
        <div class="col-4 mt-5">
            <div class="card h-100">
                <div class="bg-primary text-white p-2">
                    <h2 class="intern-name">${intern.name}</h2>
                    <h3 class="intern-title"><i class="fa fas fa-user-graduate"></i> Intern</h3>
                </div>

                <div class="card-body bg-light">
                    <p class="bg-white p-1 intern-id card-text m-0 p-3 border">ID: ${intern.id}</p>
                    <p class="bg-white p-1 intern-email card-text m-0 p-3 border">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="bg-white p-1 intern-school card-text m-0 p-3 border">School: ${intern.school}</p>
                </div>
            </div>
        </div>
    
    `
}

generatePage = (teamArr) => {

    data = JSON.parse(teamArr)
    
    pageContent = [];

    for(let i = 0; i < data.length; i++) {
        const employee = data [i];
        const role = employee.role;
        const manager = employee.officeNumber;

        if(manager) {
            const displayManager = generateManager(employee)

            pageContent.push(displayManager)
        }
        if(role === "Engineer") {
            const displayEngineer = generateEngineer(employee)

            pageContent.push(displayEngineer)
        }
        if(role === "Intern") {
            const displayIntern = generateIntern(employee)

            pageContent.push(displayIntern)
        }
    }

    const employeeCard = pageContent.join("")

    const generateTeam = generateHTML(employeeCard)

    return generateTeam;
}

const generateHTML = function (data) {
return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <header class="header bg-danger text-center text-white">
        <h1 class="p-5"> 
            My Team
        </h1> 
    </header>

    <main class="container">
        <div class="team-container  justify-content-center row">
            ${data}
        </div>
    </main> 
</body>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</html>
`
}

module.exports = generatePage;