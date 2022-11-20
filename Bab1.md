# Bab I JavaScript
## Tujuan Pembelajaran
* Mahasiswa dapat memahami konsep dasar JavaScript
* Mahasiswa dapat memahami cara penggunaan JavaScript
* Mahasiswa dapat memahami cara penggunaan JavaScript di Node.js

JavaScript adalah bahasa pemrograman yang digunakan untuk membuat website menjadi dinamis dan lebih interaktif. JavaScript dapat berjalan di berbagai platform, seperti browser, server, dan perangkat seluler. Ketika berbicara tentang web, maka terdapat dua istilah yang sering digunakan, yaitu client-side dan server-side. Client-side adalah kode yang berjalan di browser, sedangkan server-side adalah kode yang berjalan di server. JavaScript dapat berjalan di kedua sisi tersebut.

JavaScript awalnya dikenal dengan nama LiveScript. Namun, karena nama tersebut sudah digunakan oleh Sun Microsystems, maka JavaScript dipilih sebagai nama resminya. JavaScript pertama kali diperkenalkan oleh Netscape pada tahun 1995. Netscape adalah perusahaan yang membuat browser pertama yang mendukung JavaScript. Browser pertama yang mendukung JavaScript adalah Netscape Navigator. JavaScript kemudian diperkenalkan oleh Microsoft pada tahun 1996, dengan nama JScript. JScript merupakan implementasi dari JavaScript yang digunakan oleh Microsoft. Namun, karena JavaScript sudah menjadi standar, maka Microsoft mengubah nama JScript menjadi Microsoft JScript. Pada tahun 1997, Netscape dan Microsoft sepakat untuk menggunakan nama JavaScript sebagai nama resminya. Pada tahun 1999, JavaScript diperkenalkan oleh ECMA International sebagai standar internasional. Pada tahun 2009, JavaScript diperkenalkan oleh ISO sebagai standar internasional.

Terdapat banyak sekali framework JavaScript, salah satunya adalah ExpressJs. ExpressJs adalah framework yang digunakan untuk membuat aplikasi web dengan menggunakan NodeJs. NodeJs adalah platform yang digunakan untuk menjalankan JavaScript di server. ExpressJs merupakan salah satu framework yang paling populer di dunia. ExpressJs memiliki banyak sekali fitur, seperti routing, middleware, dan template engine. ExpressJs juga memiliki banyak sekali plugin, seperti plugin untuk mengelola database, plugin untuk mengelola session, dan plugin untuk mengelola autentikasi. ExpressJs juga memiliki banyak sekali template engine, seperti EJS, Pug, dan Handlebars. Template engine digunakan untuk mengubah data menjadi HTML. Template engine juga dapat digunakan untuk membuat halaman web dinamis. Pada bab ini, kita akan belajar bagaimana cara membuat aplikasi web dengan menggunakan ExpressJs. Dengan framework, pengerjaan aplikasi web dapat menjadi lebih mudah. Untuk bisa menggunakan framewok, maka perlu mengetahui dasar dari bahasa pemrograman yang digunakan. Pada bab ini, kita akan belajar dasar-dasar JavaScript.
## Variabel
Variabel adalah suatu wadah yang dapat menyimpan nilai. Nilai pada suatu variabel dapat berubah-ubah. ada 3 keyword arau sintaks dasar dalam membuat variabel dalam JavaScript. Keyword tersebut antara lain var, let, atau const. Keyword var dan let digunakan untuk membuat variabel yang dapat berubah-ubah nilainya. Sedangkan keyword const digunakan untuk membuat variabel yang nilainya tidak dapat berubah. Berikut ini contoh penggunaan keyword var, let, dan const.
```js
    var nama = "Ali Rahman";
    let umur = 21;
    const alamat = "Jl. Jalan No. 1";
```
Perbedaan antara keyword var dan let terdapat pada scope variabel. Scope variabel adalah tempat dimana variabel tersebut dapat diakses. Keyword var memiliki scope global, sedangkan keyword let memiliki scope lokal. Berikut ini contoh penggunaan keyword var dan let.
```js
    var nama = "Ali Rahman";
    let umur = 21;
    if (true) {
        var nama = "Muhammad Umar Mansyur";
        let umur = 22;
    }
    console.log(nama);
    console.log(umur);
```
`Output:`

```js
    Muhammad Umar Mansyur
    21
```
Keterangan:
- Terdapat variabel nama dengan nilai "Ali Rahman" dan variabel umur dengan nilai 21.
- Variabel nama di inisialisasikan dengan keyword var, sedangkan variabel umur di inisialisasikan dengan keyword let.
- Selanjutnya, ada sebuah kondisi if yang bernilai true. Pada kondisi tersebut, variabel nama diinisialisasikan dengan nilai "Muhammad Umar Mansyur" dan variabel umur diinisialisasikan dengan nilai 22.
- Terakhir, variabel nama dan umur di cetak ke layar. Hasilnya adalah "Muhammad Umar Mansyur" dan 21. Variabel nama diubah nilainya menjadi "Muhammad Umar Mansyur" karena variabel nama diinisialisasikan dengan keyword var. Sedangkan variabel umur tidak diubah nilainya karena variabel umur diinisialisasikan dengan keyword let. let umur memiliki scope lokal, sehingga variabel umur di luar kondisi if tidak berubah nilainya.

