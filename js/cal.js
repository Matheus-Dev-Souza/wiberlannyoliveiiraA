const indices = {
  2005: [2.7991618, 2.783297, 2.7711041, 2.7510217, 2.7262132, 2.7072623, 2.7102436, 2.7094308, 2.7094308, 2.7053727, 2.689772, 2.6753253],
  2006: [2.6646666, 2.6545792, 2.6484877, 2.641356, 2.6381902, 2.634765, 2.6366106, 2.6337135, 2.6342404, 2.6300323, 2.6187716, 2.6078188],
  2007: [2.5917499, 2.5791123, 2.5683253, 2.5570742, 2.550443, 2.5438291, 2.5359676, 2.5278784, 2.5130514, 2.5067844, 2.4992865, 2.4885856],
  2008: [2.4646782, 2.4477885, 2.4360952, 2.4237342, 2.4083209, 2.3854209, 2.3639093, 2.3502777, 2.3453525, 2.3418397, 2.3301888, 2.3213676],
  2009: [2.3146551, 2.2999355, 2.2928277, 2.2882512, 2.2757347, 2.2621617, 2.2527004, 2.247531, 2.2457345, 2.242147, 2.2367788, 2.2285332],
  2010: [2.2231975, 2.203804, 2.1884846, 2.1730559, 2.1573076, 2.1480709, 2.1504364, 2.1519427, 2.1534501, 2.141884, 2.1223583, 2.1007209],
  2011: [2.0881917, 2.0687455, 2.0576343, 2.0441429, 2.0295303, 2.0180276, 2.0135976, 2.0135976, 2.0051759, 1.996193, 1.9898256, 1.9785479],
  2012: [1.9685085, 1.95852, 1.9509115, 1.9474061, 1.935022, 1.9244376, 1.919447, 1.9112287, 1.9026667, 1.890755, 1.8774253, 1.8673416],
  2013: [1.8536248, 1.8367269, 1.8272253, 1.8163274, 1.8056739, 1.7993761, 1.7943519, 1.7966876, 1.7938175, 1.7889872, 1.7781406, 1.7685902],
  2014: [1.7559474, 1.7449541, 1.7338575, 1.7197555, 1.7064452, 1.6962676, 1.6918687, 1.6896721, 1.6866362, 1.678412, 1.6720582, 1.663243],
  2015: [1.6529944, 1.6288869, 1.6102085, 1.586256, 1.575073, 1.5596326, 1.5477152, 1.5387902, 1.5349528, 1.5271643, 1.515495, 1.4988577],
  2016: [1.4854883, 1.4633911, 1.4496197, 1.4432693, 1.4340911, 1.4201734, 1.4135298, 1.4045408, 1.4002001, 1.3990809, 1.3967065, 1.3957295],
  2017: [1.3937782, 1.3879488, 1.3846257, 1.380209, 1.3791057, 1.3741588, 1.3782937, 1.3759545, 1.3763674, 1.3766428, 1.371568, 1.3691036],
  2018: [1.3655531, 1.3624196, 1.3599716, 1.3590203, 1.3561724, 1.3503658, 1.3313278, 1.3280078, 1.3280078, 1.3240357, 1.3187606, 1.3220658],
  2019: [1.3202175, 1.3154817, 1.3084163, 1.2984185, 1.2906744, 1.2887413, 1.2886125, 1.2873251, 1.2857822, 1.2864254, 1.285911, 1.2790044],
  2020: [1.2635886, 1.2611924, 1.259052, 1.2567898, 1.259687, 1.2628442, 1.259067, 1.2535513, 1.2490547, 1.2382817, 1.2273582, 1.215808],
  2021: [1.1983127, 1.1950859, 1.1853659, 1.1752587, 1.1708096, 1.1596767, 1.1527602, 1.1411207, 1.1311665, 1.1177534, 1.1049362, 1.095732],
  2022: [1.0877911, 1.0805514, 1.0698529, 1.051866, 1.0410392, 1.0363755, 1.0299896, 1.0362068, 1.039429, 1.0427659, 1.0378878, 1.0339588],
  2023: [1.0268734, 1.0221714, 1.0143608, 1.0079102, 1.0025964, 0.999, 1, 1, 1, 1, 1, 1],
};

