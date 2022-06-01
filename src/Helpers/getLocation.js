import moment from 'moment'
const getLocation = ({ data }) => {
  const { location } = data
  const { name, region, localtime } = location
  moment().locale('es')
  const date = moment(localtime).format('dddd D MMMM')
  return {
    locationName: name,
    region,
    date
  }
}

export default getLocation
