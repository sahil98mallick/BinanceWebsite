import { PaletteMode, createTheme } from "@mui/material";
import React from "react";
import { getDesignTokens } from "./palette";

export const useColorTheme = () => {
    const [mode, setMode] = React.useState<PaletteMode>("light");

    const toggleColorMode = () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

    const modifiedTheme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    );
    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode,
    };
};
