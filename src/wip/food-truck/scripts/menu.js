const menuItems = [
    {
        "id": 1,
        "name": "Classic Belgian Waffle",
        "singleWash": 20,
        "membershipPrice": 200,
        "image": "https://images.unsplash.com/photo-1708805283021-d736d3a3c6e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
    },
    {
        "id": 2,
        "name": "Strawberry Dream",
        "singleWash": 35,
        "membershipPrice": 270,
        "image": "https://images.unsplash.com/photo-1589362086172-2c29bea70386?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 3,
        "name": "Benny's Bennies",
        "singleWash": 50,
        "membershipPrice": 420,
        "image": "https://images.unsplash.com/photo-1708805282785-77092a1628d3?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]


$(document).ready(function () {
    // Replace the URL with the path to your serviceData.json file

    menuItems.forEach(function (item) {
        var card = `
                <div class='service-card' data-id='${item.id}'>
                    <div class='card-top'>
                        <div class='card-title'>
                            <h2>${item.name}</h2>
                        </div>
                       
                    </div>
                    
                </div>
            `;

        $('#menu-content').append(card);
    });

    // Event delegation for dynamically added elements
    $('#menu-content').on('click', '.viewItemBtn', function () {
        $(this).closest('.service-card').find('.view-item').toggle();
    });

    $('#menu-content').on('click', '.closeModal', function () {
        $(this).closest('.view-item').hide();
    });
    /*
    <div class='card-bottom'>
                        <div class='card-img'>
                            <img src='${item.image}' alt='${item.name}' />
                        </div>
                        <div class='card-button'>
                            <button class='viewItemBtn'>View</button>
                        </div>
                    </div>
     <div class='card-text'>
                            <p>
                                <b>Single wash:</b> 
                                $${item.singleWash}
                            </p>
                            <p>
                                <b>Annual membership:</b> 
                                $${item.membershipPrice}
                            </p>
                        </div>
        <div class='view-item' style='display: none;'>
        <div class='view-modal' style='display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; margin: 2%;'>
        <h1>View modal</h1>
        <p>${item.name}</p>
        
        <button class='closeModal' style='background-color: #460814fd;'>Close</button>
        </div>
        </div>
         */
});


