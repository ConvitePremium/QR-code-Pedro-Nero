// ========================================================
// CONFIGURAÇÃO DA ENGINE
// Edite SOMENTE este arquivo para personalizar cada evento.
// ========================================================

window.EVENTO_CONFIG = {
  nome: "Pedro Nero",
  idade: "1 aninho",

  // ÁREAS CLICÁVEIS DA TELA INICIAL
  // Valores em porcentagem da largura/altura da arte.
  // Use index.html?debug=1 para visualizar as áreas em vermelho.
  botoes: {
    quiz: { x: 22.0, y: 38.0, largura: 56.0, altura: 10.0 },
    foto: { x: 22.0, y: 51.0, largura: 56.0, altura: 10.0 }
  },

  quiz: {
    titulo: "Quiz do Pedro Nero",
    subtitulo: "Será que você conhece bem o Pedro Nero?",

    perguntas: [
      {
        pergunta: "Quais são as minhas frutas favoritas?",
        opcoes: ["Morango/Kiwi", "Banana/Mamão", "Laranja/Manga", "Goiaba/Melão"],
        correta: "Morango/Kiwi"
      },
      {
        pergunta: "Qual foi a primeira palavra que eu falei?",
        opcoes: ["Papai", "Mamãe", "Vovó", "Não"],
        correta: "Vovó"
      },
      {
        pergunta: "Qual meu brinquedo favorito?",
        opcoes: ["Chocalho", "Carrinho", "Ursinho", "Bola"],
        correta: "Carrinho"
      },
      {
        pergunta: "Qual meu programa favorito?",
        opcoes: ["Bolo fofo", "Mundo Bita", "Galinha Pintadinha", "Clube do Pititíco"],
        correta: "Clube do Pititíco"
      },
      {
        pergunta: "Adoro tomar banho de:",
        opcoes: ["Chuveiro", "Bica", "Piscina", "Banheira"],
        correta: "Chuveiro"
      },
      {
        pergunta: "Com quantos meses eu comecei a engatinhar?",
        opcoes: ["5 meses", "6 meses", "7 meses", "8 meses"],
        correta: "7 meses"
      },
      {
        pergunta: "Com quantos meses saiu o meu primeiro dentinho?",
        opcoes: ["3 meses", "4 meses", "5 meses", "6 meses"],
        correta: "4 meses"
      },
      {
        pergunta: "Qual é o meu time do coração?",
        opcoes: ["Fortaleza", "Flamengo", "São Paulo", "Grêmio"],
        correta: "Flamengo"
      },
      {
        pergunta: "Qual a data EXATA do meu aniversário?",
        opcoes: ["Dia 3", "Dia 4", "Dia 5", "Dia 6"],
        correta: "Dia 5"
      },
      {
        pergunta: "Qual o nome da minha cadelinha?",
        opcoes: ["Zaya", "Lia", "Lessie", "Luna"],
        correta: "Zaya"
      }
    ],

    mensagensResultado: {
      0: "😅 Opa! Parece que você ainda tem muito para descobrir sobre o Pedro Nero!",
      1: "😂 Foi por pouco… de acertar quase nada! Bora conhecer melhor o Pedro Nero!",
      2: "🤭 Você ainda tem bastante coisa para descobrir sobre o nosso aniversariante!",
      3: "😄 Tá começando! Precisa visitar mais o Pedro Nero!",
      4: "👀 Quase na metade! Você já sabe algumas coisinhas sobre ele!",
      5: "💙 Metade! Você conhece o Pedro Nero razoavelmente bem!",
      6: "✨ Mandou bem! Você já sabe bastante sobre o Pedro Nero!",
      7: "💫 Muito bem! Você conhece mesmo o nosso aniversariante!",
      8: "👑 Uau! Você conhece MUITO o Pedro Nero! Faltou pouquinho para gabaritar!",
      9: "🏆 QUASE PERFEITO! Um errinho separou você do 10/10!",
      10: "👑✨ GABARITOU! Você conhece o Pedro Nero melhor do que ninguém! 😂"
    }
  }
};
