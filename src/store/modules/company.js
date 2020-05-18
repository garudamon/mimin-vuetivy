export default {
  namespaced: true,
  state: {
    headers: [
      {
        value: 'code',
        text: 'Company Code'
      },
      {
        value: 'name',
        text: 'Company Name'
      },
      {
        value: 'address',
        text: 'Address'
      },
      {
        value: 'city',
        text: 'City'
      },
      {
        value: 'logo',
        text: 'Logo'
      },
    ],
    items: [
      {
        code: 'PP01',
        name: 'Paradise Perkasa',
        address: 'Jalan Raya Perancis 178',
        city: 'Tangerang',
        logo: '',
      },
      {
        code: 'IM01',
        name: 'Itech Mandiri',
        address: 'De Paradise Building, Suite 507',
        city: 'Tangerang',
        logo: '',
      },
    ],
    paging: {
    },
    loading: false
  },
  mutations: {},
  actions: {},
  getters: {}
}