Umumnya variabel memiliki tipe data. Tipe data adalah jenis data yang dapat disimpan dalam variabel. Tipe data yang paling umum digunakan adalah tipe data string, number, boolean, array dan object. Berikut ini contoh penggunaan tipe data string, number, boolean, dan object.
```js
    var nama = "Ali Rahman";
    let umur = 21;
    const alamat = "Jl. Jalan No. 1";
    var isMarried = true;
    let hobi = ["Membaca", "Menulis", "Menggambar"];
    const orang = {
        nama: "Ali Rahman",
        umur: 21,
        alamat: "Jl. Jalan No. 1"
    };
    console.log(nama);
    console.log(umur);
    console.log(alamat);
    console.log(isMarried);
    console.log(hobi);
    console.log(orang);
```
<strong>Output:</strong>

```js
    Ali Rahman
    21
    Jl. Jalan No. 1
    true
    ["Membaca", "Menulis", "Menggambar"]
    {
        nama: "Ali Rahman", 
        umur: 21, 
        alamat: "Jl. Jalan No. 1"
    }
```
Keterangan:
- Variabel nama memiliki tipe data string.
- Variabel umur memiliki tipe data number.
- Variabel alamat memiliki tipe data string.
- Variabel isMarried memiliki tipe data boolean.
- Variabel hobi memiliki tipe data array.
- Variabel orang memiliki tipe data object.

untuk mengetahui tipe data dari suatu variabel, dapat menggunakan fungsi typeof. Berikut ini contoh penggunaan fungsi typeof:
```js
    let nama = "Muhammad Umar Mansyur";
    console.log(typeof nama);
```
Penulisan tipe data dalam bahasa pemrograman JavaScript tidak di inisialisasikan secara eksplisit. Tipe data akan di deteksi secara otomatis oleh JavaScript. Berikut ini contoh penulisan tipe data secara eksplisit menggunakan bahasa pemrograman c#:
```csharp
    string nama = "Muhammad Umar Mansyur";
    int umur = 21;
    bool isMarried = true;
    string[] hobi = {"Membaca", "Menulis", "Menggambar"};
    object orang = new {
        nama = "Muhammad Umar Mansyur",
        umur = 21,
        isMarried = true
    };
```
## Pengkondisian dan perulangan
## Pengkondisian
Jika manusia dapat memutuskan iya atau tidak dalam suatu kondisi, maka komputer juga dapat memutuskan hal yang serupa. Keputusan komputer untuk memilih iya atau tidak disebut sebagai pengkondisian. Jadi, pengkondisian adalah sebuah kondisi dimana komputer akan melakukan suatu hal jika kondisi tersebut terpenuhi, selain itu komputer juga dapat melakukan hal lain ketika kondisi tersebut tidak terpenuhi. Pada JavaScript, untuk menggunakan pengkondisian dapat menggunakan keyword if, else if dan else. Untuk lebih jelasnya, perhatikan contoh berikut:
```js
    let umur = 21;
    if (umur >= 21) {
        console.log("Anda sudah dewasa");
    } else if (umur >= 18) {
        console.log("Anda sudah remaja");
    } else {
        console.log("Anda masih anak-anak");
    }
```
<strong>Output:</strong>

```js
    Anda sudah dewasa
```
Keterangan:
- Terdapat variabel umur dengan nilai 21.
- Kemudian variabel umur yang memiliki nilai 21 dicek, apakah nilai pada variabel umur tersebut lebih besar atau sama dengan 21. Jika iya, maka akan menampilkan teks "Anda sudah dewasa" ke layar. Jika tidak, maka akan dicek apakah nilai pada variabel umur tersebut lebih besar atau sama dengan 18. Jika iya, maka akan menampilkan teks "Anda sudah remaja" ke layar. Jika tidak, maka akan menampilkan teks "Anda masih anak-anak" ke layar.
- Pada contoh di atas, nilai pada variabel umur 21, dan nilai tersebut sama dengan 21, karena kondisi tersebut terpenuhi, maka akan menampilkan teks "Anda sudah dewasa" ke layar. 

Penulisan if juga dapat dilakukan dengan cara bersarang (nested). Berikut ini contoh penggunaan if bersarang:
```js
    let umur = 18;
    if (umur >= 21) {
        console.log("Anda sudah dewasa");
    } else {
        if (umur >= 18) {
            console.log("Anda sudah remaja");
        } else {
            console.log("Anda masih anak-anak");
        }
    }
```
<strong>Output:</strong>

