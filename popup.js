document.addEventListener('DOMContentLoaded', () => {
    const testButton = document.getElementById('testButton');
    const status = document.getElementById('status');

    if (testButton && status) {
        testButton.addEventListener('click', () => {
            status.textContent = 'Button clicked!';
        });
    } else {
        console.error('Element(s) not found.');
    }
});
