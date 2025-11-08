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
import MQTTComponentLpLt2Gr1 from "layouts/MQTTComponentLpLt2Gr1";
import MQTTComponentLpLt2Gr1status from "layouts/MQTTComponentLpLt2Gr1status";
import MQTTComponentLpLt2Gr2 from "layouts/MQTTComponentLpLt2Gr2";
import MQTTComponentLpLt2Gr2status from "layouts/MQTTComponentLpLt2Gr2status";
import MQTTComponentLpLt2Gr3 from "layouts/MQTTComponentLpLt2Gr3";
import MQTTComponentLpLt2Gr3status from "layouts/MQTTComponentLpLt2Gr3status";
import MQTTComponentLpLt2Gr4 from "layouts/MQTTComponentLpLt2Gr4";
import MQTTComponentLpLt2Gr4status from "layouts/MQTTComponentLpLt2Gr4status";
import MQTTComponentLpLt2Gr5 from "layouts/MQTTComponentLpLt2Gr5";
import MQTTComponentLpLt2Gr5status from "layouts/MQTTComponentLpLt2Gr5status";
import MQTTComponentLpLt2Gr6 from "layouts/MQTTComponentLpLt2Gr6";
import MQTTComponentLpLt2Gr6status from "layouts/MQTTComponentLpLt2Gr6status";
import MQTTComponentLpLt2Gr7 from "layouts/MQTTComponentLpLt2Gr7";
import MQTTComponentLpLt2Gr7status from "layouts/MQTTComponentLpLt2Gr7status";
import MQTTComponentLpLt2Gr8 from "layouts/MQTTComponentLpLt2Gr8";
import MQTTComponentLpLt2Gr8status from "layouts/MQTTComponentLpLt2Gr8status";
import MQTTComponentLpLt2Gr9 from "layouts/MQTTComponentLpLt2Gr9";
import MQTTComponentLpLt2Gr9status from "layouts/MQTTComponentLpLt2Gr9status";
import MQTTComponentLpLt2Gr10 from "layouts/MQTTComponentLpLt2Gr10";
import MQTTComponentLpLt2Gr10status from "layouts/MQTTComponentLpLt2Gr10status";
import MQTTComponentLpLt2Gr11 from "layouts/MQTTComponentLpLt2Gr11";
import MQTTComponentLpLt2Gr11status from "layouts/MQTTComponentLpLt2Gr11status";
import MQTTComponentLpLt2Gr12 from "layouts/MQTTComponentLpLt2Gr12";
import MQTTComponentLpLt2Gr12status from "layouts/MQTTComponentLpLt2Gr12status";
import MQTTComponentLpLt2Gr13 from "layouts/MQTTComponentLpLt2Gr13";
import MQTTComponentLpLt2Gr13status from "layouts/MQTTComponentLpLt2Gr13status";
import MQTTComponentLpLt2Gr14 from "layouts/MQTTComponentLpLt2Gr14";
import MQTTComponentLpLt2Gr14status from "layouts/MQTTComponentLpLt2Gr14status";
import MQTTComponentLpLt2Gr15 from "layouts/MQTTComponentLpLt2Gr15";
import MQTTComponentLpLt2Gr15status from "layouts/MQTTComponentLpLt2Gr15status";
import MQTTComponentLpLt2Gr16 from "layouts/MQTTComponentLpLt2Gr16";
import MQTTComponentLpLt2Gr16status from "layouts/MQTTComponentLpLt2Gr16status";
import MQTTComponentLpLt2Gr17 from "layouts/MQTTComponentLpLt2Gr17";
import MQTTComponentLpLt2Gr17status from "layouts/MQTTComponentLpLt2Gr17status";
import MQTTComponentLpLt2Gr18 from "layouts/MQTTComponentLpLt2Gr18";
import MQTTComponentLpLt2Gr18status from "layouts/MQTTComponentLpLt2Gr18status";
import MQTTComponentLpLt2Gr19 from "layouts/MQTTComponentLpLt2Gr19";
import MQTTComponentLpLt2Gr19status from "layouts/MQTTComponentLpLt2Gr19status";
import MQTTComponentLpLt2Gr20 from "layouts/MQTTComponentLpLt2Gr20";
import MQTTComponentLpLt2Gr20status from "layouts/MQTTComponentLpLt2Gr20status";

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
        sdplp: <Author name="Grouping 1" email="Ruangan L201" />,
        Start: <MQTTComponentLpLt2Gr1></MQTTComponentLpLt2Gr1>,
        Status: <MQTTComponentLpLt2Gr1status></MQTTComponentLpLt2Gr1status>,
      },
      {
        sdplp: <Author name="Grouping 2" email="Ruangan L202" />,
        Start: <MQTTComponentLpLt2Gr2></MQTTComponentLpLt2Gr2>,
        Status: <MQTTComponentLpLt2Gr2status></MQTTComponentLpLt2Gr2status>,
      },
      {
        sdplp: <Author name="Grouping 3" email="Ruangan L203" />,
        Start: <MQTTComponentLpLt2Gr3></MQTTComponentLpLt2Gr3>,
        Status: <MQTTComponentLpLt2Gr3status></MQTTComponentLpLt2Gr3status>,
      },
      {
        sdplp: <Author name="Grouping 4" email="Ruangan L204, L205, L206, L207" />,
        Start: <MQTTComponentLpLt2Gr4></MQTTComponentLpLt2Gr4>,
        Status: <MQTTComponentLpLt2Gr4status></MQTTComponentLpLt2Gr4status>,
      },
      {
        sdplp: <Author name="Grouping 5" email="Ruangan L208" />,
        Start: <MQTTComponentLpLt2Gr5></MQTTComponentLpLt2Gr5>,
        Status: <MQTTComponentLpLt2Gr5status></MQTTComponentLpLt2Gr5status>,
      },
      {
        sdplp: <Author name="Grouping 6" email="Ruangan L209" />,
        Start: <MQTTComponentLpLt2Gr6></MQTTComponentLpLt2Gr6>,
        Status: <MQTTComponentLpLt2Gr6status></MQTTComponentLpLt2Gr6status>,
      },
      {
        sdplp: <Author name="Grouping 7" email="Ruangan L210, L211, L212" />,
        Start: <MQTTComponentLpLt2Gr7></MQTTComponentLpLt2Gr7>,
        Status: <MQTTComponentLpLt2Gr7status></MQTTComponentLpLt2Gr7status>,
      },
      {
        sdplp: <Author name="Grouping 8" email="Ruangan L213" />,
        Start: <MQTTComponentLpLt2Gr8></MQTTComponentLpLt2Gr8>,
        Status: <MQTTComponentLpLt2Gr8status></MQTTComponentLpLt2Gr8status>,
      },
      {
        sdplp: <Author name="Grouping 9" email="Ruangan L214" />,
        Start: <MQTTComponentLpLt2Gr9></MQTTComponentLpLt2Gr9>,
        Status: <MQTTComponentLpLt2Gr9status></MQTTComponentLpLt2Gr9status>,
      },
      {
        sdplp: <Author name="Grouping 10" email="Ruangan L215" />,
        Start: <MQTTComponentLpLt2Gr10></MQTTComponentLpLt2Gr10>,
        Status: <MQTTComponentLpLt2Gr10status></MQTTComponentLpLt2Gr10status>,
      },
      {
        sdplp: <Author name="Grouping 11" email="Ruangan L216" />,
        Start: <MQTTComponentLpLt2Gr11></MQTTComponentLpLt2Gr11>,
        Status: <MQTTComponentLpLt2Gr11status></MQTTComponentLpLt2Gr11status>,
      },
      {
        sdplp: <Author name="Grouping 12" email="Ruangan L217, L218, L219, L220" />,
        Start: <MQTTComponentLpLt2Gr12></MQTTComponentLpLt2Gr12>,
        Status: <MQTTComponentLpLt2Gr12status></MQTTComponentLpLt2Gr12status>,
      },
      {
        sdplp: <Author name="Grouping 13" email="Ruangan L221" />,
        Start: <MQTTComponentLpLt2Gr13></MQTTComponentLpLt2Gr13>,
        Status: <MQTTComponentLpLt2Gr13status></MQTTComponentLpLt2Gr13status>,
      },
      {
        sdplp: <Author name="Grouping 14" email="Ruangan L222" />,
        Start: <MQTTComponentLpLt2Gr14></MQTTComponentLpLt2Gr14>,
        Status: <MQTTComponentLpLt2Gr14status></MQTTComponentLpLt2Gr14status>,
      },
      {
        sdplp: <Author name="Grouping 15" email="Ruangan L223, L224, L225" />,
        Start: <MQTTComponentLpLt2Gr15></MQTTComponentLpLt2Gr15>,
        Status: <MQTTComponentLpLt2Gr15status></MQTTComponentLpLt2Gr15status>,
      },
      {
        sdplp: <Author name="Grouping 16" email="Ruangan L226" />,
        Start: <MQTTComponentLpLt2Gr16></MQTTComponentLpLt2Gr16>,
        Status: <MQTTComponentLpLt2Gr16status></MQTTComponentLpLt2Gr16status>,
      },
      {
        sdplp: <Author name="Grouping 17" email="Ruangan L227" />,
        Start: <MQTTComponentLpLt2Gr17></MQTTComponentLpLt2Gr17>,
        Status: <MQTTComponentLpLt2Gr17status></MQTTComponentLpLt2Gr17status>,
      },
      {
        sdplp: <Author name="Grouping 18" email="Ruangan L228" />,
        Start: <MQTTComponentLpLt2Gr18></MQTTComponentLpLt2Gr18>,
        Status: <MQTTComponentLpLt2Gr18status></MQTTComponentLpLt2Gr18status>,
      },
      {
        sdplp: <Author name="Grouping 19" email="Ruangan L228" />,
        Start: <MQTTComponentLpLt2Gr19></MQTTComponentLpLt2Gr19>,
        Status: <MQTTComponentLpLt2Gr19status></MQTTComponentLpLt2Gr19status>,
      },
      {
        sdplp: <Author name="Grouping 20" email="Ruangan L228" />,
        Start: <MQTTComponentLpLt2Gr20></MQTTComponentLpLt2Gr20>,
        Status: <MQTTComponentLpLt2Gr20status></MQTTComponentLpLt2Gr20status>,
      },
    ],
  };
}
