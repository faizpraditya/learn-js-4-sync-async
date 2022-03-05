// synchronous => menunggu setiap proses selesai
// console.log(1);
// // setTimeout salah satu contoh async function
// setTimeout(function () {
//     console.log("Run 2");
//     // (summary) (timeoutnya milisecond)
// }, 2000
// );
// console.log(3);

// handle async proses => callback

// // Asynchronouse process
// function cb1() {
//     console.log("r1");
// }
// function cb2(callbackz) {
//     setTimeout(function () {
//         console.log("r2");
//         callbackz()
//         console.log("tes");
//     }, 3000
//     );
// }
// function cb3() {
//     console.log("r3");
// }

// cb1()
// cb2(cb3)

// callback
// - suatu mekanisme yang kita gunakan untuk melakukan handle async proses
// - sebuah function yang dapat menerima sebuah parameter function

// callback hell
function pesanMinuman(pesanan, kirimPesanan){
    console.log(`Mohon menunggu pesanan ${pesanan}, sedang diproses...`);
    setTimeout(() => {
        if(pesanan === 'teh') kirimPesanan(`pesanan ${pesanan} tidak ada.`)
        else{
            const hasil = `Kopi ${pesanan}`
            console.log(`Pesanan ${hasil} sedang dibuat...`);
            setTimeout(() => {
                console.log(`Pesanan ${hasil} sedang diantar...`);
                setTimeout(() => {
                    kirimPesanan(null, hasil)
                }, 2000);
            }, 3000);
        }
    }, 5000);
}

// arrow function
// function dan class
// class constructor
// satuan dalam settimeout milisecond

function minumKopi(error, output) {
    if (error) {
        console.log(`Kecewa, ${error}`);
    } else {
        console.log(`Minum ${output}`);
    }
}

pesanMinuman("Americano", minumKopi)
// pesanMinuman("teh", minumKopi)