exports.home = BFast.functions().onHttpRequest(
    Response.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--<link rel="stylesheet" href="/CSS FILES/style.css">-->
    <title></title>
</head>
<body> 
<nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">${title}</a>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav> 
  <hr>
    <button class="add" style="margin-left: 50%; width: 40%; padding: 8px; border-radius: 12px; background-color: aqua;">Add</button><br><br><br>
    
    <div class="container" style="display: flex;" id="containerDiv">
        <div class="imageposition" style="width: 50%;">
            <img src="/ASSETS/logo.jpg" alt="" style="width: 50%;" >
        </div>
        <div class="nameofproduct" style="width:18% ;">
           <a href="" style="text-decoration: none; font-size: 15px; ">Product name</a>
        </div>
        <div class="updatedelete" style="width: 28%;  " >
            <button style=" border-radius: 12px; padding: 8px; background-color: aqua; width: 48%;">Update</button>
            <button style=" border-radius: 12px; padding: 8px; background-color: aqua; width: 48%;" onclick="containerDiv(this)" id="removebutton">Delete</button>
        </div>
    </div>
    <script >
        function containerDiv(removebutton){
            var remove = document.getElementById("containerDiv");
            remove.parentNode.removeChild(remove);

        }

    </script>
</body>
</html>
    `)

);