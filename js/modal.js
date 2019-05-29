function close_modal(id){
    let image_modal = document.getElementById(id);
    image_modal.classList.remove("open-modal");
    console.log('closing modal');

}

function open_modal(id){
    let image_modal = document.getElementById(id);
    image_modal.classList.add("open-modal");
    console.log('opening modal');

}