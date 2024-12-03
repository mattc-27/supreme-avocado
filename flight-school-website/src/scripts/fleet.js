const fleetData = [
    {
        "id": 1,
        "name": "Cessna 172",
        "hourlyRate": 200,
        "image": "https://images.unsplash.com/photo-1559117288-700a7acf7c0b?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 2,
        "name": "Cirrus Sr-22",
        "hourlyRate": 200,
        "image": "https://images.unsplash.com/photo-1697642107813-32ca4d257826?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 3,
        "name": "Piper Arrow",
        "hourlyRate": 200,
        "image": "https://images.unsplash.com/photo-1541611519634-a334c7446a68?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]


$(document).ready(function() {
    // Replace the URL with the path to your fleetData.json file

        fleetData.forEach(function(item) {
            var card = `
                <div class='card__md' data-id='${item.id}'>
                       <div class='card__title--md'>
                        <h2>${item.name}</h2>
                    </div>
                    <div class='card__text--md'>
                        <p><b>Hourly rate: </b>$${item.hourlyRate}</p>
                    </div>
                    <div class='card__col--img'>
                        <img src='${item.image}' alt='${item.name}' />
                    </div>
                    <div class='content__row'>
                        <button class='view__button'>View</button>
                    </div>
                    <div class='view-item' style='display: none;'>
                        <div class='view-modal' style='display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; margin: 2%;'>
                            <h1>View modal</h1>
                            <p>${item.name}</p>
                      
                            <button class='cta_button button--orange' style='background-color: #460814fd;'>Close</button>
                        </div>
                    </div>
                </div>
            `;

            $('#fleet-content').append(card);
        });

        // Event delegation for dynamically added elements
        $('#fleet-content').on('click', '.viewItemBtn', function() {
            $(this).closest('.fleet-card').find('.view-item').toggle();
        });

        $('#fleet-content').on('click', '.closeModal', function() {
            $(this).closest('.view-item').hide();
        });
    
});
