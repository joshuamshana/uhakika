exports.productAddComponent = function (){
    return `
    <div style="margin-top: 24px">
        <div class="card shadow" style="padding: 16px">
            <form>
                <div>
                    <label class="form-label">Name</label>
                    <input type="text" placeholder="enter product name" name="name" class="form-control">
                </div>
                 <div>
                    <label class="form-label">Price</label>
                    <input type="number" placeholder="enter product price" name="name" class="form-control">
                </div>
                <div>
                    <label class="form-label">Details</label>
                    <textarea rows="5" placeholder="enter product name" name="name" class="form-control"></textarea>
                </div>
            </form>
        </div>
    </div>
<!--    <button class="add" style="margin-left: 50%; width: 40%; padding: 8px; border-radius: 12px; background-color: aqua;">Add</button><br><br><br>-->
<!--    <div class="container" style="display: flex;" id="containerDiv">-->
<!--        <div class="imageposition" style="width: 50%;">-->
<!--            <img src="/ASSETS/logo.jpg" alt="" style="width: 50%;" >-->
<!--        </div>-->
<!--        <div class="nameofproduct" style="width:18% ;">-->
<!--           <a href="" style="text-decoration: none; font-size: 15px; ">Product name</a>-->
<!--        </div>-->
<!--        <div class="updatedelete" style="width: 28%;  " >-->
<!--            <button style=" border-radius: 12px; padding: 8px; background-color: aqua; width: 48%;">Update</button>-->
<!--            <button style=" border-radius: 12px; padding: 8px; background-color: aqua; width: 48%;" onclick="containerDiv(this)" id="removebutton">Delete</button>-->
<!--        </div>-->
<!--    </div>-->
<!--    <script >-->
<!--        function containerDiv(removebutton){-->
<!--            var remove = document.getElementById("containerDiv");-->
<!--            remove.parentNode.removeChild(remove);-->

<!--        }-->

<!--    </script>-->
    `
}
