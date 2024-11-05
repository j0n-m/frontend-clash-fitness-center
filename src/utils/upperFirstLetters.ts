export default function upperFirstLetters(str: string) {
  const words = str.split(" ");
  const newWords = words.map(
    (w) => w[0].toUpperCase() + w.slice(1).toLowerCase()
  );
  return newWords.join(" ");
}
