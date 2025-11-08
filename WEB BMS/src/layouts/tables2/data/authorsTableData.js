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
import MQTTComponentLpLt1Gr1 from "layouts/MQTTComponentLpLt1Gr1";
import MQTTComponentLpLt1Gr1status from "layouts/MQTTComponentLpLt1Gr1status";
import MQTTComponentLpLt1Gr2 from "layouts/MQTTComponentLpLt1Gr2";
import MQTTComponentLpLt1Gr2status from "layouts/MQTTComponentLpLt1Gr2status";
import MQTTComponentLpLt1Gr3 from "layouts/MQTTComponentLpLt1Gr3";
import MQTTComponentLpLt1Gr3status from "layouts/MQTTComponentLpLt1Gr3status";
import MQTTComponentLpLt1Gr4 from "layouts/MQTTComponentLpLt1Gr4";
import MQTTComponentLpLt1Gr4status from "layouts/MQTTComponentLpLt1Gr4status";
import MQTTComponentLpLt1Gr5 from "layouts/MQTTComponentLpLt1Gr5";
import MQTTComponentLpLt1Gr5status from "layouts/MQTTComponentLpLt1Gr5status";
import MQTTComponentLpLt1Gr6 from "layouts/MQTTComponentLpLt1Gr6";
import MQTTComponentLpLt1Gr6status from "layouts/MQTTComponentLpLt1Gr6status";
import MQTTComponentLpLt1Gr7 from "layouts/MQTTComponentLpLt1Gr7";
import MQTTComponentLpLt1Gr7status from "layouts/MQTTComponentLpLt1Gr7status";
import MQTTComponentLpLt1Gr8 from "layouts/MQTTComponentLpLt1Gr8";
import MQTTComponentLpLt1Gr8status from "layouts/MQTTComponentLpLt1Gr8status";
import MQTTComponentLpLt1Gr9 from "layouts/MQTTComponentLpLt1Gr9";
import MQTTComponentLpLt1Gr9status from "layouts/MQTTComponentLpLt1Gr9status";
import MQTTComponentLpLt1Gr10 from "layouts/MQTTComponentLpLt1Gr10";
import MQTTComponentLpLt1Gr10status from "layouts/MQTTComponentLpLt1Gr10status";
import MQTTComponentLpLt1Gr11 from "layouts/MQTTComponentLpLt1Gr11";
import MQTTComponentLpLt1Gr11status from "layouts/MQTTComponentLpLt1Gr11status";
import MQTTComponentLpLt1Gr12 from "layouts/MQTTComponentLpLt1Gr12";
import MQTTComponentLpLt1Gr12status from "layouts/MQTTComponentLpLt1Gr12status";
import MQTTComponentLpLt1Gr13 from "layouts/MQTTComponentLpLt1Gr13";
import MQTTComponentLpLt1Gr13status from "layouts/MQTTComponentLpLt1Gr13status";
import MQTTComponentLpLt1Gr14 from "layouts/MQTTComponentLpLt1Gr14";
import MQTTComponentLpLt1Gr14status from "layouts/MQTTComponentLpLt1Gr14status";

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
        sdplp: <Author name="Grouping 1" email="Ruangan L101" />,
        Start: <MQTTComponentLpLt1Gr1></MQTTComponentLpLt1Gr1>,
        Status: <MQTTComponentLpLt1Gr1status></MQTTComponentLpLt1Gr1status>,
      },
      {
        sdplp: <Author name="Grouping 2" email="Ruangan L102" />,
        Start: <MQTTComponentLpLt1Gr2></MQTTComponentLpLt1Gr2>,
        Status: <MQTTComponentLpLt1Gr2status></MQTTComponentLpLt1Gr2status>,
      },
      {
        sdplp: <Author name="Grouping 3" email="Ruangan L102" />,
        Start: <MQTTComponentLpLt1Gr3></MQTTComponentLpLt1Gr3>,
        Status: <MQTTComponentLpLt1Gr3status></MQTTComponentLpLt1Gr3status>,
      },
      {
        sdplp: <Author name="Grouping 4" email="Ruangan L103, L104, L105, L106" />,
        Start: <MQTTComponentLpLt1Gr4></MQTTComponentLpLt1Gr4>,
        Status: <MQTTComponentLpLt1Gr4status></MQTTComponentLpLt1Gr4status>,
      },
      {
        sdplp: <Author name="Grouping 5" email="Ruangan L107" />,
        Start: <MQTTComponentLpLt1Gr5></MQTTComponentLpLt1Gr5>,
        Status: <MQTTComponentLpLt1Gr5status></MQTTComponentLpLt1Gr5status>,
      },
      {
        sdplp: <Author name="Grouping 6" email="Ruangan L108" />,
        Start: <MQTTComponentLpLt1Gr6></MQTTComponentLpLt1Gr6>,
        Status: <MQTTComponentLpLt1Gr6status></MQTTComponentLpLt1Gr6status>,
      },
      {
        sdplp: <Author name="Grouping 7" email="Ruangan L109" />,
        Start: <MQTTComponentLpLt1Gr7></MQTTComponentLpLt1Gr7>,
        Status: <MQTTComponentLpLt1Gr7status></MQTTComponentLpLt1Gr7status>,
      },
      {
        sdplp: <Author name="Grouping 8" email="Ruangan L110, L111" />,
        Start: <MQTTComponentLpLt1Gr8></MQTTComponentLpLt1Gr8>,
        Status: <MQTTComponentLpLt1Gr8status></MQTTComponentLpLt1Gr8status>,
      },
      {
        sdplp: <Author name="Grouping 9" email="Ruangan L112" />,
        Start: <MQTTComponentLpLt1Gr9></MQTTComponentLpLt1Gr9>,
        Status: <MQTTComponentLpLt1Gr9status></MQTTComponentLpLt1Gr9status>,
      },
      {
        sdplp: <Author name="Grouping 10" email="Ruangan L113-L119" />,
        Start: <MQTTComponentLpLt1Gr10></MQTTComponentLpLt1Gr10>,
        Status: <MQTTComponentLpLt1Gr10status></MQTTComponentLpLt1Gr10status>,
      },
      {
        sdplp: <Author name="Grouping 11" email="Ruangan L120-L123" />,
        Start: <MQTTComponentLpLt1Gr11></MQTTComponentLpLt1Gr11>,
        Status: <MQTTComponentLpLt1Gr11status></MQTTComponentLpLt1Gr11status>,
      },
      {
        sdplp: <Author name="Grouping 12" email="Ruangan L124" />,
        Start: <MQTTComponentLpLt1Gr12></MQTTComponentLpLt1Gr12>,
        Status: <MQTTComponentLpLt1Gr12status></MQTTComponentLpLt1Gr12status>,
      },
      {
        sdplp: <Author name="Grouping 13" email="Ruangan L124" />,
        Start: <MQTTComponentLpLt1Gr13></MQTTComponentLpLt1Gr13>,
        Status: <MQTTComponentLpLt1Gr13status></MQTTComponentLpLt1Gr13status>,
      },
      {
        sdplp: <Author name="Grouping 14" email="Ruangan L124" />,
        Start: <MQTTComponentLpLt1Gr14></MQTTComponentLpLt1Gr14>,
        Status: <MQTTComponentLpLt1Gr14status></MQTTComponentLpLt1Gr14status>,
      },
    ],
  };
}
