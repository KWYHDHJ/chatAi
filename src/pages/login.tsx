
import { Button, Form, Input, message } from "antd"
import "./index.less"
import { useNavigate } from "react-router-dom";


const Login: React.FC = () => {
    const navigate = useNavigate()

    const onFinish = (values: FieldType) => {

        const { username, password } = values
        if (username === 'admin' && password === 'admin123') {
            message.success('登录成功！');
            localStorage.setItem('userName', 'admin')
            navigate('/home')
        } else {
            message.error('账号或密码错误！');
        }
    };

    type FieldType = {
        username?: string;
        password?: string;
    };

    return (
        <div className="login">
            <div className="content">
                <img src="https://ems.fenxi-tech.com/image/logo.png" alt="" />
                <div style={{ width: "100%", textAlign: "center", fontSize: "20px", color: "#0070c0", fontWeight: "bold" }}>西门子工控AI AGENT</div>
                <Form
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 20 }}
                    initialValues={{ remember: true }}
                    style={{ marginTop: 20, width: '80%', paddingBottom: 10 }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="账号"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 5 }}>
                        <Button style={{ width: '80%' }} type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}

export default Login