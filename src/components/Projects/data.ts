const projectsData = [
    {
        title: 'Sônia Biscuit',
        description: 
        `Meu primeiro projeto foi também um portfolio para outra pessoa, 
        que faz artesanato. Um projeto
        originalmente com foco em HTML e CSS feito em 2019, porém fiz a
        inclusão de um swiper em js na home para fotos em destaque.`,
        thumbImg: require('@/assets/projects-gallery/sonia/thumb-sonia.png'),
        alt: 'Imagem do site projeto Sônia Biscuit',
        git: null,
        carousel: {
            img1: require('@/assets/projects-gallery/sonia/index.png'),
            img2: require('@/assets/projects-gallery/sonia/produtos.png'),
            img3: require('@/assets/projects-gallery/sonia/produtos-2.png'),
            img4: require('@/assets/projects-gallery/sonia/contato.png')
        }
    },
    {
        title: 'gitChess',
        description: 
        `Sistema de Jogo de Xadrez com lógia de Piece e Board distribuído em cores
        para rodar diretamente pelo
        terminal do GitBash, jogadas especiais e regras de jogo implantadas, projeto feito em linguagem Java.`,
        thumbImg: require('@/assets/projects-gallery/gitChess/thumb-gitchess.png'),
        alt: 'Imagem do jogo de Xadrez pelo GitBash',
        git: 'https://github.com/erizoka/chess-system-java/',
        carousel: {
            img1: require('@/assets/projects-gallery/gitChess/gitChess-1.png'),
            img2: require('@/assets/projects-gallery/gitChess/gitChess-2.png'),
            img3: require('@/assets/projects-gallery/gitChess/gitChess-3.png'),
            img4: require('@/assets/projects-gallery/gitChess/gitChess-4.png'),
            img5: require('@/assets/projects-gallery/gitChess/gitChess-5.png')
        }
    },
    {
        title: 'Golden Pizza - Desktop',
        description: 
        `Sistema de gerenciamento de pedido de uma pizzaria (fictícia), 
        implantado sistema de autenticação e integração com app para cadastro dos pedidos pelo garçom. 
        Projeito feito em linguagem NodeJS, TypeScript e React`,
        thumbImg: require('@/assets/projects-gallery/golden-pizza-desktop/thumb-gp-desktop.png'),
        alt: 'Preview da página de login',
        git: 'https://github.com/erizoka/Golden-Pizzaria',
        carousel: {
            img1: require('@/assets/projects-gallery/golden-pizza-desktop/login.png'),
            img2: require('@/assets/projects-gallery/golden-pizza-desktop/cadastroProduto.png'),
            img3: require('@/assets/projects-gallery/golden-pizza-desktop/cadastroCategoria.png'),
            img4: require('@/assets/projects-gallery/golden-pizza-desktop/pedidos.png'),
            img5: require('@/assets/projects-gallery/golden-pizza-desktop/pedidoAberto.png')
        }
    },
    {
        title: 'Golden Pizza - Mobile',
        description: 
        `Aplicativo de inclusão de pedido por mesa, integrado ao sistema de gerenciamento web, 
        onde ao ser finalizado um pedido o envio para o gerenciador é imediato. 
        Projeito feito em React, com framework Expo`,
        thumbImg: require('@/assets/projects-gallery/golden-pizza-mobile/thumb-gp-mobile.png'),
        alt: 'Imagem do login pelo app',
        git: 'https://github.com/erizoka/Golden-Pizzaria',
        carousel: {
            img1: require('@/assets/projects-gallery/golden-pizza-mobile/login.jpg'),
            img2: require('@/assets/projects-gallery/golden-pizza-mobile/novo-pedido.jpg'),
            img3: require('@/assets/projects-gallery/golden-pizza-mobile/criando-pedido.jpg'),
            img4: require('@/assets/projects-gallery/golden-pizza-mobile/categorias.jpg'),
            img5: require('@/assets/projects-gallery/golden-pizza-mobile/finalizando-pedido.jpg')
        }
    },
    // {
    //     title: '',
    //     description: ``,
    //     thumbImg: '',
    //     alt: '',
    //     git: '',
    //     carousel: {
    //         img1: '',
    //         img2: '',
    //         img3: '',
    //         img4: '',
    //         img5: ''
    //     }
    // },
]

export default projectsData