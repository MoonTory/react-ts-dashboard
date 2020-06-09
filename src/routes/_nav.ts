export default {
	items: [
		{
			name: 'Dashboard',
			url: '/',
			icon: 'icon-speedometer'
			// badge: {
			// 	variant: 'info',
			// 	text: 'NEW'
			// }
		},
		{
			title: true,
			name: 'Admin',
			wrapper: {
				// optional wrapper object
				element: '', // required valid HTML5 element tag
				attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
			},
			class: '' // optional class names space delimited list for title item ex: "text-center"
		},
		{
			name: 'Users',
			url: '/users',
			icon: 'icon-user'
			// children: [
			// 	{
			// 		name: 'Breadcrumbs',
			// 		url: '/base/breadcrumbs',
			// 		icon: 'icon-puzzle'
			// 	}
			// ]
		}
	]
};
