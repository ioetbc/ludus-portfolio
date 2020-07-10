const invertScroll = (e, item) => {
    if (e) item.scrollLeft -= (e.deltaY * 1.5);
}

module.exports = invertScroll;
