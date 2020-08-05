// Your code goes here

//home button effects 
    const homeButton = document.querySelector('#buttonHome');
        homeButton.addEventListener('click', function (event) {
            document.body.style.backgroundColor = 'black'
            });
        homeButton.addEventListener('dblclick', function (event) {
            document.body.style.backgroundColor = 'pink'
            });

// blog button effects 
    const blogButton = document.querySelector('#buttonBlog');

        blogButton.addEventListener('click', function (event) {
            document.body.style.backgroundColor = 'white'
        });
        blogButton.addEventListener('dblclick', function (event) {
            document.body.style.border = '20px solid red'
                
        });

//Logo Mouse ZOOM - Code Borrwoed from web
    function zoom(event) {
        event.preventDefault();
    
        scale += event.deltaY * -0.01;
    
        // Restrict scale
        scale = Math.min(Math.max(.5, scale), 10);
    
        // Apply scale transform
        el.style.transform = `scale(${scale})`;
        };
        
    let scale = 1;
    let el = document.querySelector('#logo');
    el.onwheel = zoom;

  
// Bus Pic Mouse ZOOM - Code Borrowed from web 
    function tzoom(event) {
            event.preventDefault();
        
            dscale += event.deltaY * -0.01;
        
            // Restrict scale
            dscale = Math.min(Math.max(.5, dscale), 10);
        
            // Apply scale transform
            del.style.transform = `scale(${dscale})`;
        };
            
    let dscale = 1;
    let del = document.querySelector('#funBusPic');
    del.onwheel = tzoom;

  

