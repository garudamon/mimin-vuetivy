export default {
  namespaced: true,
  state: {
    titles: [
      {
        prop: 'company_code',
        label: 'Company Code'
      },
      {
        prop: 'company_name',
        label: 'Company Name'
      },
      {
        prop: 'nodes',
        label: 'Node'
      },
      {
        prop: 'level',
        label: 'Level'
      },
      {
        prop: 'status',
        label: 'Status'
      },
    ],
    list: [
      {
        company_code: 'PP01',
        company_name: 'Paradise Perkasa',
        nodes: 125,
        level: 7,
        status: 'active',
      },
      {
        company_code: 'PP01',
        company_name: 'Paradise Perkasa',
        nodes: 125,
        level: 7,
        status: 'inactive',
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