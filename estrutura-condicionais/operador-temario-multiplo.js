let quartoDisponiveis = 1;
let reservaConfirmada = false;

let statusReserva =(reservaConfirmada && quartoDisponiveis > 0) 
                ? "Reserva confirmada"
                : (quartoDisponiveis > 0) ? "Aguardando confirmação"
                :"Sem quartos disponiveis";

console.log(statusReserva); // Saída: "Reserva confirmada"
