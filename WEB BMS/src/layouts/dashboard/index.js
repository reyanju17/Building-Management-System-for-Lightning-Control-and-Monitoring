/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="TEGANGAN (VOLT)"
                count="0V"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard icon="leaderboard" title="ARUS (AMPERE)" count="0A" />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="DAYA (WATT)"
                count="0Watt"
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              {/* <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Tegangan per hari"
                  description="Histori besar tegangan per hari"
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox> */}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              {/* <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Arus per hari"
                  description="Histori besar arus per hari"
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox> */}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              {/* <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Daya per hari"
                  description="Histori besar daya per hari"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox> */}
            </Grid>
          </Grid>
        </MDBox>
        <MDBox></MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

// export default Dashboard;
