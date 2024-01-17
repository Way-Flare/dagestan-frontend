import "src/app/style/auth.scss"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { formFields, formFieldsReg } from "../const/formFieldReg"
import { NavLink } from "react-router-dom"
import { paths } from "@/shared/const/path"

const formSchema = z
  .object({
    emailAddress: z.string().email({ message: "Неверная почта" }),
    name: z
      .string()
      .min(3, { message: "Имя должно содержать не менее 3 символов" }),
    password: z
      .string()
      .min(6, { message: "Пароль должен содержать не менее 6 символов" }),
    passwordConfirm: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm
    },
    {
      message: "Пароли не совпадают",
      path: ["passwordConfirm"],
    },
  )

export const RegistrationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      name: "",
      password: "",
      passwordConfirm: "",
    },
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log({ data })
  }

  return (
    <div className={"flex h-[100vh]"}>
      <div className="flex-1 w-[100vw] bg-[url('src/shared/img/regBg.jpg')] bg-center bg-cover bg-no-repeat rounded-e-[3rem]"></div>

      <div className="w-[50px] flex justify-center items-center flex-1">
        <div className="w-[100%] max-w-[450px] flex flex-col gap-7">
          <div>
            <h1 className="text-[2rem] font-medium">Регистрация</h1>
            <span>
              Если вы уже создавали аккаунт можете войти{" "}
              <NavLink className={"underline"} to={paths.AUTHORIZATION_PAGE}>
                здесь
              </NavLink>
            </span>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col gap-5"
            >
              {formFieldsReg?.map(({ label, name, placeholder, type }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name as keyof z.infer<typeof formSchema>}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                          <Input
                            type={type}
                            placeholder={placeholder}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              ))}
              <Button size={"default"} type="submit" className="w-full mt-4">
                Зарегестрироваться
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
