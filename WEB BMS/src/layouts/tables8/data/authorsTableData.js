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
import MQTTComponentLpLt7Gr1 from "layouts/MQTTComponentLpLt7Gr1";
import MQTTComponentLpLt7Gr1status from "layouts/MQTTComponentLpLt7Gr1status";
import MQTTComponentLpLt7Gr2 from "layouts/MQTTComponentLpLt7Gr2";
import MQTTComponentLpLt7Gr2status from "layouts/MQTTComponentLpLt7Gr2status";
import MQTTComponentLpLt7Gr3 from "layouts/MQTTComponentLpLt7Gr3";
import MQTTComponentLpLt7Gr3status from "layouts/MQTTComponentLpLt7Gr3status";
import MQTTComponentLpLt7Gr4 from "layouts/MQTTComponentLpLt7Gr4";
import MQTTComponentLpLt7Gr4status from "layouts/MQTTComponentLpLt7Gr4status";
import MQTTComponentLpLt7Gr5 from "layouts/MQTTComponentLpLt7Gr5";
import MQTTComponentLpLt7Gr5status from "layouts/MQTTComponentLpLt7Gr5status";
import MQTTComponentLpLt7Gr6 from "layouts/MQTTComponentLpLt7Gr6";
import MQTTComponentLpLt7Gr6status from "layouts/MQTTComponentLpLt7Gr6status";
import MQTTComponentLpLt7Gr7 from "layouts/MQTTComponentLpLt7Gr7";
import MQTTComponentLpLt7Gr7status from "layouts/MQTTComponentLpLt7Gr7status";
import MQTTComponentLpLt7Gr8 from "layouts/MQTTComponentLpLt7Gr8";
import MQTTComponentLpLt7Gr8status from "layouts/MQTTComponentLpLt7Gr8status";
import MQTTComponentLpLt7Gr9 from "layouts/MQTTComponentLpLt7Gr9";
import MQTTComponentLpLt7Gr9status from "layouts/MQTTComponentLpLt7Gr9status";
import MQTTComponentLpLt7Gr10 from "layouts/MQTTComponentLpLt7Gr10";
import MQTTComponentLpLt7Gr10status from "layouts/MQTTComponentLpLt7Gr10status";
import MQTTComponentLpLt7Gr11 from "layouts/MQTTComponentLpLt7Gr11";
import MQTTComponentLpLt7Gr11status from "layouts/MQTTComponentLpLt7Gr11status";
import MQTTComponentLpLt7Gr12 from "layouts/MQTTComponentLpLt7Gr12";
import MQTTComponentLpLt7Gr12status from "layouts/MQTTComponentLpLt7Gr12status";
import MQTTComponentLpLt7Gr13 from "layouts/MQTTComponentLpLt7Gr13";
import MQTTComponentLpLt7Gr13status from "layouts/MQTTComponentLpLt7Gr13status";
import MQTTComponentLpLt7Gr14 from "layouts/MQTTComponentLpLt7Gr14";
import MQTTComponentLpLt7Gr14status from "layouts/MQTTComponentLpLt7Gr14status";
import MQTTComponentLpLt7Gr15 from "layouts/MQTTComponentLpLt7Gr15";
import MQTTComponentLpLt7Gr15status from "layouts/MQTTComponentLpLt7Gr15status";
import MQTTComponentLpLt7Gr16 from "layouts/MQTTComponentLpLt7Gr16";
import MQTTComponentLpLt7Gr16status from "layouts/MQTTComponentLpLt7Gr16status";
import MQTTComponentLpLt7Gr17 from "layouts/MQTTComponentLpLt7Gr17";
import MQTTComponentLpLt7Gr17status from "layouts/MQTTComponentLpLt7Gr17status";
import MQTTComponentLpLt7Gr18 from "layouts/MQTTComponentLpLt7Gr18";
import MQTTComponentLpLt7Gr18status from "layouts/MQTTComponentLpLt7Gr18status";
import MQTTComponentLpLt7Gr19 from "layouts/MQTTComponentLpLt7Gr19";
import MQTTComponentLpLt7Gr19status from "layouts/MQTTComponentLpLt7Gr19status";

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
        sdplp: <Author name="Grouping 1" email="Ruangan L701, L702, L703" />,
        Start: <MQTTComponentLpLt7Gr1></MQTTComponentLpLt7Gr1>,
        Status: <MQTTComponentLpLt7Gr1status></MQTTComponentLpLt7Gr1status>,
      },
      {
        sdplp: <Author name="Grouping 2" email="Ruangan L704, L705, L706" />,
        Start: <MQTTComponentLpLt7Gr2></MQTTComponentLpLt7Gr2>,
        Status: <MQTTComponentLpLt7Gr2status></MQTTComponentLpLt7Gr2status>,
      },
      {
        sdplp: <Author name="Grouping 3" email="Ruangan L707, L708, L709" />,
        Start: <MQTTComponentLpLt7Gr3></MQTTComponentLpLt7Gr3>,
        Status: <MQTTComponentLpLt7Gr3status></MQTTComponentLpLt7Gr3status>,
      },
      {
        sdplp: <Author name="Grouping 4" email="Ruangan L710, L711, L712, L713" />,
        Start: <MQTTComponentLpLt7Gr4></MQTTComponentLpLt7Gr4>,
        Status: <MQTTComponentLpLt7Gr4status></MQTTComponentLpLt7Gr4status>,
      },
      {
        sdplp: <Author name="Grouping 5" email="Ruangan L714" />,
        Start: <MQTTComponentLpLt7Gr5></MQTTComponentLpLt7Gr5>,
        Status: <MQTTComponentLpLt7Gr5status></MQTTComponentLpLt7Gr5status>,
      },
      {
        sdplp: <Author name="Grouping 6" email="Ruangan L715" />,
        Start: <MQTTComponentLpLt7Gr6></MQTTComponentLpLt7Gr6>,
        Status: <MQTTComponentLpLt7Gr6status></MQTTComponentLpLt7Gr6status>,
      },
      {
        sdplp: <Author name="Grouping 7" email="Ruangan L716, L717, L718" />,
        Start: <MQTTComponentLpLt7Gr7></MQTTComponentLpLt7Gr7>,
        Status: <MQTTComponentLpLt7Gr7status></MQTTComponentLpLt7Gr7status>,
      },
      {
        sdplp: <Author name="Grouping 8" email="Ruangan L719" />,
        Start: <MQTTComponentLpLt7Gr8></MQTTComponentLpLt7Gr8>,
        Status: <MQTTComponentLpLt7Gr8status></MQTTComponentLpLt7Gr8status>,
      },
      {
        sdplp: <Author name="Grouping 9" email="Ruangan L720" />,
        Start: <MQTTComponentLpLt7Gr9></MQTTComponentLpLt7Gr9>,
        Status: <MQTTComponentLpLt7Gr9status></MQTTComponentLpLt7Gr9status>,
      },
      {
        sdplp: <Author name="Grouping 10" email="Ruangan L721" />,
        Start: <MQTTComponentLpLt7Gr10></MQTTComponentLpLt7Gr10>,
        Status: <MQTTComponentLpLt7Gr10status></MQTTComponentLpLt7Gr10status>,
      },
      {
        sdplp: <Author name="Grouping 11" email="Ruangan L722, L723, L724, L725" />,
        Start: <MQTTComponentLpLt7Gr11></MQTTComponentLpLt7Gr11>,
        Status: <MQTTComponentLpLt7Gr11status></MQTTComponentLpLt7Gr11status>,
      },
      {
        sdplp: <Author name="Grouping 12" email="Ruangan L726" />,
        Start: <MQTTComponentLpLt7Gr12></MQTTComponentLpLt7Gr12>,
        Status: <MQTTComponentLpLt7Gr12status></MQTTComponentLpLt7Gr12status>,
      },
      {
        sdplp: <Author name="Grouping 13" email="Ruangan L727" />,
        Start: <MQTTComponentLpLt7Gr13></MQTTComponentLpLt7Gr13>,
        Status: <MQTTComponentLpLt7Gr13status></MQTTComponentLpLt7Gr13status>,
      },
      {
        sdplp: <Author name="Grouping 14" email="Ruangan L728" />,
        Start: <MQTTComponentLpLt7Gr14></MQTTComponentLpLt7Gr14>,
        Status: <MQTTComponentLpLt7Gr14status></MQTTComponentLpLt7Gr14status>,
      },
      {
        sdplp: <Author name="Grouping 15" email="Ruangan L729" />,
        Start: <MQTTComponentLpLt7Gr15></MQTTComponentLpLt7Gr15>,
        Status: <MQTTComponentLpLt7Gr15status></MQTTComponentLpLt7Gr15status>,
      },
      {
        sdplp: <Author name="Grouping 16" email="Ruangan L730" />,
        Start: <MQTTComponentLpLt7Gr16></MQTTComponentLpLt7Gr16>,
        Status: <MQTTComponentLpLt7Gr16status></MQTTComponentLpLt7Gr16status>,
      },
      {
        sdplp: <Author name="Grouping 17" email="Ruangan L730" />,
        Start: <MQTTComponentLpLt7Gr17></MQTTComponentLpLt7Gr17>,
        Status: <MQTTComponentLpLt7Gr17status></MQTTComponentLpLt7Gr17status>,
      },
      {
        sdplp: <Author name="Grouping 18" email="Ruangan L730" />,
        Start: <MQTTComponentLpLt7Gr18></MQTTComponentLpLt7Gr18>,
        Status: <MQTTComponentLpLt7Gr18status></MQTTComponentLpLt7Gr18status>,
      },
      {
        sdplp: <Author name="Grouping 19" email="Ruangan L730" />,
        Start: <MQTTComponentLpLt7Gr19></MQTTComponentLpLt7Gr19>,
        Status: <MQTTComponentLpLt7Gr19status></MQTTComponentLpLt7Gr19status>,
      },
    ],
  };
}
