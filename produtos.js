/**
 * Catálogo Completo - Apache Couro
 * Selaria e Artigos Artesanais em Couro Legítimo
 *
 * Para atualizar o WhatsApp do Daniel, altere apenas WHATSAPP_DANIEL (55 + DDD + Número).
 */
const WHATSAPP_DANIEL = "+5515998417157";

const CATEGORIAS_APACHE = [
  {
    slug: "selaria",
    nome: "Selaria",
    tituloSeo: "Selaria Artesanal em Couro Legítimo | Selas e Arreios - Apache Couro",
    descricaoCurta: "Selas sob medida, arreios, cabeçadas, rédeas e acessórios completos para montaria.",
    descricaoSeo: "Confira nossa linha completa de selaria artesanal em couro legítimo: selas de pista, passeio e trabalho, arreios, cabeçadas e acessórios de montaria feitos à mão pela Apache Couro.",
    capa: "imagens/cela.png",
    altCapa: "Sela artesanal em couro legítimo entalhado - Selaria Apache Couro",
    icone: "fa-horse",
    grupo: "principal",
    produtos: [
      { nome: "Sela Artesanal em Couro #01", imagem: "imagens/cela.png", alt: "Sela artesanal em couro legítimo com acabamento entalhado - modelo 01" },
      { nome: "Sela Artesanal em Couro #02", imagem: "imagens/cela3.png", alt: "Sela de montaria em couro legítimo trabalhado - modelo 02" },
      { nome: "Sela Artesanal em Couro #03", imagem: "imagens/cela4.png", alt: "Sela artesanal de couro reforçado para cavalgada - modelo 03" },
      { nome: "Sela Artesanal em Couro #04", imagem: "imagens/cela5.png", alt: "Sela completa em couro legítimo com detalhes artesanais - modelo 04" },
      { nome: "Sela Artesanal em Couro #05", imagem: "imagens/cela6.png", alt: "Sela de couro legítimo sob medida Apache Couro - modelo 05" },
      { nome: "Sela Artesanal em Couro #06", imagem: "imagens/cela7.png", alt: "Sela artesanal para montaria e trabalho em couro - modelo 06" },
      { nome: "Sela Artesanal em Couro #07", imagem: "imagens/cela8.png", alt: "Sela em couro legítimo com costura reforçada - modelo 07" },
      { nome: "Sela Artesanal em Couro #08", imagem: "imagens/cela9.png", alt: "Sela de couro trabalhado à mão Apache Couro - modelo 08" },
      { nome: "Sela Artesanal em Couro #09", imagem: "imagens/cela10.png", alt: "Sela tradicional em couro legítimo para cavalo e mula - modelo 09" },
      { nome: "Sela Artesanal em Couro #10", imagem: "imagens/cela11.png", alt: "Sela artesanal de couro premium Apache Couro - modelo 10" },
      { nome: "Sela Artesanal em Couro #11", imagem: "imagens/cela12.png", alt: "Sela em couro natural com acabamento fino - modelo 11" },
      { nome: "Sela Artesanal em Couro #12", imagem: "imagens/cela14.png", alt: "Sela artesanal sob encomenda em couro legítimo - modelo 12" }
    ]
  },
  {
    slug: "artigos-de-caca",
    nome: "Artigos de Caça",
    tituloSeo: "Artigos de Caça em Couro | Bainhas, Coldres e Cartucheiras - Apache Couro",
    descricaoCurta: "Bainhas para facão e canivete, coldres, capas de armas, guaiacas e acessórios.",
    descricaoSeo: "Artigos de caça e cutelaria em couro legítimo: bainhas para facas, facões e canivetes, coldres, capas para armas, guaiacas e cinturões reforçados Apache Couro.",
    capa: "imagens/artigosdecaca.png",
    altCapa: "Conjunto de artigos de caça em couro legítimo: bainhas, coldres e guaiacas Apache Couro",
    icone: "fa-compass",
    grupo: "principal",
    produtos: [
      { nome: "Conjunto Artigos de Caça em Couro", imagem: "imagens/artigosdecaca.png", alt: "Conjunto completo de artigos de caça em couro legítimo Apache Couro" },
      { nome: "Artigo de Caça em Couro #01", imagem: "imagens/artigodecaca.png", alt: "Acessório de caça e cutelaria em couro legítimo - modelo 01" },
      { nome: "Artigo de Caça em Couro #02", imagem: "imagens/artigodecaca2.png", alt: "Bainha e acessório de caça artesanal em couro - modelo 02" },
      { nome: "Artigo de Caça em Couro #03", imagem: "imagens/artigodecaca3.png", alt: "Coldre e equipamento de caça em couro reforçado - modelo 03" },
      { nome: "Artigo de Caça em Couro #04", imagem: "imagens/artigodecaca4.png", alt: "Peça artesanal de caça em couro legítimo - modelo 04" },
      { nome: "Artigo de Caça em Couro #05", imagem: "imagens/artigodecaca5.png", alt: "Bainha trabalhada em couro para caça e campo - modelo 05" },
      { nome: "Artigo de Caça em Couro #06", imagem: "imagens/artigodecaca6.png", alt: "Acessório rústico em couro para caça e tiro - modelo 06" },
      { nome: "Artigo de Caça em Couro #07", imagem: "imagens/artigodecaca7.png", alt: "Artigo de caça feito à mão em couro legítimo - modelo 07" },
      { nome: "Artigo de Caça em Couro #08", imagem: "imagens/artigodecaca8.png", alt: "Equipamento de caça em couro sob medida - modelo 08" },
      { nome: "Artigo de Caça em Couro #09", imagem: "imagens/artigodecaca9.png", alt: "Artigo artesanal de cutelaria e caça em couro - modelo 09" }
    ]
  },
  {
    slug: "cintos",
    nome: "Cintos",
    tituloSeo: "Cintos Artesanais em Couro Legítimo Entalhado | Apache Couro",
    descricaoCurta: "Cintos masculinos e femininos em couro legítimo, lisos, trançados e entalhados.",
    descricaoSeo: "Cintos artesanais em couro legítimo bovino de alta durabilidade. Modelos entalhados à mão, com costura reforçada e fivelas selecionadas na Apache Couro.",
    capa: "imagens/cinto.png",
    altCapa: "Cinto artesanal em couro legítimo trabalhado à mão - Apache Couro",
    icone: "fa-ring",
    grupo: "principal",
    produtos: [
      { nome: "Cinto Artesanal em Couro #01", imagem: "imagens/cinto.png", alt: "Cinto artesanal em couro legítimo entalhado - modelo 01" },
      { nome: "Cinto Artesanal em Couro #02", imagem: "imagens/cinto2.png", alt: "Cinto country em couro legítimo trabalhado - modelo 02" },
      { nome: "Cinto Artesanal em Couro #03", imagem: "imagens/cinto3.png", alt: "Cinto de couro bovino com costura artesanal - modelo 03" },
      { nome: "Cinto Artesanal em Couro #04", imagem: "imagens/cinto4.png", alt: "Cinto masculino em couro legítimo reforçado - modelo 04" },
      { nome: "Cinto Artesanal em Couro #05", imagem: "imagens/cinto6.png", alt: "Cinto artesanal entalhado à mão Apache Couro - modelo 05" },
      { nome: "Cinto Artesanal em Couro #06", imagem: "imagens/cinto7.png", alt: "Cinto em couro natural com acabamento rústico - modelo 06" },
      { nome: "Cinto Artesanal em Couro #07", imagem: "imagens/cinto8.png", alt: "Cinto de couro legítimo sob encomenda - modelo 07" },
      { nome: "Cinto Artesanal em Couro #08", imagem: "imagens/cinto9.png", alt: "Cinto country trabalhado em couro legítimo - modelo 08" },
      { nome: "Cinto Artesanal em Couro #09", imagem: "imagens/cinto10.png", alt: "Cinto artesanal premium em couro legítimo - modelo 09" }
    ]
  },
  {
    slug: "calcas-de-couro",
    nome: "Calças de Couro",
    tituloSeo: "Calças de Couro Legítimo e Perneiras Artesanais | Apache Couro",
    descricaoCurta: "Calças de couro sob medida com fivelas reforçadas para lida no campo e montaria.",
    descricaoSeo: "Calças de couro legítimo e perneiras artesanais feitas sob medida para proteção na lida do campo, cavalgadas e rodeios. Resistência e conforto Apache Couro.",
    capa: "imagens/calcascouro.png",
    altCapa: "Calças de couro legítimo artesanais para lida e montaria - Apache Couro",
    icone: "fa-vest",
    grupo: "principal",
    produtos: [
      { nome: "Conjunto Calças de Couro Legítimo", imagem: "imagens/calcascouro.png", alt: "Calças de couro legítimo artesanais Apache Couro" },
      { nome: "Calça de Couro com Fivela", imagem: "imagens/calcacourofivela.png", alt: "Calça de couro legítimo com fivelas reforçadas para montaria" },
      { nome: "Calça de Couro Artesanal #01", imagem: "imagens/calcacouro.png", alt: "Calça de couro legítimo sob medida - modelo 01" },
      { nome: "Calça de Couro Artesanal #02", imagem: "imagens/calcacouro2.png", alt: "Calça de couro para lida no campo - modelo 02" },
      { nome: "Calça de Couro Artesanal #03", imagem: "imagens/calcacouro3.png", alt: "Calça de couro legítimo com costura dupla - modelo 03" },
      { nome: "Calça de Couro Artesanal #04", imagem: "imagens/calcacouro4.png", alt: "Calça de couro artesanal resistente - modelo 04" },
      { nome: "Calça de Couro Artesanal #05", imagem: "imagens/calcacouro5.png", alt: "Calça em couro legítimo personalizada - modelo 05" },
      { nome: "Calça de Couro Artesanal #06", imagem: "imagens/calca2.png", alt: "Calça de couro artesanal Apache Couro - modelo 06" }
    ]
  },
  {
    slug: "carteiras",
    nome: "Carteiras",
    tituloSeo: "Carteiras Masculinas e Femininas em Couro Legítimo | Apache Couro",
    descricaoCurta: "Carteiras artesanais compactas e tradicionais em couro legítimo com gravação.",
    descricaoSeo: "Carteiras em couro legítimo costuradas à mão pela Apache Couro. Modelos tradicionais, slim, porta-documentos e personalizados com gravação artesanal.",
    capa: "imagens/carteira.png",
    altCapa: "Carteira artesanal em couro legítimo costurada à mão - Apache Couro",
    icone: "fa-wallet",
    grupo: "principal",
    produtos: [
      { nome: "Carteira em Couro Legítimo #01", imagem: "imagens/carteira.png", alt: "Carteira artesanal em couro legítimo - modelo 01" },
      { nome: "Carteira em Couro Legítimo #02", imagem: "imagens/carteira2.png", alt: "Carteira de couro bovino trabalhado - modelo 02" },
      { nome: "Carteira em Couro Legítimo #03", imagem: "imagens/carteira3.png", alt: "Carteira compacta em couro legítimo - modelo 03" },
      { nome: "Carteira em Couro Legítimo #04", imagem: "imagens/carteira4.png", alt: "Carteira artesanal com divisórias em couro - modelo 04" },
      { nome: "Carteira em Couro Legítimo #05", imagem: "imagens/carteira5.png", alt: "Carteira em couro entalhado Apache Couro - modelo 05" },
      { nome: "Carteira em Couro Legítimo #06", imagem: "imagens/carteira6.png", alt: "Carteira masculina em couro legítimo - modelo 06" },
      { nome: "Carteira em Couro Legítimo #07", imagem: "imagens/carteira7.png", alt: "Carteira artesanal personalizada em couro - modelo 07" }
    ]
  },
  {
    slug: "porta-capas-e-alforges",
    nome: "Porta-Capas e Alforges",
    tituloSeo: "Porta-Capas e Alforges em Couro para Sela e Montaria | Apache Couro",
    descricaoCurta: "Alforges, porta-capas e bolsas de sela reforçados para cavalgadas e viagens.",
    descricaoSeo: "Porta-capas e alforges em couro legítimo para sela e arreios. Alta resistência para cavalgadas longas, romarias e lida no campo pela Apache Couro.",
    capa: "imagens/portacapacomalforge.png",
    altCapa: "Porta-capa com alforge em couro legítimo para sela - Apache Couro",
    icone: "fa-briefcase",
    grupo: "principal",
    produtos: [
      { nome: "Porta-Capa com Alforge #01", imagem: "imagens/portacapacomalforge.png", alt: "Porta-capa com alforge acoplado em couro legítimo - modelo 01" },
      { nome: "Porta-Capa com Alforge #02", imagem: "imagens/portacapacomalforge2.png", alt: "Conjunto porta-capa e alforge para sela em couro - modelo 02" },
      { nome: "Porta-Capa com Alforge #03", imagem: "imagens/portacapacomalforge3.png", alt: "Porta-capa com alforge reforçado para cavalgada - modelo 03" },
      { nome: "Porta-Capa com Alforge #04", imagem: "imagens/portacapacomalforge5.png", alt: "Porta-capa e alforge artesanal em couro legítimo - modelo 04" },
      { nome: "Porta-Capa em Couro Legítimo", imagem: "imagens/portacapa.png", alt: "Porta-capa cilíndrico em couro legítimo para sela" },
      { nome: "Alforge Duplo em Couro", imagem: "imagens/alforge.png", alt: "Alforge artesanal em couro legítimo para montaria" }
    ]
  },
  {
    slug: "garrafas-terere",
    nome: "Garrafas para Tereré",
    tituloSeo: "Garrafas Térmicas Revestidas em Couro para Tereré | Apache Couro",
    descricaoCurta: "Garrafas térmicas revestidas em couro legítimo entalhado com porta-cuia.",
    descricaoSeo: "Garrafas para tereré revestidas artesanalmente em couro legítimo com entalhes exclusivos, alça reforçada e suporte para cuia na Apache Couro.",
    capa: "imagens/garrafaterere.png",
    altCapa: "Garrafa térmica revestida em couro legítimo para tereré - Apache Couro",
    icone: "fa-bottle-water",
    grupo: "principal",
    produtos: [
      { nome: "Garrafa para Tereré em Couro #01", imagem: "imagens/garrafaterere.png", alt: "Garrafa térmica para tereré revestida em couro legítimo - modelo 01" },
      { nome: "Garrafa para Tereré em Couro #02", imagem: "imagens/garrafaterere2.png", alt: "Garrafa de tereré em couro entalhado à mão - modelo 02" },
      { nome: "Garrafa para Tereré em Couro #03", imagem: "imagens/garrafaterere3.png", alt: "Garrafa térmica personalizada em couro para tereré - modelo 03" },
      { nome: "Garrafa para Tereré em Couro #04", imagem: "imagens/garrafaterere4.png", alt: "Garrafa para tereré com revestimento em couro bovino - modelo 04" },
      { nome: "Garrafa para Tereré em Couro #05", imagem: "imagens/garrafaterere5.png", alt: "Garrafa de tereré artesanal Apache Couro - modelo 05" }
    ]
  },
  {
    slug: "capinhas-de-celular",
    nome: "Capinhas de Celular",
    tituloSeo: "Capinhas e Bainhas de Celular em Couro para Cinto | Apache Couro",
    descricaoCurta: "Capinhas e bainhas de celular em couro legítimo com passador de cinto.",
    descricaoSeo: "Capinhas e bainhas de celular em couro legítimo com passador para cinto e fechamento seguro. Proteção rústica e artesanal feita sob medida pela Apache Couro.",
    capa: "imagens/capinhas.png",
    altCapa: "Capinhas e bainhas de celular em couro legítimo para cinto - Apache Couro",
    icone: "fa-mobile-screen-button",
    grupo: "principal",
    produtos: [
      { nome: "Linha Capinhas de Celular em Couro", imagem: "imagens/capinhas.png", alt: "Modelos variados de capinhas de celular em couro legítimo Apache Couro" },
      { nome: "Capinha de Celular em Couro #01", imagem: "imagens/capinha.png", alt: "Capinha de celular em couro legítimo com passador - modelo 01" },
      { nome: "Capinha de Celular em Couro #02", imagem: "imagens/capinha2.png", alt: "Bainha porta-celular em couro trabalhado - modelo 02" },
      { nome: "Capinha de Celular em Couro #03", imagem: "imagens/capinha3.png", alt: "Capinha de couro legítimo sob medida para smartphone - modelo 03" },
      { nome: "Capinha de Celular em Couro #04", imagem: "imagens/capinha4.png", alt: "Capinha artesanal em couro com costura reforçada - modelo 04" }
    ]
  },
  {
    slug: "cantis",
    nome: "Cantis",
    tituloSeo: "Cantis Artesanais em Couro Legítimo com Alça | Apache Couro",
    descricaoCurta: "Cantis revestidos em couro legítimo com alça tiracolo para cavalgadas e trilhas.",
    descricaoSeo: "Cantis artesanais em couro legítimo com alça ajustável e acabamento tradicional para cavalgadas, romarias e aventuras ao ar livre na Apache Couro.",
    capa: "imagens/cantil.png",
    altCapa: "Cantil artesanal revestido em couro legítimo com alça - Apache Couro",
    icone: "fa-flask",
    grupo: "principal",
    produtos: [
      { nome: "Cantil em Couro Legítimo #01", imagem: "imagens/cantil.png", alt: "Cantil revestido em couro legítimo com alça - modelo 01" },
      { nome: "Cantil em Couro Legítimo #02", imagem: "imagens/cantil2.png", alt: "Cantil artesanal em couro trabalhado - modelo 02" },
      { nome: "Cantil em Couro Legítimo #03", imagem: "imagens/cantil3.png", alt: "Cantil rústico em couro bovino Apache Couro - modelo 03" }
    ]
  },
  {
    slug: "bolsas-femininas",
    nome: "Bolsas Femininas",
    tituloSeo: "Bolsas Femininas Artesanais em Couro Legítimo | Apache Couro",
    descricaoCurta: "Bolsas femininas exclusivas em couro legítimo com design rústico e sofisticado.",
    descricaoSeo: "Bolsas femininas artesanais em couro legítimo confeccionadas à mão pela Apache Couro. Durabilidade, estilo country sofisticado e acabamento impecável.",
    capa: "imagens/bolsas.png",
    altCapa: "Coleção de bolsas femininas artesanais em couro legítimo - Apache Couro",
    icone: "fa-bag-shopping",
    grupo: "bolsas-pastas",
    produtos: [
      { nome: "Coleção Bolsas Femininas em Couro", imagem: "imagens/bolsas.png", alt: "Coleção de bolsas femininas em couro legítimo Apache Couro" },
      { nome: "Bolsa Feminina em Couro #01", imagem: "imagens/Bolsa1.png", alt: "Bolsa feminina artesanal em couro legítimo - modelo 01" },
      { nome: "Bolsa Feminina em Couro #02", imagem: "imagens/Bolsa2.png", alt: "Bolsa feminina em couro bovino com alça reforçada - modelo 02" },
      { nome: "Bolsa Feminina em Couro #03", imagem: "imagens/bolsa3.png", alt: "Bolsa feminina country em couro legítimo - modelo 03" },
      { nome: "Bolsa Feminina em Couro #04", imagem: "imagens/bolsa4.png", alt: "Bolsa artesanal feminina em couro trabalhado - modelo 04" },
      { nome: "Bolsa Feminina em Couro #05", imagem: "imagens/bolsa5.png", alt: "Bolsa feminina exclusiva Apache Couro - modelo 05" }
    ]
  },
  {
    slug: "pastas-executivas",
    nome: "Pastas Executivas",
    tituloSeo: "Pastas Executivas em Couro Legítimo Sob Medida | Apache Couro",
    descricaoCurta: "Pastas executivas e maletas em couro legítimo para notebook e documentos.",
    descricaoSeo: "Pastas executivas artesanais em couro legítimo de alta resistência para notebooks, documentos e uso profissional diário. Feitas à mão pela Apache Couro.",
    capa: "imagens/pastaexecutiva.png",
    altCapa: "Pasta executiva artesanal em couro legítimo - Apache Couro",
    icone: "fa-suitcase",
    grupo: "bolsas-pastas",
    produtos: [
      { nome: "Pasta Executiva em Couro #01", imagem: "imagens/pastaexecutiva.png", alt: "Pasta executiva artesanal em couro legítimo - modelo 01" },
      { nome: "Pasta Executiva em Couro #02", imagem: "imagens/pastaexecutiva2.png", alt: "Pasta executiva em couro bovino com fechamento reforçado - modelo 02" }
    ]
  }
];

/**
 * Gera o link direto para o WhatsApp do Daniel com mensagem padrão contendo o nome da categoria.
 */
function gerarLinkWhatsAppCategoria(nomeCategoria, nomeProduto = null) {
  let mensagem = `Olá Daniel! Vi os produtos da categoria *${nomeCategoria}* no site da Apache Couro e gostaria de fazer um orçamento.`;
  if (nomeProduto) {
    mensagem = `Olá Daniel! Tenho interesse no item *${nomeProduto}* da categoria *${nomeCategoria}* que vi no site da Apache Couro. Pode me passar mais informações?`;
  }
  return `https://wa.me/${WHATSAPP_DANIEL}?text=${encodeURIComponent(mensagem)}`;
}
