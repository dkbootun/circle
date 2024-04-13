import * as z from "zod";

// ============================================================
// USER
// ============================================================

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).startsWith(alphabet, {
    message: "Name must start with an alphabet",
  }),
  username: z.string().min(2, { message: "Name must be at least 2 characters." }).max(10, { message: "Name must be at most 10 characters." }).regex(/^[a-zA-Z]+$/, {
    message: "Username must contain only alphabets",
  }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }).max(20, { message: "Password must be at most 20 characters." }),
});

export const SigninValidation = z.object({
  email: z.string().email({message: "Please enter a valid email"}),
  password: z.string().min(1,{
    message: "Please enter your password"
  }),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  bio: z.string(),
});

// ============================================================
// POST
// ============================================================
export const PostValidation = z.object({
  caption: z.string().min(1, { message: "Minimum 5 characters." }).max(2200, { message: "Maximum 2,200 caracters" }),
  file: z.custom<File[]>(),
  location: z.string().min(1, { message: "This field is required" }).max(1000, { message: "Maximum 1000 characters." }),
  tags: z.string(),
});