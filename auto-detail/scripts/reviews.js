const customerReviews = [
    {
        "id": 1,
        "date": "March 12, 2023",
        "user": "John D",
        "text": "BrightSpark did an amazing job on my car. The Ultimate Sparkle Package made it look brand new! Highly recommend them!"
    },
    {
        "id": 2,
        "date": "July 28, 2022",
        "user": "Lisa K",
        "text": "Professional and friendly service. My car has never looked better!"
    },
    {
        "id": 3,
        "date": "November 5, 2023",
        "user": "Mike T",
        "text": "Great attention to detail. The Deluxe Glow Package is worth every penny. Will definitely come back.!"
    }
]

$(document).ready(function () {
    // Replace the URL with the path to your fleetData.json file
    customerReviews.forEach(function (item) {
        var card = `
            <div class='content__col card__sm' data-id='${item.id}'>
                <div class='content__col--left'>
                    <p class="card__text--sm">${item.date}</p>
                    <p class="card__text--sm">${item.text}</p>
                    <p class="card__text--sm">${item.user}</p>
                </div>
            </div>
            `;

        $('#review-content').append(card);
    });

    // Event delegation for dynamically added elements
    $('#review-content').on('click', '.viewItemBtn', function () {
        $(this).closest('.review-card').find('.view-item').toggle();
    });

    $('#fleet-content').on('click', '.closeModal', function () {
        $(this).closest('.view-item').hide();
    });

});
