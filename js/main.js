window.addEventListener('DOMContentLoaded', function() {

  (function reflect() {

    const email = document.querySelector('#email');

    /* ---------------------------------------------------------------------- */
    email.addEventListener('click', function(event) {

      Swal.fire({
        title: 'david@davidgoy.dev',
        text: 'Here\'s my email address. Please copy it.',
        confirmButtonColor: '#c71428',
        confirmButtonText: 'DONE'
      });

    });

  })();
});
