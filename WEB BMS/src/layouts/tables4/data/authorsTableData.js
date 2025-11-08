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
import MQTTComponentLpLt3Gr1 from "layouts/MQTTComponentLpLt3Gr1";
import MQTTComponentLpLt3Gr1status from "layouts/MQTTComponentLpLt3Gr1status";
import MQTTComponentLpLt3Gr2 from "layouts/MQTTComponentLpLt3Gr2";
import MQTTComponentLpLt3Gr2status from "layouts/MQTTComponentLpLt3Gr2status";
import MQTTComponentLpLt3Gr3 from "layouts/MQTTComponentLpLt3Gr3";
import MQTTComponentLpLt3Gr3status from "layouts/MQTTComponentLpLt3Gr3status";
import MQTTComponentLpLt3Gr4 from "layouts/MQTTComponentLpLt3Gr4";
import MQTTComponentLpLt3Gr4status from "layouts/MQTTComponentLpLt3Gr4status";
import MQTTComponentLpLt3Gr5 from "layouts/MQTTComponentLpLt3Gr5";
import MQTTComponentLpLt3Gr5status from "layouts/MQTTComponentLpLt3Gr5status";
import MQTTComponentLpLt3Gr6 from "layouts/MQTTComponentLpLt3Gr6";
import MQTTComponentLpLt3Gr6status from "layouts/MQTTComponentLpLt3Gr6status";
import MQTTComponentLpLt3Gr7 from "layouts/MQTTComponentLpLt3Gr7";
import MQTTComponentLpLt3Gr7status from "layouts/MQTTComponentLpLt3Gr7status";
import MQTTComponentLpLt3Gr8 from "layouts/MQTTComponentLpLt3Gr8";
import MQTTComponentLpLt3Gr8status from "layouts/MQTTComponentLpLt3Gr8status";
import MQTTComponentLpLt3Gr9 from "layouts/MQTTComponentLpLt3Gr9";
import MQTTComponentLpLt3Gr9status from "layouts/MQTTComponentLpLt3Gr9status";
import MQTTComponentLpLt3Gr10 from "layouts/MQTTComponentLpLt3Gr10";
import MQTTComponentLpLt3Gr10status from "layouts/MQTTComponentLpLt3Gr10status";
import MQTTComponentLpLt3Gr11 from "layouts/MQTTComponentLpLt3Gr11";
import MQTTComponentLpLt3Gr11status from "layouts/MQTTComponentLpLt3Gr11status";
import MQTTComponentLpLt3Gr12 from "layouts/MQTTComponentLpLt3Gr12";
import MQTTComponentLpLt3Gr12status from "layouts/MQTTComponentLpLt3Gr12status";
import MQTTComponentLpLt3Gr13 from "layouts/MQTTComponentLpLt3Gr13";
import MQTTComponentLpLt3Gr13status from "layouts/MQTTComponentLpLt3Gr13status";
import MQTTComponentLpLt3Gr14 from "layouts/MQTTComponentLpLt3Gr14";
import MQTTComponentLpLt3Gr14status from "layouts/MQTTComponentLpLt3Gr14status";
import MQTTComponentLpLt3Gr15 from "layouts/MQTTComponentLpLt3Gr15";
import MQTTComponentLpLt3Gr15status from "layouts/MQTTComponentLpLt3Gr15status";
import MQTTComponentLpLt3Gr16 from "layouts/MQTTComponentLpLt3Gr16";
import MQTTComponentLpLt3Gr16status from "layouts/MQTTComponentLpLt3Gr16status";
import MQTTComponentLpLt3Gr17 from "layouts/MQTTComponentLpLt3Gr17";
import MQTTComponentLpLt3Gr17status from "layouts/MQTTComponentLpLt3Gr17status";
import MQTTComponentLpLt3Gr18 from "layouts/MQTTComponentLpLt3Gr18";
import MQTTComponentLpLt3Gr18status from "layouts/MQTTComponentLpLt3Gr18status";
import MQTTComponentLpLt3Gr19 from "layouts/MQTTComponentLpLt3Gr19";
import MQTTComponentLpLt3Gr19status from "layouts/MQTTComponentLpLt3Gr19status";
import MQTTComponentLpLt3Gr20 from "layouts/MQTTComponentLpLt3Gr20";
import MQTTComponentLpLt3Gr20status from "layouts/MQTTComponentLpLt3Gr20status";

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
        sdplp: <Author name="Grouping 1" email="Ruangan L301" />,
        Start: <MQTTComponentLpLt3Gr1></MQTTComponentLpLt3Gr1>,
        Status: <MQTTComponentLpLt3Gr1status></MQTTComponentLpLt3Gr1status>,
      },
      {
        sdplp: <Author name="Grouping 2" email="Ruangan L302" />,
        Start: <MQTTComponentLpLt3Gr2></MQTTComponentLpLt3Gr2>,
        Status: <MQTTComponentLpLt3Gr2status></MQTTComponentLpLt3Gr2status>,
      },
      {
        sdplp: <Author name="Grouping 3" email="Ruangan L303" />,
        Start: <MQTTComponentLpLt3Gr3></MQTTComponentLpLt3Gr3>,
        Status: <MQTTComponentLpLt3Gr3status></MQTTComponentLpLt3Gr3status>,
      },
      {
        sdplp: <Author name="Grouping 4" email="Ruangan L304, L305, L306, L307" />,
        Start: <MQTTComponentLpLt3Gr4></MQTTComponentLpLt3Gr4>,
        Status: <MQTTComponentLpLt3Gr4status></MQTTComponentLpLt3Gr4status>,
      },
      {
        sdplp: <Author name="Grouping 5" email="Ruangan L308" />,
        Start: <MQTTComponentLpLt3Gr5></MQTTComponentLpLt3Gr5>,
        Status: <MQTTComponentLpLt3Gr5status></MQTTComponentLpLt3Gr5status>,
      },
      {
        sdplp: <Author name="Grouping 6" email="Ruangan L309" />,
        Start: <MQTTComponentLpLt3Gr6></MQTTComponentLpLt3Gr6>,
        Status: <MQTTComponentLpLt3Gr6status></MQTTComponentLpLt3Gr6status>,
      },
      {
        sdplp: <Author name="Grouping 7" email="Ruangan L310, L311, L312" />,
        Start: <MQTTComponentLpLt3Gr7></MQTTComponentLpLt3Gr7>,
        Status: <MQTTComponentLpLt3Gr7status></MQTTComponentLpLt3Gr7status>,
      },
      {
        sdplp: <Author name="Grouping 8" email="Ruangan L313, L314, L315" />,
        Start: <MQTTComponentLpLt3Gr8></MQTTComponentLpLt3Gr8>,
        Status: <MQTTComponentLpLt3Gr8status></MQTTComponentLpLt3Gr8status>,
      },
      {
        sdplp: <Author name="Grouping 9" email="Ruangan L316" />,
        Start: <MQTTComponentLpLt3Gr9></MQTTComponentLpLt3Gr9>,
        Status: <MQTTComponentLpLt3Gr9status></MQTTComponentLpLt3Gr9status>,
      },
      {
        sdplp: <Author name="Grouping 10" email="Ruangan L317, L318, L319" />,
        Start: <MQTTComponentLpLt3Gr10></MQTTComponentLpLt3Gr10>,
        Status: <MQTTComponentLpLt3Gr10status></MQTTComponentLpLt3Gr10status>,
      },
      {
        sdplp: <Author name="Grouping 11" email="Ruangan L320, L321, L322" />,
        Start: <MQTTComponentLpLt3Gr11></MQTTComponentLpLt3Gr11>,
        Status: <MQTTComponentLpLt3Gr11status></MQTTComponentLpLt3Gr11status>,
      },
      {
        sdplp: <Author name="Grouping 12" email="Ruangan L323, L324, L325, L326" />,
        Start: <MQTTComponentLpLt3Gr12></MQTTComponentLpLt3Gr12>,
        Status: <MQTTComponentLpLt3Gr12status></MQTTComponentLpLt3Gr12status>,
      },
      {
        sdplp: <Author name="Grouping 13" email="Ruangan L327" />,
        Start: <MQTTComponentLpLt3Gr13></MQTTComponentLpLt3Gr13>,
        Status: <MQTTComponentLpLt3Gr13status></MQTTComponentLpLt3Gr13status>,
      },
      {
        sdplp: <Author name="Grouping 14" email="Ruangan L328" />,
        Start: <MQTTComponentLpLt3Gr14></MQTTComponentLpLt3Gr14>,
        Status: <MQTTComponentLpLt3Gr14status></MQTTComponentLpLt3Gr14status>,
      },
      {
        sdplp: <Author name="Grouping 15" email="Ruangan L329, L330, L331" />,
        Start: <MQTTComponentLpLt3Gr15></MQTTComponentLpLt3Gr15>,
        Status: <MQTTComponentLpLt3Gr15status></MQTTComponentLpLt3Gr15status>,
      },
      {
        sdplp: <Author name="Grouping 16" email="Ruangan L332" />,
        Start: <MQTTComponentLpLt3Gr16></MQTTComponentLpLt3Gr16>,
        Status: <MQTTComponentLpLt3Gr16status></MQTTComponentLpLt3Gr16status>,
      },
      {
        sdplp: <Author name="Grouping 17" email="Ruangan L333" />,
        Start: <MQTTComponentLpLt3Gr17></MQTTComponentLpLt3Gr17>,
        Status: <MQTTComponentLpLt3Gr17status></MQTTComponentLpLt3Gr17status>,
      },
      {
        sdplp: <Author name="Grouping 18" email="Ruangan L333" />,
        Start: <MQTTComponentLpLt3Gr18></MQTTComponentLpLt3Gr18>,
        Status: <MQTTComponentLpLt3Gr18status></MQTTComponentLpLt3Gr18status>,
      },
      {
        sdplp: <Author name="Grouping 19" email="Ruangan L333" />,
        Start: <MQTTComponentLpLt3Gr19></MQTTComponentLpLt3Gr19>,
        Status: <MQTTComponentLpLt3Gr19status></MQTTComponentLpLt3Gr19status>,
      },
      {
        sdplp: <Author name="Grouping 20" email="Ruangan L333" />,
        Start: <MQTTComponentLpLt3Gr20></MQTTComponentLpLt3Gr20>,
        Status: <MQTTComponentLpLt3Gr20status></MQTTComponentLpLt3Gr20status>,
      },
    ],
  };
}
