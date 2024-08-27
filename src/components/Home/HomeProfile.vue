<template>
    <div class="home-profile animate__animated animate__fadeInUp animate__delay-1s">
        <SvgDots class="dots1" />
        <SvgDots class="dots2"/>
        <div class="profile-img">
            <img src="@/assets/profile.png" alt="Foto de perfil" />
        </div>
        <SvgDots class="dots3"/>
        <SvgDots class="dots4"/>
    </div>
</template>

<script>
import SvgDots from './SvgDots.vue';

export default {
    components: {SvgDots}
}
</script>

<style>
    .home-profile{
        display: flex;
        position: relative;
        z-index: 10;
        padding: 50px 0;
    }
    
    .profile-img {
        position: relative;
        padding: 0 200px;
        border-radius: 30px;
        background: linear-gradient(135deg, #1e30f3 0%, #e21e80 100%);
    }

    .profile-img img {
        position: absolute;
        top: -50px; 
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;
    }

    .dots2 svg path, 
    .dots3 svg path{
        fill: aliceblue;
    }
    
    .dots1 svg path, 
    .dots4 svg path{
        fill: blue;
    }

    .dots1 {
        padding-top: 18rem;
        margin: 0;
    }
    
    .dots2 {
        padding-top: 15rem;
        z-index: 1;
        position: absolute;
        z-index: 1000;
        left: 7%;
        margin: 0;
    }
    
    .dots3 {
        padding-top: 4rem;
        z-index: 1;
        position: absolute;
        z-index: 1000;
        right: 7%;
        margin: 0;
    }
    
    .dots4 {
        padding-top: 6rem;
        margin: 0;
    }
    
    @media (max-width: 768px) {

        .home-profile {
            display: flex;
            justify-content: center;
        }

        .profile-img {
            width: fit-content;
            height: fit-content;
            padding: 0 20px;
        }

        .profile-img img {
            position: relative;
            top: 0; 
            left: 0;
            transform: translateX(0);
            height: 40vh;
        }
        
        .dots1 {padding-top: 11rem;}
        .dots2 {padding-top: 10rem;}
        .dots3 {padding-top: 1.8rem;}
        .dots4 {padding-top: 3rem;}
    }

</style>