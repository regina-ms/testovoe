
function createMessage(message) {
    return `
    <span>${message}</span>
`
}

export default function showMessage() {
    const div = document.createElement('div');
    div.classList.add('empty-brand-message');
    div.innerHTML = createMessage('Упс, тут пусто')
    document.querySelector('.items-container').append(div);
}