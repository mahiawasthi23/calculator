const display = document.getElementById('display');
        const buttons = Array.from(document.getElementsByClassName('btn'));

        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const key = e.target.innerText;

                if (key === 'AC') {
                    display.innerText = '';
                } else if (key === '=') {
                    try {
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = 'Error';
                    }
                } else if (key === 'del') {
                    display.innerText = display.innerText.slice(0, -1);
                } else if (key === 'PI') {
                    display.innerText += Math.PI.toFixed(6); 
                } else {
                    display.innerText += key;
                }
            });
        });