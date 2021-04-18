import ESStyleSheet from "react-native-extended-stylesheet";

const themeInit = () => {
  ESStyleSheet.build({
    $dimension0: 0,
    $dimension1: 1,
    $dimension2: 4,
    $dimension3: 8,
    $dimension4: 16,
    $dimension5: 32,
    $primary: "#176232",
    $wood: "#5A3D3A",
    $white: "white",
  });
};

export default themeInit;
