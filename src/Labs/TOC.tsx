import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export default function TOC() {
  return (
    <ul>
      <li className="nav-item">
        <Link to="/Labs">Labs</Link></li>
      <li className="nav-item">
        <Link to="/Labs/Lab1">Lab 1</Link></li>
      <li className="nav-item">
        <Link to="/Labs/Lab2">Lab 2</Link></li>
      <ul>
        <li><Link to="/Labs/Flex">Lab 2 - Flex</Link></li>
        <li><Link to="/Labs/ReactIcons">Lab 2 - ReactIcons</Link></li>
        <li><Link to="/Labs/BootstrapGrids">Lab 2 - BootstrapGrids</Link></li>
        <li><Link to="/Labs/ScreenSizeLabel">Lab 2 - ScreenSizeLabel</Link></li>
        <li><Link to="/Labs/BootstrapTables">Lab 2 - BootstrapTables</Link></li>
        <li><Link to="/Labs/BootstrapLists">Lab 2 - BootstrapLists</Link></li>
        <li><Link to="/Labs/BootstrapForms">Lab 2 - BootstrapForms</Link></li>
        <li><Link to="/Labs/BootstrapNavigation">Lab 2 - BootstrapNavigation</Link></li>
      </ul>
      <li><Link to="/Labs/Lab3">Lab 3</Link></li>
      <li><Link to="/Kanbas">Kanbas</Link></li>
    </ul>
  );
}
