import { glob } from "../utils";

export default (l = 1) => l * glob.paperWidth / glob.xDiff;
