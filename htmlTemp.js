module.exports = {generateHtml};

function generateHtml(company) {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <div class="container d-flex justify-content-center">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">My Team</a>
            </nav>
        </div>
    
        <!-- Team -->
        <div class="row d-flex justify-content-center">
            ${company.join("")}
        <div>
    </body>
    </html>
    `
}