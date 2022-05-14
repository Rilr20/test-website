import { Container } from "@mui/material";
import { LayoutOne } from "./template/LayoutOne";

Home.PageTitle = 'Home | Website'
Home.Layout = LayoutOne 
export default function Home() {
  return (
    <Container maxWidth="xl" sx={{mt:2}}>
        <h1>Hello</h1>
    </Container>
  )
}
