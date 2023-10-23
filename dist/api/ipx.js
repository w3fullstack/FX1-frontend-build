import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"D:/MyWork/GC/FX1_Git/FX1-frontend/assets/images","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