const salarioMinimo = {
  2005: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
  2006: [350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350],
  2007: [380, 380, 380, 380, 380, 380, 380, 380, 380, 380, 380, 380, 380],
  2008: [415, 415, 415, 415, 415, 415, 415, 415, 415, 415, 415, 415],
  2009: [465, 465, 465, 465, 465, 465, 465, 465, 465, 465, 465, 465],
  2010: [510, 510, 510, 510, 510, 510, 510, 510, 510, 510, 510, 510],
  2011: [545, 545, 545, 545, 545, 545, 545, 545, 545, 545, 545, 545],
  2012: [622, 622, 622, 622, 622, 622, 622, 622, 622, 622, 622, 622],
  2013: [678, 678, 678, 678, 678, 678, 678, 678, 678, 678, 678, 638],
  2014: [724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724],
  2015: [788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788],
  2016: [880, 880, 880, 880, 880, 880, 880, 880, 880, 880, 880, 880],
  2017: [937, 937, 937, 937, 937, 937, 937, 937, 937, 937, 937, 937],
  2018: [954, 954, 954, 954, 954, 954, 954, 954, 954, 954, 954, 954],
  2019: [998, 998, 998, 998, 998, 998, 998, 998, 998, 998, 998, 998],
  2020: [1039, 1045, 1045, 1045, 1045, 1045, 1045, 1045, 1045, 1045, 1045, 1045],
  2021: [1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100],
  2022: [1212, 1212, 1212, 1212, 1212, 1212, 1212, 1212, 1212, 1212, 1212, 1212],
  2023: [1302, 1302, 1302, 1302, 1320, 1320, 1320, 1320, 1320, 1320, 1320, 1320]
};

const arredondarPorCentavos = (numero) => {
  return Math.round(numero * 100) / 100;
}

const state = {
  data_ini: "",
  data_fim: "",
  resultado: "",
  valor_salario: "",
  per_salario: "",
  multa: "",
  decimoTerceiro: "0",
  parcelas: [],
  inpc: 1.23242453232,
  valor_final: "",
  subsequente: "1",
  tipoSalario: "0",
  decimoSalarios: []
};


const montaTabela = () => {
  const tabelaContainer = document.querySelector(".result-details");
  tabelaContainer.innerHTML = ""; // Limpar o conteúdo antes de criar a tabela

  const tabela = document.createElement("table");
  tabela.classList.add("tabela-pensao");

  // Criação do cabeçalho da tabela
  const cabecalho = document.createElement("thead");
  const cabecalhoRow = document.createElement("tr");

  const cabecalhoColunas = [
    "Mês Referência",
    "Base do Cálculo",
    "Percentual da Pensão",
    "Valor da Pensão",
    "Valor Pago",
    "Valor Devido",
    "Índice de Correção",
    "Valor Corrigido (INPC)*",
    "Juros",
    "Valor dos Juros",
    "Total"
  ];

  cabecalhoColunas.forEach((colunaTexto) => {
    const coluna = document.createElement("th");
    coluna.textContent = colunaTexto;
    cabecalhoRow.appendChild(coluna);
  });

  cabecalho.appendChild(cabecalhoRow);
  tabela.appendChild(cabecalho);

  // Criação do corpo da tabela
  const corpoTabela = document.createElement("tbody");

  // Iterar sobre os dados do estado (state) para preencher a tabela
  let i = 0;
  for (const parcela of state.parcelas) {
    const linha = document.createElement("tr");

    const colunas = [
      parcela.mes2,
      `R$ ${state.valor_salario}`,
      state.per_salario,
      parcela.valor_devido.toFixed(2),
      `<input type="number" value="${parcela.valor_pago}" onchange="handleValorPago(${state.parcelas.indexOf(parcela)}, event)">`,
      `R$ ${parcela.valor_devido.toFixed(2)}`,
      parcela.indice_correcao,
      `R$ ${parcela.valor_correcao.toFixed(2)}`,
      `${parcela.per_juros}%`,
      `R$ ${parcela.valor_juros.toFixed(2)}`,
      `R$ ${parcela.total.toFixed(2)}`
    ];

    colunas.forEach((colunaTexto) => {
      const coluna = document.createElement("td");
      coluna.innerHTML = colunaTexto;
      linha.appendChild(coluna);
    });

    corpoTabela.appendChild(linha);

    i++;
  }

  tabela.appendChild(corpoTabela);
  tabelaContainer.appendChild(tabela);
}

