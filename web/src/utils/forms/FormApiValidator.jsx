import errorTypes from '../../configs/errorTypes';

function FormApiValidator(error, actions) {
    var data = JSON.parse(error.request.response)
    var nameResponse = Object.keys(data).toString()
    var dataResponse = data[nameResponse]

    actions.setFieldError(nameResponse, errorTypes[dataResponse])
}

export default FormApiValidator;