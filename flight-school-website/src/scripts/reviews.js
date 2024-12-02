const customerReviews = [
    {
        "id": 1,
        "date": "March 12, 2023",
        "user": "Emily S.",
        "text": "My experience at  Elevate Aviation was nothing short of exceptional. The instructors were knowledgeable, patient, and dedicated to ensuring I received top-notch training. The facilities were modern and well-maintained, creating a professional learning environment. Thanks to their comprehensive programs, I achieved my dream of becoming a licensed pilot. Highly recommend this flight school to anyone pursuing a career in aviation!"
    },
    {
        "id": 2,
        "date": "July 28, 2022",
        "user": "Jason M",
        "text": "I can't say enough good things about Elevate Aviation. From the moment I walked in, I felt welcomed and supported by the staff. The instructors went above and beyond to make sure I understood every aspect of flight training. Their focus on safety and attention to detail gave me conference in my abilities as a pilot. The hands-on experience and real-world simulations were invaluable. If you're serious about flying, this is the place to be!"
    },
    {
        "id": 3,
        "date": "November 5, 2023",
        "user": "Sarah L",
        "text": "Choosing Elevation Aviation Academy was one of the best decisions I've made. The curriculum was well-structured, and the personalized instruction helped me progress quickly. The school's fleet of aircraft was impressive, proving me with diverse training experiences. The staff was friendly, approachable, and always willing to answer my questions. I graduated feeling fully prepared and equipped for a successful career in aviation. Thank you, Elevate, for an unforgettable journey!"
    }
  ]

$(document).ready(function () {
    // Replace the URL with the path to your fleetData.json file
    customerReviews.forEach(function (item) {
            var card = `
                <div class='card__md' data-id='${item.id}'>
                    <p class='card__text--sm'>${item.text}</p>
                    <p class='card__text--sm'>${item.user}</p>
                    <p class='card__text--sm'>${item.date}</p>
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
