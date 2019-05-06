import { glob } from "./";

export default () => {
    const [width, height] = [
        Math.ceil(glob.paperWidth / glob.pixelRatio),
        Math.ceil(glob.paperHeight / glob.pixelRatio),
    ];
    glob.tarp = document.createElement("canvas");
    glob.tarp.width = width * glob.pixelRatio;
    glob.tarp.height = height * glob.pixelRatio;
    glob.tarp.style.width = `${width}px`;
    glob.tarp.style.height = `${height}px`;
    document.body.appendChild(glob.tarp);
    glob.canvasPaper = glob.tarp.getContext("2d");
};
