import { EventEmitter } from "node:events";

// cria um objeto de evento chamado event
const event = new EventEmitter();

console.log(event);

// funcionalidade arrow function funcMsg1 que será emitida pelo evento
const funcMsg1 = (msg1: string, msg2: string) => {
    console.log(msg1, msg2);
}

// funcionalidade arrow function funcMsg2 que será emitida pelo evento
const funcMsg2 = (msg1: string, msg2: string, msg3: string) => {
    console.log(msg1, msg2, msg3);
}

// .addListener - registra um evento e adiciona uma escuta
// registra o evento chamado 'ola1' usando .addListener
// recebendo como funcionalidade a arrow function funcMsg1
event.addListener('ola1', funcMsg1);

// um evento pode ser registrado mais de 1 vez

// .addListener - registra um evento e adiciona uma escuta
// registra o evento chamado 'ola2' usando .addListener
// recebendo como funcionalidade a arrow function funcMsg2
event.addListener('ola2', funcMsg2);

// .on - registra um evento e adiciona uma escuta
// registra o evento chamado 'ola2' usando .on
// recebendo como funcionalidade a arrow function funcMsg2
event.on('ola2', funcMsg2);

// .once - registra um evento e adiciona uma escuta
// que será escutada somente 1x e então o evento é removido.
// registra o evento chamado 'ola2' usando .once
// recebendo como funcionalidade a arrow function funcMsg2
event.once('ola2', funcMsg1);

// .emit - realiza a emissão dos eventos previamente registrados 
// com suas respectivas funcionalidades.
// .emit('nome-evento', parametros-funcionalidade-evento)
let x = 0;
const intervalEventEmitter = setInterval(() => {
    // listenerCount - conta a quantidade de chamadas de um determinado evento
    console.log('contador "ola1": ', event.listenerCount('ola1'));
    console.log('contador "ola2": ', event.listenerCount('ola2'));

    // emitindo evento 'ola1' e seus respectivos parâmetros.
    event.emit('ola1', 'mensagem-1', 'mensagem-2');
    // emitindo evento 'ola2' e seus respectivos parâmetros.
    event.emit('ola2', 'mensagem-1', 'mensagem-2', 'mensagem-3');

    // remoListener - remove o evento 'ola1', que tenha a funcionalidade funcMsg1
    event.removeListener('ola1', funcMsg1);

    // remove todos os eventos 'ola2'
    event.removeAllListeners('ola2');

    x++;
    if(x === 3) clearInterval(intervalEventEmitter);
}, 1000);