```js
    Anda sudah remaja
```
Keterangan:
- Terdapat variabel umur dengan nilai 18.
- Sebagaimana pada contoh sebelumnya, karena nilai pada variabel umur lebih kecil dari nilai yang terdapat di dalam if, maka akan dilempar pada scope else. Kemudian, di dalam scope else, dilakukan pengecekan umur lagi. Jika umur lebih besar atau sama dengan 18, maka akan menampilkan teks "Anda sudah remaja" ke layar. Jika tidak, maka akan menampilkan teks "Anda masih anak-anak" ke layar.
- Ternyata, nilai pada variabel umur 18, dan nilai tersebut sama dengan 18, karena kondisi tersebut terpenuhi, maka akan menampilkan teks "Anda sudah remaja" ke layar.

Selain penggunaan secara bersarang, pengkondisian if juga dapat digunakan untuk banyak kondisi. Berikut ini contoh penggunaan if untuk banyak kondisi:
```js
    let umur = 15;
    if (umur >= 21) {
        console.log("Anda sudah dewasa");
    } else if (umur >= 18) {
        console.log("Anda sudah remaja");
    } else if (umur >= 13) {
        console.log("Anda masih remaja");
    } else {
        console.log("Anda masih anak-anak");
    }
```
<strong>Output:</strong>

```js
    Anda masih remaja
```
Keterangan:
- Terdapat variabel umur dengan nilai 15.
- Variabel umur memiliki 4 kondisi, kondisi yang pertama jika varibel umur lebih besar atau sama dengan 21, maka akan dimunculkan teks "Anda sudah dewasa" ke layar. Kondisi yang kedua jika variabel umur lebih besar atau sama dengan 18, maka akan dimunculkan teks "Anda sudah remaja" ke layar. Kondisi yang ketiga jika variabel umur lebih besar atau sama dengan 13, maka akan dimunculkan teks "Anda sudah remaja" ke layar. Kondisi yang keempat jika variabel umur lebih kecil dari 13, maka akan dimunculkan teks "Anda masih anak-anak" ke layar.
- Pada contoh di atas, nilai pada variabel umur adalah 15. Untuk kondisi pertama, nilai pada variabel umur lebih kecil dari 21, maka akan dilempar ke kondisi kedua. Untuk kondisi kedua, nilai pada variabel umur lebih kecil dari 18, maka akan dilempar ke kondisi ketiga. Pada kondisi yang ketiga, nilai pada variabel umur lebih besar atau sama dengan 13, karena kondisi tersebut terpenuhi, maka akan menampilkan teks "Anda masih anak-anak" ke layar.

Penggunaan if juga dapat dikombinasikan dengan kombinasi operator logika. Berikut ini contoh penggunaan if dengan kombinasi operator logika:
```js
    let umur = 15;
    if (umur >= 21 && umur <= 30) {
        console.log("Anda sudah dewasa");
    } else if (umur >= 18 && umur <= 21) {
        console.log("Anda sudah remaja");
    } else if (umur >= 13 && umur <= 18) {
        console.log("Anda masih remaja");
    } else {
        console.log("Anda masih anak-anak");
    }
```
<strong>Output:</strong>

```js
    Anda masih remaja
```
Keterangan:
- Terdapat variabel umur dengan nilai 15.
- && adalah operator logika AND. Operator logika AND akan menghasilkan nilai true jika kedua kondisi yang dibandingkan bernilai true. Jika salah satu kondisi bernilai false, maka akan menghasilkan nilai false.
- Variabel umur memiliki 4 kondisi, kondisi yang pertama jika varibel umur lebih besar atau sama dengan 21 dan lebih kecil atau sama dengan 30, maka akan dimunculkan teks "Anda sudah dewasa" ke layar. Kondisi yang kedua jika variabel umur lebih besar atau sama dengan 18 dan lebih kecil atau sama dengan 21, maka akan dimunculkan teks "Anda sudah remaja" ke layar. Kondisi yang ketiga jika variabel umur lebih besar atau sama dengan 13 dan lebih kecil atau sama dengan 18, maka akan dimunculkan teks "Anda sudah remaja" ke layar. Kondisi yang keempat jika variabel umur lebih kecil dari 13, maka akan dimunculkan teks "Anda masih anak-anak" ke layar.

Selain penggunaan if, pengkondisian juga dapat menggunakan ternary operator. Ternary Operator adalah operator yang digunakan untuk mengecek suatu kondisi tertentu. Konsepnya mirip dengan if, hanya saja sintaksnya lebih singkat. Berikut ini contoh penggunaan ternary operator:
```js
    let umur = 15;
    let hasil = umur >= 18 ? "Anda sudah remaja" : "Anda masih anak-anak";
    console.log(hasil);
```
<strong>Output:</strong>

