//Catatan Sistem -----
//Catatan Sistem -----

//Note : Soal 1 dan 2 di merge dalam 1 file ini, hasil perhitungan akan di inputkan kedalam log juga ditampilkan pada console, pada akhir sistem keseluruhan isi log.txt ditampilkan didalam console.

const fs = require('fs');
const path = require('path');
const moduleRumus = require('./modul_rumus.js');
const moment = require('moment');
const { error } = require('console');

//Membuat function write hasil perhitungan kedalam file log.txt
const writeLog = (messageLog, pathLog) => {
    const date = new Date();
    const formatdate = moment(date).format('YYYY-MM-DD HH:mm:ss')
    const logAdd = `${formatdate} INFO  ${messageLog}\n`;
    fs.appendFile(pathLog, logAdd, err => {
        if (err) {
            console.error('Gagal menulis log: ', err)
        } else {
            console.log(messageLog)
            console.log('Berhasil menulis log kedalam file log.txt')
        }
    }) 
}

//membuat function read file log.txt
const readLog = (pathLog) => {
    try {
        const logData = fs.readFileSync(pathLog, 'utf-8')
        console.log('Isi File Log :')
        console.log(logData)
    } catch (err) {
        console.error('Gagal Membaca File Log : ', err)        
    }
}
 //mengatur file path
const  pathLog = path.join(__dirname, 'log.txt')

writeLog('Luas Persegi :'+`${moduleRumus.luasPersegi(10)}`, pathLog)
writeLog('Keliling Persegi :'+`${moduleRumus.kelilingPersegi(10)}`, pathLog)

writeLog('Luas Persegi Panjang :'+`${moduleRumus.luasPersegiPanjang(10,5)}`, pathLog)
writeLog('Keliling Persegi Panjang :'+`${moduleRumus.kelilingPersegiPanjang(10,5)}`, pathLog)

readLog(pathLog)





