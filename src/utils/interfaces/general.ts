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
	fullName: string;
	organization: string;
	email: string;
	phoneNumber: string;
	date: string;
}

export interface AuthLink {
	link: string;
	name: string;
}