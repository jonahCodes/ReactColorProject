// {
//     paletteName: "Flat UI Colors Dutch",
//     id: "flat-ui-colors-dutch",
//     emoji: "🇳🇱",
//     colors: [
//       { name: "Sunflower", color: "#FFC312" },
//       { name: "Energos", color: "#C4E538" },
//       { name: "BlueMartina", color: "#12CBC4" },
//       { name: "LavenderRose", color: "#FDA7DF" },
//       { name: "BaraRose", color: "#ED4C67" },
//       { name: "RadiantYellow", color: "#F79F1F" },
//       { name: "AndroidGreen", color: "#A3CB38" },
//       { name: "MediterraneanSea", color: "#1289A7" },
//       { name: "LavenderTea", color: "#D980FA" },
//       { name: "VerryBerry", color: "#B53471" },
//       { name: "PuffinsBill", color: "#EE5A24" },
//       { name: "PixelatedGrass", color: "#009432" },
//       { name: "MerchantMarineBlue", color: "#0652DD" },
//       { name: "ForgottenPurple", color: "#9980FA" },
//       { name: "HollyHock", color: "#833471" },
//       { name: "RedPigment", color: "#EA2027" },
//       { name: "TurkishAqua", color: "#006266" },
//       { name: "20000LeaguesUnderTheSea", color: "#1B1464" },
//       { name: "CircumorbitalRing", color: "#5758BB" },
//       { name: "MagentaPurple", color: "#6F1E51" },
//     ],
//   }
import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of starterPalette.colors) {
    let scale = generateScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgba", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPalette;
}
function getRange(hexColor) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}
function generateScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}
export { generatePalette };
