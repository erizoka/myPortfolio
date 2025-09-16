<template>
    <div class="home-about animate__animated animate__fadeInUp animate__delay-2s">
        <h1>Sobre mim</h1>
        <h3>Meu nome é Erica e eu sou FullStack Developer.</h3>
        <p>
            Sou uma profissional da área de tecnologia com experiência em suporte técnico e agora atuando em
            desenvolvimento de software,
            com foco em Java (Spring Boot, Spring Batch), Flutter/Dart e JavaScript (Vue.js 3,
            TypeScript). Tenho perfil autodidata, analítico e orientado à resolução de problemas — características que
            me permitem navegar com segurança por diferentes camadas de um sistema, desde o backend até a experiência do
            usuário no frontend.

            Valorizo boas práticas, código limpo e estrutura bem definida, mas estou sempre em busca do equilíbrio entre
            excelência técnica e entregas eficientes. Gosto de entender o funcionamento por trás das ferramentas e não
            me contento com soluções rasas, o que me torna uma colaboradora atenta, proativa e comprometida com a
            qualidade.

            Atualmente, estou focada em consolidar minha atuação como analista de sistemas ou desenvolvedor júnior,
            contribuindo com times que valorizem aprendizado contínuo, responsabilidade técnica e evolução conjunta.
        </p>
        <div class="social">
            <a href="https://www.linkedin.com/in/erica-esteves-de-freitas/" target="blank">
                <icon :icon="['fab', 'linkedin']" style="color: white" />
            </a>
            <a href="https://github.com/erizoka" target="blank">
                <icon :icon="['fab', 'github']" style="color: white" />
            </a>
            <a href="https://www.instagram.com/erizoka/" target="blank">
                <icon :icon="['fab', 'instagram']" style="color: white" />
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

.home-about h1 {
    text-align: center;
    margin: 0;
    background: linear-gradient(135deg, #1e30f3 0%, #e21e80 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Plus Jakarta Sans";
    font-size: 3rem;
}

.home-about h3 {
    font-family: "Plus Jakarta Sans";
    text-align: center;
    font-weight: 100;
}

.home-about p {
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
    font-size: 2.3rem;
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