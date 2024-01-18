let tooltipElem;
const wrapper = document.querySelector('.wrapper');

wrapper.onmouseover = function (e) {
    let target = e.target;
    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    tooltipElem = document.createElement('p');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    wrapper.append(tooltipElem);
}

wrapper.onmouseout = function (e) {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
}