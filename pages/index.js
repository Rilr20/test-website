import { Container, Typography, Card } from "@mui/material";
import { Box, typography } from "@mui/system";
import OSRSTable from "../src/components/osrstable";
import LayoutBase from "../src/template/layoutbase";
// import { getOsrs } from "../src/api/getOsrs";
import BasicLayout from "../src/template/basiclayout";

Home.PageTitle = 'Home | Website'
// Home.Layout = LayoutOne
export default function Home() {
    return (
        <Container maxWidth="xl" sx={{ height:"100%", pt: 2,mt:0.3,  }}>
            <Box cla sx={{ display: {md: "flex", xs:"block"}, justifyContent: "space-between" }}>
                <Box sx={{ width: {md:"50%", xs:"100%"}, backgroundColor: "", height: "auto", margin: "0.5em", padding: "0.5em" }}>
                    <Typography variant="h3" sx={{ textAlign: "center" }}>Hello</Typography>
                </Box>
                <Box sx={{ justifyContent:"center", width: { md: "50%", xs: "100%" }, backgroundColor: "", height: "400px", margin: "0.5em", padding: "0.5em", display: {md: "flex", xs:"initial"} }}>
                    <Box sx={{ backgroundColor: "blue", height: "200px", minWidth:"200px", maxWidth: "100%", mx:2, flexGrow:1 }}>
                        
                    </Box>
                    <Card sx={{ height: "auto", p: "1rem", backgroundColor: theme => `${theme.palette.secondary.superlight}`, mx: 2  }}>
                        <Typography sx={{mx:1, textAlign:"center"}} variant="h5">OSRS Stats</Typography>
                        <OSRSTable />
                    </Card>

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