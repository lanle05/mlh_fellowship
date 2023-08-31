export type SubjectListModels = {
    subjectID: number,
    adminID: number,
    subjectName: string,
    subjectDesc: string
}

export type SubjectSubsectionListModels = {
    id: number,
    subject_id: number,
    section_name: string,
}
export type SubjectSubtopicListModels = {
    id: number,
    subject_id: number,
    subject_section: number,
    subject_subsection: string
}
export type SubjectSubtopicsectionListModels = {
    id: number,
    sub_section_id: number,
    topic_name: string
}
export type AddTestProfileModel1 = {
        test: any
    
        user_id: number,
        test_id:number,
        test_name: string,
        selection_type: string,
        assign_type: string,
        schedule: string,
        total_to_attempt: 0,
        showgrade: string,
        start_date: string,
        start_time: string,
        end_date: string,
        end_time: string,
        delete_status: number,
        examduration: number,
        testcredit: number
        test_subject_image: string
        questions: any[]
        image_info: any;
      }
export type CreateRandomTest =  {
        subject_section: number,
        sub_section:number,
        sub_topic: number,
        totalQuestion: number,
        test_id: number,
      }
export type TestQuestion =  {
        questionID: number,
        exam_id: number,
        question_no: number,
        subjectID: number,
        adminID: number,
        question: string,
        optionA: string,
        optionB: string,
        optionC: string,
        optionD: string,
        optionE: string,
        optionF: string,
        correctAnswer: string,
        marks: string,
        multiple: string,
        multipleMarks: string,
        datetime: string,
        bank_sub_id: number,
        hint: string,
        type: string,
        explanation: string,
        validation_status: string,
        validation_comment: string,
        validated_by: string,
        subject_section: string,
        subsection: string,
        topic: string,
        sub_topic: string,
        taged_by: string,
        last_updated_at: string,
        last_updated_by: string,
        last_update_by: string,
        last_validate_at: string,
        map_id: number,
        test_id: number,
        question_id: number,
        map_date: string
      }
      export type BulkAns = {
        questionID: number,
        studentAnswer: string
      }[]
      export type BulkAns2 = {
        studentID: number,
        questionID: number,
        studentAnswer: string
      }

      export type SaveAns = {
      testRecordId: number,
       answer: BulkAns
      }
      export type TestDetail = {
       question_ids: number[],
       test_id: number
      }
      export type CheckEnrollment = {
       user_id: number,
       testRecordID: number
      }
      export type Enrollment = {
       testRecordId: number,
       time_left: number
      }
      export type Enrollment2 = {
       user_id: number,
       test_id: number,
       time_left: number,
       testRecordId: number,
      }
      export type AddTestProfileModel = {
        
        createdBy: number,
        test_name: string,
        test_type: string,
        duration: number,
        mark: number,
        test_price: string,
        schedule: string,
        start_date: string,
        start_time: string,
        end_date: string,
        end_time: string,
        delete_status: number,
        status: number
      
    }
    export type TestProfileModel = {
      
        test_id: number,
        test_name: string,
        test_type: string,
        duration: number,
        mark: number,
        test_price: string,
        schedule: string,
        start_date: string,
        start_time: string,
        end_date: string,
        end_time: string,
        delete_status: number,
        status: number
        questions: any
      
    }
    export type AddBankModel = {
  
  
      createdBy: any,
      name: string,
      subject_id: number,
      sections: number[],
      subSections: number[],
      subTopics:  number[],
      created_at: string
    
        }