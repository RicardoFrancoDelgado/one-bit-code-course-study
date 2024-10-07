/**
 * O polimorfismo seria então sobrescrever métodos que estão sendo utilizados em outras classes
 * como por exemplo ter um veiculo (any) que se move de varias formas e especificar isso ao dizer que um carro (que extende veiculo)
 * está se movendo.
 * A mesma coisa vale para qualquer veiculo seja ele qual for utilizando o mesmo método e sobrescrevendo a sua saída
 */

class Vehicle {
  move() {
    console.log("O veiculo está se movendo");
  }
}

class Car extends Vehicle {
  move() {
    console.log("O carro está se movendo");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("O navio está navegando");
  }
}

class Aircraft extends Vehicle {
  move(speed) {
    console.log(`A areonave está voando a ${speed} km/h`);
  }
}

const Astra = new Car();
const DockerFile = new Ship();
const AirlinesMalasya = new Aircraft();

// Astra.move();
// DockerFile.move();
// AirlinesMalasya.move(90);

function start(vehicle) {
  console.log("Iniciando um veículo");
  vehicle.move();
}

start(Astra);
start(DockerFile);
start(AirlinesMalasya);