```js
    Anda masih anak-anak
```
Keterangan:
- Terdapat variabel umur dengan nilai 15.
- Terdapat variabel hasil yang akan menampung hasil dari ternary operator.
- Ternary operator memiliki 3 bagian, yaitu kondisi, nilai true, dan nilai false.
- Pada contoh di atas, nilai pada variabel umur adalah 15. Karena nilai pada variabel umur lebih kecil dari 18, maka akan menampilkan teks "Anda masih anak-anak" ke layar
 
 Pengkondisian yang selanjutnya adalah dengan menggunakan keyword switch. Keyword switch digunakan untuk mengecek suatu kondisi tertentu. Switch akan mengecek nilai dari variabel yang diberikan. Jika nilai dari variabel tersebut sesuai dengan nilai yang ada pada case, maka akan melakukan aksi yang ada pada case tersebut. Berikut ini contoh penggunaan switch:
    ```js
        let umur = 15;
        switch (umur) {
            case 21:
                console.log("Anda sudah dewasa");
                break;
            case 18:
                console.log("Anda sudah remaja");
                break;
            case 13:
                console.log("Anda masih remaja");
                break;
            default:
                console.log("Anda masih anak-anak");
        }
    ```
    <strong>Output:</strong>
    
    ```js
        Anda masih anak-anak
    ```
Keterangan:
- Terdapat variabel umur dengan nilai 15.
- Pada contoh di atas, variabel umur diberikan pada keyword switch. Keyword switch akan mengecek nilai dari variabel umur.
- Pada contoh di atas, nilai pada variabel umur adalah 15. Karena nilai pada variabel umur tidak sesuai dengan nilai pada case, maka akan dilempar ke case default. Pada case default, akan menampilkan teks "Anda masih anak-anak" ke layar.
- Keyword break digunakan untuk menghentikan proses switch. Jika tidak ada keyword
## Perulangan
Perulangan adalah sebuah proses yang akan mengulang suatu kode program tertentu. Jika di ibaratkan dengan manusia, perulangan adalah seperti orang yang akan melakukan suatu pekerjaan berulang-ulang. Contohnya, seperti orang yang melakukan push up sebanyak 12 kali, maka orang tersebut akan push up terus menerus sebelum hitungan ke 12. Perulangan pada JavaScript memiliki 3 jenis, yaitu for, while, dan do while. Berikut ini penjelasan mengenai perulangan for, while, dan do while.

Perulangan for adalah perulangan yang akan mengulang kode program tertentu sebanyak jumlah yang ditentukan. Perulangan for memiliki 3 bagian, yaitu inisialisasi, kondisi, dan increment/decrement. Berikut ini contoh penggunaan perulangan for:
```js
    for (let i = 0; i < 10; i++) {
        console.log("Perulangan ke-" + i);
    }
```
<strong>Output:</strong>

```js
    Perulangan ke-0
    Perulangan ke-1
    Perulangan ke-2
    Perulangan ke-3
    Perulangan ke-4
    Perulangan ke-5
    Perulangan ke-6
    Perulangan ke-7
    Perulangan ke-8
    Perulangan ke-9
```
Keterangan:
- Pada contoh di atas, terdapat variabel i dengan nilai 0.
- Pada contoh di atas, terdapat kondisi i < 10. Kondisi ini akan mengecek apakah nilai dari variabel i lebih kecil dari 10. Jika iya, maka akan mengulang kode program yang ada di dalam for. Jika tidak, maka akan menghentikan proses perulangan.
- Pada contoh di atas, terdapat increment i++. Increment i++ akan menambahkan nilai dari variabel i sebanyak 1. Jika tidak ada increment, maka nilai dari variabel i akan tetap 0 dan perulangan akan terus berjalan.

Perulangan while adalah perulangan yang akan mengulang kode program tertentu selama kondisi yang ditentukan terpenuhi. Perulangan while memiliki 1 bagian, yaitu kondisi. Berikut ini contoh penggunaan perulangan while:
```js
    let i = 0;
    while (i < 10) {
        console.log("Perulangan ke-" + i);
        i++;
    }
```
<strong>Output:</strong>

```js
    Perulangan ke-0
    Perulangan ke-1
    Perulangan ke-2
    Perulangan ke-3
    Perulangan ke-4
    Perulangan ke-5
    Perulangan ke-6
    Perulangan ke-7
    Perulangan ke-8
    Perulangan ke-9
```
Keterangan:
- Pada contoh di atas, terdapat variabel i dengan nilai 0.
- Pada contoh di atas, terdapat kondisi i < 10. Kondisi ini akan mengecek apakah nilai dari variabel i lebih kecil dari 10. Jika iya, maka akan mengulang kode program yang ada di dalam while. Jika tidak, maka akan menghentikan proses perulangan.
- Pada contoh di atas, terdapat increment i++. Increment i++ akan menambahkan nilai dari variabel i sebanyak 1. Jika tidak ada increment, maka nilai dari variabel i akan tetap 0 dan perulangan akan terus berjalan.

