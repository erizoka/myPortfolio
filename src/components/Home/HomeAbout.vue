<template>
    <div class="home-about animate__animated animate__fadeInUp">
        <h1>Sobre mim</h1>
        <h3>Meu nome é Erica e eu sou web e mobile developer.</h3>
        <p>Busco constantemente o aprimoramento em tecnologia e programação. 
            Movida pela curiosidade e pelo desejo de aprender, 
            estou sempre em busca de novos desafios e oportunidades para expandir meu conhecimento 
            e habilidades nesta área em constante evolução.</p>
        <div class="social">
            <a href="https://www.linkedin.com/in/erica-esteves-de-freitas/" target="blank">
                <icon :icon="['fab', 'linkedin']" style="color: white"/>
            </a>
            <a href="https://github.com/erizoka" target="blank">
                <icon :icon="['fab', 'github']" style="color: white"/>
            </a>
            <a href="https://www.instagram.com/erizoka/" target="blank">
                <icon :icon="['fab', 'instagram']" style="color: white"/>
            </a>
        </div>
    </div>
</template>

<style scoped>
    .home-about {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: #F5F5F5;
        padding: 80px 0;
    }

    .home-about h1{
        text-align: center;
        margin: 0;
        background: linear-gradient(135deg, #1e30f3 0%, #e21e80 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: "Plus Jakarta Sans";
        font-size: 3rem;
    }

    .home-about h3{
        font-family: "Plus Jakarta Sans";  
        text-align: center; 
        font-weight: 100;
    }
    
    .home-about p{
        padding-top: 7px;
        text-align: center;
        font-family: "Plus Jakarta Sans";
        font-weight: 300;
        width: 80%;
    }

    .social {
        margin-top: 20px;
    }

    .social a {
        font-size: 1.8rem;
        margin: 0 20px;
        background: linear-gradient(135deg, #1e30f3 0%, #e21e80 100%);
        padding: 6px 10px;
        border-radius: 50px;
        transition: font-size 0.3s ease;
    }

    .social a:hover {
        font-size: 1.2rem;
    }

    @media (max-width: 768px) {
        .home-about h1 {
            font-size: 2rem;
        }

        .home-about h3 {
            width: 70%;
        }
    }
</style>