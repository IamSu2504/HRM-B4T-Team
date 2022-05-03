import moment from 'moment'

export const dateTimeConverter = (dateTime) => {
    if (dateTime) {
      const dateMomentObject = moment(dateTime, "DD/MM/YYYY");
      const dateObject = dateMomentObject.toDate();
      return moment(dateObject).format('YYYY-MM-DD');
    }
    return '';
};