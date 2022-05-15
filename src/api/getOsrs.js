
// export default async function getOsrs(player) {
//     const Link = "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" + player
//     const res = await fetch(Link)
//     console.log(res)
//     return res
// }

// const callAPI = async (player) => {
//     try {
//         const res = await fetch("https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" + player);
//         const data = await res.json();
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// };

export async function getOsrs(player) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            return this.responseText;
        }
    }
    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" + player);
    xhr.setRequestHeader("Origin", 'runescape.com');
    xhr.send();
}