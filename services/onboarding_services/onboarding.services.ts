// mport { credentials } from "../../models/connection.models";
import { 
    // CreateOrg, UserWithOrg, CreateUser, 
    LogIn } from "../../models/onboarding_user.models";
import HTTPClient from "../http_instance/wrappedinstance";

export default class OnboardingServices {

    // static async createOrganization(data: CreateOrg) {
    //     const response = await HTTPClient.post('/onboarding-and-rbac/api/create_organization', data);
    //     return response.data;
    // }
    // static async createUserWithOrg(data: UserWithOrg) {
    //     const response = await HTTPClient.post('/onboarding-and-rbac/api/create_user_with_organization', data);
    //     return response.data;
    // }
    // static async createUser(org_id: number, data: CreateUser) {
    //     const response = await HTTPClient.post(`/onboarding-and-rbac/api/create_user/${org_id}`, data);
    //     return response.data;
    // }
    static async signIn(data: LogIn) {
        const response = await HTTPClient.post('/profile/users/login', data);
        return response.data;
    }
    static async signUp(data: any) {
        const response = await HTTPClient.post('/profile/createtheuser', data);
        return response.data;
    }
    static async setupUser(data: any) {
        const response = await HTTPClient.post('/profile/setup-student_account', data);
        return response.data;
    }
    static async setupUser1(data: any) {
        const response = await HTTPClient.post('/profile/setup-teacher_account', data);
        return response.data;
    }
    static async UpdateTeacher(id:number, data: any) {
        const response = await HTTPClient.put(`/profile/updateTeacher/${id}`, data);
        return response.data;
    }
    static async UpdateStudent(id:number, data: any) {
        const response = await HTTPClient.put(`/profile/updateStudent/${id}`, data);
        return response.data;
    }
    static async GetFollowers(user_id:number) {
        const response = await HTTPClient.get(`/profile/myFollowers/${user_id}`);
        return response.data;
    }
    static async GetFollows(user_id:number) {
        const response = await HTTPClient.get(`/profile/myFollows/${user_id}`);
        return response.data;
    }
}