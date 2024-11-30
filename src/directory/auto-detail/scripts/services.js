const serviceData = [
    {
        "id": 1,
        "name": "Express Shine Package",
        "singleWash": 20,
        "membershipPrice": 200,
        "image": "https://images.unsplash.com/photo-1708805282785-77092a1628d3?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 2,
        "name": "Deluxe Glow Package ",
        "singleWash": 35,
        "membershipPrice": 270,
        "image": "https://images.unsplash.com/photo-1589362086172-2c29bea70386?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 3,
        "name": "Ultimate Sparkle Package",
        "singleWash": 50,
        "membershipPrice": 420,
        "image": "https://images.unsplash.com/photo-1708805282785-77092a1628d3?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]


$(document).ready(function () {
    // Replace the URL with the path to your serviceData.json file

    serviceData.forEach(function (item) {
        var card = `
            <div class='content__col card__lg' data-id='${item.id}'>
                <h2 class='card__title--md'>${item.name}</h2>
                    <div class='content__row'>
                        <div class='content__col--left content__even'>
                            <p class="card__text--md">
                                <b>Single wash:</b> 
                                $${item.singleWash}
                            </p>
                            <p class="card__text--md">
                                <b>Annual membership:</b> 
                                $${item.membershipPrice}
                            </p>
                        </div>
                    <div class='content__col content_even h100'>
                        <img class="card__img--md" src='${item.image}' alt='${item.name}' />
                    </div>
                </div>
                <button class='view__button button--solid--blue w80'>View</button>
            </div>
            `;

        $('#service-content').append(card);
    });

    // Event delegation for dynamically added elements
    $('#service-content').on('click', '.viewItemBtn', function () {
        $(this).closest('.service-card').find('.view-item').toggle();
    });

    $('#service-content').on('click', '.closeModal', function () {
        $(this).closest('.view-item').hide();
    });
    /*
        <div class='view-item' style='display: none;'>
        <div class='view-modal' style='display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; margin: 2%;'>
        <h1>View modal</h1>
        <p>${item.name}</p>
        
        <button class='closeModal' style='background-color: #460814fd;'>Close</button>
        </div>
        </div>
         */
});


