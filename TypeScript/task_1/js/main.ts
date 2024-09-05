export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
};

export interface Directors extends Teacher {
    numberOfReports: number;
};

export interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
};

export const printTeacher: PrintTeacherFunction = (firstName, lastName)=> {
    return `${firstName.charAt(0)}. ${lastName}`;
};


export interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
};

export interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface
};

export class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return 'Currently working';
    };

    displayName(): string {
        return this.firstName;
    };
}