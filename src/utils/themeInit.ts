import ESStyleSheet from "react-native-extended-stylesheet";

const themeInit = () => {
  ESStyleSheet.build({
    $dimension0: 0,
    $dimension1: 1,
    $dimension2: 4,
    $dimension3: 8,
    $dimension4: 16,
    $dimension5: 32,
    $leave: "#3B8A4F",
    $primary: "#176232",
    $secondary: "#032B35",
    $fireYellow: "#FDE26C",
    $fireOrange: "#FDA263",
    $text: "#B3B3B3",
    $wood: "#5A3D3A",
    $black: "black",
    $white: "white",
  });
};

export default themeInit;
