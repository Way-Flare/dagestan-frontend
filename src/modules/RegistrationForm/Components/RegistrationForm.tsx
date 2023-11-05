import { Button, Form, Input } from "antd"
import { useForm } from "antd/es/form/Form"
import { IData } from "src/modules/RegistrationForm/Interface/IData"
import { paths } from "src/shared/const/path"
import { NavLink } from "react-router-dom"
import "src/app/style/auth.scss"

export const RegistrationForm = () => {
  const [form] = useForm()
  const message = {
    message: "обязательное поле",
  }

  const onFinish = (values: IData) => {
    console.log(values)
    form.resetFields()
  }

  return (
    <div className={"wrapper"}>
      <Form form={form} onFinish={onFinish} name={"registaration"}>
        <Form.Item name={"gmail"} rules={[{ required: true, ...message }]}>
          <Input placeholder={"Введите почту"} />
        </Form.Item>
        <Form.Item name={"phone"} rules={[{ required: true, ...message }]}>
          <Input placeholder={"Введите номер"} />
        </Form.Item>
        <Form.Item name={"password"} rules={[{ required: true, ...message }]}>
          <Input.Password placeholder={"Создайте пароль"} />
        </Form.Item>
        <Form.Item
          name={"confirmPassword"}
          rules={[{ required: true, ...message }]}
        >
          <Input.Password placeholder={"подтвердите пароль"} />
        </Form.Item>
        <Form.Item>
          <Button htmlType={"submit"} block type={"primary"}>
            Зарегстрироватсья
          </Button>
        </Form.Item>
      </Form>

      <span className={"text-white"}>
        Уже есть аккаунт? <NavLink to={paths.AUTHORIZATION_PAGE}>Войти</NavLink>
      </span>
    </div>
  )
}
