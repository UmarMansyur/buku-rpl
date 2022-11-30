# BAB III

## Tujuan Pembelajaran

* Mahasiswa dapat mengetahui cara penggunaan expressjs dan cara penggunaan expressjs untuk membuat aplikasi web sederhana

# ExpressJS


## Tentang ExpressJS

ExpressJS adalah framework web yang berjalan di atas NodeJS. ExpressJS memungkinkan kita untuk membuat aplikasi web dengan mudah dan cepat. ExpressJS juga memungkinkan kita untuk membuat aplikasi web yang scalable dan mudah untuk di maintain.

## Instalasi & Menjalankan ExpressJS

Untuk menginstall ExpressJS, kita perlu menginstall NodeJS terlebih dahulu. Untuk menginstall NodeJS, silahkan kunjungi halaman [nodejs.org/en/download/](nodejs.org/en/download/). Setelah menginstall NodeJS, kita bisa menginstall ExpressJS dengan menggunakan perintah berikut:

`npm install express --save`

Setelah menginstall ExpressJS, kita bisa membuat aplikasi web sederhana dengan menggunakan ExpressJS. Pertama kali kita harus membuat file `package.json` dengan menggunakan perintah berikut:

```bash
npm init -y
```

Setelah kita kita buat file `app.js` untuk aplikasi yang akan dibuat. Berikut adalah contoh aplikasi web sederhana dengan ExpressJS yang dituliskan di dalam file `app.js`:

```js
// import express
import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);
```

** Catatan: ** Kode di atas menggunakan ES6 module. Karena kita ingin menggunakan ES module, maka kita harus menambahkan `type: module` pada file `package.json`.

Kita bisa menjalankan aplikasi web dengan menggunakan perintah berikut:

`node app.js`

Sekarang, kita bisa mengakses aplikasi web dengan menggunakan browser dengan mengakses alamat `localhost:3000`.

## Routing

Routing adalah proses untuk menentukan bagaimana aplikasi web akan merespon terhadap permintaan dari client. Routing pada ExpressJS dilakukan dengan menggunakan method `app.METHOD()` dimana `METHOD` adalah method HTTP yang digunakan oleh client. Beberapa method yang sering digunakan adalah `app.get()`, `app.post()`, `app.put()`, dan `app.delete()`.

Seperti pada contoh kode di atas, kita menggunakan method `app.get()` untuk menentukan bagaimana aplikasi web akan merespon terhadap permintaan dengan method `GET` dari client. Method `app.get()` memiliki dua parameter, yaitu path dan callback. 

- Path adalah alamat yang akan diakses oleh client. Callback adalah fungsi yang akan dijalankan ketika client mengakses path tersebut. Path `/` berarti client akan mengakses alamat `localhost:3000`. Untuk mengakses path `/about`, maka client harus mengakses alamat `localhost:3000/about`.

- Callback memiliki dua parameter, yaitu `req` dan `res`. `req` adalah objek yang berisi informasi tentang permintaan dari client. `res` adalah objek yang berisi fungsi untuk merespon terhadap permintaan dari client. Fungsi `res.send()` digunakan untuk mengirimkan balasan ke client.

## Middleware

Middleware adalah fungsi yang akan dijalankan setelah server menerima _request_ dan sebelum server mengirim _response_. Middleware ini disusun secara berantai, dimana setiap middleware akan menerima _request_ dan _response_ dari middleware sebelumnya. Middleware juga dapat menghentikan _request-response cycle_ jika middleware tersebut tidak memanggil fungsi `next()`. Middleware dapat digunakan untuk melakukan hal-hal seperti validasi, autentikasi, dan lain-lain. Middleware dapat ditambahkan dengan menggunakan method `app.use()`.

Berikut ini adalah contoh _middleware_ yang digunakan untuk menampilkan pesan pada _console_ setiap kali server menerima _request_.

```js
app.use((req, res, next) => {
  console.log('A request received at ' + Date.now());
  next();
});
```

Tanpa disadari, ketika kode `app.use()` dipanggil, maka Express akan menambahkan fungsi middleware tersebut ke dalam _request-response cycle_. Fungsi middleware tersebut akan dijalankan setiap kali server menerima _request_. Beberapa fungsi middleware bawaan Express yang sering digunakan adalah `express.static()`, `express.json()`, dan `express.urlencoded()`.

Selain membuat _middleware_ sendiri, kita juga bisa menggunakan _middleware_ yang sudah dibuat oleh orang lain. Beberapa _middleware_ yang sering digunakan adalah `morgan`, `helmet`, dan `cors`. Untuk menginstall _middleware_ tersebut, kita bisa menggunakan perintah berikut:

`npm install morgan helmet cors --save`

Setelah menginstall _middleware_ tersebut, kita bisa menggunakan _middleware_ tersebut dengan cara berikut:

```js
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
```

## Template Engine

Dengan _template engine_ kita dapat menggunakan file template statis yang mana saat _runtime_ akan di-_render_ menjadi HTML. Dengan menggunakan _template engine_ kita dapat memisahkan kode HTML dan kode JavaScript sehingga kode HTML akan lebih mudah dibaca dan di-_maintain_. Beberapa _template engine_ yang sering digunakan adalah `ejs`, `pug`, dan `handlebars`.

Untuk menginstall _template engine_ tersebut, kita bisa menggunakan perintah berikut:

`npm install pug --save`

