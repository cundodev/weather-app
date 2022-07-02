import dayjs from 'dayjs'
const getLocation = ({ data }) => {
  const { location } = data
  const { name, region, localtime } = location
  const date = dayjs(localtime).format('dddd D MMMM')
  return {
    locationName: name,
    region,
    date
  }
}

export default getLocation