Perulangan do while adalah perulangan yang akan mengulang kode program tertentu selama kondisi yang ditentukan terpenuhi. Perulangan do while memiliki 1 bagian, yaitu kondisi. Perbedaan perulangan do while dengan perulangan while adalah, perulangan do while akan mengulang kode program yang ada di dalamnya terlebih dahulu, baru kemudian mengecek kondisi. Berikut ini contoh penggunaan perulangan do while:
```js
    let i = 0;
    do {
        console.log("Perulangan ke-" + i);
        i++;
    } while (i < 10);
```
<strong>Output:</strong>

```js
    Perulangan ke-0
    Perulangan ke-1
    Perulangan ke-2
    Perulangan ke-3
    Perulangan ke-4
    Perulangan ke-5
    Perulangan ke-6
    Perulangan ke-7
    Perulangan ke-8
    Perulangan ke-9
```
Keterangan:
- Pada contoh di atas, terdapat variabel i dengan nilai 0.
- Pada contoh di atas, terdapat kondisi i < 10. Kondisi ini akan mengecek apakah nilai dari variabel i lebih kecil dari 10. Jika iya, maka akan mengulang kode program yang ada di dalam do while. Jika tidak, maka akan menghentikan proses perulangan.
- Pada contoh di atas, terdapat increment i++. Increment i++ akan menambahkan nilai dari variabel i sebanyak 1. Jika tidak ada increment, maka nilai dari variabel i akan tetap 0 dan perulangan akan terus berjalan.
## Array
Array adalah sebuah variabel yang dapat menampung lebih dari satu nilai. Array pada JavaScript memiliki 2 jenis, yaitu array biasa dan array multidimensi. Berikut ini penjelasan mengenai array biasa dan array multidimensi.
## Array 1 Dimensi
Array biasa adalah array yang hanya memiliki 1 dimensi. Berikut ini contoh penggunaan array biasa:
```js
    let array = [1, 2, 3, 4, 5];
    console.log(array);
```
<strong>Output:</strong>

```js
    [1, 2, 3, 4, 5]
```
Keterangan:
- Pada contoh di atas, terdapat variabel array yang memiliki 5 nilai.
- Pada contoh di atas, terdapat kode console.log(array). Kode ini akan menampilkan nilai dari variabel array.
## Array Multidimensi
Array multidimensi adalah array yang memiliki lebih dari 1 dimensi. Berikut ini contoh penggunaan array multidimensi:
```js
    let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    console.log(array);
```
<strong>Output:</strong>

```js
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```
Keterangan:
- Pada contoh di atas, terdapat variabel array yang memiliki 3 nilai. Nilai tersebut adalah array lagi.
- Pada contoh di atas, terdapat kode console.log(array). Kode ini akan menampilkan nilai dari variabel array.

Array dapat di akses dengan menggunakan index. Index pada array dimulai dari 0. Berikut ini contoh penggunaan index pada array:
```js
    let array = [1, 2, 3, 4, 5];
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
    console.log(array[3]);
    console.log(array[4]);
```
<strong>Output:</strong>

```js
    1
    2
    3
    4
    5
```
Kode tersebut sebenarnya dapat dikombinasi dengan perulangan. Berikut ini contoh penggunaan index pada array dengan perulangan:
```js
    let array = [1, 2, 3, 4, 5];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
```
<strong>Output:</strong>

```js
    1
    2
    3
    4
    5
```
Untuk mengetahui jumlah dari array, dapat menggunakan property length. Berikut ini contoh penggunaan property length pada array:
```js
    let array = [1, 2, 3, 4, 5];
    console.log(array.length);
```
<strong>Output:</strong>

```js
    5
```
Pada contoh array di atas, kita juga dapat menambahkan nilai baru pada array. Berikut ini contoh penggunaan penambahan nilai pada array:
```js
    let array = [1, 2, 3, 4, 5];
    array.push(6);
    console.log(array);
```
<strong>Output:</strong>

```js
    [1, 2, 3, 4, 5, 6]
```
Jika diperhatikan pada contoh di atas, penambahan nilai baru pada array ditambahkan di sisi akhir array. Jika ingin menambahkan nilai baru pada array di sisi awal array, maka dapat menggunakan method unshift. Berikut ini contoh penggunaan method unshift pada array:
```js
    let array = [1, 2, 3, 4, 5];
    array.unshift(0);
    console.log(array);
```
<strong>Output:</strong>

```js
    [0, 1, 2, 3, 4, 5]
```
Jika ingin menghapus nilai pada array, maka dapat menggunakan method pop. Berikut ini contoh penggunaan method pop pada array:
```js
    let array = [1, 2, 3, 4, 5];
    array.pop();
    console.log(array);
```
<strong>Output:</strong>

```js
    [1, 2, 3, 4]
```
Jika ingin menghapus nilai pada array di sisi awal array, maka dapat menggunakan method shift. Berikut ini contoh penggunaan method shift pada array:
```js
    let array = [1, 2, 3, 4, 5];
    array.shift();
    console.log(array);
```
<strong>Output:</strong>

