import HTTPClient from "../http_instance/wrappedinstance";
import { AddTestProfileModel } from "../../models/test_models";

export default class AllTestServices {


    static async getTestList(user_id: number) {
        const response = await HTTPClient.get(`/test/testlistbyid/${user_id}`);
        return response;
    }
    static async getTestListById(teacher_id: number) {
        const response = await HTTPClient.get(`/teacher/teacher-test-profiles/${teacher_id}`);
        return response;
    }
    static async userTestRecord(userId: number, recordType: string) {
        const response = await HTTPClient.get(`/test/user-test-record/${userId}?recordType=${recordType}`);
        return response;
    }
    static async GetQuestionBanks(teacher_id: number) {
        const response = await HTTPClient.get(`/teacher/teacher-question-bank/${teacher_id}`);
        return response;
    }
    static async GetQuestionBank(qbank_id: number) {
        const response = await HTTPClient.get(`/teacher/question-bank/${qbank_id}`);
        return response;
    }
    static async GetStudent(id: number) {
        const response = await HTTPClient.get(`/profile/myStudent/${id}`);
        return response;
    }
    static async GetTeacher(teacher_id: number) {
        const response = await HTTPClient.get(`/profile/myTeacher/${teacher_id}`);
        return response;
    }
    static async GetQuestionsByBanks(questionBank_id: number) {
        const response = await HTTPClient.get(`/teacher/questions/${questionBank_id}`);
        return response;
    }
    static async Follow(data: any) {
        const response = await HTTPClient.post(`/profile/follow-user`, data );
        return response;
        
    }
    static async Unfollow(data: any) {
        const response = await HTTPClient.post(`/profile/unfollow-user`, data );
        return response;
        
    }
    static async FoundTeacher(data: any) {
        const response = await HTTPClient.post(`/profile/find-teacher`, data );
        return response;
        
    }
    static async FoundStudent(data: any) {
        const response = await HTTPClient.post(`/profile/find-student`, data );
        return response;
        
    }
    static async SaveBulkQuestions(data: any) {
        const response = await HTTPClient.post(`/teacher/save-bulk_question-to-bank`, data );
        return response;
        
    }
    static async createTestProfile(data: AddTestProfileModel) {
        const response = await HTTPClient.post('/teacher/create-test-profile', data);
        return response;
    }
    static async SaveQuestiontoProfile(data: any) {
        const response = await HTTPClient.post('/teacher/save-questions-to-test_profile', data);
        return response;
    }
    static async DeleteBank(data: any) {
        const response = await HTTPClient.post('/teacher/save-questions-to-test_profile', data);
        return response;
    }
    static async updateQuestion(id: number, mydata: any) {
        const response = await HTTPClient.put(`/teacher/update-question/${id}`, mydata);
        return response;
    }
    static async GetMyChats(student_id: number) {
        const response = await HTTPClient.get(`/chat/myChats/${student_id}`);
        return response;
    }
    static async GetChats(chat_id: number, limit:number) {
        const response = await HTTPClient.get(`/chat/chat/${chat_id}/${limit}`);
        return response;
    }
    static async SendMessage(data: any) {
        const response = await HTTPClient.post('/chat/sendmessage', data);
        return response;
    }
    static async GetWallet(user_id: number) {
        const response = await HTTPClient.get(`/wallet/wallet/${user_id}`);
        return response;
    }
    static async GetWalletTransactions(wallet_id: number) {
        const response = await HTTPClient.get(`/wallet/transactions/${wallet_id}`);
        return response;
    }
    static async GetAllWallet() {
        const response = await HTTPClient.get(`/wallet/wallets`);
        return response;
    }
    static async GetRecentTransfers(user_id: number) {
        const response = await HTTPClient.get(`/wallet/recent-transfers/${user_id}`);
        return response;
    }
    static async TopWallet(data: any) {
        const response = await HTTPClient.post('/wallet/top-up', data);
        return response;
    }
    static async TopUpSuccess(trxref: any, reference: any) {
        const response = await HTTPClient.post('/wallet/top-up-success',{trxref, reference} );
        return response;
    }
    static async SendCowry(data: any) {
        const response = await HTTPClient.post('/wallet/send-coins', data);
        return response;
    }
    static async CreateWallet(data: any) {
        const response = await HTTPClient.post('/wallet/setup-wallet', data);
        return response;
    }
}