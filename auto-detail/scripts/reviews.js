const customerReviews = [
    {
        "id": 1,
        "date": "March 12, 2023",
        "user": "John D",
        "text": "Professional and friendly service. My car has never looked better!",
        "image": "https://images.unsplash.com/photo-1523676060187-f55189a71f5e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 2,
        "date": "July 28, 2022",
        "user": "Lisa K",
        "text": "BrightSpark did an amazing job on my car. The Ultimate Sparkle Package made it look brand new! Highly recommend them!",

        "image": "https://images.unsplash.com/photo-1584254520639-ea67b9b108de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRldGFpbGluZyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "id": 3,
        "date": "November 5, 2023",
        "user": "Mike T",
        "text": "Great attention to detail. The Deluxe Glow Package is worth every penny. Will definitely come back.!",
        "image": "https://images.unsplash.com/photo-1474065581914-e24d783b0c55?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

$(document).ready(function () {
    // Replace the URL with the path to your fleetData.json file
    customerReviews.forEach(function (item) {
        var card = `
            <div class='review_card' data-id='${item.id}'>
                <div class='review_card-details'>
                    <div class="review_card-text">
                        <p class="review_card-main">"${item.text}"</p>
                    </div>
                    <div class="content_col">
                        <div class="review_card-customer">
                            <p class="review_card-name">~ ${item.user}</p>
                            <p class="review_card-date">${item.date}</p>
                        </div>
                    </div>
                </div>
                <div class='review_card-img'>
                    <img src="${item.image}" />
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
/*
      <div class='review_card-details'>
          <div class="review_card-text">
              <p class="review_card-main">"${item.text}"</p>
          </div>
          <div class="content_col">
              <p class="review_card-customer">~ ${item.user}</p>
              <p class="review_card-date">${item.date}</p>
          </div>
      </div>
      <div class='review_card-img'>
          <img src="${item.image}" />
      </div>
      */
