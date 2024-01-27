export interface LoginResponsetDto {
    jwToken: string
    email: string,
    roles: string[],
    data: any
}