```js
    [2, 3, 4, 5]
```
Jika ingin menghapus nilai pada array di tengah-tengah array, maka dapat menggunakan method splice. Berikut ini contoh penggunaan method splice pada array:
```js
    let array = [1, 2, 3, 4, 5];
    array.splice(2, 1);
    console.log(array);
```
<strong>Output:</strong>

```js
    [1, 2, 4, 5]
```
Selain menghapus dan menambah, nilai pada array juga dapat dijumlahkan. Berikut ini contoh penggunaan penjumlahan nilai pada array:
```js
    let array = [1, 2, 3, 4, 5];
    array.reduce((a, b) => a + b);
    console.log(total);
```
<strong>Output:</strong>

```js
    15
```
Jika ingin mengurutkan nilai pada array, maka dapat menggunakan method sort. Berikut ini contoh penggunaan method sort pada array:
```js
    let array = [5, 4, 3, 2, 1];
    array.sort();
    console.log(array);
```
## Class, Objek, dan Method
Penulisan kode JavaScript menggunakan Class termasuk pada penulisan OOP. OOP merupakan singkatan dari Object Oriented Programming dalam bahasa Indonesia dikenal dengan Pemrograman Berorientasi Objek. Penulisan kode dengan OOP memiliki beberapa kelebihan, diantaranya:
- Kode yang lebih mudah dipahami
- Kode yang lebih mudah di maintain
- Kode yang lebih mudah di debug
- Kode yang lebih mudah di reuse
- Kode yang lebih mudah di extend
- Kode yang lebih mudah di test
- Kode yang lebih mudah di refactor

Aplikasi yang dibuat menggunakan framework seperti React, Vue, Angular, dll. biasanya menggunakan OOP. Ada beberapa konsep dasar dalam OOP, diantaranya:
- Class, Objek, dan Method
- Encapsulation
- Constructor
- Inheritance
- Static dan Final Class
- Abstract dan Interface Class
- Polymorphism

### Class
class adalah sebuah blueprint atau rancangan dari sebuah objek. Class dapat diartikan sebagai sebuah kerangka yang berisi properti dan method. Dalam sebuah class properti dan method tidak harus ada secara bersamaan. Penulisan class pada JavaScript adalah sebagai berikut:
```js
    class NamaClass {
        // properti dan method
    }
```
Keterangan:
- Keyword class digunakan untuk membuat class
- NamaClass adalah nama dari class yang dibuat
- Properti dan method ditulis di dalam kurung kurawal

Ada beberapa aturan dalam penulisan class, diantaranya:
- Nama class harus diawali dengan huruf kapital
- Jika nama class terdiri dari dua kata, maka kata kedua harus diawali dengan huruf kapital
- Nama class tidak boleh menggunakan spasi
- Nama class tidak boleh menggunakan tanda baca seperti titik, koma, dll.


### Objek
Objek adalah sebuah instance atau bentuk nyata dari sebuah class. Objek merupakan hasil dari pembuatan class. Class dapat diinstance atau dibuat menjadi beberapa objek. Penulisan objek pada JavaScript di awali dengan perintah new. Untuk lebih jelasnya perhatikan contoh berikut:
```js
    class Mobil {
        // properti dan method
    }
    let toyota = new Mobil();
```
Keterangan:
- Keyword class digunakan untuk membuat class
- Mobil adalah nama dari class yang dibuat
- Properti dan method ditulis di dalam kurung kurawal
- Keyword new digunakan untuk membuat objek
- toyota adalah nama dari objek yang dibuat
### Properti
Properti adalah sebuah variabel yang berada di dalam class. Properti dapat diakses menggunakan keyword this. Penulisan properti pada JavaScript adalah sebagai berikut:
```js
    class Mobil {
        constructor() {
            this.merk = 'Toyota';
        }
    }
    let toyota = new Mobil();
    console.log(toyota.merk);
```
<strong>Output:</strong>

```js
    Toyota
```
### Method
Method adalah sebuah fungsi yang berada di dalam class. Fungsi adalah sebuah blok kode yang dapat dipanggil kapan saja. Sebuah fungsi melakukan sebuah tugas tertentu. Fungsi dapat menerima parameter dan mengembalikan nilai. Contoh penulisan method adalah sebagai berikut:
```js
    class Mobil {
        constructor() {
            this.merk = 'Toyota';
        }
        getMerk() {
            return this.merk;
        }
    }
    let toyota = new Mobil();
    console.log(toyota.getMerk());
```
<strong>Output:</strong>

```js
    Toyota
```
### Encapsulation
Enkapsulasi adalah sebuah konsep dalam OOP yang mengatur akses dari properti dan method. Enkapsulasi dapat dilakukan dengan menggunakan keyword private dan public. Keyword private digunakan untuk mengatur akses dari properti dan method. Properti dan method yang menggunakan keyword private hanya dapat diakses di dalam class. Sedangkan keyword public digunakan untuk mengatur akses dari properti dan method. Properti dan method yang menggunakan keyword public dapat diakses di dalam class dan di luar class. Contoh penulisan enkapsulasi pada JavaScript adalah sebagai berikut:
```js
    class Mobil {
        constructor() {
            this.merk = 'Toyota';
        }
        getMerk() {
            return this.merk;
        }
    }
    let toyota = new Mobil();
    console.log(toyota.merk);
    console.log(toyota.getMerk());
```
<strong>Output:</strong>

