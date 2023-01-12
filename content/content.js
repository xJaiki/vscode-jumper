const vscodeJumper = document.createElement('button');
vscodeJumper.innerHTML = 'Go to VSCode.dev';
vscodeJumper.classList.add('btn', 'd-none', 'd-md-flex', 'ml-2');
const container = document.querySelector('.file-navigation');
container.appendChild(vscodeJumper);

var newPage = true;
vscodeJumper.addEventListener('click', () => {
    const url = window.location.href;
    const vscodeUrl = url.replace('https://github.com', 'https://vscode.dev/github.com');
    window.open(vscodeUrl, '_blank');
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.changeStyle) {
            vscodeJumper.classList.toggle('fancy-style');
        }
        if(request.newPage) {
            newPage = request.newPage;
        }
    }
)