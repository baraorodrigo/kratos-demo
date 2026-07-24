/* ============================================================
   Kratos — camada de demonstração (guia interativo)
   Explica cada tela em linguagem simples. Injetado em todas as páginas.
   ============================================================ */
(function () {
  "use strict";

  // Conteúdo por tela (chave = nome do arquivo)
  var GUIA = {
    "home.html": {
      eyebrow: "Sala de comando",
      titulo: "Tudo o que importa em um lugar",
      texto: "Você abre de manhã e sabe em 30 segundos onde a campanha está: o que precisa da sua decisão hoje, os alertas, o quanto já gastou e a agenda.",
      pontos: [
        "Nada se perde: tudo o que acontece na campanha entra aqui",
        "O que precisa da sua aprovação fica em destaque",
        "Alertas de crise aparecem antes de virar problema"
      ]
    },
    "index.html": { redirect: "home.html" },
    "pendencia-detalhe.html": {
      eyebrow: "Aprovações",
      titulo: "Você decide, tudo fica registrado",
      texto: "Cada coisa que precisa da sua aprovação vira uma pendência com todo o contexto reunido. Você aprova, ajusta ou recusa — e fica registrado quem decidiu o quê e quando.",
      pontos: [
        "O Kratos junta as evidências e já propõe um plano",
        "Nada sai da campanha sem aprovação humana",
        "Trilha completa para sua proteção"
      ]
    },
    "war-room-crise.html": {
      agente: "Argos · monitoramento",
      eyebrow: "Sala de crise",
      titulo: "A crise controlada antes de crescer",
      texto: "Quando um assunto começa a disparar nas redes, o Kratos detecta cedo, junta as evidências e já traz um plano de resposta pronto para sua aprovação.",
      pontos: [
        "Detecta o crescimento anormal em minutos",
        "Reúne provas, origem e clima da conversa",
        "Plano de resposta coordenado entre os agentes"
      ]
    },
    "financeiro.html": {
      agente: "Drachma · financeiro",
      eyebrow: "Financeiro",
      titulo: "Prestação de contas sem pânico",
      texto: "Todo gasto organizado com nota, contrato e comprovante. Alerta antes de estourar o teto do TSE. Sua prestação de contas fica pronta o tempo todo — não na véspera do prazo.",
      pontos: [
        "Cada nota vira arquivo organizado no ato",
        "Alerta antes de passar do limite de gastos",
        "Documentação do jeito que o TSE exige"
      ]
    },
    "juridico.html": {
      agente: "Nomos · jurídico",
      eyebrow: "Jurídico",
      titulo: "A resposta jurídica antes de você errar",
      texto: "\"Posso fazer isso?\" — o Kratos consulta as regras do TSE e responde na hora. Dúvida simples resolve na hora; risco sério, encaminha para o advogado. Nunca decide sozinho.",
      pontos: [
        "Alerta sobre condutas vedadas perto de datas críticas",
        "Calendário eleitoral sempre à mão",
        "Cada decisão registrada com a fonte da regra"
      ]
    },
    "territorio.html": {
      agente: "Polis · território",
      eyebrow: "Território",
      titulo: "Decisão de agenda com dado, não achismo",
      texto: "O mapa vivo da campanha: onde o povo está pedindo o quê, quais bairros estão descobertos e onde vale a pena ir. A agenda deixa de ser palpite.",
      pontos: [
        "Demandas mapeadas por bairro e por tema",
        "Aponta áreas fortes com zero cobertura",
        "Sugere a próxima visita por oportunidade real"
      ]
    },
    "conteudo.html": {
      agente: "Hermes · comunicação",
      eyebrow: "Conteúdo",
      titulo: "Comunicação alinhada e sob controle",
      texto: "Todo conteúdo passa por aqui — rascunho, aprovação, publicação. Sempre alinhado à sua narrativa, com rótulo de IA e a sua aprovação antes de ir para o ar.",
      pontos: [
        "Nunca contradiz o que você já defendeu",
        "Rótulo de IA aplicado (regra 2026)",
        "Nada é publicado sem você aprovar"
      ]
    },
    "agenda.html": {
      eyebrow: "Agenda",
      titulo: "Você nunca chega despreparado",
      texto: "Antes de cada compromisso, um briefing de quem estará lá, o histórico do relacionamento e os temas sensíveis. Sua agenda com inteligência.",
      pontos: [
        "Briefing automático antes de cada reunião",
        "Alertas de conflito e deslocamento",
        "Registro do que foi combinado depois"
      ]
    },
    "pesquisa.html": {
      agente: "Athena · pesquisa",
      eyebrow: "Pesquisa e dados",
      titulo: "Números sem achismo, sem invenção",
      texto: "Interpreta pesquisas separando o que é fato, o que é hipótese e o que é recomendação. Você decide com clareza — e o Kratos nunca inventa um número.",
      pontos: [
        "Compara cenários ao longo do tempo",
        "Sempre cita a fonte e a margem de erro",
        "Alerta quando a pesquisa é fraca"
      ]
    },
    "monitoramento.html": {
      agente: "Argos · monitoramento",
      eyebrow: "Monitoramento",
      titulo: "As redes escutadas 24 horas por dia",
      texto: "Mostra o que está crescendo, o clima geral da conversa e alerta quando um assunto sensível dispara. O sentimento é sempre agregado — nunca perfila pessoas.",
      pontos: [
        "Menções e temas em tempo real",
        "Clima geral sem expor indivíduos (LGPD)",
        "Alerta de crise direto para você"
      ]
    },
    "configuracao.html": {
      eyebrow: "Administração",
      titulo: "Você controla quem vê o quê",
      texto: "O contador só vê o financeiro, o advogado só vê o jurídico, a equipe de rua só vê o território. Cada pessoa com o acesso certo — e tudo com registro.",
      pontos: [
        "Perfis de acesso por área",
        "Toda entrada de dado passa por verificação",
        "Alçada de aprovação definida por você"
      ]
    },
    "auditoria.html": {
      eyebrow: "Auditoria",
      titulo: "Cada ação registrada e rastreável",
      texto: "Quem aprovou, quando e com base em quê. Tudo versionado e auditável. A sua proteção caso alguma decisão seja questionada no futuro.",
      pontos: [
        "Registro de agentes e de pessoas",
        "Histórico completo, com possibilidade de voltar atrás",
        "Exportável a qualquer momento"
      ]
    }
  };

  var file = (location.pathname.split("/").pop() || "home.html").toLowerCase();
  if (file === "" || file === "index.html") file = "home.html";
  var data = GUIA[file];
  if (data && data.redirect) return; // não injeta em páginas de redirect
  if (!data) return;

  // ---- Selo demonstração ----
  var badge = document.createElement("div");
  badge.className = "kd-badge";
  badge.textContent = "Demonstração";
  badge.title = "Dados fictícios para demonstração";
  document.body.appendChild(badge);

  // ---- Botão flutuante ----
  var fab = document.createElement("button");
  fab.className = "kd-fab";
  fab.type = "button";
  fab.setAttribute("aria-label", "Sobre esta tela");
  fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/></svg><span>Sobre esta tela</span>';
  document.body.appendChild(fab);

  // ---- Overlay + painel ----
  var overlay = document.createElement("div");
  overlay.className = "kd-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  document.body.appendChild(overlay);

  function pontosHTML(pontos) {
    if (!pontos || !pontos.length) return "";
    var lis = pontos.map(function (p) { return "<li>" + p + "</li>"; }).join("");
    return '<ul class="kd-list">' + lis + "</ul>";
  }

  function abrir(intro) {
    var agente = data.agente ? '<span class="kd-agent">' + data.agente + "</span>" : "";
    var navHint = intro
      ? '<div class="kd-nav-hint"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h10"/></svg>Navegue pela barra lateral para conhecer cada parte do sistema.</div>'
      : "";
    var eyebrow = intro ? "Bem-vindo" : (data.eyebrow || "Sobre esta tela");
    var titulo = intro ? "Este é o Kratos" : data.titulo;
    var texto = intro
      ? "O sistema operacional que organiza toda a sua campanha. Esta é uma demonstração com dados fictícios — explore à vontade."
      : data.texto;
    var pontos = intro ? pontosHTML(data.pontos) : pontosHTML(data.pontos);
    overlay.innerHTML =
      '<div class="kd-panel ' + (intro ? "kd-intro-card" : "") + '">' +
        '<div class="kd-eyebrow">' + eyebrow + "</div>" +
        "<h3>" + titulo + "</h3>" +
        agente +
        navHint +
        "<p>" + texto + "</p>" +
        pontos +
        '<button class="kd-close" type="button">Entendi</button>' +
      "</div>";
    overlay.classList.add("open");
    var closeBtn = overlay.querySelector(".kd-close");
    if (closeBtn) closeBtn.focus();
  }

  function fechar() { overlay.classList.remove("open"); }

  fab.addEventListener("click", function () { abrir(false); });
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay || (e.target.classList && e.target.classList.contains("kd-close"))) fechar();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") fechar();
  });

  // Intro automática na home, uma vez por sessão
  if (file === "home.html") {
    try {
      if (!sessionStorage.getItem("kd-intro-visto")) {
        setTimeout(function () { abrir(true); }, 550);
        sessionStorage.setItem("kd-intro-visto", "1");
      }
    } catch (err) {
      setTimeout(function () { abrir(true); }, 550);
    }
  }
})();
