export default function fontSize(res: number) {
    const clientWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    if (!clientWidth) return;
    const fontSize = 100 * (clientWidth / 1920);
    return res * fontSize;
}
