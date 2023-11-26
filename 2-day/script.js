// let word = "JavaScript";

// word[0] = "Y";
// // console.log(word);

// let numOne = 3;
// let numTwo = 3;

// console.log(numOne == numTwo, "number");

// let js = "JavaScript";

// let py = "Python";

// console.log(js === py);
// console.log(
//   typeof js === typeof py,
//   "typlarina gore qarsilasdirdiqdimizda  true qaytarir"
// );

// let nums = [
//   1,
//   "Mehemmed",
//   undefined,
//   true,
// ]; /*Nun pritiv deyeri deysdirile bilen*/
// console.log(nums);

// nums[0] = "Haciyev";

// let numss = [1, 2, 3];
// let numbers = [1, 2, 3];

// console.log(numss == numbers); // false
// console.log(numss.value == numbers.value); // true

// let userOne = {
//   name: "Asabeneh",
//   role: "teaching",
//   country: "Finland",
// };

// let userTwo = {
//   name: "Asabeneh",
//   role: "teaching",
//   country: "Finland",
// };

// console.log(userOne == userTwo); // false

// console.log(userOne.value == userTwo.value); // true

// const PI = Math.PI; // Buraya kısa bir açıklama getirelim. Math objesi sayesinde PI sayısının değerini otomatik alıyoruz.

// console.log(PI); // 3.141592653589793

// // En yakın sayıya yuvarlama
// // Eğer .5'in altındaysa aşağıya üstündeyse yukarıya yuvarlar. Örn: 3.14 ise 3 yapar 3.51 ise 4 yapar.

// console.log(Math.round(PI)); // 3.14 olduğu için 3 e yuvarlama yapıyor

// console.log(Math.round(9.81)); // Ondası 0.5 üstünde olduğu için 10 yapar

// console.log(Math.floor(PI)); // floor aşağı yuvarlar Bu 3 olur

// console.log(Math.ceil(PI)); // ceil yukarı yuvarlar Bu 4 olur

// console.log(Math.min(-5, 3, 20, 4, 5, 10)); // En küçük sayıyı bulmaya yaradığı için sonuç -5 döner

// console.log(Math.max(-5, 3, 20, 4, 5, 10)); // En büyük sayıyı bulmaya yaradığı için sonuç 20 döner

// const randNum = Math.random(); // 0 ile 0.999999 arasında rastgele bir sayı üretir.
// console.log(randNum);

// // 0 ile 10 arasında rastgele bir sayı oluşturalım.

// const num = Math.floor(Math.random() * 11); // 0 ile 10 arasında rastgele sayı oluşturur
// console.log(num);

// //Mutlak değer
// console.log(Math.abs(-10)); // 10

// //Kare kök
// console.log(Math.sqrt(100)); // 10

// console.log(Math.sqrt(2)); // 1.4142135623730951

// // Üs
// console.log(Math.pow(3, 2)); // 9

// console.log(Math.E); // 2.718

// // Logaritma
// // Returns the natural logarithm with base E of x, Math.log(x)
// console.log(Math.log(2)); // 0.6931471805599453
// console.log(Math.log(10)); // 2.302585092994046

// // Sırasıyla 2 ve 10'un doğal logaritmasını döndürür
// console.log(Math.LN2); // 0.6931471805599453
// console.log(Math.LN10); // 2.302585092994046

// // Trigonometri
// Math.sin(0);
// Math.sin(60);

// Math.cos(0);
// Math.cos(60);

// let randomNum = Math.random(); // 0 ile 0.999 arasında oluşturur
// let numBtnZeroAndTen = randomNum * 11;

// console.log(numBtnZeroAndTen); // Sonuç : minimum  0 ve maksimum 10.99

// let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen); // yuvarlama yapıyor
// console.log(randomNumRoundToFloor); // Sonuç 0 ile  10 arasında çıkar

// let space = " "; // boş alan string tek tırnaklı
// let firstName = "Asabeneh"; // tek tırnaklı string
// let lastName = "Yetayeh"; // tek tırnaklı string
// let country = "Finland"; // tek tırnaklı string
// let city = "Helsinki"; // tek tırnaklı string
// let language = "JavaScript"; // tk tırnaklı string
// let job = "teacher"; // tek tırnaklı string
// let quote = "The saying,'Seeing is Believing' is not correct in 2020."; // çift tırnaklı string
// let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`; // ters tırnaklı string (bu karakteri genellikle klavyenizdeki noktalı virgülü kullanarak yaparsınız. Benim klavyemde alt gr + noktalı virgül ve iki kere tıklanınca çıkıyor)

// let fullName = firstName + space + lastName; // birleştirme, iki string'i bir araya getirme.
// console.log(fullName);