Setelah menginstall _template engine_ tersebut, kita bisa menggunakan _template engine_ tersebut dengan cara berikut:

```js
import pug from 'pug';

app.set('view engine', 'pug');
app.set('views', './views');
```

Kode di atas digunakan untuk mengkonfigurasi _template engine_ yang akan digunakan. Pada kode di atas, kita menggunakan _template engine_ `pug`. Kita juga harus membuat folder `views` untuk menyimpan file-file template. Untuk memanggil template di router, kita bisa menggunakan kode berikut:

```js
app.get('/', (req, res) => {
  res.render('index', { title: 'Home', message: 'Hello World' });
});
```

## Static File

Untuk mengakses file statis, kita bisa menggunakan middleware `express.static()`. Berikut ini adalah contoh penggunaan middleware `express.static()` untuk mengakses file statis yang berada di dalam folder `public`.

```js
app.use(express.static('public'));
```

Sekarang kita bisa mengakses file statis dengan mengakses alamat `localhost:3000/nama_file` yang berada di dalam folder `public`. Untuk menggunakan file statis yang berada di dalam folder yang berbeda yang sebenarnya tidak berada di dalam folder `public`, kita bisa menggunakan middleware `express.static()` dengan cara berikut:

```js
app.use('/static', express.static('public'));
```

Sekarang kita bisa mengakses file statis dengan mengakses alamat `localhost:3000/static/nama_file` yang berada di dalam folder `public`. Path yang digunakan pada middleware `express.static()` adalah path relatif terhadap folder yang berisi file `app.js`. Jika kita menjalankan express dari direktori lain, akan lebih aman jika kita menggunakan path absolut.

```js
import path from 'path';
app.use('/static', express.static(path.resolve(__dirname, 'public')));
```

## Database

Penyimpanan data pada aplikasi web biasanya menggunakan database. Database yang sering digunakan adalah `MySQL`, `MariaDB`, `PostgreSQL`, `MongoDB`, dan `SQLite`. Untuk menginstall salah satu database tersebut, kita bisa menggunakan perintah berikut:

`npm install mariadb --save`

Setelah menginstall salah satu database tersebut, kita bisa menggunakan database tersebut dengan cara berikut:

```js
import express from 'express';
import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
  connectionLimit: 5,
});

const app = express();
app.get('/', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT 1 as val');
    res.send(rows);
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
});

app.listen(3000);
```

## Nodemon

Setiap kali kita mengubah kode, kita harus menjalankan ulang server agar perubahan yang kita lakukan dapat dilihat. Untuk menghindari hal tersebut, kita bisa menggunakan _package_ `nodemon`. `nodemon` adalah _package_ yang akan menjalankan ulang server secara otomatis setiap kali kita mengubah kode. Untuk menginstall `nodemon`, kita bisa menggunakan perintah berikut:

`npm install nodemon --save-dev`

Setelah menginstall `nodemon`, kita bisa menjalankan server dengan menggunakan `nodemon` dengan cara berikut:

`npx nodemon app.js`

Perintah di atas akan menjalankan server dengan menggunakan `nodemon` dan akan menjalankan file `app.js` sebagai _entry point_. Perintah ini dapat dimasukkan ke dalam _script_ `start` pada `package.json` sehingga kita bisa menjalankan server dengan menggunakan perintah `npm start`.

```json
{
  ...
  "scripts": {
    "start": "npx nodemon app.js"
  },
  ...
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
```

## Deployment

Setelah aplikasi kita sudah selesai, kita bisa meng-_deploy_ aplikasi kita ke dalam server. Untuk meng-_deploy_ aplikasi kita ke dalam server, kita bisa menggunakan _package_ `pm2`. `pm2` adalah _package_ yang akan menjalankan server secara _daemon_ sehingga server akan tetap berjalan meskipun kita menutup terminal. Untuk menginstall `pm2`, kita bisa menggunakan perintah berikut:

`npm install pm2 -g`

Setelah menginstall `pm2`, kita bisa menjalankan server dengan menggunakan `pm2` dengan cara berikut:

`pm2 start app.js`

Kita juga bisa menggunakan layanan _cloud_ seperti `Heroku`. Untuk detail mengenai `Heroku`, kita bisa membaca [https://devcenter.heroku.com/categories/reference](https://devcenter.heroku.com/categories/reference) yang disediakan oleh `Heroku`.


## Referensi

- [https://expressjs.com/en/starter/hello-world.html](https://expressjs.com/en/starter/hello-world.html)
- [https://mariadb.com/kb/en/getting-started-with-the-nodejs-connector/](https://mariadb.com/kb/en/getting-started-with-the-nodejs-connector/)


## Kesimpulan

Dalam bab ini, kita telah mempelajari bagaimana cara menggunakan `Express` untuk membuat aplikasi web. Selain itu, kita juga telah mempelajari bagaimana cara meng-_deploy_ aplikasi web ke dalam server. Dengan menggunakan `Express`, kita bisa membuat aplikasi web dengan cepat dan mudah. Selain itu, Express juga menyediakan banyak _middleware_ yang dapat kita gunakan untuk memperluas fungsionalitas dari aplikasi web kita serta dapat terkoneksi dengan berbagai macam database.

## Tugas

- Buatlah aplikasi web sederhana yang dapat menampilkan, memasukkan, mengubah dan menghapus data dari database.
- Buatlah aplikasi web sederhana yang dapat menampilkan data dari API yang disediakan oleh [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/).







