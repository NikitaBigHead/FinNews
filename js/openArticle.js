function main(){
    let arrDiv = document.querySelectorAll(".Items");
    arrDiv.forEach(el=>{
        el.addEventListener("click",(e)=>{
            let id = e.currentTarget.querySelector(".idNews").innerHTML;
            let category = e.currentTarget.querySelector(".type").innerHTML;
            let url = `/news/${category}/${id}`;
            window.open(url, "_blank");
        })
    })

}
main();

