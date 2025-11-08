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
import MQTTComponentLpLtGGr1 from "layouts/MQTTComponentLpLtGGr1";
import MQTTComponentLpLtGGr1status from "layouts/MQTTComponentLpLtGGr1status";
import MQTTComponentLpLtGGr2 from "layouts/MQTTComponentLpLtGGr2";
import MQTTComponentLpLtGGr2status from "layouts/MQTTComponentLpLtGGr2status";
import MQTTComponentLpLtGGr3 from "layouts/MQTTComponentLpLtGGr3";
import MQTTComponentLpLtGGr3status from "layouts/MQTTComponentLpLtGGr3status";
import MQTTComponentLpLtGGr4 from "layouts/MQTTComponentLpLtGGr4";
import MQTTComponentLpLtGGr4status from "layouts/MQTTComponentLpLtGGr4status";
import MQTTComponentLpLtGGr5 from "layouts/MQTTComponentLpLtGGr5";
import MQTTComponentLpLtGGr5status from "layouts/MQTTComponentLpLtGGr5status";
import MQTTComponentLpLtGGr6 from "layouts/MQTTComponentLpLtGGr6";
import MQTTComponentLpLtGGr6status from "layouts/MQTTComponentLpLtGGr6status";
import MQTTComponentLpLtGGr7 from "layouts/MQTTComponentLpLtGGr7";
import MQTTComponentLpLtGGr7status from "layouts/MQTTComponentLpLtGGr7status";
import MQTTComponentLpLtGGr8 from "layouts/MQTTComponentLpLtGGr8";
import MQTTComponentLpLtGGr8status from "layouts/MQTTComponentLpLtGGr8status";
import MQTTComponentLpLtGGr9 from "layouts/MQTTComponentLpLtGGr9";
import MQTTComponentLpLtGGr9status from "layouts/MQTTComponentLpLtGGr9status";
import MQTTComponentLpLtGGr10 from "layouts/MQTTComponentLpLtGGr10";
import MQTTComponentLpLtGGr10status from "layouts/MQTTComponentLpLtGGr10status";

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
        sdplp: <Author name="Grouping 1" email="Ruangan LG01, LG02, LG03" />,
        Start: <MQTTComponentLpLtGGr1></MQTTComponentLpLtGGr1>,
        Status: <MQTTComponentLpLtGGr1status></MQTTComponentLpLtGGr1status>,
      },
      {
        sdplp: <Author name="Grouping 2" email="Ruangan LG03" />,
        Start: <MQTTComponentLpLtGGr2></MQTTComponentLpLtGGr2>,
        Status: <MQTTComponentLpLtGGr2status></MQTTComponentLpLtGGr2status>,
      },
      {
        sdplp: <Author name="Grouping 3" email="Ruangan LG03" />,
        Start: <MQTTComponentLpLtGGr3></MQTTComponentLpLtGGr3>,
        Status: <MQTTComponentLpLtGGr3status></MQTTComponentLpLtGGr3status>,
      },
      {
        sdplp: <Author name="Grouping 4" email="Ruangan LG03" />,
        Start: <MQTTComponentLpLtGGr4></MQTTComponentLpLtGGr4>,
        Status: <MQTTComponentLpLtGGr4status></MQTTComponentLpLtGGr4status>,
      },
      {
        sdplp: <Author name="Grouping 5" email="Ruangan LG03" />,
        Start: <MQTTComponentLpLtGGr5></MQTTComponentLpLtGGr5>,
        Status: <MQTTComponentLpLtGGr5status></MQTTComponentLpLtGGr5status>,
      },
      {
        sdplp: <Author name="Grouping 6" email="Ruangan LG03" />,
        Start: <MQTTComponentLpLtGGr6></MQTTComponentLpLtGGr6>,
        Status: <MQTTComponentLpLtGGr6status></MQTTComponentLpLtGGr6status>,
      },
      {
        sdplp: <Author name="Grouping 7" email="Ruangan LG03" />,
        Start: <MQTTComponentLpLtGGr7></MQTTComponentLpLtGGr7>,
        Status: <MQTTComponentLpLtGGr7status></MQTTComponentLpLtGGr7status>,
      },
      {
        sdplp: <Author name="Grouping 8" email="Ruangan LG03" />,
        Start: <MQTTComponentLpLtGGr8></MQTTComponentLpLtGGr8>,
        Status: <MQTTComponentLpLtGGr8status></MQTTComponentLpLtGGr8status>,
      },
      {
        sdplp: <Author name="Grouping 9" email="Ruangan LG03" />,
        Start: <MQTTComponentLpLtGGr9></MQTTComponentLpLtGGr9>,
        Status: <MQTTComponentLpLtGGr9status></MQTTComponentLpLtGGr9status>,
      },
      {
        sdplp: <Author name="Grouping 10" email="Ruangan tengah LG03, LG04, LG05, LG06" />,
        Start: <MQTTComponentLpLtGGr10></MQTTComponentLpLtGGr10>,
        Status: <MQTTComponentLpLtGGr10status></MQTTComponentLpLtGGr10status>,
      },
    ],
  };
}
