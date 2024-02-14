export interface AppRoute {
	path: string;
	element: React.FC;
}

export interface FAQ {
	question: string;
	answer: string;
}

export interface Course {
	title: string;
	description: string;
	price: string;
	isPublic: boolean;
	benefits: string;
	imageUrl: string;
	id: number;
}

export interface Application {
	id: number;
	fullName: string;
	organization: string;
	email: string;
	phoneNumber: string;
	text: string;
	isAccepted: boolean;
	createdAt: Date;
}

export interface AuthLink {
	link: string;
	name: string;
}

export interface HeaderRoute {
	name: string;
	component: React.ComponentType<any>;
	props?: any;
}

export interface Organization {
	id: number;
	name: string;
	createdAt: Date;
}
