import { Container, Typography, Card } from "@mui/material";
import { Box, typography } from "@mui/system";
import OSRSTable from "../src/components/osrstable";
import LayoutBase from "../src/template/layoutbase";
// import { getOsrs } from "../src/api/getOsrs";
import BasicLayout from "../src/template/basiclayout";
import externals from "../src/modules/externals";
import { placeholder } from '../src/components/consts'
import useTranslation from 'next-translate/useTranslation'


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
    const { t, lang } = useTranslation()
    return (
        <Container sx={{ width: "96%", height: "100%", pt: 2, mt: 0.3, }}>
            <Box sx={{ justifyContent: "space-between", backgroundColor: theme => `${theme.palette.primary.light}`, height: "100%", p: 2 }}>
                <Box sx={{ width: "100%", height: "75px" }}>
                    
                    <Typography variant="h1" sx={{ textAlign: "center", fontSize: "36pt", color: "text.primary" }}>{t('common:greeting')}</Typography>
                </Box>
                <Box sx={{ display: { md: "flex", xs: "block" }, justifyContent: "space-between", flexDirection: "row-reverse", mt: 1 }}>
                    <Card sx={{ height: "auto", p: "1rem", backgroundColor: theme => `${theme.palette.secondary.light}`, mx: 2 }}>
                        <Typography sx={{ mx: 1, textAlign: "center" }} variant="h5">OSRS Stats</Typography>
                        <OSRSTable osrs={osrs} />
                    </Card>
                    <Card sx={{ backgroundColor: "", width: { xs: "79%", md: "70%" }, p: 2, mx: "auto", mt: { xs: 1, md: 0 }, backgroundColor: theme => `${theme.palette.secondary.light}` }}>
                        <Typography variant="h2" sx={{ fontSize: "36pt", textAlign: "center" }}>Help</Typography>
                        <Typography sx={{ fontSize: "1.2rem", textAlign: "left" }}>p text</Typography>
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