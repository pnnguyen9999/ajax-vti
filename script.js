$(document).ready(function () {
    loadProductList();
});

const newProduct = {
    name: "Sony X5",
    price: "10.990.000 ₫",
    info: "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAh",
    detail: "ProductDetail1",
    ratingStar: 5,
    imageName: "ImgMobile1.png",
    manufacturerId: 1,
    categoryId: 1,
};

const newProductUpdate = {
    name: "Sony X5 Updated",
    price: "15.990.000 ₫",
    info: "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAh",
    detail: "ProductDetail1",
    ratingStar: 5,
    imageName: "ImgMobile1.png",
    manufacturerId: 1,
    categoryId: 1,
};

$("#btn-add").click(function (e) {
    $.ajax({
        url: "https://645643ea2e41ccf1691820a0.mockapi.io/products",
        type: "POST",
        data: JSON.stringify(newProduct),
        contentType: "application/json",
        success: function (result) {
            console.log(result);
            loadProductList();
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
});

$("#btn-update").click(function (e) {
    $.ajax({
        url: "https://645643ea2e41ccf1691820a0.mockapi.io/products/10",
        type: "PUT",
        data: JSON.stringify(newProductUpdate),
        contentType: "application/json",
        success: function (result) {
            console.log(result);
            loadProductList();
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
});

$("#btn-delete").click(function (e) {
    $.ajax({
        url: "https://645643ea2e41ccf1691820a0.mockapi.io/products/10",
        type: "DELETE",
        success: function (result) {
            console.log(result);
            loadProductList();
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
});

function productCard(data) {
    const img = `<img style="width:50px;height:auto" src="./Asset/Product/${data.imageName}" />`;
    const buttonDelete = `<button data-product-id="${data.id}" onclick="handleDelete(${data.id})">Delete</button>`;
    return `<li>${data.name} - ${data.price} - ${img} - ${buttonDelete}</li>`;
}

function loadProductList() {
    $.ajax({
        type: "GET",
        url: "https://645643ea2e41ccf1691820a0.mockapi.io/products",
        success: function (response) {
            console.log(response);
            const productItems = response.map((data) => {
                return productCard(data);
            });
            $("#product-list").empty();
            $("#product-list").append(productItems);
        }
    });
}

function handleDelete(id) {
    $.ajax({
        url: `https://645643ea2e41ccf1691820a0.mockapi.io/products/${id}`,
        type: "DELETE",
        success: function (result) {
            console.log(result);
            loadProductList();
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}