```js
    Toyota
    Toyota
```
### Constructor
Constructor adalah sebuah method yang akan dijalankan pertama kali saat sebuah objek dibuat. Constructor dapat digunakan untuk menginisialisasi properti. Penulisan constructor pada JavaScript adalah sebagai berikut:
```js
    class Mobil {
        constructor() {
            this.merk = 'Toyota';
        }
    }
    let toyota = new Mobil();
    console.log(toyota.merk);
```
<strong>Output:</strong>

```js
    Toyota
```
### Inheritance
Inheritance secara sederhananya adalah sebuah konsep yang digunakan untuk memperluas sebuah class. Secara sederhananya inheritance dapat diartikan sebagai sebuah class yang mewarisi properti dan method dari class lain. Inheritance dapat dilakukan dengan menggunakan keyword extends. Keyword extends digunakan untuk mewarisi properti dan method dari class lain. Contoh penulisan inheritance pada JavaScript adalah sebagai berikut:
```js
    class Mobil {
        constructor() {
            this.merk = 'Toyota';
        }
        getMerk() {
            return this.merk;
        }
    }
    class MobilSport extends Mobil {
        constructor() {
            super();
            this.tipe = 'Sport';
        }
        getTipe() {
            return this.tipe;
        }
    }
    let toyota = new MobilSport();
    console.log(toyota.merk);
    console.log(toyota.tipe);
    console.log(toyota.getMerk());
    console.log(toyota.getTipe());
```
<strong>Output:</strong>

```js
    Toyota
    Sport
    Toyota
    Sport
```
Class hanya dapat mewarisi satu class saja. Jika ingin mewarisi lebih dari satu class, maka class tersebut harus mewakili class lain terlebih dahulu. Tapi, satu class dapat di extends oleh banyak class.
### Final dan Static Class
Final class adalah sebuah class yang tidak dapat di extends. Static class adalah sebuah class yang tidak dapat di instance. Properti yang berada di dalam static class hanya dapat diakses menggunakan nama class. Dalam bahasa pemrograman JavaScript keyword final tidak ada. sedangkan untuk penulisan static adalah sebagai berikut:
```js
    class Kendaraan {
        constructor() {
            this.merk = 'Toyota';
        }
        static getMerk() {
            return this.merk;
        }
    }
    console.log(Kendaraan.merk);

```
Dengan menggunakan keyword static, kita tidak perlu membuat objek untuk mengakses properti dan method yang berada di dalam static class. Pada contoh kode di atas, kita tidak perlu membuat objek untuk mengakses properti merk. Hal ini dikarenakan properti merk berada di dalam static class. Sedangkan untuk mengakses properti dan method yang berada di dalam static class, dapat menggunakan Nama class dan nama properti atau method.
### Abstract dan Interface Class
Abstract class adalah sebuah class yang tidak dapat di instance. Interface class adalah sebuah class yang hanya berisi method dan properti yang bersifat abstrak. Dalam bahasa pemrograman JavaScript keyword abstract dan interface tidak ada. Untuk membuat sebuah class yang tidak dapat di instance, kita dapat menggunakan keyword static. Untuk membuat sebuah class yang hanya berisi method dan properti yang bersifat abstrak. Contohnya adalah sebegai berikut:

### Polymporphism
Polymorphis adalah sebuah methoad yang memiliki banyak bentuk. Polymorphis dapat diartikan sebagai sebuah method yang memiliki banyak bentuk. Polymorphis dapat diimplementasikan dengan menggunakan keyword overloading dan overriding. Keyword overloading digunakan untuk membuat method yang memiliki nama yang sama. Sedangkan keyword overriding digunakan untuk membuat method yang memiliki nama yang sama dengan method yang ada di class parent. Contoh penulisan polymorphis pada JavaScript adalah sebagai berikut:
```js
    class Mobil {
        constructor() {
            this.merk = 'Toyota';
        }
        getMerk() {
            return this.merk;
        }
    }
    class MobilSport extends Mobil {
        constructor() {
            super();
            this.tipe = 'Sport';
        }
        getMerk() {
            return this.merk + ' ' + this.tipe;
        }
    }
    let toyota = new MobilSport();
    console.log(toyota.merk);
    console.log(toyota.tipe);
    console.log(toyota.getMerk());
```
## Async Await
JavaScript dalam mengeksekusi kode dijalankan dengan cara asinkron. Artinya, JavaScript akan menjalankan kode secara berurutan. Namun, jika ada kode yang membutuhkan waktu lama untuk dijalankan, maka JavaScript akan menjalankan kode selanjutnya. Sebelumnya adanya asynce await, JavaScript menggunakan callback function untuk menangani kode yang membutuhkan waktu lama untuk dijalankan. Callback function adalah sebuah function yang akan dijalankan setelah function lain selesai dijalankan. Contoh penulisan callback function pada JavaScript adalah sebagai berikut:
```js
    function getData(callback) {
        setTimeout(() => {
            callback('Data');
        }, 1000);
    }
    getData((data) => {
        console.log(data);
    });
```
<strong>Output:</strong>

