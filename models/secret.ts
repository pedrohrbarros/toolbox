export interface GenerateSecretRequest {
  length?: number
  special_characters?: boolean
  uppercase_characters?: boolean
  lowcase_characters?: boolean
  numbers: boolean
}