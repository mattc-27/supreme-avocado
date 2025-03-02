const serviceData = [
    {
        "id": 1,
        "name": "Express Shine Package",
        "singleWash": 20,
        "membershipPrice": 200,
        "details": [
            {
                "id": 1,
                "name": "Exterior Wash & Dry",
                "description": "Thorough hand wash and drying to remove dirt and grime.",

            },
            {
                "id": 2,
                "name": "Wheel Cleaning",
                "description": "Quick cleaning of wheels and tires for a refreshed look."
            },
            {
                "id": 3,
                "name": "Interior Vacuuming",
                "description": "Light vacuuming of carpets and seats to remove surface debris."
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
                "name": "Complete Interior Detailing",
                "description": "Deep cleaning of carpets, seats, and surfaces for a like-new appearance."
            },
            {
                "id": 2,
                "name": "Wax Application",
                "description": "Hand-applied wax for a lasting shine and protection."
            },
            {
                "id": 3,
                "name": "Window & Mirror Cleaning",
                "description": "Streak-free cleaning for crystal-clear visibility."
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
                "name": "Full Exterior Detailing",
                "description": "Includes clay bar treatment, polish, and premium wax for ultimate shine and paint protection."
            },
            {
                "id": 2,
                "name": "Comprehensive Interior Detailing",
                "description": "Shampooing of carpets and upholstery, leather conditioning, and odor neutralizing."
            },
            {
                "id": 3,
                "name": "Engine Bay Cleaning",
                "description": "Professional cleaning and detailing of the engine bay to remove grease and grime."
            }
        ],
        "image": "https://images.unsplash.com/photo-1708805282785-77092a1628d3?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]


$(document).ready(function () {
    // Replace the URL with the path to your serviceData.json file

    serviceData.forEach(function (item) {
        var card = `
                <div class='pricing_card' data-id='${item.id}'>
                    <div class='pricing_card-details'>
                        <div class="pricing_card-name">
                            <h2>${item.name}</h2>
                        </div>

                        <div class="pricing_card-pricing">
                            <p class="pricing_card-text-md">
                                $${item.membershipPrice}/year
                            </p>
                            <p class="pricing_card-text-sm">
                                $${item.singleWash} single wash
                            </p>
                        </div>

                    </div>
                    <div class="pricing_card-col">
                        <ul 
                            class="pricing_card-ul" 
                            id="details-${item.id}">
                        </ul>
                      
                    </div>
                         <div class="pricing_card-row">
                           <a type=button href="../membership/index.html" class='pricing_card-btn'>GET STARTED</a>
                         </div
                </div>
            `;

        $('#service-content').append(card);

        // Map over details and append to the corresponding ul
        if (item.details && item.details.length > 0) {
            item.details.forEach(function (detail) {
                $(`#details-${item.id}`).append(`<li><i class="fa-solid fa-check check_dark"></i> ${detail.description}</li>`);
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


