const fleetData = [
    {
        "id": 1,
        "name": "Cessna 172",
        "hourlyRate": 200,
        "description": "A legendary trainer and light touring aircraft, the Cessna 172 is known for its reliability, smooth handling, and forgiving flight characteristics — perfect for students and seasoned pilots alike.",
        "image": "https://images.unsplash.com/photo-1559117288-700a7acf7c0b?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 2,
        "name": "Cirrus Sr-22",
        "hourlyRate": 200,
        "description": "A high-performance single-engine aircraft with advanced avionics and a luxurious cabin, the SR-22 offers speed, comfort, and safety with its signature whole-plane parachute system.",
        "image": "https://images.unsplash.com/photo-1697642107813-32ca4d257826?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 3,
        "name": "Piper Arrow",
        "hourlyRate": 200,
        "description": ":A complex trainer equipped with retractable gear and a constant-speed propeller, the Piper Arrow is ideal for pilots looking to advance their skills with more system management.",
        "image": "https://images.unsplash.com/photo-1541611519634-a334c7446a68?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]


$(document).ready(function () {
    // Replace the URL with the path to your fleetData.json file

    fleetData.forEach(function (item) {
        var card = `
      <div class='card_lg' data-id='${item.id}'>
  <div class="card_content">
    <div class="card_image">
      <img src='${item.image}' alt='${item.name}' />
    </div>
    <div class="card_info">
      <h2 class="card_title-lg">${item.name}</h2>
      <p class="card_description">${item.description}</p>
      <p class="card_text-col"><b>Hourly rate:</b> $${item.hourlyRate}</p>
    </div>
  </div>
</div>

            `;

        $('#fleet-content').append(card);
    });

    // Event delegation for dynamically added elements
    $('#fleet-content').on('click', '.viewItemBtn', function () {
        $(this).closest('.fleet-card').find('.view-item').toggle();
    });

    $('#fleet-content').on('click', '.closeModal', function () {
        $(this).closest('.view-item').hide();
    });

});
