# BAB II ~ NodeJs

# Pengertian Node JS

Secara Makna bahasa `Node` adalah simpul, sedangkan `Js` adalah akronim dari `JavaScript`. `NodeJs` adalah _`runtime environment`_ yang berjalan diatas `V8 Engine`. JavaScript umumnya hanya bisa berjalan di browser, namun dengan Node Js kita bisa menjalankan JavaScript di server. V8 engine adalah engine yang digunakan oleh Google Chrome untuk menjalankan kode JavaScript. V8 engine ini juga digunakan oleh Node Js untuk menjalankan kode JavaScript.

Node Js juga bisa digunakan untuk membuat aplikasi desktop dengan menggunakan Electron. Node Js juga bisa digunakan untuk membuat aplikasi mobile dengan menggunakan React Native.

Runtime environment adalah tempat dimana kode dijalankan. Contoh runtime environment adalah browser, Node Js, dan Java Virtual Machine. Node Js menggunakan V8 engine untuk menjalankan kode JavaScript.

NodeJs dapat digunakan untuk membuat aplikasi web, aplikasi desktop, aplikasi mobile, dan juga aplikasi IoT. NodeJs juga dapat digunakan untuk membuat aplikasi yang bersifat real time. real time artinya aplikasi tersebut dapat berinteraksi dengan pengguna secara langsung.

Versi NodeJs saat ini adalah versi 18. NodeJs memiliki 2 versi yaitu versi LTS (Long Term Support) dan versi Current. Versi LTS adalah versi yang stabil dan direkomendasikan untuk digunakan. Versi Current adalah versi yang paling baru dan masih dalam tahap pengembangan. Versi Current akan menjadi versi LTS setelah 6 bulan.

# Sejarah Node Js

Node Js pertama kali dibuat oleh Ryan Dahl pada tahun 2009. Node Js awalnya bernama server.js, namun pada tahun 2012 Ryan Dahl mengubah namanya menjadi Node Js. Node Js awalnya dibuat untuk mengatasi masalah yang ada pada PHP dan Ruby. Node Js awalnya hanya bisa berjalan di Linux, namun pada tahun 2011 Node Js sudah bisa berjalan di Windows dan Mac OS.

NodeJs dibuat dengan menggunakan bahasa pemrograman C++ dan JavaScript. Ryan Dahl mengembangkan NodeJS dikarenakan adanya kekurangan yang terdapat di bahasa pemrograman `PHP` dan `Ruby`. Kekurangan tersebut adalah kecepatan dan kemampuan untuk menghandle banyak request secara bersamaan. Bahasa pemrograman PHP dan Ruby hanya bisa menghandle 1 request secara bersamaan. Ketika ada banyak request yang masuk, maka request tersebut akan ditunggu sampai request sebelumnya selesai. Hal tersebut menyebabkan website menjadi lambat. NodeJs ada untuk mengatasi hal tersebut.

Awalnya NodeJs hanya bisa berjalan di Linux, namun pada tahun 2011 NodeJs sudah bisa berjalan di Windows dan Mac OS. NodeJs awal perilisan hanya dapat memiliki fitur yang sangat sederhana, namun seiring berjalannya waktu NodeJs semakin berkembang dan memiliki banyak fitur. NodeJs saat ini sudah memiliki banyak fitur dan sudah banyak digunakan oleh banyak perusahaan. NodeJs juga sudah banyak digunakan untuk membuat aplikasi web, aplikasi desktop, aplikasi mobile, dan juga aplikasi IoT. NodeJs juga dapat digunakan untuk membuat aplikasi yang bersifat real time. real time artinya aplikasi tersebut dapat berinteraksi dengan pengguna secara langsung.

# Instalasi Node Js

- Sistem Operasi Windows

1. Download [Node Js](https://nodejs.org/en/download/)
2. Install Node Js, klik Next sampai selesai
3. Buka CMD dan ketik `node -v` untuk melihat versi Node Js yang terinstall

£ Sistem Operasi Linux

1. Download [Node Js](https://nodejs.org/en/download/)
2. Ekstrak file yang sudah di download
3. Buka terminal dan ketik `cd` untuk masuk ke direktori home
4. Ketik `cd Downloads` untuk masuk ke direktori Downloads
5. Ketik `cd node-v14.17.3-linux-x64` untuk masuk ke direktori node
6. Ketik `sudo cp -r bin/ /usr/local/` untuk memindahkan file bin ke direktori usr/local
7. Ketik `sudo cp -r include/ /usr/local/` untuk memindahkan file include ke direktori usr/local
8. Ketik `sudo cp -r lib/ /usr/local/` untuk memindahkan file lib ke direktori usr/local
9. Ketik `sudo cp -r share/ /usr/local/` untuk memindahkan file share ke direktori usr/local
10. Ketik `node -v` untuk melihat versi Node Js yang terinstall

- Sistem Operasi Mac OS

1. Install [Homebrew](https://brew.sh/index_id)
2. Buka terminal dan ketik `brew install node`
3. Ketik `node -v` untuk melihat versi Node Js yang terinstall
4. Ketik `npm -v` untuk melihat versi npm yang terinstall

# Hello World

Untuk membuat aplikasi Node Js, pertama kita harus membuat file dengan ekstensi `.js`. Contoh nama file adalah `app.js`. Set

        console.log("Hello World")

Cara menjalankan aplikasi Node Js adalah dengan mengetik `node nama_file.js` di terminal. Contoh `node app.js`


# Packet Manager

Packet Manager adalah sebuah software yang digunakan untuk mengelola paket-paket yang ada di Node Js. Packet Manager yang paling populer adalah NPM (Node Package Manager). NPM adalah packet manager yang sudah terinstall secara default ketika kita menginstall Node Js. NPM sendiri sudah memiliki ribuan paket yang bisa kita gunakan untuk mempermudah kita dalam membuat aplikasi. NPM juga bisa digunakan untuk mengelola paket-paket yang kita buat sendiri.
## Yarn
Yarn adalah packet manager yang dibuat oleh Facebook. Yarn sendiri memiliki kecepatan yang lebih cepat dibandingkan dengan NPM. Yarn juga memiliki fitur yang sama dengan NPM. Yarn juga bisa digunakan untuk mengelola paket-paket yang kita buat sendiri.
## NPM
NPM adalah packet manager yang sudah terinstall secara default ketika kita menginstall Node Js. NPM sendiri sudah memiliki ribuan paket yang bisa kita gunakan untuk mempermudah kita dalam membuat aplikasi. NPM juga bisa digunakan untuk mengelola paket-paket yang kita buat sendiri.

## Kesimpulan
NodeJs adalah sebuah platform yang dapat digunakan untuk membuat aplikasi web. Perintah untuk memulai menggunakan NodeJs adalah dengan menginstall NodeJs terlebih dahulu. NodeJs sendiri sudah memiliki packet manager yang bernama NPM. NPM sendiri sudah memiliki ribuan paket yang bisa kita gunakan untuk mempermudah kita dalam membuat aplikasi. NPM juga bisa digunakan untuk mengelola paket-paket yang kita buat sendiri.
# Latihan 

1. Apa itu Node Js? <br/>
2. Apa saja kelebihan Node Js? <br/>
3. Apa saja kekurangan Node Js? <br/>
4. Apa saja paket-paket yang ada di Node Js? <br/>
5. Apa itu NPM? <br/>

# Referensi
- [Node Js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Sejarah Node Js](https://www.educba.com/node-js-history/)