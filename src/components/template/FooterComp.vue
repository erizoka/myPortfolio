<template>
    <footer class="footer">
        <span>Copyright &copy; Erica's Portfolio {{ new Date().getFullYear() }}</span>
        <a><router-link to="/contact">
                Contato
                <icon class="icon" :icon="['fas', 'comment-dots']" />
            </router-link></a>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #efecf0;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 20px 0;

}

.footer::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.7px;
    background-image: linear-gradient(to right,
            rgba(120, 120, 120, 0),
            rgba(120, 120, 120, 0.75),
            rgba(120, 120, 120, 0));
}

.footer span {
    text-align: center;
    font-size: 0.8rem;
    width: 50%;
}

.footer a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-size: 0.8rem;
    width: 50%;
}

.icon {
    width: max-content;
    margin-left: 5px;
    margin-top: 2px;
    font-size: 0.8rem;
}

@media (max-width: 768px) {
    .footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2px 0;
    }

    .footer span {
        font-size: 0.8rem;
        margin-bottom: 2px;
    }
}
</style>