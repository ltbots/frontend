import { useEffect } from "react";
import { miniApp } from "@telegram-apps/sdk-react";
import { useColorMode } from "./color-mode";

export function TelegramChromeSync() {
    const { colorMode } = useColorMode();

    useEffect(() => {
        const key = colorMode === "dark" ? "secondary_bg_color" : "bg_color";

        if (miniApp.setHeaderColor.isAvailable()) {
            miniApp.setHeaderColor(key);
        }
        if (miniApp.setBackgroundColor.isAvailable()) {
            miniApp.setBackgroundColor(key);
        }
        if (miniApp.setBottomBarColor?.isAvailable?.()) {
            miniApp.setBottomBarColor(key);
        }
    }, [colorMode]);

    return null;
}
