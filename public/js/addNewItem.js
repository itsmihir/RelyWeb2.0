var database = firebase.database();

async function saveData(data) {
    var res = await database.ref('Products').push(data, (error) => {
        if (error) {
            console.log('ooops');
        } else {
            console.log('data saved!');

        }
    });

    window.location.href = '../html/index.html';
}

document.querySelector("#saveNewData").addEventListener("click", () => {
    event.preventDefault();
    var id = document.querySelector("#pid").value;
    var name = document.querySelector("#pname").value;
    var url1 = document.querySelector("#purl").value;
    var url2 = document.querySelector("#purl2").value;
    var Description = document.querySelector("#description").value;
    var tags = document.querySelector("#ptags").value;
    var stock = document.querySelector("#pstock").value;
    var price = document.querySelector("#pprice").value;
    var packingType = document.querySelector("#pptype").value;

    if (name == "" || url1 == '' || url2 == '' || Description == '' || tags == '' || stock == '' || price == '' || packingType == '') {
        alert('Please Fill all the Data');
        return;
    }
    var data = {
        Id: id,
        Description: Description,
        Image: url1,
        PackagingType: packingType,
        Price: price,
        ProductName: name,
        Stock: stock,
        Tags: tags,
        ThumbnailImage: url2
    }

    saveData(data);
});