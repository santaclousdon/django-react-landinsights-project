export default function prettify_string(string) {
    let final = [];
    let pieces = string.split("_");

    for (let piece of pieces) {
        final.push(piece.charAt(0).toUpperCase() + piece.slice(1));
    }
    return final.join(" ");
}