```js
    Data
```
Dalam contoh kode di atas, function getData akan menunggu selama 1 detik untuk menjalankan callback function. Dengan menggunakan async await, kita dapat menangani kode yang membutuhkan waktu lama untuk dijalankan dengan cara yang lebih mudah. Untuk menggunakan async await, kita harus menambahkan keyword async pada function yang akan dijalankan. Untuk menangani kode yang membutuhkan waktu lama untuk dijalankan, kita harus menambahkan keyword await pada function yang akan dijalankan. Contoh penulisan async await pada JavaScript adalah sebagai berikut:
```js
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Muhammad Umar Mansyur");
        }, 2000);
    });
}
async function fetchData() {
    const data = await getData();
    console.log(data);
} 
fetchData();
```
<strong>Output:</strong>

```js
    Muhammad Umar Mansyur
```
Pada contoh kode di atas, function getData akan menunggu selama 2 detik untuk menjalankan resolve. Dengan menggunakan async await, kita dapat menangani kode yang membutuhkan waktu lama untuk dijalankan dengan cara yang lebih mudah.
## Promise
Promise adalah sebuah object yang digunakan untuk menangani kode yang membutuhkan waktu lama untuk dijalankan. Promise memiliki 3 state yaitu pending, fulfilled, dan rejected. Pending adalah state awal dari promise. Fulfilled adalah state ketika promise berhasil dijalankan. Rejected adalah state ketika promise gagal dijalankan. Untuk membuat sebuah promise, kita dapat menggunakan keyword new. Contoh penulisan promise pada JavaScript adalah sebagai berikut:
```js
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data');
        }, 1000);
    });
    promise.then((data) => {
        console.log(data);
    });
```
<strong>Output:</strong>

```js
    Data
```
Pada contoh kode di atas, promise akan menunggu selama 1 detik untuk menjalankan resolve. Setelah itu, promise akan menjalankan function yang ada di dalam then. Dalam promise, kita dapat menambahkan function yang akan dijalankan ketika promise berhasil dijalankan dan function yang akan dijalankan ketika promise gagal dijalankan. Contoh penulisan promise pada JavaScript adalah sebagai berikut:
```js
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Terpenuhi');
        }, 1000);
    });
    promise.then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
```
<strong>Output:</strong>

```js
    Terpenuhi
```
Keterangan:
- then() digunakan untuk menangani promise yang berhasil dijalankan.
- catch() digunakan untuk menangani promise yang gagal dijalankan.
## Kesimpulan
JavaScript adalah bahasa pemrograman yang berjalan di sisi client. JavaScript memiliki syntaks yang sederhana dan mudah dipelajari. Keunikan dari JavaScript ketimbang bahasa pemrograman yang lain adalah single-threaded. JavaScript dapat menangani kode yang membutuhkan waktu lama untuk dijalankan dengan cara asinkron. JavaScript juga memiliki fitur-fitur yang dapat membantu kita dalam menangani kode yang membutuhkan waktu lama untuk dijalankan seperti async await dan promise.
## Referensi
- Beginning JavaScript, 5th Edition, by Paul Wilton, ISBN: 978-1-118-75131-8
- JavaScript: The Definitive Guide, 7th Edition, by David Flanagan, ISBN: 978-1-449-38394-8
- Hendra Agil, JavaScript Dasar, 2020, https://www.dicoding.com/academies/123
- Ahmad Rizal Afani, Belajar Dasar Pemrograman Web, 2020, https://www.dicoding.com/academies/123
- Heru Sulistiono, Coding Mudah dengan CodeIgniter, Jquery, Bootstrap dan Datatable, (Jakarta: Elex Media Komputindo, 2018)
- JavaScript: The Good Parts, Douglas Crockford, O'Reilly Media, 2008
- JavaScript: The Definitive Guide, David Flanagan, O'Reilly Media, 2011
## Latihan
1. Buatlah sebuah class dengan nama Mobil yang memiliki property merk dan tipe. Buatlah sebuah class yang mengextends class Mobil dengan nama MobilSport. Buatlah sebuah object dari class MobilSport dan tampilkan property merk dan tipe dari object tersebut.
2. Buatlah sebuah kalkulator menggunakan inputan terminal!
3. Buatlah kombinasi dari async await dan promise!
5. Buatlah sebuah function yang dapat menghitung jumlah huruf vokal dan konsonan dari sebuah string!


