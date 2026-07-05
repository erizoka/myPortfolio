//TODO melhorar as descrições dos cards
const projectsData = [
  {
    title: "Marvel Comics",
    description: `Aplicação mobile construída em Flutter para exploração do universo Marvel 
    através do consumo de sua API oficial REST. O projeto implementa arquitetura modular, 
    busca dinâmica e indexada de personagens, quadrinhos e eventos, gerenciamento de estado 
    para persistência local de dados favoritos e uma interface responsiva baseada em 
    carrosséis fluidos e componentes customizados de UI/UX.`,
    thumbImg: require("@/assets/projects-gallery/marvel-comics/thumb.png"),
    alt: "Tela da home do app",
    git: "https://github.com/erizoka/marvel-comics-api",
    isMobile: true,
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
    title: "Higher or Lower",
    description: `Jogo de cartas dinâmico desenvolvido em Flutter utilizando o 
    ecossistema GetX para gerenciamento de estado e injeção de dependências. 
    O projeto realiza o consumo assíncrono da Deck of Cards API para simulação e 
    manipulação de baralhos reais em tempo de execução, integrando animações fluidas 
    de interface, persistência local para controle de recordes (streaks) e design 
    system fundamentado nas diretrizes do Material 3.`,
    thumbImg: require("@/assets/projects-gallery/higher-or-lower/thumb.png"),
    alt: "Tela da home do app",
    git: "https://github.com/erizoka/higher-or-lower",
    isMobile: true,
    hasDownload: true,
    download: "HigherOrLower.apk",
    downloadPath: "downloads/higher-or-lower.apk",
    carousel: {
      img1: require("@/assets/projects-gallery/higher-or-lower/splash.gif"),
      img2: require("@/assets/projects-gallery/higher-or-lower/home.png"),
      img3: require("@/assets/projects-gallery/higher-or-lower/win.gif"),
      img4: require("@/assets/projects-gallery/higher-or-lower/lose.gif"),
    },
  },
  {
    title: "Greengrocer",
    description: `Plataforma de e-commerce voltada para hortifrúti desenvolvida em Flutter 
    com arquitetura baseada no GetX para gerência de estado e rotas. A aplicação engloba 
    fluxos completos de navegação indexada por categorias de produtos, gerenciamento 
    dinâmico de carrinho de compras em memória, processamento de checkout e um sistema 
    estruturado para acompanhamento e atualização do status de pedidos em tempo real.`,
    thumbImg: require("@/assets/projects-gallery/greengrocer/thumb.png"),
    alt: "Tela da home do app",
    git: "https://github.com/erizoka/greengrocer",
    isMobile: true,
    hasDownload: true,
    download: "Greengrocer.apk",
    downloadPath: "downloads/greengrocer.apk",
    carousel: {
      img1: require("@/assets/projects-gallery/greengrocer/tela-login.png"),
      img2: require("@/assets/projects-gallery/greengrocer/tela-cadastro.png"),
      img3: require("@/assets/projects-gallery/greengrocer/tela-home.png"),
      img4: require("@/assets/projects-gallery/greengrocer/pesquisa.gif"),
      img5: require("@/assets/projects-gallery/greengrocer/navegacao-detalhes.gif"),
      img6: require("@/assets/projects-gallery/greengrocer/adiciona-carrinho-home.gif"),
      img7: require("@/assets/projects-gallery/greengrocer/tela-carrinho.png"),
      img8: require("@/assets/projects-gallery/greengrocer/tela-pedidos-1.png"),
      img9: require("@/assets/projects-gallery/greengrocer/tela-pedidos-2.png"),
      img10: require("@/assets/projects-gallery/greengrocer/tela-perfil.png"),
    },
  },
  {
    title: "XPTO Manager",
    description: `Protótipo de sistema backoffice corporativo baseado em uma arquitetura 
    desacoplada. O backend utiliza Java com Spring Boot e implementa processamento em lote 
    via Spring Batch para a execução automatizada de jobs assíncronos no ciclo de vida 
    do usuário. O frontend é estruturado em Vue.js com Axios para consumo de APIs, Vuex 
    para gerência de estado centralizada e controle de sessões via cookies, apresentando 
    uma interface fidelizada a partir de prototipagem no Figma e dashboard dinâmico de indicadores.`,
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
    Vertente web de uma plataforma Full Stack voltada para o gerenciamento de eventos, 
    estruturada sob o ecossistema TypeScript. O ecossistema compreende uma interface 
    web responsiva e dinâmica desenvolvida em Next.js e um backend escalável em Nest.js 
    integrado ao ORM Prisma, utilizando um pacote Core isolado que centraliza e 
    compartilha de forma pura todas as regras de negócio e validações arquiteturais.
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
    Vertente mobile da plataforma de gerenciamento de eventos, construída com React Native 
    e Expo CLI para entrega multiplataforma. A aplicação consome um backend em 
    Nest.js/Prisma e integra-se ao pacote Core compartilhado em TypeScript puro, 
    destacando-se pela implementação de recursos nativos para leitura e validação 
    instantânea de acessos a eventos via câmera com QRCode.
    `,
    thumbImg: require("@/assets/projects-gallery/convite-digital/thumbmobile.png"),
    alt: "Imagem da tela inicial",
    git: "https://github.com/erizoka/convit3-digital",
    isMobile: true,
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
    description: `Sistema de xadrez baseado em CLI desenvolvido em Java, aplicando 
    conceitos avançados de Programação Orientada a Objetos (POO) para a modelagem e 
    gerenciamento do tabuleiro e das peças. O projeto roda diretamente no terminal, 
    contando com renderização customizada em cores (ANSI), validação estrita de 
    movimentos possíveis, tratamento de exceções customizadas do domínio e implementação 
    de regras e jogadas especiais do xadrez, como Roque, En Passant e Promoção.`,
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
    description: `Vertente web de um ecossistema de automação comercial para pizzarias, 
    desenvolvido em Node.js, TypeScript e React. A plataforma atua como o painel 
    administrativo centralizador, integrando fluxos de autenticação segura, controle 
    de sessões e um dashboard operacional para gerenciamento, triagem e monitoramento 
    dos pedidos enviados em tempo real pelos dispositivos móveis.`,
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
    description: `Vertente mobile voltada para a operação de atendimento em salão, 
    construída em React Native com a infraestrutura do Expo. O aplicativo funciona 
    de forma integrada ao ecossistema web, permitindo que a equipe de garçons realize 
    a abertura de mesas, inclusão dinâmica de itens e o fechamento de comandas com 
    sincronização assíncrona e envio imediato de dados para a cozinha.`,
    thumbImg: require("@/assets/projects-gallery/golden-pizza-mobile/thumb-gp-mobile.png"),
    alt: "Imagem do login pelo app",
    git: "https://github.com/erizoka/Golden-Pizzaria",
    isMobile: true,
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
    description: `Aplicação de planejamento e gestão de viagens desenvolvida em React, 
    Vite e TypeScript, com estilização utilitária via TailwindCSS. O frontend implementa 
    fluxos complexos para gerenciamento cronológico de atividades com controle de dia 
    e horário, repositório estruturado para links e anexos externos, e um painel de 
    controle de convidados com indicadores visuais sobre o status de confirmação e aceite de presença.`,
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
    description: `Plataforma Full Stack de base de conhecimento desenvolvida com o 
    ecossistema Vue 2 no frontend e Node.js integrado ao query builder Knex no backend. 
    Com um controle estrito de autenticação e autorização, disponibilizando 
    módulos administrativos para o gerenciamento completo de artigos, 
    usuários e categorias. A interface gráfica utiliza Vuex para gerência de estado 
    centralizada, Vue Router para navegação e componentes responsivos 
    do BootstrapVue para a renderização de dashboards de métricas e menus dinâmicos.`,
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
    description: `Website institucional e portfólio digital desenvolvido para 
    exibição de produtos artesanais. O projeto foca na estruturação semântica 
    em HTML5 e estilização em CSS3 nativo, integrando a biblioteca SwiperJS 
    para a implementação de carrosséis responsivos e dinâmicos de imagens 
    em destaque na página principal, priorizando a fidelidade visual e a 
    otimização de carregamento dos elementos de mídia.`,
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
    description: `Aplicação utilitária de calculadora desenvolvida em Flutter e 
    Dart para execução de operações matemáticas fundamentais. O projeto foca no 
    processamento e validação de expressões aritméticas em tempo real, apresentando 
    uma interface minimalista e intuitiva com design system e transições visuais 
    inspirados na interface padrão de sistemas iOS.`,
    thumbImg: require("@/assets/projects-gallery/calculator/thumb.png"),
    alt: "Imagem de calculadora",
    git: "https://github.com/erizoka/calculator",
    isMobile: true,
    hasDownload: true,
    download: "Calculator.apk",
    downloadPath: "downloads/calculator.apk",
    carousel: {
      img1: require("@/assets/projects-gallery/calculator/print-1.png"),
      img2: require("@/assets/projects-gallery/calculator/usage.gif"),
    },
  },
  {
    title: "Campo Minado",
    description: `Recriação do clássico jogo de estratégia lógica desenvolvido em Flutter 
    e Dart. O projeto implementa uma matriz dinâmica de blocos interconectados, 
    englobando algoritmos de varredura recursiva para a revelação de áreas seguras, 
    cálculo em tempo real da proximidade de minas, controle de estados para marcação 
    de bandeiras e tratamento de eventos de toque (curto e longo) sob uma interface 
    fiel ao estilo retrô.`,
    thumbImg: require("@/assets/projects-gallery/campo-minado/thumb.png"),
    alt: "Imagem de calculadora",
    git: "https://github.com/erizoka/campo_minado",
    isMobile: true,
    hasDownload: true,
    download: "CampoMinado.apk",
    downloadPath: "downloads/campo-minado.apk",
    carousel: {
      img1: require("@/assets/projects-gallery/campo-minado/print-1.png"),
      img2: require("@/assets/projects-gallery/campo-minado/print-2.png"),
      img3: require("@/assets/projects-gallery/campo-minado/print-3.png"),
      img4: require("@/assets/projects-gallery/campo-minado/print-4.png"),
    },
  },
  {
    title: "STOCKTrader",
    description: `Simulador financeiro de compra e venda de ações desenvolvido no 
    ecossistema Vue.js 2 com gerenciamento de estado via Vuex. A aplicação computa 
    transações de ativos em tempo real com base em um saldo dinâmico, implementando 
    um algoritmo para flutuação e geração randômica de preços a cada fechamento de 
    ciclo diário, além de integrar o localStorage para cache de dados e
     persistência do progresso da sessão do usuário.`,
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
    description: `Aplicação web desenvolvida em JavaScript Vanilla (puro) e 
    CSS nativo para exploração de produções audiovisuais. O projeto realiza 
    o consumo assíncrono da API REST do The Movie Database (TMDB) para listar 
    e renderizar dinamicamente os títulos em alta, manipulando diretamente a 
    árvore do DOM para exibição de metadados detalhados, integração com players 
    de trailers externos e gerenciamento de uma lista local de favoritos em memória.`,
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
    description: `Aplicativo de produtividade baseado na metodologia Pomodoro, 
    desenvolvido em Flutter e Dart. O projeto implementa motores de temporização 
    e controle preciso de loops assíncronos para gerenciar ciclos de foco e descanso, 
    fornecendo recursos para pausa, reinicialização e manipulação do estado do timer 
    através de uma interface de usuário minimalista e intuitiva.`,
    thumbImg: require("@/assets/projects-gallery/pomodoro/thumb.png"),
    alt: "Imagem do projeto",
    git: "https://github.com/erizoka/pomodoro",
    isMobile: true,
    hasDownload: true,
    download: "Pomodoro.apk",
    downloadPath: "downloads/pomodoro.apk",
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
