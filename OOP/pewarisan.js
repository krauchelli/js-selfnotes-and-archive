//metode pewarisan sehingga kita dapat menggunakan berbagai instansi dari satu class saja
//contoh implementasinya adalah penggunaan mail service untuk whatsapp dan email
//
// class MailService {
//     constructor(sender) {
//         this.sender = sender;
//     }
//
//     sendMessage(message, receiver) {
//         console.log(`${this.sender} sent ${message} to ${receiver}`);
//     }
//     sendDelayedMessage(message, receiver, delay) {
//         setTimeout(() => {
//             this.sendMessage(message,receiver);
//         }, delay);
//     }
//     sendBroadcastMessage(message, receivers) {
//         for (const receiver of receivers) {
//             this.sendMessage(message, receiver);
//         }
//     }
// }
//
// //driver lines
// const wangsaf = new MailService('+6282213549274');
// const email = new MailService('muhammad2nanda@gmail.com');
//
// wangsaf.sendMessage('Apa kabar kamu?', 'Unknown Number detected');


//
//kekurangannya adalah terdapat fitur yang tidak kita butuhkan seperti delayed message yang juga masuk ke dalam wangsaf
//

//maka dari itu, kita tambahkan penggunaan 'extends' yang implementasinya dalam class terdapat superclass dan subclass
class SecondMailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

//subclass for whatsapp
class WhatsappService extends SecondMailService {
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver);
        }
    }
}
//subclass for email
class EmailService extends SecondMailService {
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }
}

const wangsaf = new WhatsappService('+6282213549274');
const gmail = new EmailService('dottoku@hotmail.net');

wangsaf.sendBroadcastMessage('Hai semua11', ['Kirito', 'Jibiku', 'Mom']);
gmail.sendDelayedMessage('Please refrain from what did you do last time!', 'Mishk@gmail.com', 5);

//sebagai tambahan, operator untuk mengecek objek yang berasal dari instansi tertentu
console.log(wangsaf instanceof SecondMailService);
console.log(wangsaf instanceof EmailService);