// String'lerdeki Kaçış Dizileri
// JavaScript ve diğer programlama dillerinde \ (ters eğik çizgi ) ardından bazı karakterler kaçış dizisidir. En yaygın kaçış karakterlerini görelim:

// \n: yeni satır
// \t: Tab, 8 boşluk anlamına gelir ( klavyedeki tab tuşunu temsil eder )
// \\: Ters eğik çizgi
// \': Tek Tırnak (')
// \": Çift Tırnak (")

// // kodları console kısmına yazarak denerseniz daha iyi anlarsınız.
// console.log(
//   "I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?"
// ); //  Buradakı \n satır sonu anlamına gelir sonrası aşağı iner
// console.log("Days\tTopics\tExercises"); // Burada her kelimeden sonra bir tab (\t) tuşuna basılmış etkisi verir
// console.log("Day 1\t3\t5"); // \t bir başka örnek
// console.log("Day 2\t3\t5"); // \t bir başka örnek
// console.log("Day 3\t3\t5"); // \t bir başka örnek
// console.log("Day 4\t3\t5"); // \t bir başka örnek
// console.log("This is a backslash  symbol (\\)"); // Ters eğik çizgi yazmak için \\ kullanılıyor
// console.log('In every programming language it starts with "Hello, World!"'); // Hello World'ü çift tırnak içine almak için \" Hello World \" kullanılıyor.
// console.log("In every programming language it starts with 'Hello, World!'"); // Hello World'ü tek tırnak içine almak için \' Hello World \' kullanılıyor.
// console.log("The saying 'Seeing is Believing' isn't correct in 2020"); // Bu kısımdada alıntıları kullanmak için \ kullanımı gösterilmiş.

// // String Metotları

// // 1)length: String içerisindeki karakterlerin sayısını belirtir. Boşluklar dahildir

// // let js = "JavaScript";
// // console.log(js.length); // 10
// // let firstName = "Asabeneh";
// // console.log(firstName.length); // 8

// let string = "JavaScript";
// let firstLetter = string[0];

// console.log(firstLetter); // J

// let secondLetter = string[1]; // a
// let thirdLetter = string[2];
// let lastLetter = string[9];

// console.log(lastLetter); // t

// let lastIndex = string.length - 1;

// console.log(lastIndex); // 9
// console.log(string[lastIndex]); // t

// toUpperCase(): bu metot string verisini büyük harflere dönüştürür
// let string = "JavaScript";

// console.log(string.toUpperCase()); // JAVASCRIPT

// let firstName = "Asabeneh";

// console.log(firstName.toUpperCase()); // ASABENEH

// let country = "Finland";

// console.log(country.toUpperCase()); // FINLAND

// toLowerCase(): bu metot string verisini küçük harflere dönüştürür.

// let string = "JavasCript";

// console.log(string.toLowerCase()); // javascript

// let firstName = "Asabeneh";

// console.log(firstName.toLowerCase()); // asabeneh

// let country = "Finland";

// console.log(country.toLowerCase()); // finland

// substr(): İki arrgüman alır, başlangıç indeksi ve silenecek karakter sayısı.

// let string = 'JavaScript'
// console.log(string.substr(4,6))    // Script

// let country = 'Finland'
// console.log(country.substr(3, 4))   // land

// substring(): Başlangıç indeksi ve durma indeksi olmak üzere iki argüman almaktadır.

// let string = "JavaScript";

// console.log(string.substring(0, 4)); // Java
// console.log(string.substring(4, 10)); // Script
// console.log(string.substring(4)); // Script

// let country = "Finland";

// console.log(country.substring(0, 3)); // Fin
// console.log(country.substring(3, 7)); // land
// console.log(country.substring(3)); // land

// split(): Bu metot bir stringi belirtilen yerden bölmeye yarar. ( array oluşturuyor )

// let string = "30 Days Of JavaScript";

// console.log(string.split()); // bu kısımda birşey belirtmediğin için 1 elementli array oluştu -> ["30 Days Of JavaScript"]
// console.log(string.split(" ")); // bu kısımda boşluktan böl dediğimiz için 4 elementli array oluştu -> ["30", "Days", "Of", "JavaScript"]

// let firstName = "Asabeneh";

// console.log(firstName.split()); // - > ["Asabeneh"]
// console.log(firstName.split("")); // burada sadece tek tırnak kullandığımız için string'in içindeki tüm karakterleri array haline getirdi  ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

// let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

