export default function decorate(block) {
    [...block.children].forEach((rows) => {
        rows.classList.add("text");
    })
}