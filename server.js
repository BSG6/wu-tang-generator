const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
const page = url.parse(req.url).pathname;
const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == '/') {
        fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        });
    }

    else if (page == '/api') {
        console.log(req)
        if('vibe' in params && 'element' in params && 'weapon' in params && 'talent' in params && 'soul' in params){
            let {vibe,
                element,
                weapon,
                talent,
                soul }
                = params 
                // playing around with option combos
        // are these good options....?? Chaotic Ghost lmaoooo
        console.log(vibe,element,weapon,talent,soul);
        console.log(`Lil' ${talent} ${soul}`);
        console.log(`Master ${element} of the ${weapon}`);
        console.log(`${vibe}${element}`);
        console.log(`${talent} of the ${weapon}`);
        console.log(`Supreme ${vibe}${soul}`);
        console.log(`Lord ${element}${talent}`);
        console.log(`Professor ${soul}`);
        console.log(`Young ${soul}${vibe}`);
        // hmmmm how do i "store" these choices.. maybe an array
        //I feel like i dont know when to use const (eye roll)
        const combos = [
            `Lil' ${talent} ${soul}`,
            `Master ${element} of the ${weapon}`,
            `${vibe}${element}`,
            `${talent} of the ${weapon}`,
            `Supreme ${vibe} ${soul}`,
            `Lord ${element} ${talent}`,
            `Professor ${soul}`,
            `Young ${soul} ${vibe}`
        ];
        //math.random to display one option?
        const name = combos[Math.floor(Math.random()* combos.length)]

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ name }));
    } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Something is missing" }));
    }
}
    else if (page == '/css/style.css'){
        fs.readFile('css/style.css', function(err, data) {
        res.write(data);
        res.end();
        });
    }else if (page == '/js/main.js'){
        fs.readFile('js/main.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
        });
    }else{
        figlet('404!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
        });
    }
    });

    server.listen(8001);