// console.log(countries.split(",")); // Dikkat edin sadece virgül ile ayırıyor. İknci elementin solunda boşluk oluşuyor.  ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
// console.log(countries.split(", ")); // Dikkat edin burayada. ', ' virgül ve boşluk bulunmakta bu yüzden elementleri virgülden ayırıp boşluklsuz arrray oluşturuyor.  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

// let string = '   30 Days Of JavaScript   '

// console.log(string)
// console.log(string.trim(' '))

// let firstName = ' Asabeneh '

// console.log(firstName)
// console.log(firstName.trim())  // içinde tırnak kullanmasanız dahi boşlukları siler

// let name = "mehemmed";

// let boomName = name.split("");

// let reverseName = boomName.reverse();
// console.log(reverseName);

// let addNames = reverseName.join(" ");

// console.log(addNames);

// burda ise adimiz tersine cevirerek yazdiq oyrendiyimiz string metotdlari ile

// 8) trim(): String'in başında ve sonundaki boşlukları silmeye yarar.

// let string = "   30 Days Of JavaScript   ";

// console.log(string);
// console.log(string.trim(" "));

// let firstName = " Asabeneh ";

// console.log(firstName);
// console.log(firstName.trim()); // içinde tırnak kullanmasanız dahi boşlukları siler

// 9)includes(): Bu metot string içerisinde varlık kontrolü yapmaya yarar. Eğer bulursa true, bulamazsa false döner. ( birebir arama yapar )

// let string = "30 Days Of JavaScript";

// console.log(string.includes("Days")); // true
// console.log(string.includes("days")); // false - birebir arama yapar!
// console.log(string.includes("Script")); // true
// console.log(string.includes("script")); // false
// console.log(string.includes("java")); // false
// console.log(string.includes("Java")); // true

// let country = "Finland";

// console.log(country.includes("fin")); // false
// console.log(country.includes("Fin")); // true
// console.log(country.includes("land")); // true
// console.log(country.includes("Land")); // false

//9) replace(): Bu metot string içerisinde değiştirme yapmamızı sağlar. Eski ve Yeni olmak üzere iki argüman alır.

// string.replace(oldsubstring, newsubstring)

// let string = '30 Days Of JavaScript'
// console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

// let country = 'Finland'
// console.log(country.replace('Fin', 'Noman'))       // Nomanland

// replaceAll() la ise butun yazilari deyisdiririk yuxarda ise 1 denesini deyistirir burda ise butun hamsini deyistirir

// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// console.log(string.match('love'))

// let pattern = /love/gi
// console.log(string.match(pattern))   // ["love", "love", "love"]

// let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
// let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

// console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
// console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

// let name = "mehemmed";
// console.log("value", name.match("e"), "mehemmed");
// // match kullanimi

// let surname = "hajiyeff";

// let fulname = name.concat(" ", surname);
// console.log(fulname);

// // concat kullanimi

// for (let i = 1; i <= 10; i++) {
//   let line = '';
  
//   // Satırın başında boşluk bırak
//   for (let k = 0; k < 10 - i; k++) {
//     line += ' ';
//   }

//   // Sayıları ekle
//   for (let j = 1; j <= i; j++) {
//     line += j + ' ';
//   }
  
//   console.log(line);
// }



// for (let i = 10; i >= 1; i--) {
//   let line = '';

//   // Boşlukları ekle
//   for (let k = 0; k < 10 - i; k++) {
//     line += '  ';
//   }

//   // Azalan sayıları ekleyin
//   for (let j = i; j >= 1; j--) {
//     line += j + ' ';
//   }

//   console.log(line);
// }







// for (let i = 1; i <= 6; i++) {
//   let line = '';

//   // Boşlukları ekle
//   for (let k = 1; k <= 6 - i; k++) {
//     line += '  ';
//   }

//   // Artan sayıları ekleyin
//   for (let j = 1; j <= i; j++) {
//     line += '* ';
//   }

//   // Azalan sayıları ekleyin
//   for (let m = i - 1; m >= 1; m--) {
//     line += '* ';
//   }

//   console.log(line);
// }

// for (let i = 4; i >= 1; i--) {
//   let line = '';

//   // Boşlukları ekle
//   for (let k = 1; k <= 5 - i; k++) {
//     line += '  ';
//   }

//   // Artan sayıları ekleyin
//   for (let j = 1; j <= i; j++) {
//     line += '* ';
//   }

//   // Azalan sayıları ekleyin
//   for (let m = i - 1; m >= 1; m--) {
//     line += '* ';
//   }

//   console.log(line);
// }


const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// Harf karakterleri ve boşlukları koruyarak temizleme
const cleanedSentence = sentence.replace(/[^a-zA-Z\s]/g,'');


console.log(sentence);

console.log(cleanedSentence);
