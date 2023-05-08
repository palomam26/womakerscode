// Array de citações
const quotes = [
  "Quando investimos nas mulheres e nas meninas, estamos investindo nas pessoas que investem em suas famílias, suas comunidades e seus países.",
  "Eu acredito que todas as vidas têm valor igual. Se nós, como sociedade, começarmos a tratá-las assim, poderemos quebrar muitas barreiras que impedem o progresso",
  "Empoderar as mulheres não é apenas o caminho certo a seguir, é o caminho mais inteligente a seguir. Quando as mulheres têm recursos, elas fazem coisas incríveis.",
  "Eu acredito em um mundo onde as meninas não são apenas vistas, mas também valorizadas e capacitadas.",
  "Se quisermos um mundo verdadeiramente igualitário, precisamos abordar não apenas as questões de gênero, mas também as questões de classe e raça que afetam desproporcionalmente as mulheres mais marginalizadas.",
  "Acredito profundamente na importância da educação para capacitar as mulheres e romper o ciclo de pobreza. Quando as mulheres são educadas, elas podem transformar suas vidas e as vidas daqueles ao seu redor."
  
];

// Função para exibir uma citação aleatória
function displayRandomQuote() {
  const quoteText = document.getElementById('quote-text');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}

// Event listener para o botão "Nova Citação"
const newQuoteButton = document.getElementById('new-quote-buttonn');
newQuoteButton.addEventListener('click', displayRandomQuote);

// Exibe uma citação aleatória ao carregar a página
displayRandomQuote();

// Função para exibir os detalhes de um evento
function showEventDetails(event) {
  const year = event.target.getAttribute('data-year');
  const eventDetails = document.getElementById('event-details');
  
  // Atualize com as informações do evento
  if (year === '1982') {
    eventDetails.textContent = 'Melinda conclui seus estudos de graduação em Ciência da Computação e Economia na Duke University.';
  } else if (year === '1987') {
    eventDetails.textContent = 'Melinda entra para a Microsoft como gerente de produtos, onde conhece Bill Gates.';
  } else if (year === '1994') {
    eventDetails.textContent = 'Melinda se casa com Bill Gates em 1º de janeiro.';
  } else if (year === '1996') {
    eventDetails.textContent = 'Melinda deixa seu cargo executivo na Microsoft para se concentrar mais em sua família e em sua filantropia.';
  }else if (year === '2000') {
    eventDetails.textContent = 'Bill e Melinda Gates estabelecem a Fundação Bill e Melinda Gates, uma das maiores fundações filantrópicas do mundo.';
  }else if (year === '2006') {
    eventDetails.textContent = 'Melinda Gates co-funda a Pivotal Ventures, uma empresa de investimentos e incubadora de ideias para promover a igualdade de gênero e capacitar mulheres e meninas.';
  }else if (year === '2012') {
    eventDetails.textContent = 'Melinda Gates lança o livro "The Moment of Lift: How Empowering Women Changes the World" (O Momento de Voar: Como Capacitar Mulheres Transforma o Mundo), no qual ela explora questões relacionadas à igualdade de gênero e compartilha histórias inspiradoras de mulheres ao redor do mundo.';
  }else if (year === '2021') {
    eventDetails.textContent = 'Bill e Melinda Gates anunciam o divórcio após 27 anos de casamento, mas afirmam que continuarão a trabalhar juntos na Fundação Gates.';
  }else if (year === '2023') {
    eventDetails.textContent = 'Você pode conhecer mais datas relevantes na vida de Melinda Gates lendo seu livro ou pesquisando na internet. Ao longo de sua vida, Melinda Gates tem sido uma defensora ativa da igualdade de gênero, saúde global, acesso à educação e combate à pobreza, trabalhando através da Fundação Bill e Melinda Gates para realizar mudanças significativas em todo o mundo.';
  }

}

// Adiciona event listeners aos itens do cronograma
const timelineItems = document.querySelectorAll('#timeline li');
timelineItems.forEach(item => {
  item.addEventListener('click', showEventDetails);
});
