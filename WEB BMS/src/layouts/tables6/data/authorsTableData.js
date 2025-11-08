/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Monitoring Gedung React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Monitoring Gedung React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import MQTTComponentLpLt5Gr1 from "layouts/MQTTComponentLpLt5Gr1";
import MQTTComponentLpLt5Gr1status from "layouts/MQTTComponentLpLt5Gr1status";
import MQTTComponentLpLt5Gr2 from "layouts/MQTTComponentLpLt5Gr2";
import MQTTComponentLpLt5Gr2status from "layouts/MQTTComponentLpLt5Gr2status";
import MQTTComponentLpLt5Gr3 from "layouts/MQTTComponentLpLt5Gr3";
import MQTTComponentLpLt5Gr3status from "layouts/MQTTComponentLpLt5Gr3status";
import MQTTComponentLpLt5Gr4 from "layouts/MQTTComponentLpLt5Gr4";
import MQTTComponentLpLt5Gr4status from "layouts/MQTTComponentLpLt5Gr4status";
import MQTTComponentLpLt5Gr5 from "layouts/MQTTComponentLpLt5Gr5";
import MQTTComponentLpLt5Gr5status from "layouts/MQTTComponentLpLt5Gr5status";
import MQTTComponentLpLt5Gr6 from "layouts/MQTTComponentLpLt5Gr6";
import MQTTComponentLpLt5Gr6status from "layouts/MQTTComponentLpLt5Gr6status";
import MQTTComponentLpLt5Gr7 from "layouts/MQTTComponentLpLt5Gr7";
import MQTTComponentLpLt5Gr7status from "layouts/MQTTComponentLpLt5Gr7status";
import MQTTComponentLpLt5Gr8 from "layouts/MQTTComponentLpLt5Gr8";
import MQTTComponentLpLt5Gr8status from "layouts/MQTTComponentLpLt5Gr8status";
import MQTTComponentLpLt5Gr9 from "layouts/MQTTComponentLpLt5Gr9";
import MQTTComponentLpLt5Gr9status from "layouts/MQTTComponentLpLt5Gr9status";
import MQTTComponentLpLt5Gr10 from "layouts/MQTTComponentLpLt5Gr10";
import MQTTComponentLpLt5Gr10status from "layouts/MQTTComponentLpLt5Gr10status";
import MQTTComponentLpLt5Gr11 from "layouts/MQTTComponentLpLt5Gr11";
import MQTTComponentLpLt5Gr11status from "layouts/MQTTComponentLpLt5Gr11status";
import MQTTComponentLpLt5Gr12 from "layouts/MQTTComponentLpLt5Gr12";
import MQTTComponentLpLt5Gr12status from "layouts/MQTTComponentLpLt5Gr12status";
import MQTTComponentLpLt5Gr13 from "layouts/MQTTComponentLpLt5Gr13";
import MQTTComponentLpLt5Gr13status from "layouts/MQTTComponentLpLt5Gr13status";
import MQTTComponentLpLt5Gr14 from "layouts/MQTTComponentLpLt5Gr14";
import MQTTComponentLpLt5Gr14status from "layouts/MQTTComponentLpLt5Gr14status";
import MQTTComponentLpLt5Gr15 from "layouts/MQTTComponentLpLt5Gr15";
import MQTTComponentLpLt5Gr15status from "layouts/MQTTComponentLpLt5Gr15status";
import MQTTComponentLpLt5Gr16 from "layouts/MQTTComponentLpLt5Gr16";
import MQTTComponentLpLt5Gr16status from "layouts/MQTTComponentLpLt5Gr16status";
import MQTTComponentLpLt5Gr17 from "layouts/MQTTComponentLpLt5Gr17";
import MQTTComponentLpLt5Gr17status from "layouts/MQTTComponentLpLt5Gr17status";
import MQTTComponentLpLt5Gr18 from "layouts/MQTTComponentLpLt5Gr18";
import MQTTComponentLpLt5Gr18status from "layouts/MQTTComponentLpLt5Gr18status";
import MQTTComponentLpLt5Gr19 from "layouts/MQTTComponentLpLt5Gr19";
import MQTTComponentLpLt5Gr19status from "layouts/MQTTComponentLpLt5Gr19status";
import MQTTComponentLpLt5Gr20 from "layouts/MQTTComponentLpLt5Gr20";
import MQTTComponentLpLt5Gr20status from "layouts/MQTTComponentLpLt5Gr20status";
import MQTTComponentLpLt5Gr21 from "layouts/MQTTComponentLpLt5Gr21";
import MQTTComponentLpLt5Gr21status from "layouts/MQTTComponentLpLt5Gr21status";
import MQTTComponentLpLt5Gr22 from "layouts/MQTTComponentLpLt5Gr22";
import MQTTComponentLpLt5Gr22status from "layouts/MQTTComponentLpLt5Gr22status";
import MQTTComponentLpLt5Gr23 from "layouts/MQTTComponentLpLt5Gr23";
import MQTTComponentLpLt5Gr23status from "layouts/MQTTComponentLpLt5Gr23status";
import MQTTComponentLpLt5Gr24 from "layouts/MQTTComponentLpLt5Gr24";
import MQTTComponentLpLt5Gr24status from "layouts/MQTTComponentLpLt5Gr24status";
import MQTTComponentLpLt5Gr25 from "layouts/MQTTComponentLpLt5Gr25";
import MQTTComponentLpLt5Gr25status from "layouts/MQTTComponentLpLt5Gr25status";
import MQTTComponentLpLt5Gr26 from "layouts/MQTTComponentLpLt5Gr26";
import MQTTComponentLpLt5Gr26status from "layouts/MQTTComponentLpLt5Gr26status";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "SDP Light Panel", accessor: "sdplp", width: "30%", align: "left" },
      { Header: "Start", accessor: "Start", align: "center" },
      { Header: "Status", accessor: "Status", align: "center" },
    ],

    rows: [
      {
        sdplp: <Author name="Grouping 1" email="Ruangan L501" />,
        Start: <MQTTComponentLpLt5Gr1></MQTTComponentLpLt5Gr1>,
        Status: <MQTTComponentLpLt5Gr1status></MQTTComponentLpLt5Gr1status>,
      },
      {
        sdplp: <Author name="Grouping 2" email="Ruangan L502" />,
        Start: <MQTTComponentLpLt5Gr2></MQTTComponentLpLt5Gr2>,
        Status: <MQTTComponentLpLt5Gr2status></MQTTComponentLpLt5Gr2status>,
      },
      {
        sdplp: <Author name="Grouping 3" email="Ruangan L503" />,
        Start: <MQTTComponentLpLt5Gr3></MQTTComponentLpLt5Gr3>,
        Status: <MQTTComponentLpLt5Gr3status></MQTTComponentLpLt5Gr3status>,
      },
      {
        sdplp: <Author name="Grouping 4" email="Ruangan L504, L505, L506, L507" />,
        Start: <MQTTComponentLpLt5Gr4></MQTTComponentLpLt5Gr4>,
        Status: <MQTTComponentLpLt5Gr4status></MQTTComponentLpLt5Gr4status>,
      },
      {
        sdplp: <Author name="Grouping 5" email="Ruangan L508" />,
        Start: <MQTTComponentLpLt5Gr5></MQTTComponentLpLt5Gr5>,
        Status: <MQTTComponentLpLt5Gr5status></MQTTComponentLpLt5Gr5status>,
      },
      {
        sdplp: <Author name="Grouping 6" email="Ruangan L509" />,
        Start: <MQTTComponentLpLt5Gr6></MQTTComponentLpLt5Gr6>,
        Status: <MQTTComponentLpLt5Gr6status></MQTTComponentLpLt5Gr6status>,
      },
      {
        sdplp: <Author name="Grouping 7" email="Ruangan L510" />,
        Start: <MQTTComponentLpLt5Gr7></MQTTComponentLpLt5Gr7>,
        Status: <MQTTComponentLpLt5Gr7status></MQTTComponentLpLt5Gr7status>,
      },
      {
        sdplp: <Author name="Grouping 8" email="Ruangan L511" />,
        Start: <MQTTComponentLpLt5Gr8></MQTTComponentLpLt5Gr8>,
        Status: <MQTTComponentLpLt5Gr8status></MQTTComponentLpLt5Gr8status>,
      },
      {
        sdplp: <Author name="Grouping 9" email="Ruangan L512" />,
        Start: <MQTTComponentLpLt5Gr9></MQTTComponentLpLt5Gr9>,
        Status: <MQTTComponentLpLt5Gr9status></MQTTComponentLpLt5Gr9status>,
      },
      {
        sdplp: <Author name="Grouping 10" email="Ruangan L513" />,
        Start: <MQTTComponentLpLt5Gr10></MQTTComponentLpLt5Gr10>,
        Status: <MQTTComponentLpLt5Gr10status></MQTTComponentLpLt5Gr10status>,
      },
      {
        sdplp: <Author name="Grouping 11" email="Ruangan L514" />,
        Start: <MQTTComponentLpLt5Gr11></MQTTComponentLpLt5Gr11>,
        Status: <MQTTComponentLpLt5Gr11status></MQTTComponentLpLt5Gr11status>,
      },
      {
        sdplp: <Author name="Grouping 12" email="Ruangan L515" />,
        Start: <MQTTComponentLpLt5Gr12></MQTTComponentLpLt5Gr12>,
        Status: <MQTTComponentLpLt5Gr12status></MQTTComponentLpLt5Gr12status>,
      },
      {
        sdplp: <Author name="Grouping 13" email="Ruangan L516, L517, L518" />,
        Start: <MQTTComponentLpLt5Gr13></MQTTComponentLpLt5Gr13>,
        Status: <MQTTComponentLpLt5Gr13status></MQTTComponentLpLt5Gr13status>,
      },
      {
        sdplp: <Author name="Grouping 14" email="Ruangan L519" />,
        Start: <MQTTComponentLpLt5Gr14></MQTTComponentLpLt5Gr14>,
        Status: <MQTTComponentLpLt5Gr14status></MQTTComponentLpLt5Gr14status>,
      },
      {
        sdplp: <Author name="Grouping 15" email="Ruangan L520" />,
        Start: <MQTTComponentLpLt5Gr15></MQTTComponentLpLt5Gr15>,
        Status: <MQTTComponentLpLt5Gr15status></MQTTComponentLpLt5Gr15status>,
      },
      {
        sdplp: <Author name="Grouping 16" email="Ruangan L521" />,
        Start: <MQTTComponentLpLt5Gr16></MQTTComponentLpLt5Gr16>,
        Status: <MQTTComponentLpLt5Gr16status></MQTTComponentLpLt5Gr16status>,
      },
      {
        sdplp: <Author name="Grouping 17" email="Ruangan L522" />,
        Start: <MQTTComponentLpLt5Gr17></MQTTComponentLpLt5Gr17>,
        Status: <MQTTComponentLpLt5Gr17status></MQTTComponentLpLt5Gr17status>,
      },
      {
        sdplp: <Author name="Grouping 18" email="Ruangan L523, L524, L525, L526" />,
        Start: <MQTTComponentLpLt5Gr18></MQTTComponentLpLt5Gr18>,
        Status: <MQTTComponentLpLt5Gr18status></MQTTComponentLpLt5Gr18status>,
      },
      {
        sdplp: <Author name="Grouping 19" email="Ruangan L527" />,
        Start: <MQTTComponentLpLt5Gr19></MQTTComponentLpLt5Gr19>,
        Status: <MQTTComponentLpLt5Gr19status></MQTTComponentLpLt5Gr19status>,
      },
      {
        sdplp: <Author name="Grouping 20" email="Ruangan L528" />,
        Start: <MQTTComponentLpLt5Gr20></MQTTComponentLpLt5Gr20>,
        Status: <MQTTComponentLpLt5Gr20status></MQTTComponentLpLt5Gr20status>,
      },
      {
        sdplp: <Author name="Grouping 21" email="Ruangan L529" />,
        Start: <MQTTComponentLpLt5Gr21></MQTTComponentLpLt5Gr21>,
        Status: <MQTTComponentLpLt5Gr21status></MQTTComponentLpLt5Gr21status>,
      },
      {
        sdplp: <Author name="Grouping 22" email="Ruangan L530" />,
        Start: <MQTTComponentLpLt5Gr22></MQTTComponentLpLt5Gr22>,
        Status: <MQTTComponentLpLt5Gr22status></MQTTComponentLpLt5Gr22status>,
      },
      {
        sdplp: <Author name="Grouping 23" email="Ruangan L531" />,
        Start: <MQTTComponentLpLt5Gr23></MQTTComponentLpLt5Gr23>,
        Status: <MQTTComponentLpLt5Gr23status></MQTTComponentLpLt5Gr23status>,
      },
      {
        sdplp: <Author name="Grouping 24" email="Ruangan L531" />,
        Start: <MQTTComponentLpLt5Gr24></MQTTComponentLpLt5Gr24>,
        Status: <MQTTComponentLpLt5Gr24status></MQTTComponentLpLt5Gr24status>,
      },
      {
        sdplp: <Author name="Grouping 25" email="Ruangan L531" />,
        Start: <MQTTComponentLpLt5Gr25></MQTTComponentLpLt5Gr25>,
        Status: <MQTTComponentLpLt5Gr25status></MQTTComponentLpLt5Gr25status>,
      },
      {
        sdplp: <Author name="Grouping 26" email="Ruangan L531" />,
        Start: <MQTTComponentLpLt5Gr26></MQTTComponentLpLt5Gr26>,
        Status: <MQTTComponentLpLt5Gr26status></MQTTComponentLpLt5Gr26status>,
      },
    ],
  };
}
