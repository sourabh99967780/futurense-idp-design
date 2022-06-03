$('.toggle-icon').click(() => {
    $('#dashboard').toggleClass('sidebar-toggled');
})

// set sidebar height dynamically
$('#dashboard .sidebar-wrapper').height('calc(100vh - ' + $('#dashboard header').height() + 'px)');