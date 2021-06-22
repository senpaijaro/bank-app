import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const MessageSuccess = (text="") => {

  return MySwal.fire({
    title: 'Success!',
    html: text,
    icon: 'success',
    confirmButtonText: 'Ok'
  })
}

export const MessageError = (text="") => {

  return MySwal.fire({
    title: 'Error!',
    html: text,
    icon: 'error',
    confirmButtonText: 'Ok'
  })
}

