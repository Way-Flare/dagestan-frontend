import { Button, Form, Input } from "antd"
import "src/app/style/auth.scss"
import { paths } from "src/shared/const/path"
import { NavLink } from "react-router-dom"
import { IAuthData } from "src/modules/AuthorizationForm/interface/IAuthData"
import { message, placeholderPass } from "src/shared/const/stringValues"

export const AuthorizationForm = () => {
  const [form] = Form.useForm()

  const onFinish = (values: IAuthData) => {
    console.log(values)
    form.resetFields()
  }
  return (
    <div className={"wrapper"}>
      <Form form={form} onFinish={onFinish} name={"registaration"}>
        <Form.Item name={"mail"} rules={[{ required: true }]}>
          <Input placeholder={"Введите почту"} />
        </Form.Item>
        <Form.Item
          name={"password"}
          rules={[{ required: true, message: message }]}
        >
          <Input.Password placeholder={placeholderPass} />
        </Form.Item>
        <Form.Item rules={{ required: true, message: message }}>
          <Button htmlType={"submit"} block type={"primary"}>
            Войти
          </Button>
        </Form.Item>
      </Form>

      <span className={"text-white"}>
        Нет аккаунта?{" "}
        <NavLink to={paths.REGISTRATION_PAGE}>Создать аккаунт</NavLink>
      </span>
    </div>
  )
}
