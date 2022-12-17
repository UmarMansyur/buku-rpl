# BAB 2 - Processor M1
## Pengertian Processor
Processor adalah komponen utama dari komputer yang bertugas untuk mengolah data yang masuk serta menghasilkan data yang diinginkan. Makna lebih khusus, processor merupakan sirkuit elektronik yang terintegerasi serta melakukan perhitungan untuk mengontrol jalannya program komputer. Processor juga dikenal dengan istilah CPU (Central Processing Unit). Processor terdiri dari 2 bagian utama, yaitu ALU (Arithmetic Logic Unit) dan Control Unit. ALU bertugas untuk melakukan operasi matematika dan logika, sedangkan Control Unit bertugas untuk mengatur jalannya operasi-operasi yang dilakukan oleh ALU. Processor juga terdiri dari 2 bagian lainnya, yaitu Register dan Bus. Register adalah tempat penyimpanan sementara data yang akan diproses oleh ALU. Bus adalah jalur yang menghubungkan antara ALU, Control Unit, dan Register. Berikut adalah gambaran umum dari processor.
![Gambaran Umum Processor](https://miro.medium.com/max/640/0*JWG-nTkoQPnNFqw6.webp)

Keterangan:
* ALU: Arithmetic Logic Unit
* CU: Control Unit
* Register: Tempat penyimpanan sementara data
* Bus: Jalur yang menghubungkan antara ALU, Control Unit, dan Register

Setiap processor terdiri dari satu atau lebih core. Core adalah unit yang melakukan proses perhitungan. Jumlah core yang dimiliki oleh processor menentukan seberapa cepat proses perhitungan yang dilakukan oleh processor tersebut. Semakin banyak core yang dimiliki oleh processor, maka semakin cepat proses perhitungan yang dilakukan oleh processor tersebut. Berikut adalah contoh processor dengan jumlah core yang berbeda:

| Processor | Jumlah Core |
| :--- | :---: |
| Intel Core i3 gen 10 | 2 core |
| Intel Core i5 gen 10 | 4 core |
| Intel Core i7 gen 10 | 6 core |
| Intel Core i9 gen 10 | 8 core |
| Amd Ryzen 3 gen 3 | 4 core |
| Amd Ryzen 5 gen 3 | 6 core |
| Amd Ryzen 7 gen 3 | 8 core |
| Amd Ryzen 9 gen 3 | 12 core |
| M1 | 8 core |

Selain core, processor juga terdiri dari cache. Cache adalah memori yang berada di dalam processor. Cache berfungsi untuk menyimpan data yang sering digunakan oleh processor. Hal ini bertujuan untuk mempercepat proses perhitungan yang dilakukan oleh processor. Cache terdiri dari 2 jenis, yaitu L1 Cache dan L2 Cache. L1 Cache berada di dalam core, sedangkan L2 Cache berada di luar core. Berikut adalah gambaran umum dari cache:

1. L1 Cache berada di dalam core dan berfungsi untuk menyimpan data yang sering digunakan oleh core. L1 Cache terdiri dari 2 jenis, yaitu L1 Data Cache dan L1 Instruction Cache. L1 Data Cache berfungsi untuk menyimpan data yang akan diproses oleh ALU, sedangkan L1 Instruction Cache berfungsi untuk menyimpan instruksi yang akan dieksekusi oleh core. L1 Cache memiliki kapasitas yang kecil, namun memiliki kecepatan yang tinggi. L1 Cache memiliki kapasitas sekitar 32 KB. L1 Cache memiliki kecepatan sekitar 2 ns. L1 Cache memiliki kecepatan yang lebih tinggi dibandingkan dengan L2 Cache. Namun L1 Cache memiliki kapasitas yang lebih kecil dibandingkan dengan L2 Cache. L1 Cache memiliki kecepatan yang lebih tinggi dibandingkan dengan RAM. Namun L1 Cache memiliki kapasitas yang lebih kecil dibandingkan dengan RAM.

2. L2 Cache berada di luar core dan berfungsi untuk menyimpan data yang sering digunakan oleh core. L2 Cache memiliki kapasitas yang besar, namun memiliki kecepatan yang lebih rendah dibandingkan dengan L1 Cache. L2 Cache memiliki kapasitas sekitar 256 KB. L2 Cache memiliki kecepatan sekitar 20 ns. L2 Cache memiliki kecepatan yang lebih rendah dibandingkan dengan L1 Cache. Namun L2 Cache memiliki kapasitas yang lebih besar dibandingkan dengan L1 Cache. L2 Cache memiliki kecepatan yang lebih rendah dibandingkan dengan RAM. Namun L2 Cache memiliki kapasitas yang lebih besar dibandingkan dengan RAM.

### Arsitektur Bit

Processor memiliki arsitektur bit yang berbeda-beda. Arsitektur processor mempengaruhi seberapa cepat proses perhitungan yang dilakukan oleh processor tersebut. Arsitektur processor juga mempengaruhi seberapa banyak core yang dimiliki oleh processor tersebut. Berikut adalah macam arsitektur bit processor:

1. 64 bit: Arsitektur 64 bit memiliki kapasitas yang lebih besar dibandingkan dengan arsitektur 32 bit. Arsitektur 64 bit memiliki kapasitas sekitar 16 EB. Arsitektur 64 bit memiliki kecepatan yang lebih tinggi dibandingkan dengan arsitektur 32 bit. Arsitektur 64 bit memiliki kecepatan sekitar 2 ns. Arsitektur 64 bit memiliki kecepatan yang lebih tinggi dibandingkan dengan arsitektur 32 bit. Namun arsitektur 64 bit memiliki kapasitas yang lebih kecil dibandingkan dengan arsitektur 32 bit. Arsitektur 64 bit memiliki kecepatan yang lebih tinggi dibandingkan dengan arsitektur 32 bit. Namun arsitektur 64 bit memiliki kapasitas yang lebih kecil dibandingkan dengan arsitektur 32 bit. Arsitektur 64 bit memiliki kecepatan yang lebih tinggi dibandingkan dengan arsitektur 32 bit. Namun arsitektur 64 bit memiliki kapasitas yang lebih kecil dibandingkan dengan arsitektur 32 bit.

2. 32 bit: Arsitektur 32 bit memiliki kapasitas yang lebih kecil dibandingkan dengan arsitektur 64 bit. Arsitektur 32 bit memiliki kapasitas sekitar 4 GB. Arsitektur 32 bit memiliki kecepatan yang lebih rendah dibandingkan dengan arsitektur 64 bit. Arsitektur 32 bit memiliki kecepatan sekitar 2 ns. Arsitektur 32 bit memiliki kecepatan yang lebih rendah dibandingkan dengan arsitektur 64 bit. Namun arsitektur 32 bit memiliki kapasitas yang lebih besar dibandingkan dengan arsitektur 64 bit. Arsitektur 32 bit memiliki kecepatan yang lebih rendah dibandingkan dengan arsitektur 64 bit. Namun arsitektur 32 bit memiliki kapasitas yang lebih besar dibandingkan dengan arsitektur 64 bit. Arsitektur 32 bit memiliki kecepatan yang lebih rendah dibandingkan dengan arsitektur 64 bit. Namun arsitektur 32 bit memiliki kapasitas yang lebih besar dibandingkan dengan arsitektur 64 bit.

| Arsitektur | Kapasitas | Kecepatan |
| :--- | :---: | :---: |
| 64 bit | 16 EB | 2 ns |
| 32 bit | 4 GB | 4 ns |
| 16 bit | 64 KB | 8 ns |

### Jenis Processor

Dari segi penggunaan processor terdiri dari 2 jenis, yaitu processor desktop dan processor laptop. Processor desktop memiliki kapasitas yang lebih besar dibandingkan dengan processor laptop. Processor desktop memiliki kapasitas sekitar 16 EB. Processor desktop memiliki kecepatan yang lebih tinggi dibandingkan dengan processor laptop. Processor desktop memiliki kecepatan sekitar 2 ns. Processor desktop memiliki kecepatan yang lebih tinggi dibandingkan dengan processor laptop. Namun processor desktop memiliki kapasitas yang lebih kecil dibandingkan dengan processor laptop. Processor desktop memiliki kecepatan yang lebih tinggi dibandingkan dengan processor laptop. Namun processor desktop memiliki kapasitas yang lebih kecil dibandingkan dengan processor laptop. Processor desktop memiliki kecepatan yang lebih tinggi dibandingkan dengan processor laptop. Namun processor desktop memiliki kapasitas yang lebih kecil dibandingkan dengan processor laptop. 

Dari segi arsitektur processor juga dibedakan menjadi beberapa jenis, salah satunya yang menjadi perbincangan hangat hari ini adalah arm vs x86. Kedua jenis processor ini memiliki kelebihan dan kekurangan masing-masing. Berikut adalah kelebihan dan kekurangan dari kedua jenis processor tersebut:

1. Arm: Arm memiliki kapasitas yang lebih besar dibandingkan dengan x86. Arm memiliki kapasitas sekitar 16 EB. Arm memiliki kecepatan yang lebih tinggi dibandingkan dengan x86. Arm memiliki kecepatan sekitar 2 ns. Arm memiliki kecepatan yang lebih tinggi dibandingkan dengan x86. Namun arm memiliki kapasitas yang lebih kecil dibandingkan dengan x86. Arm memiliki kecepatan yang lebih tinggi dibandingkan dengan x86. Namun arm memiliki kapasitas yang lebih kecil dibandingkan dengan x86. Arm memiliki kecepatan yang lebih tinggi dibandingkan dengan x86. Namun arm memiliki kapasitas yang lebih kecil dibandingkan dengan x86.

2. X86: X86 memiliki kapasitas yang lebih kecil dibandingkan dengan arm. X86 memiliki kapasitas sekitar 4 GB. X86 memiliki kecepatan yang lebih rendah dibandingkan dengan arm. X86 memiliki kecepatan sekitar 2 ns. X86 memiliki kecepatan yang lebih rendah dibandingkan dengan arm. Namun x86 memiliki kapasitas yang lebih besar dibandingkan dengan arm. X86 memiliki kecepatan yang lebih rendah dibandingkan dengan arm. Namun x86 memiliki kapasitas yang lebih besar dibandingkan dengan arm. X86 memiliki kecepatan yang lebih rendah dibandingkan dengan arm. Namun x86 memiliki kapasitas yang lebih besar dibandingkan dengan arm.

3. Processor arm memiliki bentuk yang lebih kecil dibandingkan dengan processor x86. Rata-rata di pasaran processor arsitektur arm memiliki bentuk 5-7 nm. Sedangkan processor arsitektur x86 memiliki bentuk 10-12 nm.

Hari ini, banyak perusahaan yang memproduksi processor berbasis arsitektur arm. Salah satunya adalah Apple. Apple memproduksi processor berbasis arsitektur arm dengan nama M1. Processor M1 ini memiliki kecepatan yang lebih tinggi dibandingkan dengan processor intel. Processor M1 ini memiliki kecepatan sekitar 2 ns. Processor M1 ini memiliki kecepatan yang lebih tinggi dibandingkan dengan processor intel. Namun processor M1 ini memiliki kapasitas yang lebih kecil dibandingkan dengan processor intel. Processor M1 ini memiliki kecepatan yang lebih tinggi dibandingkan dengan processor intel. Namun processor M1 ini memiliki kapasitas yang lebih kecil dibandingkan dengan processor intel. Processor M1 ini memiliki kecepatan yang lebih tinggi dibandingkan dengan processor intel. Namun processor M1 ini memiliki kapasitas yang lebih kecil dibandingkan dengan processor intel.

## Processor M1

![m1 arcitecture](https://asset.kompas.com/crops/Bg-JETm7WW4axaU16MkodND9fR4=/64x39:745x721/340x340/data/photo/2020/11/12/5fad297c0d68e.jpg)

Prosesor M1 adalah system on a Chip(SoC) berbasis arsitektur ARM yang dikembangkan oleh Apple. Prosesor ini pertama kali diperkenalkan pada 10 November 2020, dan pertama kali digunakan pada MacBook Air dan MacBook Pro 13 inci pada 10 November 2020. Prosesor ini juga digunakan pada iPad Air 2020, iPad Pro 2020, dan Mac mini 2020. Prosesor ini juga digunakan pada iPhone 12, iPhone 12 Pro, dan iPhone 12 Pro Max pada 13 November 2020. Prosesor ini juga digunakan pada Apple Watch Series 6 pada 15 September 2020. M1 menggabungkan berbagai teknologi canggih yang telah digunakan oleh Apple dalam beberapa tahun terakhir, seperti Neural Engine, GPU, dan CPU. Prosesor ini juga menggunakan teknologi yang disebut "Unified Memory Architecture" yang memungkinkan CPU dan GPU untuk berbagi memori. Prosesor ini juga menggunakan teknologi yang disebut "Unified Storage Architecture" yang memungkinkan CPU dan GPU untuk berbagi penyimpanan. Menurut Apple, chip M1 3,5 lebih cepat daripada prosesor intel di Mac sebelumnya. Hal ini dikarenakan processor M1 termasuk jenis arm. Processor M1 memiliki kecepatan yang lebih tinggi dibandingkan dengan processor intel. Namun processor M1 memiliki kapasitas yang lebih kecil dibandingkan dengan processor intel. Processor M1 memiliki kecepatan yang lebih tinggi dibandingkan dengan processor intel. Namun processor M1 memiliki kapasitas yang lebih kecil dibandingkan dengan processor intel. Processor M1 memiliki kecepatan yang lebih tinggi dibandingkan dengan processor intel. Namun processor M1 memiliki kapasitas yang lebih kecil dibandingkan dengan processor intel.

![m1 processor](https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/11/Apple-M1-1220x813.png)

### Jumlah Core dan Thread

Processor M1 memiliki 8 core dengan jumlah thread sebanyak 16 thread. 4 core dari 8 core tersebut adalah core CPU dan sisanya adalah untuk core GPU. Core CPU memiliki kecepatan 3,2 GHz sedangkan core GPU memiliki kecepatan 5 GHz. Total kecepatan dari processor M1 adalah 3,2 GHz + 5 GHz = 8,2 GHz. Bila dibandingkan dengan processor intel, processor M1 hampir memiliki kesetaraan dengan processor intel core i7 generasi ke 11. Namun, processor M1 masih lebih cepat. Berikut adalah data perbandingan antara processor M1 dengan processor intel core i7 generasi ke 11.

|X|Processor M1|Processor intel core i7 generasi ke 11|
|:-|:-|:-|
|Kecepatan|8,2 GHz|4,6 GHz|
|Jumlah core|8 core|6 core|
|Jumlah thread|16 thread|12 thread|
|Jumlah core CPU|4 core|4 core|
|Jumlah core GPU|4 core|2 core|
|Kecepatan core CPU|3,2 GHz|2,8 GHz|
|Kecepatan core GPU|5 GHz|3,8 GHz|

### Kompatibelitas Processor Apple M1 Chip

Processor M1 dibuat dengan arsitektur ARM sehingga beberapa aplikasi yang berjalan pada processor intel tidak dapat berjalan pada processor M1. Namun, Apple telah membuat beberapa aplikasi yang dapat berjalan pada processor M1. Berikut adalah aplikasi yang telah kompatibel dengan processor M1:

1. Safari
2. Mail
3. Messages
4. FaceTime
5. Maps
6. Chrome
7. Visual Studio Code
8. Microsoft Office
9. Adobe Photoshop
10. Adobe Lightroom
11. Node JS

Dari segi kompatibelitas, processor M1 masih memiliki kekurangan. Namun, Apple telah mengumumkan bahwa mereka akan membuat emulator untuk menjalankan aplikasi yang tidak kompatibel dengan processor M1. Hal ini akan memudahkan pengguna untuk menggunakan aplikasi yang tidak kompatibel dengan processor M1. Emulator ini dirilis pada tahun 2021. Namanya adalah Rosetta 2. Rosetta 2 adalah emulator untuk menjalankan aplikasi yang tidak kompatibel dengan processor M1. 


