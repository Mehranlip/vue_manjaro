<template>
  <div class="landing-bg">
    <div class="container h-100">
      <div class="row align-items-center h-100">
        <div class="col-12 col-md-10 mx-auto ">
          <div >

            <div class="row">
              <div class="glass_box col-12 col-md-6  text-center p-5 " >
                <div class="mt-5">
                  <h1 class="mb-3" id="title-welcome">Welcome to Sing Up  </h1>
                  <p class="description mt-5">
                    The origin of the name Kilimanjaro
                    is not known, but a number of theories exist.
                    European explorers had adopted the name
                    and reported that Kilimanjaro

                  </p>
                  <div class="icon mt-3">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fas fa-link"></i></a>
                    <a href="#"><i class="fab fa-behance-square"></i></a>
                  </div>
                </div>

              </div>
              <div class=" box-form col-12 col-md-6 p-5">
                <span id="welcome-back">Welcome</span>
                <h1 id="title-login">sing up to account </h1>
                <form>
                  <div class="form-group">
                    <label for="formGroupExampleInput1">Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput1" placeholder="Mehran">
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput2">Email</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="realmehranasadi@gamil.com">
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput3">Password</label>
                    <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="*********">
                  </div>
                  <div class=" text-center">
                    <a href="#"><button class="btn login-btn mb-3">Sing Up now</button></a>
                    <br>
                    <a href="#"><button class="btn signin-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt=""> Or sign-in with google </button></a>
                    <br>
                  </div>
                  <div class="mt-3">

                  </div>

                </form>

              </div>

            </div>


          </div>

          <div class="row fixed-bottom p-2 text-center">
            <div class="col-12">
              <span>© 2021<a id="link" href=""> Mehranlip</a>. All rights reserved.</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sign up",
  components: {},
};
</script>

<style>
*{
  padding: 0;
  margin: 0;

}

.landing-bg {
  background-image: url("https://uhdwallpapers.org/uploads/converted/18/04/09/to-highest-peaks-3840x2160_59667-mm-90.jpg");
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.box-form{
  background: #FFFFFF;
  border-radius: 0px 20px 20px 0px;
}
.glass_box{
  background: rgba(255, 255, 255, 0.3);
  border-radius:  20px 0px 0px 20px;
}
#title-welcome{

  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 43px;

  color: #FFFFFF;

}
.description{
  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;

  color: #FFFFFF;

}
.icon a i {
  padding: 7px;
  color: white;
  margin: 5px;
  font-size: 30px;
  border: 3px solid white;
  border-radius: 50%;
  transition: 300ms;
}
.icon a i:hover {
  padding: 7px;
  color: black;
  margin: 10px;
  font-size: 35px;
  border: 3px solid black;
  border-radius: 50%;
}

#title-login{

  font-family: Sen;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  /* identical to box height */


  color: #84A9BB;

}
label{
  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  /* 700 */

  color: #4A5568;

}
input{
  border: 1px solid #E8E8E8;
  box-sizing: border-box;
  border-radius: 5px;
}
#forgot_password{
  text-align: end;
  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */


  /* 800 */

  color: #2C5282;

}
span{
  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */


  color: #FFFFFF;


}
#welcome-back{

  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  /* 800 */

  color: #2D3748;

}
.login-btn {
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 42px;

  background: radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.23) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.413) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #9B9B9B;
  box-shadow: 4px 38px 62px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  font-family: Sen;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */


  color: #FFFFFF;

}
.signin-btn{

  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 42px;

  background: #84A9BB;
  border-radius: 5px;

  font-family: Sen;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */


  color: #FFFFFF;
}
.sg-signup{
  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #616161;

}

#link{
  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-decoration: none;
  /* identical to box height */


  color: #FFFFFF;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


}
#link:hover{

  color: #aaa9a9;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.85);
}


</style>
