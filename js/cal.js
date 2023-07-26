const penhora = () => {
    const state = {
      data_ini: moment()
        .subtract(6, "months")
        .locale("pt-br"),
      data_fim: moment()
        .subtract(3, "months")
        .locale("pt-br"),
      resultado: "",
      valor_salario: "",
      per_salario: "",
      multa: "",
      decimoTerceiro: "0",
      parcelas: [],
      inpc: 1.23242453232,
      valor_final: "",
      subsequente: "0",
      salarioMinimo: [],
      tipoSalario: "0",
      decimoSalarios: []
    };
  
    const calculaData = () => {
      state.parcelas = [];
  
      // Pega a data inicial e a data final
      let ini = moment(state.data_ini);
      let fim = moment(state.data_fim);
  
      // Calcula a quantidade de meses
      let resultado = fim.diff(ini, "months");
      let meses = parseInt(resultado) + 1;
  
      // Coloca o resultado no objeto resultado para ser exibido
      state.meses = meses;
  
      while (fim > ini || ini.format("M") === fim.format("M")) {
        let valorMes = parseInt(ini.format("MM")) - 1;
        let corrigido = indices[ini.format("YYYY")][valorMes];
        let minimo = salarioMinimo[ini.format("YYYY")][valorMes];
  
        let valorDoSalario =
          state.tipoSalario === "0"
            ? parseFloat(minimo).toFixed(2)
            : state.tipoSalario === "1"
            ? parseFloat(state.valor_salario).toFixed(2)
            : parseFloat(state.valor_salario).toFixed(2);
  
        // Calcula a porcentagem do salário
        let valorDaPensao =
          state.tipoSalario === "2"
            ? valorDoSalario
            : (parseFloat(state.per_salario) * valorDoSalario) / 100;
  
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
            state.subsequente === "0"
              ? parseInt(hoje.diff(mes, "months")) + 1
              : parseInt(hoje.diff(mes, "months"));
          state.parcelas[i].juros = parseInt(hoje.diff(mes, "months")) + 1;
        } else {
          var juros =
            state.subsequente === "0"
              ? parseInt(hoje.diff(mes, "months")) + 1
              : parseInt(hoje.diff(mes, "months"));
          state.parcelas[i].juros = parseInt(hoje.diff(mes, "months")) + 1;
        }
  
        state.parcelas[i].per_juros = juros;
  
        // TOTAL
        let total = valorPensao - valorPago;
        state.parcelas[i].valor_devido = parseFloat(total.toFixed(2));
  
        // Valor da correção
        let correcao = state.parcelas[i].indice_correcao;
  
        state.parcelas[i].valor_correcao = correcao * total;
  
        state.parcelas[i].valor_juros =
          state.parcelas[i].valor_correcao * (juros / 100);
  
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
    };
  
    const mostraEstado = () => {
      console.log(state);
    };
  
    const handleIni = e => {
      state.data_ini = e;
    };
  
    const handleFim = e => {
      state.data_fim = e;
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
  
    const handleValorPago = (e, index) => {
      const parcelas = state.parcelas;
      parcelas[e].valor_pago = index.target.value;
      parcelas[e].valor_final = parcelas[e].comjuros - parcelas[e].valor_pago;
      parcelas[e].valor_devido =
        state.tipoSalario === "0"
          ? parcelas[e].per_salario - parcelas[e].valor_pago
          : parcelas[e].per_salario - parcelas[e].valor_pago;
  
      parcelas[e].valor_correcao =
        parcelas[e].valor_devido * parcelas[e].indice_correcao;
  
      let fim = moment(state.data_fim);
      let counter = state.parcelas.length;
      let hoje = moment();
      var mes = moment(state.parcelas[e].mes);
      var mesNumero = mes.format("MM");
  
      if (parseInt(mesNumero) === 12) {
        let result = fim.diff(mes, "months");
        var juros =
          state.subsequente === "0"
            ? parseInt(hoje.diff(mes, "months")) + 1
            : parseInt(hoje.diff(mes, "months"));
        state.parcelas[e].juros = parseInt(hoje.diff(mes, "months")) + 1;
      } else {
        let result = fim.diff(mes, "months");
        var juros =
          state.subsequente === "0"
            ? parseInt(hoje.diff(mes, "months")) + 1
            : parseInt(hoje.diff(mes, "months"));
        state.parcelas[e].juros = parseInt(hoje.diff(mes, "months")) + 1;
      }
  
      state.parcelas[e].per_juros = juros;
      parcelas[e].valor_juros = (juros / 100) * parcelas[e].valor_correcao;
  
      parcelas[e].total = parcelas[e].valor_correcao + parcelas[e].valor_juros;
  
      for (var i = 0, a = 0; i < counter; i++) {
        a = parseFloat(a) + parseFloat(state.parcelas[i].total);
      }
  
      state.valor_final = a;
    };
  
    const handleSelect = event => {
      state.subsequente = event.target.value;
    };
  
    const handleTipoSalario = event => {
      state.tipoSalario = event.target.value;
      calculaData();
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
  
    const calculateButton = document.querySelector(".btn-primary");
    if (calculateButton) {
      calculateButton.addEventListener("click", () => {
        calculaData();
      });
    }
  
    const inputs = document.querySelectorAll("input");
    if (inputs) {
      inputs.forEach(input => {
        input.addEventListener("change", () => {
          const index = input.parentNode.parentNode.rowIndex;
          handleValorPago(index - 1, { target: { value: input.value } });
        });
      });
    }
  
    const selectTipoSalario = document.querySelector(".form-control");
    if (selectTipoSalario) {
      selectTipoSalario.addEventListener("change", event => {
        handleTipoSalario(event);
      });
    }
  
    const selectSubsequente = document.querySelectorAll(".form-control")[1];
    if (selectSubsequente) {
      selectSubsequente.addEventListener("change", event => {
        handleSelect(event);
      });
    }
  
    const selectDecimoTerceiro = document.querySelector(".form-control:last-child");
    if (selectDecimoTerceiro) {
      selectDecimoTerceiro.addEventListener("change", event => {
        handleDecimo(event);
      });
    }
  };
  document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.querySelector(".calculate-btn");
    const resultDetails = document.querySelector(".result-details");
  
    calculateBtn.addEventListener("click", function () {
      const dataIni = document.getElementById("data-ini").value;
      const dataFim = document.getElementById("data-fim").value;
      const valorSalario = document.getElementById("valor-salario").value;
      const perSalario = document.getElementById("per-salario").value;
      const multa = document.getElementById("multa").value;
      const tipoSalario = document.getElementById("tipo-salario").value;
      const decimoTerceiro = document.getElementById("decimo-terceiro").value;
      const subsequente = document.getElementById("subsequente").value;
  
      // Aqui você deve implementar os cálculos utilizando os valores obtidos dos campos acima.
      // Atualmente, o resultado está vazio, então vamos apenas exibir uma mensagem como exemplo:
      const mensagemResultado = "Os resultados serão exibidos aqui!";
      resultDetails.innerHTML = `<p>${mensagemResultado}</p>`;
    });
  });
  
  
  penhora();
  