export default function decorate(block) {
    const rows = [...block.children];
    rows.forEach((row,rowindex) => {
        let url = null;
        row.classList.add("parent");

        if(rowindex % 2 !==0){
            row.classList.add("parent-reverse");
        }
        
        [...row.children].forEach((content,index) => {
            if (index === 5) {
                url = content.textContent.trim();
                content.replaceWith(document.createTextNode(""));
            }
        });

        const rightDiv = document.createElement("div");
        rightDiv.classList.add("right-div");

        [...row.children].forEach((content, index) => {
            if (index === 2) {
                const h2 = document.createElement("h2");
                h2.classList.add("title");
                h2.textContent = content.textContent;
                
                content.replaceWith(h2);
                rightDiv.appendChild(h2);
                
            } else if (index === 3) {
                content.classList.add("text");
                rightDiv.appendChild(content);
            } else if(index == 0) {
                content.classList.add("img")
             } else if (index == 1) {
                content.classList.add("step");
                content.querySelectorAll("p").forEach((p) => {
                    p.classList.add("step-text");

                if(rowindex === rows.length - 1){
                    p.classList.add("last-step");
                }
            })
            
            } else if (index === 4)  {
                const button = document.createElement("a");
                button.classList.add("reference");
                button.textContent = content.textContent;
                
                
                if (url) {
                    button.setAttribute("href", url);
                    button.setAttribute("target", "_blank");
                }
                
                content.replaceWith(button);
                rightDiv.appendChild(button);
                
            }
        });
        row.appendChild(rightDiv);
    });
 }