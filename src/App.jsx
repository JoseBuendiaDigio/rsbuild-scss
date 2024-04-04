import './App.css';
import colors from './colors.scss'

const colorPaletteColors = [
    colors.tagPalette1Color,
    colors.tagPalette2Color,
    colors.tagPalette3Color,
    colors.tagPalette4Color,
    colors.tagPalette5Color,
    colors.tagPalette6Color,
    colors.tagPalette7Color,
    colors.tagPalette8Color,
    colors.tagPalette9Color
];

const App = () => {
    console.log(colors)

  return (
    <div className="content">
      <h1>Rsbuild with React {colorPaletteColors[0]}</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
