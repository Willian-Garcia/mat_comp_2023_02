import { Veiculo_wga, VeiculoEletrico_wga, VeiculoEletricoVoador_wga } from "./ex2_7_modelo_wga";

const longitudeVeiculo = 30;
const latitudeVeiculo = 50;
const meuVeiculo_wga = new Veiculo_wga(longitudeVeiculo, latitudeVeiculo);
console.log("Novo Veículo Criado: ", meuVeiculo_wga);

const longitudeVeiculoEletrico = 30;
const latitudeVeiculoEletrico = 50;
const bateriaVeiculoEletrico = 10;
const meuVeiculoEletrico_wga = new VeiculoEletrico_wga(longitudeVeiculoEletrico, latitudeVeiculoEletrico, bateriaVeiculoEletrico);
console.log("Novo Veículo Elétrico Criado: ", meuVeiculoEletrico_wga);

const longitudeVeiculoEletricoVoador = 30;
const latitudeVeiculoEletricoVoador = 50;
const bateriaVeiculoEletricoVoador = 10;
const altitudeVeiculoEletricoVoador = 60;
const meuVeiculoEletricoVoador_wga = new VeiculoEletricoVoador_wga
(longitudeVeiculoEletricoVoador, latitudeVeiculoEletricoVoador, bateriaVeiculoEletricoVoador, altitudeVeiculoEletricoVoador);
console.log("Novo Veículo Elétrico Voador Criado: ", meuVeiculoEletricoVoador_wga);