const calculaData = () => {
  state.parcelas = [];

  let ini = moment(state.data_ini);
  let fim = moment(state.data_fim);

  let resultado = fim.diff(ini, "months");
  let meses = parseInt(resultado) + 1;
  state.meses = meses;

  while (ini.isSameOrBefore(fim)) {
      let valorMes = parseInt(ini.format("MM")) - 1;
      let corrigido = indices[ini.format("YYYY")][valorMes];
      let minimo = salarioMinimo[ini.format("YYYY")][valorMes];

      
      let valorDoSalario =
          state.tipoSalario === "0" ?
          parseFloat(minimo).toFixed(2) :
          state.tipoSalario === "1" ?
          parseFloat(state.valor_salario).toFixed(2) :
          parseFloat(state.valor_salario).toFixed(2);

      // Calcula a porcentagem do salário
      let valorDaPensao =
          state.tipoSalario === "2" ?
          valorDoSalario :
          (parseFloat(state.per_salario) * valorDoSalario) / 100;
          
      console.log(valorDaPensao);

      state.parcelas.push({
          mes: ini.format(),
          valor: 0,
          per_salario: valorDaPensao,
          comjuros: "",
          valor_pago: 0,
          indice_correcao: corrigido,
          valor_devido: 0,
          valor_final: 0,
          valor_correcao: 0,
          total: 0,
          valor_juros: 0,
          per_juros: 0,
          mes2: ini.format("MMM/YY"),
          minimo: minimo,
          numeroMes: valorMes,
          decimo: false,
          month: ini.format("MM")
      });

      // Se houver décimo terceiro na sentença adiciona mais um mês
      if (state.decimoTerceiro === "1") {
          if (parseInt(ini.format("MM")) === 12) {
              state.parcelas.push({
                  mes: ini.format(),
                  valor: 0,
                  per_salario: valorDaPensao,
                  comjuros: "",
                  valor_pago: 0,
                  indice_correcao: corrigido,
                  valor_devido: 0,
                  valor_final: 0,
                  valor_correcao: 0,
                  total: 0,
                  valor_juros: 0,
                  per_juros: 0,
                  mes2: ini.format("MMM/YY"),
                  minimo: minimo,
                  numeroMes: valorMes,
                  decimo: true,
                  month: ini.format("MM")
              });
          }
      }
      ini.add(1, "month");
  }

  let counter = state.parcelas.length;
  for (var i = 0, a = 0, b = 0, c = 0, d = 0, e = 0; i < counter; i++) {
      // Valor corrigido
      a = parseFloat(a) + parseFloat(state.parcelas[i].valor);

      // Valor sem correção
      b = parseFloat(b) + parseFloat(state.parcelas[i].per_salario);

      // Pega o valor pago
      let valorPago = state.parcelas[i].valor_pago;

      // Pega o valor da pensão
      let valorPensao = state.parcelas[i].per_salario;

      // Pega a data de hoje
      let hoje = moment();

      var mes = moment(state.parcelas[i].mes);
      var mesNumero = mes.format("MM");

      if (parseInt(mesNumero) === 12) {
          var juros =
              state.subsequente === "0" ?
              parseInt(hoje.diff(mes, "months")) + 1 :
              parseInt(hoje.diff(mes, "months"));
          state.parcelas[i].juros = parseInt(hoje.diff(mes, "months")) + 1;
      } else {
          var juros =
              state.subsequente === "0" ?
              parseInt(hoje.diff(mes, "months")) + 1 :
              parseInt(hoje.diff(mes, "months"));
          state.parcelas[i].juros = parseInt(hoje.diff(mes, "months")) + 1;
      }

      state.parcelas[i].per_juros = juros;

      // TOTAL
      let total = valorPensao - valorPago;
      state.parcelas[i].valor_devido = parseFloat(arredondarPorCentavos(total.toFixed(2)));

      // Valor da correção
      let correcao = state.parcelas[i].indice_correcao;

      state.parcelas[i].valor_correcao = arredondarPorCentavos(correcao * total);

      state.parcelas[i].valor_juros = arredondarPorCentavos(state.parcelas[i].valor_correcao * (juros / 100));

      state.parcelas[i].total =
          state.parcelas[i].valor_juros + state.parcelas[i].valor_correcao;

      // Multiplica o valor corrigido pelo valor dos juros daquele mês
      let valorcomjuros =
          parseFloat(state.parcelas[i].per_salario) * (juros / 100);

      // Insere o valor corrigido acrescido de juros no objeto do array
      state.parcelas[i].comjuros =
          valorcomjuros + parseFloat(state.parcelas[i].valor);

      state.parcelas[i].valor_final =
          valorcomjuros + parseFloat(state.parcelas[i].valor);

      e = e + state.parcelas[i].total;
      state.valor_final = e;

      c = parseFloat(c) + parseFloat(state.parcelas[i].comjuros);
      d = state.multa / 100;
      let valormulta = d * c;
      var finalmulta = valormulta + c;
  }

  state.total_inpc = a;
  state.total_sem_inpc = b;
  state.totalinpcejuros = c;
  state.totalinpcjurosmulta = finalmulta;

  document.querySelector('#total-pagar').innerHTML = `R$ ${state.valor_final}`
};

