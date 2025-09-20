// 1. Classe Base - Veiculo
class Veiculo {
  public marca: string;
  public modelo: string;
  public ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  public exibirInfo(): void {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Ano: ${this.ano}`);
  }
}

// 2. Subclasse - Carro (Herda de Veiculo)
class Carro extends Veiculo {
  public numeroDePortas: number;

  constructor(marca: string, modelo: string, ano: number, numeroDePortas: number) {
    super(marca, modelo, ano);
    this.numeroDePortas = numeroDePortas;
  }

  // Sobrescreve o método exibirInfo() da classe base
  public exibirInfo(): void {
    console.log("--- Informacoes do Carro ---");
    super.exibirInfo(); // Chama o método da classe pai
    console.log(`Numero de Portas: ${this.numeroDePortas}`);
    console.log("----------------------------");
  }
}

// 3. Subclasse - Moto (Herda de Veiculo)
class Moto extends Veiculo {
  public tipoDeGuidao: string;

  constructor(marca: string, modelo: string, ano: number, tipoDeGuidao: string) {
    super(marca, modelo, ano);
    this.tipoDeGuidao = tipoDeGuidao;
  }

  // Sobrescreve o método exibirInfo() da classe base
  public exibirInfo(): void {
    console.log("--- Informacoes da Moto ---");
    super.exibirInfo(); // Chama o método da classe pai
    console.log(`Tipo de Guidao: ${this.tipoDeGuidao}`);
    console.log("---------------------------");
  }
}

// --- Exemplo de Uso ---

// Instanciando um Carro
const meuCarro = new Carro("Toyota", "Corolla", 2022, 4);
meuCarro.exibirInfo();

// Instanciando uma Moto
const minhaMoto = new Moto("Honda", "CBR 600RR", 2023, "Esportivo");
minhaMoto.exibirInfo();