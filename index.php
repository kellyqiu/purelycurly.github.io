<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.3/quartz/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Satisfy&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Purely Curly</title>
</head>
<body>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-auto my-1">
                     <h1 class="text-center heading">Purely Curly</h1>
                     <p class="text-center submessage">Where Curly People Can Connect and Care For Their Hair!</p>
                </div>
            </div>

        
              <div class="card border-info mb-3" style="width: 100%;">
                <div class="card-header">Share Your Product Journey!</div>
                <div class="card-body">
                  <p class="card-text" id="test">Answer some questions about your curly hair journey and what products you use.</p>

                  <button type="submit" class="btn btn-primary" id="getStarted">Get Started!</button>

                  <form id="newUserForm" style="display:none">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    </div>

                    <div class="form-group">
                      <label for="hairType">Hair Type</label>
                      <input type="text" class="form-control" id="hairType" placeholder="2, 3, 4">
                    </div>
                    <div class="form-group">
                      <label for="shampoo">Shampoo</label>
                      <input type="text" class="form-control" id="shampoo" placeholder="Shea Moisture Curl & Shine Shampoo, Garnier Fructis Sleek & Shine, etc...">
                    </div>
                    <div class="form-group">
                      <label for="conditioner">Conditioner</label>
                      <input type="text" class="form-control" id="conditioner" placeholder="REDKEN Curvaceous Conditioner, OGX Quenching Coconut Curls, etc...">
                    </div>

                    <div class="form-group">
                      <label for="otherProducts">Other Products</label>
                      <input type="text" class="form-control" id="otherProducts" placeholder="Must Have Additions">
                    </div>
                    
                    <button type="submit" class="btn btn-primary" id="newUser">Submit</button>
                  </form>
                  

                </div>
              </div>

              <div class="card border-info mb-3" style="width: 100%;">
                <div class="card-header">Determine Your Hair Type!</div>
                <div class="card-body">
                    <div class="left-container">
                        <img src="images/curlpatterns.png" class = "center" style="width: 90%;">
                    </div>
                    <div class = "right-container">
                        <p class = "card-text">Which hair type are you? Input a picture of your hair from the back of your head, and we'll help you find your hair type!</p>
                    </div>
                    <div class="form-group">
                      <form action="" method="POST" enctype="multipart/form-data">
                          <input class="form-control" type="file" id="img" name="img" accept="image/*">
                          <input class="btn btn-primary" type="submit" name="submit" id="SubmitImage">
                      </form>
                      <?php require_once "uploads.php" ?>
                    </div>
                </div>
              </div>


            <div class="card border-info mb-3" style="width: 100%;">
                <div class="card-header">Find Suggested Products!</div>
                <div class="card-body">
                  <p class="card-text">Find products suited for you based on your hair features!</p>
                  <form id="findProducts">
                    <div class="form-group">
                      <label>Input Hair Type</label>
                      <input class="form-control" id = 'hair' placeholder="2, 3, 4">
                      <small class="form-text text-muted">Need help finding your hair type? Try using our hair type finder above!</small>
                    </div>  
                    <button type="submit" class="btn btn-primary" id="submitHairType">Submit</button>
                    <div id = "idealProducts" style="display:none">
                      <p id="idealShampoo" class="card-text">The top shampoo for your hair type is </p>
                      <p id = "idealConditioner" class="card-text">The top conditioner for your hair type is </p>
                    </div>
                  </form>
                  

                </div>
              </div>

<script src="app.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>

</body>
</html>