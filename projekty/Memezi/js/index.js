'use strict'
document.addEventListener('DOMContentLoaded', function() {
    const filter = document.querySelector('.js-show-products'); 
    const list = document.querySelector('.js-list-products');

    if (document.documentMode != undefined) {
        list.classList.add('display-ms');
    } else {
        list.classList.add('display-other');
    }

    filter.addEventListener('change', function() {
        generateProducts()
    });
    
    function generateProducts() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'js/example.json', false);
        xhr.send(null);
        if (xhr.status == 200) {
            const json = JSON.parse(`{ "list": ${xhr.responseText}}`);
            const products = json.list;
            list.innerHTML = '';
        
            for (let i = 0; i < filter.value; i++) {
                if (products[i] != undefined) {
                    let product = products[i];
                    let stock;
                    if (product.availability.name == 'ostatnia sztuka!') {
                        stock = 1;
                    } else if (product.availability.name == 'ostatnia sztuka!') {
                        stock = 0;
                    } else {
                        stock = '1+'
                    }
                    let li = `
                    <div class="product-item">
                        <div class="product-item__header">
                            <div class="product-item__stock">
                                <p class="product-item__text--stock js-stock"">
                                    sztuk: <span>${stock}</span>
                                </p>
                            </div>
                            <div class="product-item__discount">
                                <p class="product-item__text--discount">
                                    oszczędzasz: <strong>${ product.price.gross.base_float - product.price.gross.promo_float } zł</strong>
                                </p>
                            </div>
                        </div>
                        <div class="product-item__body">
                            <figure class="product-item__img">
                                <img src="https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_${product.main_image}.jpg" alt="product_img">
                            </figure>
                        </div>
                        <div class="product-item__footer">
                            <div class="product-item__prices-wrapper">
                                <p class="product-item__text--newPrice js-new-price"><strong>${product.price.gross.final}</strong></p>
                                <p class="product-item__text--oldPrice js-old-price">${product.price.gross.base}</p>
                            </div>
                            <p class="product-item__text--productName js-product-name">${product.name}</p>
                            <p class="product-item__text--producer js-producer">${product.producer.name}</p>
                        </div>
                    </div>
                    `
                    list.innerHTML += li;
                }
            }
        }

    };

    function timer() {
        let today = new Date();
        let time = [4, today.getHours(), today.getMinutes(), today.getSeconds()];

        updateTime(time);

        setInterval(function() {
            time[3]--;
            if (time[3] < 0) {
                time[3] = 59;
                time[2]--
                if (time[2]< 0) {
                    time[2] = 59;
                    time[1]--
                    if (time[1] < 0) {
                        time[1] = 23;
                        time[0] != 0 ? time[0]-- : time[0] = 4;
                    }
                }
            }
            updateTime(time);
        }, 1000)
    }

    function updateTime(time) {
        const days = document.querySelector('.js-timer-days');
        const hours = document.querySelector('.js-timer-hours');
        const minutes = document.querySelector('.js-timer-minutes');
        const seconds = document.querySelector('.js-timer-seconds');
        
        days.innerHTML = time[0];
        hours.innerHTML = time[1];
        minutes.innerHTML = time[2];
        seconds.innerHTML = time[3];
    }
    timer();
    generateProducts();
});

        // axios.get('http://localhost:3000/list').then(function (response) {
            // const products = response.data;
            // const list = document.querySelector('.js-list-products');
            // list.innerHTML = '';
        
            // for (let i = 0; i < filter.value; i++) {
            //     if (products[i] != undefined) {
            //         let product = products[i];
            //         let stock;
            //         if (product.availability.name == 'ostatnia sztuka!') {
            //             stock = 1;
            //         } else if (product.availability.name == 'ostatnia sztuka!') {
            //             stock = 0;
            //         } else {
            //             stock = '1+'
            //         }
            //         let li = `
            //         <div class="product-item">
            //             <div class="product-item__header">
            //                 <p class="product-item__text--stock js-stock"">
            //                     sztuk: <span>${stock}</span>
            //                 </p>
            //                 <p class="product-item__text--discount">
            //                     oszczędzasz: <strong>${ product.price.gross.base_float - product.price.gross.promo_float } zł</strong>
            //                 </p>
            //             </div>
            //             <div class="product-item__body">
            //                 <figure class="product-itemproduct-item__img">
            //                     <img src="https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_${product.main_image}.jpg" alt="product_img">
            //                 </figure>
            //             </div>
            //             <div class="product-item__footer">
            //                 <div class="product-item__prices-wrapper">
            //                     <p class="product-item__text--newPrice js-new-price"><strong>${product.price.gross.final}</strong></p>
            //                     <p class="product-item__text--oldPrice js-old-price">${product.price.gross.base}</p>
            //                 </div>
            //                 <p class="product-item__text--productName js-product-name">${product.name}</p>
            //                 <p class="product-item__text--producer js-producer">${product.producer.name}</p>
            //             </div>
            //         </div>
            //         `
            //         list.innerHTML += li;
            //     }

            // }
        // });

