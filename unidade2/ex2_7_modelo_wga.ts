class Veiculo_wga {
  longitude:number;
  latitude:number;
  constructor(longitude:number, latitude:number){
    this.longitude = longitude;
    this.latitude = latitude;
  }

  movimento_wga(longitude: number, latitude: number){
    this.longitude = longitude;
    this.latitude = latitude;
  }
}

class VeiculoEletrico_wga extends Veiculo_wga {
  bateria:number;
  constructor(longitude:number,latitude:number,bateria:number) {
    super(longitude, latitude);
    this.bateria = bateria;
  }

  carregar_bateria_wga(bateria: number): void {
    this.bateria= bateria;
  }
}

class VeiculoEletricoVoador_wga extends VeiculoEletrico_wga {
  altitude:number;
  constructor(longitude:number,latitude:number,bateria:number,altitude:number) {
    super(longitude, latitude, bateria);
    this.altitude = altitude;
  }

  alterar_altitude_wga(altitude: number): void {
    this.altitude = altitude;
  }
}

export { Veiculo_wga, VeiculoEletrico_wga, VeiculoEletricoVoador_wga };