const handleIni = e => {
  state.data_ini = e.target.value;
};

const handleFim = e => {
  state.data_fim = e.target.value;
};

const handlePerSalario = e => {
  let persalario = e.target.value;
  let parsed = persalario.replace(/,/g, ".");
  state.per_salario = parsed;
};

const handleMulta = e => {
  state.multa = e.target.value;
};

const handleValorSalario = e => {
  state.valor_salario = e.target.value;
};

const handleValorPago = (index, event) => {
  const valorPago = parseFloat(event.target.value);

  const parcela = state.parcelas[index];
  parcela.valor_pago = valorPago;

  // Atualizar outros campos da mesma linha usando o valorPago
  const valorDevido = parcela.per_salario - valorPago;
  const valorCorrecao = parcela.indice_correcao * valorDevido;
  const valorJuros = (parcela.per_juros / 100) * valorCorrecao;
  const total = valorCorrecao + valorJuros;

  // Atualizar os valores na tabela
  const linhaTabela = document.querySelector(".tabela-pensao").rows[index + 1];
  linhaTabela.cells[5].innerHTML = `R$ ${valorDevido.toFixed(2)}`;
  linhaTabela.cells[7].innerHTML = `R$ ${valorCorrecao.toFixed(2)}`;
  linhaTabela.cells[9].innerHTML = `R$ ${valorJuros.toFixed(2)}`;
  linhaTabela.cells[10].innerHTML = `R$ ${total.toFixed(2)}`;

  const valorFinal = state.valor_final - valorPago;
  document.querySelector('#total-pagar').innerHTML = `R$ ${valorFinal}`
};

const handleSelect = event => {
  state.subsequente = event.target.value;
};

const handleTipoSalario = event => {
  state.tipoSalario = event.target.value;
};

const handleDecimo = e => {
  state.decimoTerceiro = e.target.value;
};

const validateInput = () => {
  let dataIni = state.data_ini;
  let dataFim = state.data_fim;
  let valorSalario = state.valor_salario;
  let perSalario = state.per_salario;
  if (dataIni && dataFim && valorSalario && perSalario) {
      return true;
  } else {
      return false;
  }
};

document.querySelector(".calculate-btn").addEventListener("click", () => {
  calculaData();
  montaTabela();
});


document.querySelector("#multa").addEventListener("change", event => {
  handleMulta(event);
});

document.querySelector("#valor-salario").addEventListener("change", event => {
  handleValorSalario(event);  
});

document.querySelector("#per-salario").addEventListener("change", event => {
  handlePerSalario(event);
});

document.querySelector("#tipo-salario").addEventListener("change", event => {
  handleTipoSalario(event);
});

document.querySelectorAll("#subsequente")[0].addEventListener("change", event => {
  handleSelect(event);
});

document.querySelector("#decimo-terceiro").addEventListener("change", event => {
  handleDecimo(event);
});

document.querySelector("#data-ini").addEventListener("change", event => {
  handleIni(event);
});

document.querySelector("#data-fim").addEventListener("change", event => {
  handleFim(event);
});