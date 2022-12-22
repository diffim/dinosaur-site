import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dino from "./components/Dino";
import Index from "./components/Index";
import {
  SPINOSAURUS_PARAGRAPH,
  STEGOSAURUS_PARAGRAPH,
  TREX_PARAGRAPH,
  TRICERATOPS_PARAGRAPH,
  VELOCIRAPTOR_PARAGRAPH,
} from "./consts";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Stegosaurus",
        element: (
          <Dino
            paragraph={STEGOSAURUS_PARAGRAPH}
            name="Stegosaurus"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages2.minutemediacdn.com%2Fimage%2Fupload%2Fc_crop%2Ch_1349%2Cw_2400%2Cx_0%2Cy_101%2Fv1584027296%2Fshape%2Fmentalfloss%2Fgettyimages-1168444910.jpg%3Fitok%3DMJXzOdJP&f=1&nofb=1&ipt=dfc59f64753ad07d34269236cdbc2992902ec93d20e4f33756f9a3e81e70c1e6&ipo=images"
          />
        ),
      },
      {
        path: "/Triceratops",
        element: (
          <Dino
            paragraph={TRICERATOPS_PARAGRAPH}
            name="Triceratops"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmesozoica-game%2Fimages%2F9%2F9d%2FNewnewtrike.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F2000%3Fcb%3D20170615135147&f=1&nofb=1&ipt=bbd368abc645ec4221a4d8c4e368d878155d66209492166a4c7d02fa1351a073&ipo=images"
          />
        ),
      },
      {
        path: "/Tyranosaurus rex",
        element: (
          <Dino
            paragraph={TREX_PARAGRAPH}
            name="Tyranosaurus rex"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fredhistoria.com%2Fwp-content%2Fuploads%2F2018%2F10%2Ftyrannosaurus-rex.jpg%3Ffit%3D880%252C692%26ssl%3D1&f=1&nofb=1&ipt=de35be3afe48195b05ccf8f28fd0b9695d4a02e8dfe65fbc8786a091acdcabf7&ipo=images"
          />
        ),
      },
      {
        path: "/Velociraptor",
        element: (
          <Dino
            paragraph={VELOCIRAPTOR_PARAGRAPH}
            name="Velociraptor"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fleganerd.com%2Fwp-content%2Fuploads%2F2011%2F03%2FLEGANERD_038906.jpg&f=1&nofb=1&ipt=da0b8130e3c10543c26255e7edaf79aeab38b2910f68a2fd554aa685ef11ff02&ipo=images"
          />
        ),
      },
      {
        path: "/Spinosaurus",
        element: (
          <Dino
            paragraph={SPINOSAURUS_PARAGRAPH}
            name="Spinosaurus"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.wallpapersafari.com%2F83%2F72%2FfbPWDN.png&f=1&nofb=1&ipt=e29090d0a43da5fb438f6f5175dd2d4c2b9ae12e955908c769a01c09f46151a7&ipo=images"
          />
        ),
      },
      { index: true, element: <Index /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
