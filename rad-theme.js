import React from "react"
import { theme } from "@chakra-ui/core"

export default {
  ...theme,
  colors: {
    ...theme.colors,
    black: "#000",
    white: "#FFF",
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    blue: {
      50: "#B3DEFF",
      100: "#99D3FF",
      200: "#80C8FF",
      300: "#66BDFF",
      400: "#4DB2FF",
      500: "#35A7FF",
      600: "#0D96FF",
      700: "#0082E6",
      800: "#006CBF",
      900: "#005799",
    },
    slate: {
      50: "#E3EBF4",
      100: "#C6D7E8",
      200: "#AAC3DD",
      300: "#8EAFD2",
      400: "#729BC7",
      500: "#5587BB",
      600: "#4273A7",
      700: "#38618C",
      800: "#305479",
      900: "#294868",
    },
    pine: {
      50: "#DBE9E3",
      100: "#CADED5",
      200: "#B8D3C7",
      300: "#A6C8B8",
      400: "#94BEAA",
      500: "#82B39C",
      600: "#72A98F",
      700: "#5D987D",
      800: "#50826B",
      900: "#436D59",
    },
    green: {
      50: "#CBF6EB",
      100: "#96EDD6",
      200: "#62E4C2",
      300: "#2EDCAD",
      400: "#1EAE88",
      500: "#157A5F",
      600: "#0C4636",
      700: "#03120E",
      800: "#030F0C",
      900: "#020D0A",
    },
  },
  icons: {
    ...theme.icons,
    menu: {
      path: (
        <path
          fill="currentColor"
          d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"
        />
      ),
    },
    home: {
      path: (
        <path
          fill="currentColor"
          d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
        />
      ),
      viewBox: "0 0 1024 1024",
    },
    astronaut: {
      path: (
        <path
          fill="currentColor"
          d="M256 23c-16.076 0-32.375 3.73-48.178 10.24-2.126 6.525-3.877 14.76-4.877 23.754-1.31 11.79-1.73 24.706-1.87 36.819 33.864-3.704 75.986-3.704 109.85 0-.14-12.113-.56-25.03-1.87-36.82-1-8.992-2.75-17.228-4.877-23.753C288.375 26.73 272.076 23 256 23zm100.564 19.332c9.315 7.054 18.107 14.878 26.282 23.234 1.53-6.65 4.69-12.696 9.03-17.695zm-170.03 1.49c-34.675 20.22-65.047 52.714-82.552 86.334-33.08 63.536-39.69 156.956-.53 214.8C132.786 388.278 200.276 405 256 405c55.725 0 123.215-16.72 152.547-60.045 39.162-57.843 32.55-151.263-.53-214.8-17.504-33.62-47.876-66.112-82.55-86.333.578 3.65 1.057 7.388 1.478 11.184 1.522 13.694 1.912 28.197 2.014 41.267C347.664 99.427 362 104 368 110c32 32 75.537 134.695 16 224-37.654 56.48-218.346 56.48-256 0-59.537-89.305-16-192 16-224 6-6 20.335-10.573 39.04-13.727.103-13.07.493-27.573 2.015-41.267.42-3.796.9-7.534 1.478-11.184zM64 48c-8.837 0-16 7.163-16 16a16 16 0 0 0 7 13.227V145.5L73 132V77.21A16 16 0 0 0 80 64c0-8.837-7.163-16-16-16zm358.81 3.68c-12.81 0-23 10.19-23 23s10.19 23 23 23 23-10.19 23-23-10.19-23-23-23zm25.272 55.205c-6.98 5.497-15.758 8.795-25.27 8.795-.745 0-1.48-.027-2.214-.067a216.57 216.57 0 0 1 2.38 4.37l29.852 22.39zm-238.822 2.5c-17.257.09-37.256 3.757-53.233 16.12-26.634 20.608-43.034 114.763-33.49 146.763 16.584-61.767 31.993-124.02 107.92-161.274a133.445 133.445 0 0 0-21.197-1.61zm-135.055 44.21L40.15 179.138l-14.48 72.408 38.18 45.814c-10.947-46.523-5.776-98.723 10.355-143.764zm363.59 0c16.13 45.042 21.302 97.242 10.355 143.764l38.18-45.815-14.48-72.408zM106.645 375.93c-3.583 1.17-7.252 3.406-10.282 6.435-4.136 4.136-6.68 9.43-7.164 14.104.21.364.603 1.157 1.73 2.162 2.453 2.188 6.693 5.17 12.127 8.358 10.867 6.38 26.55 13.757 44.205 20.623 21.177 8.237 45.35 15.704 67.738 20.38v-27.61c-39.47-5.12-79.897-18.325-108.355-44.452zm298.71 0C376.897 402.055 336.47 415.26 297 420.38v27.61c22.387-4.676 46.56-12.143 67.738-20.38 17.655-6.865 33.338-14.243 44.205-20.622 5.434-3.19 9.674-6.17 12.127-8.36 1.127-1.004 1.52-1.797 1.73-2.16-.482-4.675-3.027-9.97-7.163-14.105-3.03-3.03-6.7-5.264-10.282-6.435zM77.322 410.602L18 450.15V494h37v-18h18v18h366v-18h18v18h37v-43.85l-59.322-39.548c-.537.488-1.08.97-1.623 1.457-3.922 3.497-8.932 6.89-14.998 10.452-12.133 7.12-28.45 14.743-46.795 21.877C334.572 458.656 290.25 471 256 471s-78.572-12.343-115.262-26.61c-18.345-7.135-34.662-14.757-46.795-21.878-6.066-3.56-11.076-6.955-14.998-10.453-.543-.487-1.086-.97-1.623-1.458zM233 422.184v28.992c8.236 1.162 16.012 1.824 23 1.824 6.988 0 14.764-.662 23-1.824v-28.992c-7.82.555-15.523.816-23 .816s-15.18-.26-23-.816z"
        />
      ),
      viewBox: "0 0 512 512",
    },
    music: {
      path: (
        <path
          fill="currentColor"
          d="M20 3v14a4 4 0 1 1-2-3.465V5H9v12a4 4 0 1 1-2-3.465V3h13zM5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
        />
      ),
    },
    notes: {
      path: (
        <path
          fill="currentColor"
          d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
        />
      ),
    },
  },
}
