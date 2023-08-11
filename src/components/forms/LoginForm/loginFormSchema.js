import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty("O email é obrigatório!")
    .email("Digite um email válido!"),
  password: z.string().nonempty("A senha é obrigatória!"),
});
