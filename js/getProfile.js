let res = await fetch("/post/accept",{
    method:"POST",
    body:{
    id: sessionStorage.getItem('token')
    }
});

let profile = await res.json();

let htmlDoc = document.querySelector("ul");

htmlDoc.appendChild(`<li>Имя: ${profile.name}</li>`);
htmlDoc.appendChild(`<li>Фамилия: ${profile.surname}</li>`);
htmlDoc.appendChild(`<li>Никнейм: ${profile.nickname}</li>`);
htmlDoc.appendChild(`<li>Почта: ${profile.mail}</li>`);
htmlDoc.appendChild(`<li>ID: ${profile.id}</li>`);