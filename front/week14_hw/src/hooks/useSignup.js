import { useMutation } from "@tanstack/react-query"
import { signUp } from "../api/users"

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      alert("환영합니다")
    },
  })
}