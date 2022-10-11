// @ts-ignore
const { Typed } = window;

const typed2 = new Typed('#briefschmerz', {
  strings: [
    'Briefschmerz', // German
    'Dor de receber uma carta', // Portuguese
    'Letter pain', // English
    "Douleur de recevoir une lettre", // French
    'Dolor de recibir una carta', // Spanish
    '手紙を受け取る痛み', // Japonese
    'Біль отримання листа', // Ukranian
    'Sársauki við að fá bréf', // Icelandic
    '收到信的痛苦', // Chinese
    'Dolore di ricevere una lettera', // Italian
    'Ból otrzymania listu', // Polish
    'पत्र मिलने का दर्द', // Hindi
    'Sakit menerima surat', // Indonesian
    "כאב של קבלת מכתב", // Hebrew
    "편지를 받는 고통", // Korean
  ],
  typeSpeed: 80,
  backSpeed: 60,
  smartBackspace: false,
  loop: true,
  shuffle: false,
  backDelay: 2000,
  startDelay: 3000,
});

// force the start of cursor animation while the `startDelay` is ticking
if (typed2.cursor != null) {
  // can't use `toggleBlinking(true)` here, as it has some extra checks
  // whether animation has started...which defeats the purpose
  typed2.cursor.classList.add('typed-cursor--blink');
}
