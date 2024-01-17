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
import { NavLink } from "react-router-dom"
import { paths } from "@/shared/const/path"
import { formFieldsAuth } from "../const/formfiledsAuth"
import { Checkbox } from "@/components/ui/checkbox"
import appleIcon from "/src/shared/img/apple.svg"
import googleIcon from "/src/shared/img/google.svg"

const formSchema = z.object({
  emailAddress: z.string().email({ message: "Неверная почта" }),
  password: z
    .string()
    .min(6, { message: "Пароль должен содержать не менее 6 символов" }),
})

export const AuthorizationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
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
            <h1 className="text-[2rem] font-medium">Вход</h1>
            <span>
              Если у вас нет аккаунта, то можете зарегестрироваться{" "}
              <NavLink className={"underline"} to={paths.REGISTRATION_PAGE}>
                здесь
              </NavLink>
            </span>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col gap-5"
            >
              {formFieldsAuth?.map(({ label, name, placeholder, type }) => (
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
                Войти
              </Button>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Запомнить меня
                </label>
              </div>
            </form>
          </Form>
          <div className="flex flex-col gap-3 items-center">
            <h4>Или войти через</h4>
            <div className="flex items-center gap-3">
              <div className="">
                <img src={appleIcon} alt="" />
              </div>

              <div className="">
                <img src={googleIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
