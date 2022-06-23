import { Container, Typography, Card } from "@mui/material";
import { Box, typography } from "@mui/system";
import OSRSTable from "../src/components/osrstable";
import LayoutBase from "../src/template/layoutbase";
// import { getOsrs } from "../src/api/getOsrs";
import BasicLayout from "../src/template/basiclayout";
import externals from "../src/modules/externals";
import { placeholder } from '../src/components/consts'



function addToDict(params) {
    // console.log("params")
    // console.log(params)
    // console.log("params")
    // console.log(params)
    params = params.split('\n')

    let i = 0;
    let shite = placeholder;
    params.forEach(item => {
        // console.log(item);
        let itemArray = item.split(',')
        if (itemArray.length == 3) {
            shite[i].rank = itemArray[0]
            shite[i].lvl = itemArray[1]
            shite[i].xp = itemArray[2]
        }
        i++;
    });
    const newArr = []
    for (let i = 0; i < shite.length; i++) {
        newArr[shite[i].id] = shite[i]
    }
    return newArr
    // setStuff(shite.sort(function(a, b) {
    //     return a.id - b.id;
    // }))
}

export async function getServerSideProps() {

    const osrs = await externals.getOsrs("richpotato99")
    const dict = addToDict(osrs)
    return {
        props: {
            osrs: dict
        }
    }
}
Home.PageTitle = 'Home | Website'
// Home.Layout = LayoutOne
export default function Home({ osrs }) {
    return (
        <Container  sx={{ width:"96%", height:"100%", pt: 2, mt:0.3, }}>
            <Box cla sx={{justifyContent: "space-between", backgroundColor:"orange", height:"100%", p:2 }}>
                {/* <Box sx={{ width: {md:"50%", xs:"100%"}, backgroundColor: "", height: "auto"}}> */}
                {/* </Box> */}
                {/* <Box sx={{ justifyContent:"center", width: { md: "50%", xs: "100%" }, backgroundColor: "", height: "400px", margin: "0.5em", padding: "0.5em", display: {md: "flex", xs:"initial"} }}>
                    <Typography variant="h3" sx={{ textAlign: "center" }}>Hello</Typography>
                        
                    <Box sx={{ backgroundColor: "blue", height: "200px", minWidth:"200px", maxWidth: "100%", mx:2, flexGrow:1 }}>
                    </Box>
                    <Card sx={{ height: "auto", p: "1rem", backgroundColor: theme => `${theme.palette.secondary.superlight}`, mx: 2  }}>
                        <Typography sx={{mx:1, textAlign:"center"}} variant="h5">OSRS Stats</Typography>
                        <OSRSTable osrs={osrs} />
                    </Card>

                </Box> */}
                <Box sx={{width:"100%", height:"75px"}}>
                    <Typography variant="h1" sx={{textAlign:"center", fontSize:"48pt"}}>Wowee Index </Typography>
                </Box>
                <Box sx={{ display: { md: "flex", xs: "block" }, justifyContent: "space-between", flexDirection:"row-reverse", mt:1}}>
                    <Card sx={{ height: "auto", p: "1rem", backgroundColor: theme => `${theme.palette.secondary.superlight}`, mx: 2 }}>
                        <Typography sx={{ mx: 1, textAlign: "center" }} variant="h5">OSRS Stats</Typography>
                        <OSRSTable osrs={osrs} />
                    </Card>
                    <Box sx={{backgroundColor:"purple", width:"70%", p:2}}>
                        help
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