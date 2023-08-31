// import { RoleModel } from "./access_control.models"

// export type CreateOrg = {
//     organizationName: string,
//     organizationContactEmail: string,
//     organizationContactPhoneNumber: string,
//     organizationStreetAddress: string,
//     organizationCity: string,
//     organizationState: string,
//     organizationCountry: string,
//     identityProviderId: number
// }

// export type OrgModel = {
//     id: number,
//     organizationName: string,
//     organizationAdmin: number,
//     organizationContactEmail: string,
//     organizationContactPhoneNumber: number,
//     createdAt: string,
//     organizationStreetAddress: string,
//     organizationCity: string,
//     organizationState: string,
//     organizationCountry: string,
//     identityProviderId: number
// }

// export type UserWithOrg = {
//     userDto: CreateUser,
//     orgDto: CreateOrg
// }

// export type CreateUser = {
//     displayName: string,
//     firstName: string,
//     lastName: string,
//     userType: string,
//     department: string,
//     jobTitle: string,
//     officeEmail: string,
//     officePhoneNumber: string,
//     officeAddress: string,
//     officeCity: string,
//     officeState: string,
//     officeCountry: string,
//     usageLocation: string,
//     prefferedLanguageId: number,
//     createdBy: string,
//     password: string,
//     roleIds: number[]
// }

export type LogIn = {
    EMAIL_ADDRESS: string,
    password: string
}

// export type LanguageModels = {
//     id: number,
//     languageName: string,
//     languageCode: number,
// }
// export type CountryModels = {
//     id: number,
//     countryName: string,
//     isoCode: string,
//     dialCode: number,
// }

// export type UserModel = {
//     id: number,
//     displayName: string,
//     firstName: string,
//     lastName: string,
//     userType: string,
//     department: string,
//     jobTitle: string,
//     officeEmail: string,
//     officePhoneNumber: number,
//     officeAddress: string,
//     officeCity: string,
//     officeState: string,
//     officeCountry: string,
//     usageLocation: string,
//     language: Language,
//     prefferedLanguageId: number,
//     isEnabled: number,
//     enabledAt: string,
//     isDeleted: number,
//     deletedAt: string,
//     createdBy: string,
//     createdAt: string,
//     password: string,
//     passwordUpdatedAt: string,
//     organization: OrgModel,
//     tenant: string,
//     roles: RoleModel[]
// }

// export type Language = {
//     id: number,
//     languageName: string,
//     languageCode: string,
// }