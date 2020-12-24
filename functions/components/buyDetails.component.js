exports.BuyDetails = function (buyingdetails) {
    return `
  
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Document</title>
    <style>
a{
    text-decoration: none;
}
        /* Buying informations and styles */
.buying-informtion{
    text-align: center;
    align-items: center;
    
}
input{
    outline: none;
    padding: 12px;
    width: 50%;
    border-radius: 12px;
    font-weight: bolder;
}
label{
    font-weight: bolder;
}
.Save{
    background-color: rgb(145, 115, 230);
    width: 20%;
    padding: 6px;margin-right: 10%;
    border-radius: 12px;
    font-weight: bolder;
    
}
.Cancel{
    background-color: rgb(241, 15, 15);
    width: 20%;
    padding: 6px;
    border-radius: 12px;
    font-weight: bolder;
    
}
    </style>
</head>
<body>
    <h3 >Uhakika</h3>
    <form action="" class="buying-informtion">
        <div class="buying-Details">
            <h1>Enter Buying Details </h1>
        </div>
        <div class="name">
            <label for="">Full Name</label><br><br>
            <input type="text" placeholder="Enter Your Name">
        </div><br><br>
        <div class="numberofproducts">
            <label for="">Number of Products</label><br><br>
            <input type="number" value="" placeholder="Enter the Number of Products" >
        </div><br><br>
        <div class="phonenumber">
            <label for="">Phone Number </label><br><br>
            <input type="phone" placeholder="Enter Valid Phone number">
        </div><br><br>
        <div class="location">
            <label for="">Location</label><br><br>
            <input type="text" placeholder="Enter Your Location" >
        </div><br><br>
        <div class="saveandcancel">
            <button class="Save">
                <a href="/html files/goods.html">Save</a>
            </button>
            <button class="Cancel">
                <a href="/html files/goods.html">Cancel</a>
            </button>
        </div><br><br><br><br>
    </form>
</body>
</html>
  


`

}
