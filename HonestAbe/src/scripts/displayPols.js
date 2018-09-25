const APIManager = require('./APIManager')
const $ = require('jquery')
const newPol = require('./PoliticianObject')

const displayPols = function () {
	let billPromises = []

	APIManager.getAllPols()
		.then(pols => {
			pols.forEach(pol => {
				APIManager.getBillSponsors(pol.PoliticianID)
					.then (billSponsorRecords => {
						billSponsorRecords.forEach(sponsorRecord => {
							APIManager.getBillsByID(sponsorRecord.BillID)
								.then (billRecords => {
									billRecords.forEach(billRecord => {
										console.log(`Politician Name: ${pol.PoliticianName}, Politician ID: ${pol.PoliticianID}, Bill ID: ${billRecord.BillID}, Bill Name: ${billRecord.BillName}`)
									})
								})
						})
					})
			})
			pols.forEach(pol => {
				APIManager.getDonationsToPolsByPolID(pol.PoliticianID)
					.then (donationToPolRecords => {
						donationToPolRecords.forEach(donationToPolRecord => {
							APIManager.getPACsByID(donationToPolRecord.PACID)
								.then (PACRecords => {
									PACRecords.forEach(PACRecord => {
										console.log(`Politician Name: ${pol.PoliticianName}, Politician ID: ${pol.PoliticianID}, PAC ID: ${PACRecord.PACID}, PAC Name: ${PACRecord.PACName}`)
									})
								})

						})
					})

			})
		})




	// APIManager.getAllPols()
	// 	.then(allPols => {
	// 		$('#contentHook').empty()
	// 		allPols.forEach(pol => {
	// 			$('#contentHook').append(
	// 				`<article class="card" id="Pol-${pol.PoliticianID}">
	// 			<header class="polName">
	// 				<h1>${pol.PoliticianName}</h1>
	// 			</header>
	// 			<section class="polBills" id="PolBills-${pol.PoliticianID}">
	// 			<h3>Sponsored Bills</h3>
	// 		//info for bills
	// 			</section>
	// 			<section class="polInfluencers" id="PolInfluence-${pol.PoliticianID}">
	// 			<h3>Related PACs</h3>
	// 		//list PACs
	// 			</section>
	// 			</article>
	// 			`
	// 			)
	// 		})
	// 	})
}

module.exports = displayPols