export default function decorate(block) {
    [...block.children].forEach((row) => {
        let url = null;
        row.classList.add("parent");
        
        [...row.children].forEach((content,index) => {
            if (index === 3) {
                url = content.textContent.trim();
                content.replaceWith(document.createTextNode(""));
            }
        });

        [...row.children].forEach((content, index) => {
            if (index === 0) {
                const h2 = document.createElement("h2");
                h2.classList.add("title");
                const node = document.createTextNode(content.textContent);
                h2.append(node);
                content.replaceWith(h2);
            } else if (index === 1) {
                content.classList.add("text");
            } else if (index === 2)  {
                const button = document.createElement("a");
                button.classList.add("button");
                const node = document.createTextNode(content.textContent);
                button.append(node);
                
                if (url) {
                    button.setAttribute("href", url);
                    button.setAttribute("target", "_blank");
                }
                
                content.replaceWith(button);
            }
        });
    });
 }