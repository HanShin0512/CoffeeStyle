document.addEventListener('DOMContentLoaded', function(){

    // animate products starts
    function AnimateTransition(container){
        var observer = new IntersectionObserver(function(entries, observer){
            entries.forEach(function(entry){
                if(entry.isIntersecting){
                    container.classList.add('loaded');
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(container);
    }

    //select all products
    var productContainer = document.querySelectorAll('.product-container');
    productContainer.forEach(function(container) {
        var products = container.querySelectorAll('div');
        products.forEach(function(div) {
            AnimateTransition(div);
        });
    });

    var magazineContainers = document.querySelectorAll('.coffee-magazine .offer');
    magazineContainers.forEach(function(container){
        AnimateTransition(container);
    });

    var articleContainer = document.querySelectorAll('.article-container .articles');
    articleContainer.forEach(function(container){
        AnimateTransition(container);
    });

    var subscribe = document.querySelectorAll('.subscribe');
    subscribe.forEach(function(container){
        AnimateTransition(container);
    })
    // animate products ends

    // animate explore products button starts
    function transitButton(container){
        const Containers = document.querySelectorAll(container);

        Containers.forEach(Container => {
            const imageContainer = Container.querySelector('img');
            const button = Container.querySelector('.explore-products');

            imageContainer.style.transition = 'filter 0.3s ease';
            button.style.transition = 'opacity 0.3s ease, bottom 0.3s ease';

            Container.addEventListener('mouseenter', () => {
                imageContainer.style.filter = 'brightness(85%)';
                button.style.bottom = '6%';
                button.style.opacity = '1';
            });

            Container.addEventListener('mouseleave', () => {
                imageContainer.style.filter = 'brightness(100%)';
                button.style.bottom = '2%';
                button.style.opacity = '0';
            });
        })
        
    }

    transitButton('.explore-container');
    // animate explore products button ends

    //animate read more button starts
    function transitReadMore(container) {
        const Containers = document.querySelectorAll(container);
    
        Containers.forEach(Container => {
            const image = Container.querySelector('img');
            const button = Container.querySelector('.read-more');
    
            image.style.transition = 'filter 0.3s ease';
            button.style.transition = 'opacity 0.3s ease, bottom 0.3s ease';
    
            Container.addEventListener('mouseenter', () => {
                image.style.filter = 'brightness(85%)';
                button.style.bottom = '42%';
                button.style.opacity = '1';
            });
    
            Container.addEventListener('mouseleave', () => {
                image.style.filter = 'brightness(100%)';
                button.style.bottom = '40%';
                button.style.opacity = '0';
            });
        });
    }
    
    // Call the function
    transitReadMore('.readmore-container');
    //animate read more function ends

    //subscribe form starts
    document.getElementById("subscribeForm").addEventListener("submit", function(event) {
        // Prevent default form submission behavior
        event.preventDefault();
        
        document.querySelector("#sub-btn").value = "Loading..."

        setTimeout(function() {

            document.getElementById("subscribeForm").style.display = "none"
            document.querySelector(".thank-you").style.display = "block"
        }, 2000);
    }); 
    //subscribe form ends
    
});