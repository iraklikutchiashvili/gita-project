$(function(){
    const nameList = ['Siamese cat', 'British Shorthair', 'abyssinian', 'Maine Coon', 'Ragdoll', 'Sphynx',
    'American Shorthair', 'Exotic', 'Scottish Fold', 'Burmese', 'Birman', 'Bombay', 'Russian Blue', 'Siberian',
    'Norwegian Forest', 'American Curl', 'American Bobtail', 'Balinese', "Devon Rex", "Chartreux", "Turkish Angora",
    "Japanese Bobtail", "Manx", "American Wirehair", "Ragamuffin", "Somali", "Egyptian Mau", "Himalayan", "Cornish Rex",
    ];
    const name = nameList[Math.floor(Math.random()*29)];
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cats?name=' + name,
    headers: { 'X-Api-Key': '9DCEIqZKqbs1NMP6HCoQ/A==jKhxoNEJtkiXwIqO'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        const catCard = $("#catDiv");
        const catImg = $('<img id="catImg">');
        catImg.attr('src', result[0].image_link);
        catImg.css({
            'object-fit': "contain",
            'width': "500px",
            'height': "800px"
        });
        catImg.appendTo(catCard);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
})