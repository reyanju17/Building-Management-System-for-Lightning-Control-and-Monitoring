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
import MQTTComponentLpLt6Gr1 from "layouts/MQTTComponentLpLt6Gr1";
import MQTTComponentLpLt6Gr1status from "layouts/MQTTComponentLpLt6Gr1status";
import MQTTComponentLpLt6Gr2 from "layouts/MQTTComponentLpLt6Gr2";
import MQTTComponentLpLt6Gr2status from "layouts/MQTTComponentLpLt6Gr2status";
import MQTTComponentLpLt6Gr3 from "layouts/MQTTComponentLpLt6Gr3";
import MQTTComponentLpLt6Gr3status from "layouts/MQTTComponentLpLt6Gr3status";
import MQTTComponentLpLt6Gr4 from "layouts/MQTTComponentLpLt6Gr4";
import MQTTComponentLpLt6Gr4status from "layouts/MQTTComponentLpLt6Gr4status";
import MQTTComponentLpLt6Gr5 from "layouts/MQTTComponentLpLt6Gr5";
import MQTTComponentLpLt6Gr5status from "layouts/MQTTComponentLpLt6Gr5status";
import MQTTComponentLpLt6Gr6 from "layouts/MQTTComponentLpLt6Gr6";
import MQTTComponentLpLt6Gr6status from "layouts/MQTTComponentLpLt6Gr6status";
import MQTTComponentLpLt6Gr7 from "layouts/MQTTComponentLpLt6Gr7";
import MQTTComponentLpLt6Gr7status from "layouts/MQTTComponentLpLt6Gr7status";
import MQTTComponentLpLt6Gr8 from "layouts/MQTTComponentLpLt6Gr8";
import MQTTComponentLpLt6Gr8status from "layouts/MQTTComponentLpLt6Gr8status";
import MQTTComponentLpLt6Gr9 from "layouts/MQTTComponentLpLt6Gr9";
import MQTTComponentLpLt6Gr9status from "layouts/MQTTComponentLpLt6Gr9status";
import MQTTComponentLpLt6Gr10 from "layouts/MQTTComponentLpLt6Gr10";
import MQTTComponentLpLt6Gr10status from "layouts/MQTTComponentLpLt6Gr10status";
import MQTTComponentLpLt6Gr11 from "layouts/MQTTComponentLpLt6Gr11";
import MQTTComponentLpLt6Gr11status from "layouts/MQTTComponentLpLt6Gr11status";
import MQTTComponentLpLt6Gr12 from "layouts/MQTTComponentLpLt6Gr12";
import MQTTComponentLpLt6Gr12status from "layouts/MQTTComponentLpLt6Gr12status";
import MQTTComponentLpLt6Gr13 from "layouts/MQTTComponentLpLt6Gr13";
import MQTTComponentLpLt6Gr13status from "layouts/MQTTComponentLpLt6Gr13status";
import MQTTComponentLpLt6Gr14 from "layouts/MQTTComponentLpLt6Gr14";
import MQTTComponentLpLt6Gr14status from "layouts/MQTTComponentLpLt6Gr14status";
import MQTTComponentLpLt6Gr15 from "layouts/MQTTComponentLpLt6Gr15";
import MQTTComponentLpLt6Gr15status from "layouts/MQTTComponentLpLt6Gr15status";
import MQTTComponentLpLt6Gr16 from "layouts/MQTTComponentLpLt6Gr16";
import MQTTComponentLpLt6Gr16status from "layouts/MQTTComponentLpLt6Gr16status";
import MQTTComponentLpLt6Gr17 from "layouts/MQTTComponentLpLt6Gr17";
import MQTTComponentLpLt6Gr17status from "layouts/MQTTComponentLpLt6Gr17status";
import MQTTComponentLpLt6Gr18 from "layouts/MQTTComponentLpLt6Gr18";
import MQTTComponentLpLt6Gr18status from "layouts/MQTTComponentLpLt6Gr18status";
import MQTTComponentLpLt6Gr19 from "layouts/MQTTComponentLpLt6Gr19";
import MQTTComponentLpLt6Gr19status from "layouts/MQTTComponentLpLt6Gr19status";
import MQTTComponentLpLt6Gr20 from "layouts/MQTTComponentLpLt6Gr20";
import MQTTComponentLpLt6Gr20status from "layouts/MQTTComponentLpLt6Gr20status";
import MQTTComponentLpLt6Gr21 from "layouts/MQTTComponentLpLt6Gr21";
import MQTTComponentLpLt6Gr21status from "layouts/MQTTComponentLpLt6Gr21status";
import MQTTComponentLpLt6Gr22 from "layouts/MQTTComponentLpLt6Gr22";
import MQTTComponentLpLt6Gr22status from "layouts/MQTTComponentLpLt6Gr22status";
import MQTTComponentLpLt6Gr23 from "layouts/MQTTComponentLpLt6Gr23";
import MQTTComponentLpLt6Gr23status from "layouts/MQTTComponentLpLt6Gr23status";

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
        sdplp: <Author name="Grouping 1" email="Ruangan L601" />,
        Start: <MQTTComponentLpLt6Gr1></MQTTComponentLpLt6Gr1>,
        Status: <MQTTComponentLpLt6Gr1status></MQTTComponentLpLt6Gr1status>,
      },
      {
        sdplp: <Author name="Grouping 2" email="Ruangan L602" />,
        Start: <MQTTComponentLpLt6Gr2></MQTTComponentLpLt6Gr2>,
        Status: <MQTTComponentLpLt6Gr2status></MQTTComponentLpLt6Gr2status>,
      },
      {
        sdplp: <Author name="Grouping 3" email="Ruangan L603" />,
        Start: <MQTTComponentLpLt6Gr3></MQTTComponentLpLt6Gr3>,
        Status: <MQTTComponentLpLt6Gr3status></MQTTComponentLpLt6Gr3status>,
      },
      {
        sdplp: <Author name="Grouping 4" email="Ruangan L604" />,
        Start: <MQTTComponentLpLt6Gr4></MQTTComponentLpLt6Gr4>,
        Status: <MQTTComponentLpLt6Gr4status></MQTTComponentLpLt6Gr4status>,
      },
      {
        sdplp: <Author name="Grouping 5" email="Ruangan L605" />,
        Start: <MQTTComponentLpLt6Gr5></MQTTComponentLpLt6Gr5>,
        Status: <MQTTComponentLpLt6Gr5status></MQTTComponentLpLt6Gr5status>,
      },
      {
        sdplp: <Author name="Grouping 6" email="Ruangan L606, L607, L608, L609" />,
        Start: <MQTTComponentLpLt6Gr6></MQTTComponentLpLt6Gr6>,
        Status: <MQTTComponentLpLt6Gr6status></MQTTComponentLpLt6Gr6status>,
      },
      {
        sdplp: <Author name="Grouping 7" email="Ruangan L610" />,
        Start: <MQTTComponentLpLt6Gr7></MQTTComponentLpLt6Gr7>,
        Status: <MQTTComponentLpLt6Gr7status></MQTTComponentLpLt6Gr7status>,
      },
      {
        sdplp: <Author name="Grouping 8" email="Ruangan L611" />,
        Start: <MQTTComponentLpLt6Gr8></MQTTComponentLpLt6Gr8>,
        Status: <MQTTComponentLpLt6Gr8status></MQTTComponentLpLt6Gr8status>,
      },
      {
        sdplp: <Author name="Grouping 9" email="Ruangan L612, L613, L614" />,
        Start: <MQTTComponentLpLt6Gr9></MQTTComponentLpLt6Gr9>,
        Status: <MQTTComponentLpLt6Gr9status></MQTTComponentLpLt6Gr9status>,
      },
      {
        sdplp: <Author name="Grouping 10" email="Ruangan L615, L616, L617" />,
        Start: <MQTTComponentLpLt6Gr10></MQTTComponentLpLt6Gr10>,
        Status: <MQTTComponentLpLt6Gr10status></MQTTComponentLpLt6Gr10status>,
      },
      {
        sdplp: <Author name="Grouping 11" email="Ruangan L618, L619, L620" />,
        Start: <MQTTComponentLpLt6Gr11></MQTTComponentLpLt6Gr11>,
        Status: <MQTTComponentLpLt6Gr11status></MQTTComponentLpLt6Gr11status>,
      },
      {
        sdplp: <Author name="Grouping 12" email="Ruangan L621, L622, L623" />,
        Start: <MQTTComponentLpLt6Gr12></MQTTComponentLpLt6Gr12>,
        Status: <MQTTComponentLpLt6Gr12status></MQTTComponentLpLt6Gr12status>,
      },
      {
        sdplp: <Author name="Grouping 13" email="Ruangan L624, L625, L626" />,
        Start: <MQTTComponentLpLt6Gr13></MQTTComponentLpLt6Gr13>,
        Status: <MQTTComponentLpLt6Gr13status></MQTTComponentLpLt6Gr13status>,
      },
      {
        sdplp: <Author name="Grouping 14" email="Ruangan L627, L628, L629, L630" />,
        Start: <MQTTComponentLpLt6Gr14></MQTTComponentLpLt6Gr14>,
        Status: <MQTTComponentLpLt6Gr14status></MQTTComponentLpLt6Gr14status>,
      },
      {
        sdplp: <Author name="Grouping 15" email="Ruangan L631" />,
        Start: <MQTTComponentLpLt6Gr15></MQTTComponentLpLt6Gr15>,
        Status: <MQTTComponentLpLt6Gr15status></MQTTComponentLpLt6Gr15status>,
      },
      {
        sdplp: <Author name="Grouping 16" email="Ruangan L632" />,
        Start: <MQTTComponentLpLt6Gr16></MQTTComponentLpLt6Gr16>,
        Status: <MQTTComponentLpLt6Gr16status></MQTTComponentLpLt6Gr16status>,
      },
      {
        sdplp: <Author name="Grouping 17" email="Ruangan L633" />,
        Start: <MQTTComponentLpLt6Gr17></MQTTComponentLpLt6Gr17>,
        Status: <MQTTComponentLpLt6Gr17status></MQTTComponentLpLt6Gr17status>,
      },
      {
        sdplp: <Author name="Grouping 18" email="Ruangan L634" />,
        Start: <MQTTComponentLpLt6Gr18></MQTTComponentLpLt6Gr18>,
        Status: <MQTTComponentLpLt6Gr18status></MQTTComponentLpLt6Gr18status>,
      },
      {
        sdplp: <Author name="Grouping 19" email="Ruangan L635" />,
        Start: <MQTTComponentLpLt6Gr19></MQTTComponentLpLt6Gr19>,
        Status: <MQTTComponentLpLt6Gr19status></MQTTComponentLpLt6Gr19status>,
      },
      {
        sdplp: <Author name="Grouping 20" email="Ruangan L636" />,
        Start: <MQTTComponentLpLt6Gr20></MQTTComponentLpLt6Gr20>,
        Status: <MQTTComponentLpLt6Gr20status></MQTTComponentLpLt6Gr20status>,
      },
      {
        sdplp: <Author name="Grouping 21" email="Ruangan L636" />,
        Start: <MQTTComponentLpLt6Gr21></MQTTComponentLpLt6Gr21>,
        Status: <MQTTComponentLpLt6Gr21status></MQTTComponentLpLt6Gr21status>,
      },
      {
        sdplp: <Author name="Grouping 22" email="Ruangan L636" />,
        Start: <MQTTComponentLpLt6Gr22></MQTTComponentLpLt6Gr22>,
        Status: <MQTTComponentLpLt6Gr22status></MQTTComponentLpLt6Gr22status>,
      },
      {
        sdplp: <Author name="Grouping 23" email="Ruangan L636" />,
        Start: <MQTTComponentLpLt6Gr23></MQTTComponentLpLt6Gr23>,
        Status: <MQTTComponentLpLt6Gr23status></MQTTComponentLpLt6Gr23status>,
      },
    ],
  };
}
