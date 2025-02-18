export default function decorate(block) {
    const rows = [...block.children];
    rows.forEach((row,r) => {
        if(r == 0) {
            const nextbtn = document.createElement("button");
            nextbtn.classList.add("btn","btn-next");
            const node = document.createTextNode(row.textContent);
            nextbtn.append(node);
            row.replaceWith(nextbtn);
        }else if(r== rows.length-1) {
            const prebtn = document.createElement("button");
            prebtn.classList.add("btn","btn-prev");
            const node = document.createTextNode(row.textContent);
            prebtn.append(node);
            row.replaceWith(prebtn);
        }else {
            row.classList.add("slide");
            [...row.children].forEach((col,c) => {
                if(c==1) {
                    col.classList.add('slide-text');
                }else  {
                    col.classList.add('slide-img');
                }
            })
        }
    });

    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide,index) => {
        slide.style.transform = `translateX(${index * 100}%)`;
    })

    const nextslide = document.querySelector(".btn-next");

    let curslide = 0;

    let maxslide = slides.length - 1;

    nextslide.addEventListener("click", function() {
       console.log("clicked")
        if(curslide === maxslide) {
            curslide = 0
        }else {
            curslide ++;
        }

        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - curslide)}%)`;
          });
    })

    const prevslide = document.querySelector(".btn-prev");

    prevslide.addEventListener("click", function() {
        if(curslide === 0) {
            curslide =  maxslide
        }else {
            curslide --;
        }
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - curslide)}%)`;
          });
    })

    
}