function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  const target = event.currentTarget;
}

function onDragOver(event) {
    event.preventDefault()
}

function onDrop(event) {
    const id = event.dataTransfer.getData('text/plain')
    const draggableElement = document.getElementById(id)
    const dropzone = event.target

    const left = event.clientX - dropzone.getBoundingClientRect().left;
    const top = event.clientY - dropzone.getBoundingClientRect().top;

    draggableElement.style.position = 'absolute';
    draggableElement.style.left = left + 'px';
    draggableElement.style.top = top + 'px';
    dropzone.appendChild(draggableElement)

    event.dataTransfer.clearData()
}
