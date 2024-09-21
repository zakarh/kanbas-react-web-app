import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Flex from "./Lab2/Flex";
import ReactIcons from "./Lab2/ReactIcons";
import BootstrapGrids from "./Lab2/BootstrapGrids";
import ScreenSizeLabel from "./Lab2/ScreenSizeLabel";
import BootstrapTables from "./Lab2/BootstrapTables";
import BootstrapLists from "./Lab2/BootstrapLists";
import BootstrapForms from "./Lab2/BootstrapForms";
import BootstrapNavigation from "./Lab2/BootstrapNavigation";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Flex" element={<Flex />} />
        <Route path="ReactIcons" element={<ReactIcons />} />
        <Route path="BootstrapGrids" element={<BootstrapGrids />} />
        <Route path="ScreenSizeLabel" element={<ScreenSizeLabel />} />
        <Route path="BootstrapTables" element={<BootstrapTables />} />
        <Route path="BootstrapLists" element={<BootstrapLists />} />
        <Route path="BootstrapForms" element={<BootstrapForms />} />
        <Route path="BootstrapNavigation" element={<BootstrapNavigation />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
