const $ = require('jquery')

const APIManager = Object.create(null, {
	getAllPols: {
		value: function () {
			return $.ajax('http://localhost:8088/Politician')
		}
	},
	getBillSponsors: {
		value: function (polID) {
			return $.ajax(`http://localhost:8088/BillSponsors/?PoliticianID=${polID}`)
		}
	},
	getBillsByID: {
		value: function (BillID) {
			return $.ajax(`http://localhost:8088/LegislativeBill/?BillID=${BillID}`)
		}
	},
	getDonationsToPolsByPolID: {
		value: function (ReceivePolID) {
			return $.ajax(`http://localhost:8088/DonationsToPols/?ReceivePolID=${ReceivePolID}`)
		}
	},
	getPACsByID: {
		value: function (PACID) {
			return $.ajax(`http://localhost:8088/PoliticalActionCommittee/?PACID=${PACID}`)
		}
	}
})

module.exports = APIManager