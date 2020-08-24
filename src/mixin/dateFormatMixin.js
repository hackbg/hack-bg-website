import moment from 'moment'

export default {
    filters: {
        commentDate: function (date) {
            return moment(date).format('DD/MM/YYYY [at] HH:MM');
        },
    }
}
