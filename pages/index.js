import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import OSRSTable from "../src/components/osrstable";
import LayoutBase from "../src/template/layoutbase";
// import { getOsrs } from "../src/api/getOsrs";
import BasicLayout from "../src/template/basiclayout";

Home.PageTitle = 'Home | Website'
// Home.Layout = LayoutOne
export default function Home() {
    return (
        <Container maxWidth="xl" sx={{ mt: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ width: "50%", backgroundColor: "lime", height: "400px", margin: "0.5em", padding: "0.5em" }}>
                    <Typography variant="h3" sx={{ textAlign: "center" }}>Hello</Typography>
                </Box>
                <Box sx={{ width: "50%", backgroundColor: "orange", height: "400px", margin: "0.5em", padding: "0.5em", display: "flex" }}>
                    <Box sx={{ backgroundColor: "blue", height: "200px", width: "100%" }}>

                    </Box>
                    <Box sx={{ backgroundColor: "", height: "100%", width: "200px" }}>
                        <OSRSTable />
                    </Box>

                </Box>
            </Box>
        </Container>
    )
}

Home.getLayout = function getLayout(page) {
    return (
        <LayoutBase>
            <BasicLayout>
                {page}
            </BasicLayout>
        </LayoutBase>
    )
}