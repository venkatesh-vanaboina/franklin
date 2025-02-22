export default function decorate(block) {
    [...block.children].forEach((rows) => {
         rows.classList.add("text");
        [...rows.children].forEach((row) => {
            const ptag = document.querySelector("p");
            if(ptag) {
                const h2 = document.createElement("h2");
                h2.classList.add("inner-text");
                h2.innerHTML = ptag.innerHTML;
                row.replaceChild(h2,ptag);
                
            }
        })
    })
}
