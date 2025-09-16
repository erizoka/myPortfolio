const projectsData = [
  {
    title: "Marvel Comics",
    description: `Um app em Flutter que consome a API da Marvel para explorar personagens, quadrinhos, eventos e mais.
       Você pode pesquisar, visualizar detalhes e favoritar seus conteúdos preferidos. Adicionado funcionalidades como pesquisa dinâmica por personagens e quadrinhos,
       carrosséis, os favoritos são salvos em memória, além de um layout responsivo.`,
    thumbImg: require("@/assets/projects-gallery/marvel-comics/thumb.png"),
    alt: "Tela da home do app",
    git: "https://github.com/erizoka/marvel-comics-api",
    carousel: {
      img1: require("@/assets/projects-gallery/marvel-comics/splash.gif"),
      img2: require("@/assets/projects-gallery/marvel-comics/home.png"),
      img3: require("@/assets/projects-gallery/marvel-comics/events.png"),
      img4: require("@/assets/projects-gallery/marvel-comics/search.gif"),
      img5: require("@/assets/projects-gallery/marvel-comics/detail-character.png"),
      img6: require("@/assets/projects-gallery/marvel-comics/detail-comic.png"),
      img7: require("@/assets/projects-gallery/marvel-comics/favorites.png"),
    },
  },
  {
    title: "XPTO Manager",
    description: `Protótipo de Backoffice feito em Java com Spring Boot e Spring Batch para backend - ao criar usuário são disparados dois jobs.
    VueJs para o frontend com uso de axios, vuex e vue-cookies com interface inspirada em um template Figma. Projeto de uma empresa fictícia com objetivo de gerenciar clientes
    e usuários, com Dashboard de stats usando gerenciamento de estado`,
    thumbImg: require("@/assets/projects-gallery/xpto-manager/thumb.png"),
    alt: "Imagem index do Projeto",
    git: "https://github.com/erizoka/xpto-manager",
    carousel: {
      img1: require("@/assets/projects-gallery/xpto-manager/index.png"),
      img2: require("@/assets/projects-gallery/xpto-manager/dashboard.png"),
      img3: require("@/assets/projects-gallery/xpto-manager/cadastro.png"),
      img4: require("@/assets/projects-gallery/xpto-manager/lista-usuarios.png"),
      img5: require("@/assets/projects-gallery/xpto-manager/editar-usuario.png"),
      img6: require("@/assets/projects-gallery/xpto-manager/editar-usuario-1.png"),
    },
  },
  {
    title: "Convit3 Digital - Web",
    description: `
    Projeto FullStack para gerenciamento de eventos - frontend web usando Next.js, 
    backend usando Nest.js com Prisma e 
    mobile usando React Native com Expo CLI e um 
    Core com regras de negócio somente em Typescript
    `,
    thumbImg: require("@/assets/projects-gallery/convite-digital/thumbweb.png"),
    alt: "Imagem index do Projeto",
    git: "https://github.com/erizoka/convit3-digital",
    carousel: {
      img1: require("@/assets/projects-gallery/convite-digital/index.png"),
      img2: require("@/assets/projects-gallery/convite-digital/criar-evento-1.png"),
      img3: require("@/assets/projects-gallery/convite-digital/criar-evento-2.png"),
      img4: require("@/assets/projects-gallery/convite-digital/criar-evento-3.png"),
      img5: require("@/assets/projects-gallery/convite-digital/evento-criado.png"),
      img6: require("@/assets/projects-gallery/convite-digital/pagina-admin-1.png"),
      img7: require("@/assets/projects-gallery/convite-digital/pagina-admin-2.png"),
      img8: require("@/assets/projects-gallery/convite-digital/tela-convidado-1.png"),
      img9: require("@/assets/projects-gallery/convite-digital/tela-convidado-2.png"),
    },
  },
  {
    title: "Convit3 Digital - Mobile",
    description: `
    Projeto FullStack para gerenciamento de eventos - frontend web usando Next.js, 
    backend usando Nest.js com Prisma e 
    mobile usando React Native com Expo CLI, e um 
    Core com regras de negócio somente em Typescript
    onde os eventos são adicionados via QRCode pelo admin
    `,
    thumbImg: require("@/assets/projects-gallery/convite-digital/thumbmobile.png"),
    alt: "Imagem da tela inicial",
    git: "https://github.com/erizoka/convit3-digital",
    carousel: {
      img1: require("@/assets/projects-gallery/convite-digital/mobile-1.png"),
      img2: require("@/assets/projects-gallery/convite-digital/mobile-2.png"),
      img3: require("@/assets/projects-gallery/convite-digital/mobile-3.png"),
      img4: require("@/assets/projects-gallery/convite-digital/mobile-4.png"),
      img5: require("@/assets/projects-gallery/convite-digital/mobile-5.png"),
    },
  },
  {
    title: "gitChess",
    description: `Sistema de Jogo de Xadrez com lógia de Piece e Board distribuído em cores
        para rodar diretamente pelo
        terminal do GitBash, jogadas especiais e regras de jogo implantadas, projeto feito em linguagem Java.`,
    thumbImg: require("@/assets/projects-gallery/gitChess/thumb-gitchess.png"),
    alt: "Imagem do jogo de Xadrez pelo GitBash",
    git: "https://github.com/erizoka/chess-system-java/",
    carousel: {
      img1: require("@/assets/projects-gallery/gitChess/gitChess-1.png"),
      img2: require("@/assets/projects-gallery/gitChess/gitChess-2.png"),
      img3: require("@/assets/projects-gallery/gitChess/gitChess-3.png"),
      img4: require("@/assets/projects-gallery/gitChess/gitChess-4.png"),
      img5: require("@/assets/projects-gallery/gitChess/gitChess-5.png"),
    },
  },
  {
    title: "Golden Pizza - Web",
    description: `Sistema de gerenciamento de pedido de uma pizzaria (fictícia), 
        implantado sistema de autenticação e integração com app para cadastro dos pedidos pelo garçom. 
        Projeito feito em linguagem NodeJS, TypeScript e React.`,
    thumbImg: require("@/assets/projects-gallery/golden-pizza-desktop/thumb-gp-desktop.png"),
    alt: "Preview da página de login",
    git: "https://github.com/erizoka/Golden-Pizzaria",
    carousel: {
      img1: require("@/assets/projects-gallery/golden-pizza-desktop/login.png"),
      img2: require("@/assets/projects-gallery/golden-pizza-desktop/cadastroProduto.png"),
      img3: require("@/assets/projects-gallery/golden-pizza-desktop/cadastroCategoria.png"),
      img4: require("@/assets/projects-gallery/golden-pizza-desktop/pedidos.png"),
      img5: require("@/assets/projects-gallery/golden-pizza-desktop/pedidoAberto.png"),
    },
  },
  {
    title: "Golden Pizza - Mobile",
    description: `Aplicativo de inclusão de pedido por mesa, integrado ao sistema de gerenciamento web, 
        onde ao ser finalizado um pedido o envio para o gerenciador é imediato. 
        Projeito feito em React, com framework Expo`,
    thumbImg: require("@/assets/projects-gallery/golden-pizza-mobile/thumb-gp-mobile.png"),
    alt: "Imagem do login pelo app",
    git: "https://github.com/erizoka/Golden-Pizzaria",
    carousel: {
      img1: require("@/assets/projects-gallery/golden-pizza-mobile/login.jpg"),
      img2: require("@/assets/projects-gallery/golden-pizza-mobile/novo-pedido.jpg"),
      img3: require("@/assets/projects-gallery/golden-pizza-mobile/criando-pedido.jpg"),
      img4: require("@/assets/projects-gallery/golden-pizza-mobile/categorias.jpg"),
      img5: require("@/assets/projects-gallery/golden-pizza-mobile/finalizando-pedido.jpg"),
    },
  },
  {
    title: "plann.er",
    description: `Planejador de viagem usando React, Vite, Tailwind e Typescript, com gerenciamento de atividades por dia e horário 
        e armazenamento de links externos. Convidados recebem notificação por email e é possível verificar 
        o aceite nos detalhes da viagem. Projeto feito em evento da RocketSeat, somente frontend.`,
    thumbImg: require("@/assets/projects-gallery/trip-planner/thumb.png"),
    alt: "Tela inicial do Planejador de viagem",
    git: "https://github.com/erizoka/trip-planner",
    carousel: {
      img1: require("@/assets/projects-gallery/trip-planner/index.png"),
      img2: require("@/assets/projects-gallery/trip-planner/data-picker.png"),
      img3: require("@/assets/projects-gallery/trip-planner/convidar-email.png"),
      img4: require("@/assets/projects-gallery/trip-planner/confirmar-viagem.png"),
      img5: require("@/assets/projects-gallery/trip-planner/detalhes-viagem.png"),
      img6: require("@/assets/projects-gallery/trip-planner/add-atividade.png"),
    },
  },
  {
    title: "Knowlegde",
    description: `Base de conhecimento - projeto feito no curso Vue 2 da C3der, onde os administradores cadastram
        artigos, categorias e usuários. Somente usuários cadastrados podem acessar,
        tela inicial mostra o dashboard da visão geral e categorias no menu lateral. Backend em JavaScript, 
        Knex e Node v12, frontend com Vue 2, Vue Router, Vuex e BootstrapVue.`,
    thumbImg: require("@/assets/projects-gallery/knowlegde/thumb.png"),
    alt: "Tela de dashboard",
    git: "https://github.com/erizoka/knowledge",
    carousel: {
      img1: require("@/assets/projects-gallery/knowlegde/login.png"),
      img2: require("@/assets/projects-gallery/knowlegde/dashboard.png"),
      img3: require("@/assets/projects-gallery/knowlegde/artigos.png"),
      img4: require("@/assets/projects-gallery/knowlegde/artigo-aberto.png"),
      img5: require("@/assets/projects-gallery/knowlegde/cadastro-artigo1.png"),
      img6: require("@/assets/projects-gallery/knowlegde/cadastro-artigo2.png"),
      img7: require("@/assets/projects-gallery/knowlegde/excluir-categoria.png"),
    },
  },
  {
    title: "Sônia Biscuit",
    description: `Meu primeiro projeto foi também um portfolio para outra pessoa, 
        que faz artesanato. Um projeto
        originalmente com foco em HTML e CSS feito em 2019, porém fiz a
        inclusão de um swiper em js na home para fotos em destaque.`,
    thumbImg: require("@/assets/projects-gallery/sonia/thumb-sonia.png"),
    alt: "Imagem do site projeto Sônia Biscuit",
    git: null,
    carousel: {
      img1: require("@/assets/projects-gallery/sonia/index.png"),
      img2: require("@/assets/projects-gallery/sonia/produtos.png"),
      img3: require("@/assets/projects-gallery/sonia/produtos-2.png"),
      img4: require("@/assets/projects-gallery/sonia/contato.png"),
    },
  },
  {
    title: "Calculator",
    description: `Calculadora simples desenvolvida em Fluttar | Dart com operações básicas como soma, subtração, multiplicação e divisão
    e interface simples e intuitiva e um layout inspirado na calculadora padrão da Apple`,
    thumbImg: require("@/assets/projects-gallery/calculator/thumb.png"),
    alt: "Imagem de calculadora",
    git: "https://github.com/erizoka/calculator",
    carousel: {
      img1: require("@/assets/projects-gallery/calculator/print-1.png"),
      img2: require("@/assets/projects-gallery/calculator/usage.gif"),
    },
  },
  {
    title: "Campo Minado",
    description: `Clássico jogo de Campo Minado desenvolvido em Flutter | Dart com interface estilo retrô, 
    com as regras clássicas de toque em um campo para revelá-lo evitando as minas e marcando campos suspeitos.`,
    thumbImg: require("@/assets/projects-gallery/campo-minado/thumb.png"),
    alt: "Imagem de calculadora",
    git: "https://github.com/erizoka/campo_minado",
    carousel: {
      img1: require("@/assets/projects-gallery/campo-minado/print-1.png"),
      img2: require("@/assets/projects-gallery/campo-minado/print-2.png"),
      img3: require("@/assets/projects-gallery/campo-minado/print-3.png"),
      img4: require("@/assets/projects-gallery/campo-minado/print-4.png"),
    },
  },
  {
    title: "STOCKTrader",
    description: `Simulador de compra de ações em VueJS ver 2 com Vuex onde o usuário tem um saldo inicial e 
        pode comprar e vender ações a qualquer momento. Ao selecionar finalizar o dia, 
        é gerado um novo valor de todas as ações
        disponível e os dados anteriores carregam com o uso do localStorage para armazenamento em cache.`,
    thumbImg: require("@/assets/projects-gallery/strock-trader/thumb.png"),
    alt: "Página inicial do simulador de compra e venda de ações",
    git: "https://github.com/erizoka/stock-trader",
    carousel: {
      img1: require("@/assets/projects-gallery/strock-trader/index.png"),
      img2: require("@/assets/projects-gallery/strock-trader/comprar-acoes.png"),
      img3: require("@/assets/projects-gallery/strock-trader/vender-acoes.png"),
      img4: require("@/assets/projects-gallery/strock-trader/carregando-cache.png"),
    },
  },
  {
    title: "Film Flix",
    description: `Projeto feito em JavaScript puro com css sem uso de framework, usando de forma experimental a API externa developer.themoviedb.org
         página exibe as 20 produções em alta no cinema e streaming, podendo abrir os detalhes exibindo a descrição e o trailer, quando disponível,
         e adicionando à lista de favoritos.`,
    thumbImg: require("@/assets/projects-gallery/film-flix/thumb.png"),
    alt: "Página inicial exibindo filmes em alta",
    git: "https://github.com/erizoka/filmflix-project",
    carousel: {
      img1: require("@/assets/projects-gallery/film-flix/index.png"),
      img2: require("@/assets/projects-gallery/film-flix/detalhe-filme.png"),
      img3: require("@/assets/projects-gallery/film-flix/meus-filmes.png"),
    },
  },
  {
    title: "Pomodoro",
    description: `Um timer com a técnica Pomodoro desenvolvido em Flutter | Dart com controle de temporizador com opção de pausa e reset em uma
    interface simples e intuitiva.`,
    thumbImg: require("@/assets/projects-gallery/pomodoro/thumb.png"),
    alt: "Imagem do projeto",
    git: "https://github.com/erizoka/pomodoro",
    carousel: {
      img1: require("@/assets/projects-gallery/pomodoro/print-1.png"),
      img2: require("@/assets/projects-gallery/pomodoro/print-2.png"),
      img3: require("@/assets/projects-gallery/pomodoro/usage.gif"),
    },
  },
  //{
  //     title: '',
  //     description: ``,
  //     thumbImg: require(''),
  //     alt: '',
  //     git: '',
  //     carousel: {
  //         img1: require(''),
  //         img2: require(''),
  //         img3: require(''),
  //         img4: require(''),
  //         img5: require('')
  //     }
  // },
];

export default projectsData;
