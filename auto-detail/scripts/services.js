const serviceData = [
    {
        "id": 1,
        "name": "Express Shine Package",
        "singleWash": 20,
        "membershipPrice": 200,
        "details": [
            {
                "id": 1,
                "description": "Exterior Wash & Dry: Thorough hand wash and drying to remove dirt and grime.",

            },
            {
                "id": 2,
                "description": "Wheel Cleaning: Quick cleaning of wheels and tires for a refreshed look."
            },
            {
                "id": 3,
                "description": "Interior Vacuuming: Light vacuuming of carpets and seats to remove surface debris."
            },
            /*       {
                "id": 1,
                "description": ""
            },*/
        ],
        "image": "https://images.unsplash.com/photo-1708805282785-77092a1628d3?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 2,
        "name": "Deluxe Glow Package ",
        "singleWash": 35,
        "membershipPrice": 270,
        "details": [
            {
                "id": 1,
                "description": "Complete Interior Detailing: Deep cleaning of carpets, seats, and surfaces for a like-new appearance."
            },
            {
                "id": 2,
                "description": "Wax Application: Hand-applied wax for a lasting shine and protection."
            },
            {
                "id": 3,
                "description": "Window & Mirror Cleaning: Streak-free cleaning for crystal-clear visibility."
            }
        ],
        "image": "https://images.unsplash.com/photo-1589362086172-2c29bea70386?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 3,
        "name": "Ultimate Sparkle Package",
        "singleWash": 50,
        "membershipPrice": 420,
        "details": [
            {
                "id": 1,
                "description": "Full Exterior Detailing: Includes clay bar treatment, polish, and premium wax for ultimate shine and paint protection."
            },
            {
                "id": 2,
                "description": "Comprehensive Interior Detailing: Shampooing of carpets and upholstery, leather conditioning, and odor neutralizing."
            },
            {
                "id": 3,
                "description": "Engine Bay Cleaning: Professional cleaning and detailing of the engine bay to remove grease and grime."
            }
        ],
        "image": "https://images.unsplash.com/photo-1708805282785-77092a1628d3?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]


$(document).ready(function () {
    // Replace the URL with the path to your serviceData.json file

    serviceData.forEach(function (item) {
        var card = `
            <div class='card__lg content__col content__even' data-id='${item.id}'>
                <div class='card__details--services'>
                    <div class="card__item--pricing">
                        <p class="card__text--md">
                            $${item.membershipPrice}/year
                        </p>
                        <p class="card__text--sm">
                            $${item.singleWash} single wash
                        </p>
                    </div>
                    <div class="card__item--name">
                        <h2>${item.name}</h2>
                    </div>
                </div>
                <div class="card__section">
                    <ul class="ul__col" id="details-${item.id}">
                    </ul>
                    <button class='view__button button--solid--blue w80'>GET STARTED</button>
                </div>
                
            </div>
            `;

        $('#service-content').append(card);

        // Map over details and append to the corresponding ul
        if (item.details && item.details.length > 0) {
            item.details.forEach(function (detail) {
                $(`#details-${item.id}`).append(`<li>${detail.description}</li>`);
            });
        }
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


