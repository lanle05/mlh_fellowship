import HTTPClient from "../http_instance/wrappedinstance";
import { AddBankModel, AddTestProfileModel, CreateRandomTest, SaveAns, TestDetail, CheckEnrollment, Enrollment, Enrollment2  } from "../../models/test_models";

export default class SelectQuestionServices {

    static async getSubjectList() {
        const response = await HTTPClient.get('/test/subjectlist');
        return response;
    }
    static async getTeacherProfile(id: number) {
        const response = await HTTPClient.get(`/profile/myTeacher/${id}`);
        return response;
    }
    static async getSubjectSubSectionList(subject_id: number) {
        const response = await HTTPClient.get(`/test/loadsubsectionfortopic/${subject_id}`);
        return response;
    }
    static async getSubjectSubTopicList(section_id: number) {
        const response = await HTTPClient.get(`/test/loadsubsectionforsubtopic/${section_id}`);
        return response;
    }
    static async getSubTopicByTopic(subject_section_id: number) {
        const response = await HTTPClient.get(`/test/loadsubtopicbytopic/${subject_section_id}`);
        return response;
    }
    static async createTestProfile(data: AddTestProfileModel) {
        const response = await HTTPClient.post('/test/addtestprofile', data);
        return response;
    }
    static async updateTestProfile(testProfileId: number, data: AddTestProfileModel) {
        const response = await HTTPClient.put(`/test/update-test-profile/${testProfileId}`, data);
        return response;
    }
    static async createRandomTest(data: CreateRandomTest) {
        const response = await HTTPClient.post('/test/randomtest', data);
        return response;
    }
    static async createQuestionBank(data: AddBankModel) {
        const response = await HTTPClient.post('/teacher/create-question-bank', data);
        return response;
    }
    static async getSingleTest(test_id: number) {
        const response = await HTTPClient.get(`/test/singletest/${test_id}`);
        return response;
    }
    static async getTestRecordsbyProfile(testProfileId: number) {
        const response = await HTTPClient.get(`/test/get-test-records-by-profile/${testProfileId}`);
        return response;
    }
    static async getTestQuestion(test_id: number) {
        const response = await HTTPClient.get(`/question/getquestionbytest/${test_id}`);
        return response;
    }
    static async getTestQuestionBySubject(subject_id: number) {
        const response = await HTTPClient.get(`/question/getquestionbysubject/${subject_id}`);
        return response;
    }
    static async getTestQuestionBySection(section_id: number) {
        const response = await HTTPClient.get(`/question/getquestionbysection/${section_id}`);
        return response;
    }
    static async getTestQuestionBySubsection(subsection_id: number) {
        const response = await HTTPClient.get(`/question/loadquestionbysubsection/${subsection_id}`);
        return response;
    }
    static async getTestQuestionBytopic(topic_id: number) {
        const response = await HTTPClient.get(`/question/loadquestionbytopic/${topic_id}`);
        return response;
    }
    static async SearchCategory(keyword:string) {
        const response = await HTTPClient.get(`/test/search-for-keyword/${keyword}?keyword=${keyword}`);
        return response;
    }
    static async CountQuestions(data: any) {
        const response = await HTTPClient.post(`/test/countquestions`, data);
        return response;
    }
    static async SearchUser(keyword:string) {
        const response = await HTTPClient.get(`/profile/searchuser/${keyword}`);
        return response;
    }
    static async SearchWallet(keyword:string) {
        const response = await HTTPClient.get(`/wallet/search-wallets/${keyword}`);
        return response;
    }
    static async saveAnsBulk(data: SaveAns) {
        const response = await HTTPClient.post('/test/bulksaveans/', data);
        return response;
    }
    static async mapTestQuestion(data: TestDetail) {
        const response = await HTTPClient.post('/test/maptestquestion/', data);
        return response;
    }
    static async DeleteMapTest(map_id: number) {
        const response = await HTTPClient.delete(`/question/deletemap/${map_id}`);
        return response;
    }
    static async UnenrollTest(testRecordId: number) {
        const response = await HTTPClient.delete(`/test/unenroll-test/${testRecordId}`);
        return response;
    }
    static async DeleteTest(test_id: number) {
        const response = await HTTPClient.delete(`/test/deletetestprofile/${test_id}`);
        return response;
    }
    static async DeleteBank(id: number) {
        const response = await HTTPClient.delete(`/teacher/question-bank/${id}`);
        return response;
    }
    static async CheckEnrollment(data: CheckEnrollment) {
        const response = await HTTPClient.post('/test/checkenrollment/', data);
        return response;
    }
    static async Enroll(data: Enrollment2) {
        const response = await HTTPClient.post('/test/enroll/', data);
        return response;
    }
    static async UpdateTime(data: Enrollment) {
        const response = await HTTPClient.post('/test/updatetime/', data);
        return response;
    }
    static async GetAns(data: CheckEnrollment) {
        const response = await HTTPClient.post('/test/getans/', data);
        return response;
    }
    static async startTest(testRecordId: number) {
        const response = await HTTPClient.put(`/test/start-test/${testRecordId}`, {} );
        return response;
    }
    static async submitTest(testRecordId: number) {
        const response = await HTTPClient.post(`/test/finalsubmit/${testRecordId}`, {} );
        return response;
    }
    static async GetGrades(testRecordId: number) {
        const response = await HTTPClient.get(`/test/getGrade/${testRecordId}`);
        return response;
    }
    
}