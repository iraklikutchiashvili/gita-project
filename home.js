$(function(){
    const nameList = ['Siamese cat', 'British Shorthair', 'abyssinian', 'Maine Coon', 'Ragdoll', 'Sphynx',
        'American Shorthair', 'Exotic', 'Scottish Fold', 'Burmese', 'Birman', 'Bombay', 'Russian Blue', 'Siberian',
        'Norwegian Forest', 'American Curl', 'American Bobtail', 'Balinese', "Devon Rex", "Chartreux", "Turkish Angora",
        "Japanese Bobtail", "Manx", "American Wirehair", "Ragamuffin", "Somali", "Egyptian Mau", "Himalayan", "Cornish Rex"];
    function retrieveData(){
        const name = nameList[Math.floor(Math.random()*29)];
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/cats?name=' + name,
            headers: { 'X-Api-Key': '9DCEIqZKqbs1NMP6HCoQ/A==jKhxoNEJtkiXwIqO'},
            contentType: 'application/json',
            success: function(result) {
                console.log(result);
                $('#catDiv').css('visibility', 'visible');
                const catDetailsObj = result[0];
                // Show cat image
                const catImg = $('div#catDiv > img');
                catImg.attr('src', catDetailsObj.image_link);
                catImg.css({
                    'object-fit': "contain",
                    'width': "400px",
                    'height': "400px"
                });
                // Show cat info
                const catBreedName = $('div#catInfoText > h2');
                const catOrigin = $('div#catInfoText > h3');
                catBreedName.html("Breed Name: " + catDetailsObj.name);
                catOrigin.html("Origin: " + catDetailsObj.origin);
                $('.maxLife').html("Maximum Life Expectancy: " + catDetailsObj.min_life_expectancy);
                $('.maxWeight').html("Maximum Weight: " + catDetailsObj.max_weight);
                $('.length').html("Length: " + catDetailsObj.length);

                $('#btn').html('Show Another Cat');
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    }

    $("#btn").on("click", retrieveData);

});
