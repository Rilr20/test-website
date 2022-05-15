import Navbar from '../../src/components/navbar';

export default function LayoutOne({ children }) {
    try {
        return (<>
            <Navbar />
            <div>{children}</div>
        </>)
    } catch (e) { console.log(e) }
}
