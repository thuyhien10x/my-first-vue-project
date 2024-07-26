import swal from 'sweetalert';

export default {
  methods: {
    flash(message) {
      return swal({
        title: 'Success!',
        text: message,
        icon: 'success',
        button: 'OK'
      });
    }
  }
};
