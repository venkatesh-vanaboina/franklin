export default function decorate(block) {
    [...block.children].forEach((row) => {
        let url = null;
        [...row.children].forEach((col,index) => {
            if(index !== 0) {
                url = col.textContent;
                col.classList.add("url");
                col.replaceWith(document.createTextNode(""));
            }
        });
        [...row.children].forEach((col,index) => {
            if(index === 0) {
                const button = document.createElement("button");
                button.classList.add("user-btn");
                const node = document.createTextNode(col.textContent);
                button.append(node);

                const parent = document.createElement("a");
                if(url) {
                    parent.setAttribute("href",url);
                    parent.setAttribute("target","_blank");
                }

                parent.append(button);
                col.replaceWith(parent);
            }
        })
    })

}