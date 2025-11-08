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
import MQTTComponentLpLt4Gr1 from "layouts/MQTTComponentLpLt4Gr1";
import MQTTComponentLpLt4Gr1status from "layouts/MQTTComponentLpLt4Gr1status";
import MQTTComponentLpLt4Gr2 from "layouts/MQTTComponentLpLt4Gr2";
import MQTTComponentLpLt4Gr2status from "layouts/MQTTComponentLpLt4Gr2status";
import MQTTComponentLpLt4Gr3 from "layouts/MQTTComponentLpLt4Gr3";
import MQTTComponentLpLt4Gr3status from "layouts/MQTTComponentLpLt4Gr3status";
import MQTTComponentLpLt4Gr4 from "layouts/MQTTComponentLpLt4Gr4";
import MQTTComponentLpLt4Gr4status from "layouts/MQTTComponentLpLt4Gr4status";
import MQTTComponentLpLt4Gr5 from "layouts/MQTTComponentLpLt4Gr5";
import MQTTComponentLpLt4Gr5status from "layouts/MQTTComponentLpLt4Gr5status";
import MQTTComponentLpLt4Gr6 from "layouts/MQTTComponentLpLt4Gr6";
import MQTTComponentLpLt4Gr6status from "layouts/MQTTComponentLpLt4Gr6status";
import MQTTComponentLpLt4Gr7 from "layouts/MQTTComponentLpLt4Gr7";
import MQTTComponentLpLt4Gr7status from "layouts/MQTTComponentLpLt4Gr7status";
import MQTTComponentLpLt4Gr8 from "layouts/MQTTComponentLpLt4Gr8";
import MQTTComponentLpLt4Gr8status from "layouts/MQTTComponentLpLt4Gr8status";
import MQTTComponentLpLt4Gr9 from "layouts/MQTTComponentLpLt4Gr9";
import MQTTComponentLpLt4Gr9status from "layouts/MQTTComponentLpLt4Gr9status";
import MQTTComponentLpLt4Gr10 from "layouts/MQTTComponentLpLt4Gr10";
import MQTTComponentLpLt4Gr10status from "layouts/MQTTComponentLpLt4Gr10status";
import MQTTComponentLpLt4Gr11 from "layouts/MQTTComponentLpLt4Gr11";
import MQTTComponentLpLt4Gr11status from "layouts/MQTTComponentLpLt4Gr11status";
import MQTTComponentLpLt4Gr12 from "layouts/MQTTComponentLpLt4Gr12";
import MQTTComponentLpLt4Gr12status from "layouts/MQTTComponentLpLt4Gr12status";
import MQTTComponentLpLt4Gr13 from "layouts/MQTTComponentLpLt4Gr13";
import MQTTComponentLpLt4Gr13status from "layouts/MQTTComponentLpLt4Gr13status";
import MQTTComponentLpLt4Gr14 from "layouts/MQTTComponentLpLt4Gr14";
import MQTTComponentLpLt4Gr14status from "layouts/MQTTComponentLpLt4Gr14status";
import MQTTComponentLpLt4Gr15 from "layouts/MQTTComponentLpLt4Gr15";
import MQTTComponentLpLt4Gr15status from "layouts/MQTTComponentLpLt4Gr15status";
import MQTTComponentLpLt4Gr16 from "layouts/MQTTComponentLpLt4Gr16";
import MQTTComponentLpLt4Gr16status from "layouts/MQTTComponentLpLt4Gr16status";
import MQTTComponentLpLt4Gr17 from "layouts/MQTTComponentLpLt4Gr17";
import MQTTComponentLpLt4Gr17status from "layouts/MQTTComponentLpLt4Gr17status";
import MQTTComponentLpLt4Gr18 from "layouts/MQTTComponentLpLt4Gr18";
import MQTTComponentLpLt4Gr18status from "layouts/MQTTComponentLpLt4Gr18status";
import MQTTComponentLpLt4Gr19 from "layouts/MQTTComponentLpLt4Gr19";
import MQTTComponentLpLt4Gr19status from "layouts/MQTTComponentLpLt4Gr19status";
import MQTTComponentLpLt4Gr20 from "layouts/MQTTComponentLpLt4Gr20";
import MQTTComponentLpLt4Gr20status from "layouts/MQTTComponentLpLt4Gr20status";
import MQTTComponentLpLt4Gr21 from "layouts/MQTTComponentLpLt4Gr21";
import MQTTComponentLpLt4Gr21status from "layouts/MQTTComponentLpLt4Gr21status";

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
        sdplp: <Author name="Grouping 1" email="Ruangan L401, L402, L403" />,
        Start: <MQTTComponentLpLt4Gr1></MQTTComponentLpLt4Gr1>,
        Status: <MQTTComponentLpLt4Gr1status></MQTTComponentLpLt4Gr1status>,
      },
      {
        sdplp: <Author name="Grouping 2" email="Ruangan L404, L405, L406" />,
        Start: <MQTTComponentLpLt4Gr2></MQTTComponentLpLt4Gr2>,
        Status: <MQTTComponentLpLt4Gr2status></MQTTComponentLpLt4Gr2status>,
      },
      {
        sdplp: <Author name="Grouping 3" email="Ruangan L407, L408, L409" />,
        Start: <MQTTComponentLpLt4Gr3></MQTTComponentLpLt4Gr3>,
        Status: <MQTTComponentLpLt4Gr3status></MQTTComponentLpLt4Gr3status>,
      },
      {
        sdplp: <Author name="Grouping 4" email="Ruangan L410, L411, L412, L413" />,
        Start: <MQTTComponentLpLt4Gr4></MQTTComponentLpLt4Gr4>,
        Status: <MQTTComponentLpLt4Gr4status></MQTTComponentLpLt4Gr4status>,
      },
      {
        sdplp: <Author name="Grouping 5" email="Ruangan L414" />,
        Start: <MQTTComponentLpLt4Gr5></MQTTComponentLpLt4Gr5>,
        Status: <MQTTComponentLpLt4Gr5status></MQTTComponentLpLt4Gr5status>,
      },
      {
        sdplp: <Author name="Grouping 6" email="Ruangan L415" />,
        Start: <MQTTComponentLpLt4Gr6></MQTTComponentLpLt4Gr6>,
        Status: <MQTTComponentLpLt4Gr6status></MQTTComponentLpLt4Gr6status>,
      },
      {
        sdplp: <Author name="Grouping 7" email="Ruangan L416, L417, L418" />,
        Start: <MQTTComponentLpLt4Gr7></MQTTComponentLpLt4Gr7>,
        Status: <MQTTComponentLpLt4Gr7status></MQTTComponentLpLt4Gr7status>,
      },
      {
        sdplp: <Author name="Grouping 8" email="Ruangan L419, L420, L421" />,
        Start: <MQTTComponentLpLt4Gr8></MQTTComponentLpLt4Gr8>,
        Status: <MQTTComponentLpLt4Gr8status></MQTTComponentLpLt4Gr8status>,
      },
      {
        sdplp: <Author name="Grouping 9" email="Ruangan L422, L423, L424" />,
        Start: <MQTTComponentLpLt4Gr9></MQTTComponentLpLt4Gr9>,
        Status: <MQTTComponentLpLt4Gr9status></MQTTComponentLpLt4Gr9status>,
      },
      {
        sdplp: <Author name="Grouping 10" email="Ruangan L425, L426, L427" />,
        Start: <MQTTComponentLpLt4Gr10></MQTTComponentLpLt4Gr10>,
        Status: <MQTTComponentLpLt4Gr10status></MQTTComponentLpLt4Gr10status>,
      },
      {
        sdplp: <Author name="Grouping 11" email="Ruangan L428, L429, L430" />,
        Start: <MQTTComponentLpLt4Gr11></MQTTComponentLpLt4Gr11>,
        Status: <MQTTComponentLpLt4Gr11status></MQTTComponentLpLt4Gr11status>,
      },
      {
        sdplp: <Author name="Grouping 12" email="Ruangan L431, L432, L433, L434" />,
        Start: <MQTTComponentLpLt4Gr12></MQTTComponentLpLt4Gr12>,
        Status: <MQTTComponentLpLt4Gr12status></MQTTComponentLpLt4Gr12status>,
      },
      {
        sdplp: <Author name="Grouping 13" email="Ruangan L435, L436, L437, L438" />,
        Start: <MQTTComponentLpLt4Gr13></MQTTComponentLpLt4Gr13>,
        Status: <MQTTComponentLpLt4Gr13status></MQTTComponentLpLt4Gr13status>,
      },
      {
        sdplp: <Author name="Grouping 14" email="Ruangan L439" />,
        Start: <MQTTComponentLpLt4Gr14></MQTTComponentLpLt4Gr14>,
        Status: <MQTTComponentLpLt4Gr14status></MQTTComponentLpLt4Gr14status>,
      },
      {
        sdplp: <Author name="Grouping 15" email="Ruangan L440" />,
        Start: <MQTTComponentLpLt4Gr15></MQTTComponentLpLt4Gr15>,
        Status: <MQTTComponentLpLt4Gr15status></MQTTComponentLpLt4Gr15status>,
      },
      {
        sdplp: <Author name="Grouping 16" email="Ruangan L441" />,
        Start: <MQTTComponentLpLt4Gr16></MQTTComponentLpLt4Gr16>,
        Status: <MQTTComponentLpLt4Gr16status></MQTTComponentLpLt4Gr16status>,
      },
      {
        sdplp: <Author name="Grouping 17" email="Ruangan L442, L443, L444, L445" />,
        Start: <MQTTComponentLpLt4Gr17></MQTTComponentLpLt4Gr17>,
        Status: <MQTTComponentLpLt4Gr17status></MQTTComponentLpLt4Gr17status>,
      },
      {
        sdplp: <Author name="Grouping 18" email="Ruangan L446" />,
        Start: <MQTTComponentLpLt4Gr18></MQTTComponentLpLt4Gr18>,
        Status: <MQTTComponentLpLt4Gr18status></MQTTComponentLpLt4Gr18status>,
      },
      {
        sdplp: <Author name="Grouping 19" email="Ruangan L446" />,
        Start: <MQTTComponentLpLt4Gr19></MQTTComponentLpLt4Gr19>,
        Status: <MQTTComponentLpLt4Gr19status></MQTTComponentLpLt4Gr19status>,
      },
      {
        sdplp: <Author name="Grouping 20" email="Ruangan L446" />,
        Start: <MQTTComponentLpLt4Gr20></MQTTComponentLpLt4Gr20>,
        Status: <MQTTComponentLpLt4Gr20status></MQTTComponentLpLt4Gr20status>,
      },
      {
        sdplp: <Author name="Grouping 21" email="Ruangan L446" />,
        Start: <MQTTComponentLpLt4Gr21></MQTTComponentLpLt4Gr21>,
        Status: <MQTTComponentLpLt4Gr21status></MQTTComponentLpLt4Gr21status>,
      },
    ],
  };
}
