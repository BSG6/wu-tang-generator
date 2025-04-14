document.querySelector('.generate').addEventListener('click',genName)

    function genName(){
        
        //create variables for options selected from html
        let vibe = document.querySelector('#one').value;
        let element = document.querySelector('#two').value;
        let weapon = document.querySelector('#three').value;
        let talent = document.querySelector('#four').value;
        let soul = document.querySelector('#five').value;
        console.log("Soul:", soul);
        // how do i call it if i have multiple queries???
        let entry = `vibe=${vibe}&element=${element}&weapon=${weapon}&talent=${talent}&soul=${soul}`
        fetch(`/api?${entry}`)
                .then (res => res.json())
                .then(data => {
                    console.log(data)
                    document.querySelector('.display').innerHTML = data.name
                    if (data.name) {
                        // Display the generated name
                        
                    } else if (data.error) {
                        alert("Error: " + data.error);
                    }
                
                })
                .catch(err => {
                    console.log(`error ${err}`)
                })
    }