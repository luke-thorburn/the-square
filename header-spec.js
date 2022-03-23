let banners = [
	{
		active:	true, // Set to true/false to enable/disable banner.
		expiryDate: "2022-03-24", // Banner will be shown up to and including this date. Set to false to disable expiry date.
		text: "African Caribbean Cultural Week 🌍 🌎",
		url: "/ents/event/4682/",
		backgroundColor: "#1b5e20",
	},
	{
		active:	true,
		expiryDate: false,
		text: "Make a room space enquiry ",
		url: "/roomspaceenquiry/",
		backgroundColor: "#004152",
	}
];

let menuLinks = [
	{
		name: 'Events',
		icon: 'calendar',
		items: [
			{ text: 'What\'s on', href: '/whatson/', synonyms: ['events'] },
			{ text: 'Royal Albert Hall ballot', href: '/ballot/', synonyms: ['RAH', 'lottery'] },
			{ text: 'Make a room space enquiry', href: '/roomspaceenquiry/', synonyms: ['book', 'reserve'] },
			{ text: 'Forms & documents', href: '/documents/events/' },
			{ text: 'About', href: '/service/events/' },
		]
	},
	{
		name: 'Clubs & societies',
		icon: 'users',
		items: [
			{ text: 'My memberships', href: '/communities/my/' },
			{ text: 'All clubs & societies', href: '/communities/' },
			{ text: 'Member\'s Council', href: '/community/MembersCouncil/', synonyms: ['members'] },
			{ text: 'About', href: '/communities/about/' },
		]
	},
	{
		name: 'Catering',
		icon: 'cutlery',
		items: [
			{ text: 'Weekly menu', href: '/news/article/catering/Breakfast-Lunch-amp-Dinner-Menu/' },
			{ text: 'Top up Goodcard (Debitrak)', href: 'https://debitrak.goodenough.ac.uk/Account/Login/' },
			{ text: 'GBar', href: '/service/catering/servicecateringgbar/', synonyms: ['g-bar', 'g bar'] },
			{ text: 'About', href: '/service/catering/' },
		],
		synonyms: ['food', 'breakfast', 'lunch', 'dinner']
	},
	{
		name: 'Finance',
		icon: 'sterling-sign',
		items: [
			{ text: 'Pay rent (portal)', href: 'https://portal.goodenough.ac.uk/', synonyms: ['fees'] },
			{ text: 'Top up Goodcard (Debitrak)', href: 'https://debitrak.goodenough.ac.uk/Account/Login/', synonyms: ['food', 'tokens'] },
			{ text: 'Buy print credit (Papercut)', href: 'https://print.goodenough.ac.uk:9192/user', synonyms: ['printing'] },
			{ text: 'Forms & documents', href: '/documents/finance/', synonyms: ['travel refund', 'budget', 'direct debit'] },
			{ text: 'Finance team', href: '/service/finance/' },
		],
		synonyms: ['pay']
	},
	{
		name: 'Member\'s directory',
		icon: 'address-book',
		items: [
			{ text: 'Search', href: '/directory/' },
			{ text: 'My profile', href: '/profile/' }
		],
		synonyms: ['members', 'find', 'who']
	},
	{
		name: 'Reception',
		icon: 'door-open',
		items: [
			{ text: 'Forms & documents', href: '/documents/reception/' },
			{ text: 'About', href: '/service/reception/' },
		],
		synonyms: ['battery', 'batteries', 'mail', 'post', 'parcel', 'garden']
	},
	{
		name: 'Facilities',
		icon: 'toolbox',
		items: [
			{ text: 'Cleaning', href: '/service/cleaning/', synonyms: ['hospitality', 'camp bed', 'click and clean', 'bedding', 'linen', 'pack'] },
			{ text: 'Repairs', href: '/service/repairs/', synonyms: ['fix', 'broken', 'report'] },
			{ text: 'Environmental', href: '/service/environmental/', synonyms: ['reduce the juice'] },
			{ text: 'Forms & documents', href: '/documents/repairs/' },
		]
	},
	{
		name: 'IT',
		icon: 'laptop',
		items: [
			{ text: 'IT guide', href: '/help/itguide/', mark: true },
			{ text: 'New user guide to The Square', href: '/help/newusers/' },
			{ text: 'How to reset wifi passwords', href: '/help/wifi/' },
			{ text: 'How manage a club or society on The Square', href: '/help/communities/' },
			{ text: 'Contact the IT Helpdesk', href: '/help/contactus/' },
			{ text: 'About', href: '/service/itservices/' }
		],
		synonyms: ['computer', 'wifi', 'help']
	},
	{
		name: 'Sublets',
		icon: 'bed',
		items: [
			{ text: 'A guide to subletting (read first)', href: '/news/article/6014/subletsavailable/' },
			{ text: 'Advertise your sublet', href: '/sublets/additem/' },
			{ text: 'Subletting form', href: '/resources/registry/Sublet-Form-September-2021/' },
			{ text: 'My sublets', href: '/sublets/myitems/' },
			{ text: 'Offered sublets', href: '/subletsoffered/' },
		]
	},
	{
		name: 'Faith services',
		icon: 'place-of-worship',
		items: [
			{ text: 'About', href: '/service/chaplaincy/' },
		],
		synonyms: ['church', 'chapel', 'religion', 'religious']
	},
	{
		name: 'Library',
		icon: 'books',
		items: [
			{ text: 'About', href: '/service/library/' },
			{ text: 'Library team', href: '/service/library/library-workers/' },
			{ text: 'How to find a book', href: '/service/library/library_organisation/' },
			{ text: 'History', href: '/service/library/library_history/' },
		],
		synonyms: ['libraries']
	},
	{
		name: 'Archive',
		icon: 'archive',
		items: [
			{ text: 'About', href: '/service/archive/' },
		]
	},
	{
		name: 'Registry',
		icon: 'cabinet-filing',
		items: [
			{ text: 'Forms & documents', href: '/documents/registry/', synonyms: ['faculty dinner', 'insurance', 'departure', 'handbook'] },
			{ text: 'About', href: '/service/registry/', synonyms: ['registrar', 'Caroline'] },
		]
	},
	{
		name: 'Other Services',
		icon: 'circle-info',
		items: [
			{ text: 'College Executive', href: '/service/exec/' },
			{ text: 'Alumni', href: '/service/alumnioffice/' },
			{ text: 'Commercial Events', href: '/service/commercialevents/' },
		]
	},
	{
		name: 'The Burn',
		icon: 'person-hiking',
		items: [
			{ text: 'About', href: '/service/theburn/' },
			{ text: 'Travel subsidy form', href: '/resources/events/Burn-Travel-Subsidy-Form/', synonyms: ['reimbursement'] },
			{ text: 'The Burn website', href: 'https://theburn.co.uk/' }
		]
	},
	{
		name: 'The Goodenough',
		icon: 'hotel',
		items: [
			{ text: 'About', href: '/service/club/' }
		],
		synonyms: ['hotel']
	},
	{
		name: 'Social media',
		items: [
			{ text: 'Facebook', href: 'http://www.facebook.com/GoodenoughCollege', icon: 'facebook' },
			{ text: 'Twitter', href: 'https://twitter.com/goodenoughc', icon: 'twitter' },
			{ text: 'YouTube', href: 'http://www.youtube.com/user/CollegeGoodenough', icon: 'youtube' },
			{ text: 'LinkedIn', href: 'http://www.linkedin.com/groups?gid=37615', icon: 'linkedin' },
		]
	},
]

window.square = { banners, menuLinks };