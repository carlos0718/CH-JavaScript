const renderMessage = (message) => {
    const element = document.createElement('p');
    element.innerHTML = `
                            ${message}
                        `
    document.body.appendChild(element);
}

const logger = (message) => {
    console.log(message);
}

export {
    renderMessage,
    logger
}