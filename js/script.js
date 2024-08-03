function showPage(pageId) {
    document.getElementById('iframe-container').style.display = 'none';
    document.querySelectorAll('.page').forEach(function(page) {
        page.style.display = 'none';
    });

    if (pageId === 'page3') {
        document.getElementById('iframe').src = 'projeto3.html';
        document.getElementById('iframe-container').style.display = 'block';
    } else {
        document.getElementById(pageId).style.display = 'block';
    }
}
