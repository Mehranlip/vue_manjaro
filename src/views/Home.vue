<template>
 <div class="landing-bg">
   <div class="container h-100">
     <div class="row align-items-center h-100">
       <div class="col-12 col-md-10 mx-auto text-center">
         <h1 id="titel" >Manjaro Website</h1>
         <p id="description">
           The origin of the name Kilimanjaro is not known, but a number of theories exist.
           European explorers had adopted the name by 1860 and reported that Kilimanjaro
           was the mountain's Kiswahili name. The 1907 edition of The Nuttall Encyclopædia
           also records the name of the mountain as Kilima-Njaro
         </p>
            <router-link to="/login">
              <button class="btn m-md-5  mt-2" id="login">Login</button>
            </router-link>

            <router-link to="signup">
              <button class="btn m-md-5 mt-2" id="signup">Sign Up</button>
            </router-link>
         <div class="row fixed-bottom p-2">
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
  name: "Home",
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
#titel{
  font-family: 'Sen', sans-serif;
  color: white;
  font-size: 6rem;
}
#description{
  font-family: 'Sen', sans-serif;
  color: white;
  font-size: 1rem;
}
#login{
  align-items: flex-start;
  padding: 16px 42px;

  background: radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.23) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.413) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #9B9B9B;
  box-shadow: 4px 38px 62px rgba(0, 0, 0, 0.5);
  border-radius: 109px;

  font-family: Sen;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */


  color: rgba(255, 255, 255, 0.85);

  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;

}
#signup{
  align-items: flex-start;
  padding: 16px 42px;


  background: radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.23) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.413) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #84A9BB;
  box-shadow: 4px 38px 62px rgba(0, 0, 0, 0.5);
  border-radius: 109px;

  font-family: Sen;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */


  color: rgba(255, 255, 255, 0.85);

  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
}
span{
  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */


  color: #FFFFFF;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
